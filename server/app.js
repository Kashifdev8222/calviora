import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import contentRouter from './routes/content.js';
import leadsRouter from './routes/leads.js';
import { connectDB } from './db.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || true,
  })
);
app.use(express.json());

app.get('/api/health', async (req, res) => {
  let database = 'not-configured';
  try {
    const db = await connectDB();
    database = db ? 'connected' : 'not-configured';
  } catch {
    database = 'error';
  }
  res.json({ ok: true, service: 'calviora-api', database });
});

app.use('/api', contentRouter);
app.use('/api', leadsRouter);

app.use('/api', (req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  console.error(err);
  if (res.headersSent) return next(err);
  res.status(500).json({ message: 'Something went wrong.' });
});

export default app;
