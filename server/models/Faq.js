import mongoose from 'mongoose';

const faqSchema = new mongoose.Schema(
  {
    id: String,
    order: Number,
    question: String,
    answer: String,
  },
  { timestamps: true }
);

export default mongoose.models.Faq || mongoose.model('Faq', faqSchema);
