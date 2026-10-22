import { Router } from 'express';
import { plans, faqs, site } from '../../shared/content.js';
import { connectDB } from '../db.js';
import { ensureSeed } from '../seed.js';
import Plan from '../models/Plan.js';
import Faq from '../models/Faq.js';

const router = Router();

router.get('/content', async (req, res) => {
  try {
    const db = await connectDB();
    if (!db) {
      return res.json({ plans, faqs, site, source: 'static' });
    }

    await ensureSeed();
    const [planDocs, faqDocs] = await Promise.all([
      Plan.find().sort({ order: 1 }).lean(),
      Faq.find().sort({ order: 1 }).lean(),
    ]);

    return res.json({
      plans: planDocs.length ? planDocs : plans,
      faqs: faqDocs.length ? faqDocs : faqs,
      site,
      source: 'database',
    });
  } catch (error) {
    console.error('Content API fell back to static copy:', error.message);
    return res.json({ plans, faqs, site, source: 'static' });
  }
});

export default router;
