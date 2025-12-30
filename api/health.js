export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  
  const healthData = {
    status: 'healthy',
    service: 'foxweb',
    version: '2.0.0',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    region: process.env.VERCEL_REGION || 'global',
    endpoints: {
      main: '/index.html',
      chat: '/chat.html',
      ads: '/ads.txt',
      robots: '/robots.txt',
      data: '/data.js',
      health: '/api/health'
    },
    cdn: {
      provider: 'vercel',
      edge: true,
      regions: ['sfo1', 'iad1', 'gru1', 'cdg1', 'hnd1', 'syd1'],
      cache: 'optimized'
    },
    performance: {
      response_time: Date.now() - parseInt(req.headers['x-vercel-request-timestamp'] || Date.now())
    }
  };
  
  res.status(200).json(healthData);
}