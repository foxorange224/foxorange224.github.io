// middleware.js
import { next } from '@vercel/edge';

export const config = {
  matcher: '/'
};

export default function middleware(request) {
  const response = next();
  
  // Solo modificar para HTML
  const url = new URL(request.url);
  if (url.pathname === '/' || url.pathname === '/main.html') {
    response.headers.set('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400');
    response.headers.set('CDN-Cache-Control', 'public, max-age=604800');
  }
  
  return response;
}