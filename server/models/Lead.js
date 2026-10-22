import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    plan: { type: String, default: '' },
    source: { type: String, default: 'website' },
  },
  { timestamps: true }
);

export default mongoose.models.Lead || mongoose.model('Lead', leadSchema);
