import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from './db.js';
import { ensureSeed } from './seed.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const db = await connectDB();
if (!db) {
  console.error('Set MONGODB_URI in .env before seeding.');
  process.exit(1);
}

await ensureSeed();
console.log('Calviora plans and FAQs are seeded.');
process.exit(0);
