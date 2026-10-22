import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import app from './app.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

if (!process.env.VERCEL) {
  const dist = path.join(__dirname, '..', 'dist');
  if (fs.existsSync(dist)) {
    app.use(express.static(dist));
    app.use((req, res, next) => {
      if (req.method !== 'GET' || req.path.startsWith('/api')) return next();
      res.sendFile(path.join(dist, 'index.html'), (error) => {
        if (error) next();
      });
    });
  }

  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`Calviora API listening on http://localhost:${port}`);
  });
}
