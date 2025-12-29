import { next } from '@vercel/edge';

// Configuración de rutas a procesar
export const config = {
  matcher: [
    '/',
    '/main.html',
    '/:path*'
  ]
};

// Cache inteligente basado en tipo de contenido
const cacheRules = {
  html: 'public, max-age=3600, stale-while-revalidate=86400',
  assets: 'public, max-age=31536000, immutable',
  data: 'public, max-age=86400'
};

// Detectar tipo de contenido desde URL
function detectContentType(url) {
  const pathname = url.pathname;
  
  if (pathname.endsWith('.html') || pathname === '/') {
    return 'html';
  }
  
  if (/\.(js|css|png|jpg|jpeg|gif|svg|webp|avif|ico|woff|woff2|ttf|eot)$/.test(pathname)) {
    return 'assets';
  }
  
  if (/\.(json|xml|txt)$/.test(pathname)) {
    return 'data';
  }
  
  return 'html';
}

// Headers inteligentes basados en contenido
function getSmartHeaders(url, request) {
  const contentType = detectContentType(url);
  const headers = new Headers();
  
  // Cache headers inteligentes
  headers.set('Cache-Control', cacheRules[contentType]);
  headers.set('CDN-Cache-Control', 'public, max-age=604800');
  
  // Security headers
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('X-Frame-Options', 'DENY');
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Performance headers
  headers.set('X-DNS-Prefetch-Control', 'on');
  
  // CDN Identification (para detectores como IONOS)
  if (contentType === 'html') {
    headers.set('Via', '1.1 vercel');
    headers.set('X-CDN', 'Vercel-Edge-Network');
    headers.set('X-Edge-Location', 'gru1');
    headers.set('X-Served-By', 'Vercel-Edge');
  }
  
  // Compression hint
  const acceptEncoding = request.headers.get('Accept-Encoding') || '';
  if (acceptEncoding.includes('br')) {
    headers.set('Vary', 'Accept-Encoding');
  }
  
  return headers;
}

// Middleware principal
export default async function middleware(request) {
  const url = new URL(request.url);
  const response = next();
  
  // Obtener headers inteligentes
  const smartHeaders = getSmartHeaders(url, request);
  
  // Aplicar headers a la respuesta
  smartHeaders.forEach((value, key) => {
    response.headers.set(key, value);
  });
  
  // Optimización especial para bots (SEO)
  const userAgent = request.headers.get('user-agent') || '';
  const isBot = /bot|crawler|spider|google|bing|yahoo|duckduckgo/i.test(userAgent);
  
  if (isBot) {
    response.headers.set('X-Robots-Tag', 'index, follow, max-image-preview:large');
    response.headers.set('X-Bot-Optimized', 'true');
  }
  
  // Preload headers para recursos críticos
  if (url.pathname === '/' || url.pathname === '/main.html') {
    response.headers.append('Link', '</apple-touch-icon.png>; rel=preload; as=image');
    response.headers.append('Link', '</manifest.json>; rel=preload; as=document');
  }
  
  return response;
}

// Health check endpoint
export const configHealth = {
  matcher: '/health'
};

export async function healthCheck(request) {
  return new Response(JSON.stringify({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    edge: 'Vercel',
    region: 'gru1'
  }), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store'
    }
  });
}