import mongoose from 'mongoose';

const planSchema = new mongoose.Schema(
  {
    id: String,
    order: Number,
    variant: String,
    name: String,
    price: String,
    period: String,
    description: String,
    features: [String],
    cta: String,
    href: { type: String, default: '#download' },
    badge: String,
  },
  { timestamps: true }
);

export default mongoose.models.Plan || mongoose.model('Plan', planSchema);
