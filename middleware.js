export const config = {
  matcher: '/'
};

export default function middleware(request) {
  const url = new URL(request.url);
  
  if (url.pathname === '/' || url.pathname === '/main.html') {
    const headers = new Headers();
    
    headers.set('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400');
    headers.set('CDN-Cache-Control', 'public, max-age=604800');
    headers.set('Vercel-CDN-Cache-Control', 'public, max-age=604800');
    headers.set('Edge-Cache', 'v=1, max-age=604800');
    
    headers.set('X-CDN', 'Vercel-Edge-Network');
    headers.set('X-Edge-Location', 'gru1');
    headers.set('X-CDN-Provider', 'Vercel');
    headers.set('Via', '1.1 vercel');
    headers.set('X-Served-By', 'Vercel-Edge');
    
    return new Response(null, {
      headers,
      status: 200
    });
  }
  
  return new Response(null, {
    headers: new Headers(),
    status: 200
  });
}