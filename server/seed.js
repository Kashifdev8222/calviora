import Plan from './models/Plan.js';
import Faq from './models/Faq.js';
import { plans, faqs } from '../shared/content.js';

let seeded = false;

export async function ensureSeed() {
  if (seeded) return;
  await Promise.all(plans.map((plan) => Plan.updateOne({ id: plan.id }, { $set: plan }, { upsert: true })));
  await Faq.deleteMany({ id: { $nin: faqs.map((faq) => faq.id) } });
  await Promise.all(faqs.map((faq) => Faq.updateOne({ id: faq.id }, { $set: faq }, { upsert: true })));
  seeded = true;
}
