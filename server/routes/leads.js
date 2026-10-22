import { Router } from 'express';
import { connectDB } from '../db.js';
import Lead from '../models/Lead.js';

const router = Router();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post('/leads', async (req, res) => {
  try {
    const email = String(req.body?.email || '').trim().toLowerCase();
    const plan = String(req.body?.plan || '').trim();
    const source = String(req.body?.source || 'website').trim();

    if (!emailPattern.test(email)) {
      return res.status(400).json({ message: 'A valid email is required.' });
    }

    const db = await connectDB();
    if (!db) {
      return res.status(503).json({ message: 'Database is not configured.' });
    }

    const lead = await Lead.create({ email, plan, source });
    return res.status(201).json({ id: lead.id, email: lead.email });
  } catch (error) {
    if (error?.code === 11000) {
      return res.status(409).json({ message: 'This email is already registered.' });
    }
    console.error(error);
    return res.status(500).json({ message: 'Could not save this signup.' });
  }
});

export default router;
