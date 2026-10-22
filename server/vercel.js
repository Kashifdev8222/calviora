import app from './app.js';

export default function handler(req, res) {
  if (req.url && !req.url.startsWith('/api')) {
    const queryIndex = req.url.indexOf('?');
    const pathPart = queryIndex === -1 ? req.url : req.url.slice(0, queryIndex);
    const query = queryIndex === -1 ? '' : req.url.slice(queryIndex);
    const normalized = pathPart.startsWith('/') ? pathPart : `/${pathPart}`;
    req.url = `/api${normalized === '/' ? '' : normalized}${query}`;
  }

  return app(req, res);
}
