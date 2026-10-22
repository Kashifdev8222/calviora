export const site = {
  name: 'Calviora',
  tagline: 'Good food. Better you.',
};

export const plans = [
  {
    id: 'free',
    order: 1,
    variant: 'free',
    name: 'Free Starter',
    price: '$0',
    period: '/ forever',
    description: 'Perfect for casual calorie checking.',
    features: ['3 Free AI Scans Daily', 'Basic Food Search', 'Water Tracker'],
    cta: 'Start Free',
    href: '#download',
  },
  {
    id: 'monthly',
    order: 2,
    variant: 'monthly',
    name: 'Monthly Pass',
    price: '$1.99',
    period: '/ month',
    description: 'Ideal for focused 30-day goals.',
    features: ['40 AI Scans / Month', 'Barcode Scanner', 'Macro Analytics'],
    cta: 'Subscribe Monthly',
    href: '#download',
  },
  {
    id: 'quarterly',
    order: 3,
    variant: 'quarterly',
    name: 'Quarterly Pass',
    price: '$4.99',
    period: '/ 3 months',
    description: 'Great value for habit formation.',
    features: ['120 AI Scans / Quarter', 'Full Desi Food Library', 'Intermittent Fasting Timers'],
    cta: 'Get Quarterly Plan',
    href: '#download',
    badge: 'Most Popular',
  },
  {
    id: 'annual',
    order: 4,
    variant: 'annual',
    name: 'Annual Best Savings',
    price: '$17.99',
    period: '/ year',
    description: 'Maximum savings for serious trackers.',
    features: ['400 AI Scans / Year', 'Priority AI Processing', 'Unlimited Manual Search'],
    cta: 'Get Annual Pass',
    href: '#download',
  },
];

export const faqs = [
  {
    id: 'ai-scan',
    order: 1,
    question: "How does Calviora's AI Food Scan work?",
    answer:
      'Simply open the camera inside Calviora and take a clear photo of your meal. Our trained visual recognition AI detects the items, estimates the portion size, and outputs calories, protein, carbs, and fat breakdown.',
  },
  {
    id: 'desi',
    order: 2,
    question: 'Does Calviora recognize Pakistani & South Asian dishes?',
    answer:
      'Yes! Unlike traditional apps that struggle with complex homemade dishes, Calviora is specifically tuned to recognize South Asian foods like Biryani, Roti, Naan, Karahi, Daal, and regional snacks.',
  },
  {
    id: 'free',
    order: 3,
    question: 'Can I use Calviora for free?',
    answer:
      'Yes! All users receive 3 Free AI Photo Scans every day, along with full access to water tracking, weight logs, and manual search.',
  },
];
