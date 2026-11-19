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
    description: 'A relaxed way to track every day.',
    features: ['3 AI scans daily', 'Water tracker', 'Basic food search'],
    cta: 'Begin Free',
    href: '/#download',
  },
  {
    id: 'monthly',
    order: 2,
    variant: 'monthly',
    name: 'Monthly Pass',
    price: '$1.99',
    period: '/ month',
    description: 'For people who track often.',
    features: ['40 AI scans a month', 'Barcode scanner', 'Macro analysis'],
    cta: 'Get Monthly',
    href: 'https://play.google.com/store/apps/details?id=com.calorie.vibe.ai&hl=en_NZ',
  },
  {
    id: 'quarterly',
    order: 3,
    variant: 'quarterly',
    name: 'Quarterly Pass',
    price: '$4.99',
    period: '/ 3 months',
    description: 'For turning tracking into a routine.',
    features: ['120 AI scans a quarter', 'Full food library', 'Intermittent fasting timers'],
    cta: 'Get Quarterly',
    href: 'https://play.google.com/store/apps/details?id=com.calorie.vibe.ai&hl=en_NZ',
    badge: 'Most Popular',
  },
  {
    id: 'annual',
    order: 4,
    variant: 'annual',
    name: 'Annual Best Savings',
    price: '$17.99',
    period: '/ year',
    description: 'For people in it for the long run.',
    features: ['400 AI scans a year', 'Priority AI processing', 'Unlimited meal search'],
    cta: 'Get Annual',
    href: 'https://play.google.com/store/apps/details?id=com.calorie.vibe.ai&hl=en_NZ',
  },
];

export const faqs = [
  {
    id: 'scan-meal',
    order: 1,
    question: 'What Happens When I Scan A Meal?',
    answer:
      'You take a photo. The AI identifies the food and estimates calories, protein, carbs and fat. You can review the result and edit it before saving.',
  },
  {
    id: 'desi-dishes',
    order: 2,
    question: 'Does It Work With Food From My Country?',
    answer:
      'Calviora is built to recognize everyday foods from many cuisines, including home cooked meals and restaurant dishes. If an estimate looks off, adjust the portion.',
  },
  {
    id: 'pay',
    order: 3,
    question: 'Do I Have To Pay?',
    answer: 'No. The free plan gives you 3 AI scans a day. You can upgrade later if you want more.',
  },
  {
    id: 'wrong-estimate',
    order: 4,
    question: 'What If The Estimate Looks Wrong?',
    answer:
      'Photo estimates can miss things like extra oil or a bigger portion. Edit the meal so your log matches what you really ate.',
  },
  {
    id: 'medical',
    order: 5,
    question: 'Is This Medical Advice?',
    answer:
      'No. Calviora and the calculators on this site give general estimates. If you have a health condition or a special diet, talk to a doctor or registered dietitian.',
  },
  {
    id: 'macros',
    order: 6,
    question: 'Does Calviora Track Macros?',
    answer: 'Yes. Every scan shows protein, carbs and fat, and your dashboard adds them up for the day.',
  },
  {
    id: 'accuracy',
    order: 7,
    question: 'How Close Are AI Calorie Estimates?',
    answer:
      "They're estimates, not lab results. Sauces, oil and portion size can change the numbers, which is why every meal can be edited.",
  },
  {
    id: 'free-app',
    order: 8,
    question: 'Is Calviora A Free Calorie Counter App?',
    answer:
      'Yes. The Free Starter plan is $0 forever and includes 3 AI scans every day, with paid plans available if you want more scans.',
  },
  {
    id: 'nutritionist',
    order: 9,
    question: 'Can Calviora Replace A Nutritionist?',
    answer:
      "No. Calviora's AI Nutrition Coach offers general tips based on your logged meals, but it isn't a substitute for advice from a doctor or registered dietitian.",
  },
];
