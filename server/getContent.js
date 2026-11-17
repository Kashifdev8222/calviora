import { plans, faqs, site } from '../shared/content.js';
import { connectDB } from './db.js';
import { ensureSeed } from './seed.js';
import Plan from './models/Plan.js';
import Faq from './models/Faq.js';

export async function getContent() {
  try {
    const db = await connectDB();
    if (!db) return { plans, faqs, site, source: 'static' };

    await ensureSeed();
    const [planDocs, faqDocs] = await Promise.all([
      Plan.find().sort({ order: 1 }).lean(),
      Faq.find().sort({ order: 1 }).lean(),
    ]);

    return {
      plans: planDocs.length ? planDocs : plans,
      faqs: faqDocs.length ? faqDocs : faqs,
      site,
      source: 'database',
    };
  } catch (error) {
    console.error('Content fell back to static copy:', error.message);
    return { plans, faqs, site, source: 'static' };
  }
}
