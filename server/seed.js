import Plan from './models/Plan.js';
import Faq from './models/Faq.js';
import { plans, faqs } from '../shared/content.js';

let seeded = false;

export async function ensureSeed() {
  if (seeded) return;
  const planCount = await Plan.countDocuments();
  if (planCount === 0) await Plan.insertMany(plans);
  const faqCount = await Faq.countDocuments();
  if (faqCount === 0) await Faq.insertMany(faqs);
  seeded = true;
}
