export const calculatorTools = [
  { id: 'tdee', slug: 'tdee-calculator', label: 'TDEE Calculator' },
  { id: 'weight-loss', slug: 'weight-loss-calculator', label: 'Weight Loss Calculator' },
  { id: 'weight-gain', slug: 'weight-gain-calculator', label: 'Weight Gain Calculator' },
  { id: 'protein', slug: 'protein-intake-calculator', label: 'Protein Intake Calculator' },
  { id: 'calories-burned', slug: 'calories-burned-calculator', label: 'Calories Burned Calculator' },
  { id: 'burn-it-off', slug: 'burn-it-off-calculator', label: 'Burn It Off Calculator' },
  { id: 'alcohol', slug: 'alcohol-calories-calculator', label: 'Alcohol Calories Calculator' },
  { id: 'serving', slug: 'serving-size-calculator', label: 'Serving Size Calculator' },
  { id: 'calorie-counter', slug: 'online-calorie-calculator', label: 'AI Calorie Counter' },
  { id: 'macros', slug: 'online-macro-calculator', label: 'Macro Calculator' },
  { id: 'pcos', slug: 'pcos-macro-calculator', label: 'PCOS Macro Calculator' },
  { id: 'pregnancy-calories', slug: 'pregnancy-calorie-calculator', label: 'Pregnancy Calorie Calculator' },
  { id: 'pregnancy-macros', slug: 'pregnancy-macro-calculator', label: 'Pregnancy Macro Calculator' },
  { id: 'diabetes', slug: 'diabetes-macro-calculator', label: 'Diabetes Macro Calculator' },
];

export const calculatorNotes = {
  tdee: {
    about: 'TDEE is an estimate of the calories you burn in a full day, from your size and how active you are. Eat near it to hold your weight.',
    faqs: [
      { q: 'What is the difference between BMR and TDEE?', a: 'BMR is the calories at rest. TDEE multiplies that by your activity, so it is the figure to eat around.' },
      { q: 'How often should I redo it?', a: 'After about 4 to 5 kg of weight change, or if your weekly activity is no longer what you selected.' },
    ],
  },
  'weight-loss': {
    about: 'This sets a calorie target under your TDEE and a weekly pace. It will not go under a basic floor of 1,200 kcal for women or 1,500 kcal for men.',
    faqs: [
      { q: 'How fast will I lose weight?', a: 'The pace you pick is a plan, often about 0.25 to 0.5 kg a week. Real weeks vary with water and weekends.' },
      { q: 'Is the floor a medical limit?', a: 'No. It is a planning guardrail so the estimate does not become an extreme diet. Ask a clinician before eating less than that.' },
    ],
  },
  'weight-gain': {
    about: 'This adds a surplus on top of maintenance so the gain is intentional. A lean pace is smaller than a standard pace.',
    faqs: [
      { q: 'Which pace should I pick?', a: 'Lean if you want the gain to stay slower. Standard if you are struggling to eat enough and the scale is not moving.' },
      { q: 'When do I recalculate?', a: 'After about 4 to 5 kg, because the old surplus becomes closer to maintenance as you grow.' },
    ],
  },
  protein: {
    about: 'Protein is shown as a daily range from your body weight and the goal you pick. It is a planning range, not a prescription.',
    faqs: [
      { q: 'Why a range instead of one number?', a: 'A single gram target looks more exact than the evidence. A range is easier to hit across normal meals.' },
      { q: 'Does this include supplements?', a: 'The number is the daily total from food and supplements together. The calculator does not tell you to buy a powder.' },
    ],
  },
  'calories-burned': {
    about: 'Burn uses a MET value for the activity, your weight, and the minutes. It is a rough energy estimate for that session.',
    faqs: [
      { q: 'Why is it not exact?', a: 'MET tables are averages. Terrain, effort, and fitness change the real cost. Use it to compare sessions, not as a lab test.' },
      { q: 'Should this raise my food target?', a: 'Only if the day’s calorie target did not already assume that activity. Otherwise you count the same movement twice.' },
    ],
  },
  'burn-it-off': {
    about: 'This estimates how long a walk or workout would take to offset a meal you type in. It is a comparison, not a requirement to earn the food.',
    faqs: [
      { q: 'Do I have to burn off every meal?', a: 'No. The result shows the size of the meal in minutes of movement. You do not have to erase food with exercise.' },
      { q: 'What changes the minutes?', a: 'A heavier body and a harder activity shorten the time. A small snack takes less time than a large meal.' },
    ],
  },
  alcohol: {
    about: 'Drink calories come from the alcohol and the carbs you enter, times the number of drinks. Mixers can add more than the alcohol itself.',
    faqs: [
      { q: 'Does this set a safe limit?', a: 'No. It only estimates energy. It does not say how much is safe for you to drink.' },
      { q: 'What if the drink is not on the list?', a: 'Choose custom and enter the volume, ABV, and carbs per 100 ml from the label.' },
    ],
  },
  serving: {
    about: 'Scale a known food from the grams you enter, or from a typical piece when the food has one. The list is a small set of common foods, not a full database.',
    faqs: [
      { q: 'Is this the photo scanner?', a: 'No. You pick a food and a weight. Photo scanning stays in the app.' },
      { q: 'How close is a “piece”?', a: 'A piece uses a typical weight, such as one egg or one chapati. Weigh it when the real piece is much larger or smaller.' },
    ],
  },
  'calorie-counter': {
    about: 'Add foods and grams from the built-in list to total calories and macros. It does not look at a photo.',
    faqs: [
      { q: 'Can I scan a plate here?', a: 'No. This page totals foods you select. The camera scan is in the Calviora app.' },
      { q: 'What if my food is missing?', a: 'The list is a short set of common foods for a quick total. A missing dish is better logged in the app.' },
    ],
  },
  macros: {
    about: 'Macros split a calorie target into protein, carbs, and fat for lose, maintain, or gain. Fat is planned near 25% of calories.',
    faqs: [
      { q: 'Is this a meal plan?', a: 'No. It is the gram budget for the day. You still choose the foods.' },
      { q: 'Which goal uses the most protein?', a: 'Lose and gain both use a higher protein rate than maintain. The exact grams follow the weight you enter.' },
    ],
  },
  pcos: {
    about: 'A higher-protein split for planning around PCOS. It uses the female calorie equation. It does not treat PCOS or replace your clinician.',
    faqs: [
      { q: 'Will this balance my hormones?', a: 'No. It only suggests calories and macros to plan meals. Medication and diagnosis stay with your clinician.' },
      { q: 'Why is protein higher?', a: 'The plan uses about 1.8 g per kilogram so meals are more filling. It is a planning choice, not a treatment dose.' },
    ],
  },
  'pregnancy-calories': {
    about: 'Starts from pre-pregnancy weight and adds a trimester extra: none in the first, about 340 kcal in the second, about 452 in the third.',
    faqs: [
      { q: 'Does this replace prenatal care?', a: 'No. It is a planning estimate. Follow the intake your midwife or doctor gave you.' },
      { q: 'Which weight do I enter?', a: 'Pre-pregnancy weight, not today’s weight, so the trimester extra is not stacked on pregnancy gain.' },
    ],
  },
  'pregnancy-macros': {
    about: 'Pregnancy macros keep a carbohydrate floor near 175 g and protein near 1.1 g per kilogram, on top of the trimester calories.',
    faqs: [
      { q: 'Can I cut carbs with this?', a: 'The plan does not take carbs under about 175 g. That floor is a planning choice for pregnancy, not a personal prescription.' },
      { q: 'Who should ignore this result?', a: 'Anyone whose clinician has already set grams or calories. Use that plan.' },
    ],
  },
  diabetes: {
    about: 'A carb-aware macro split for meal planning. It does not set insulin, medication, or a blood-glucose target.',
    faqs: [
      { q: 'Will this dose my insulin?', a: 'No. Do not use it to change medication. That decision belongs to your diabetes clinician.' },
      { q: 'What is it for, then?', a: 'To sketch calories and macros for a day of eating, which you can still change to match the plan you were given.' },
    ],
  },
};

export function calculatorPath(id) {
  const tool = calculatorTools.find((item) => item.id === id);
  return `/calculators/${tool?.slug || 'tdee-calculator'}`;
}

export function toolFromPath(pathname = '') {
  const match = String(pathname).match(/^\/calculators\/([^/]+)\/?$/);
  if (!match) return '';
  return calculatorTools.find((item) => item.slug === match[1])?.id || '';
}

export function toolFromHash(hash = '') {
  const id = String(hash).replace('#', '');
  if (!id.startsWith('calc-')) return '';
  const tool = id.slice(5);
  return calculatorTools.some((item) => item.id === tool) ? tool : '';
}

export const activities = [
  { value: '1.2', label: 'Sedentary' },
  { value: '1.375', label: 'Lightly active' },
  { value: '1.55', label: 'Moderately active' },
  { value: '1.725', label: 'Very active' },
  { value: '1.9', label: 'Extra active' },
];

export const burnActivities = [
  { id: 'walk', label: 'Walking, 4.8 km/h', met: 3.5 },
  { id: 'brisk', label: 'Brisk walking', met: 5 },
  { id: 'run', label: 'Running, 9.7 km/h', met: 9.8 },
  { id: 'cycle', label: 'Cycling, moderate', met: 6.8 },
  { id: 'cycle-hard', label: 'Cycling, vigorous', met: 10 },
  { id: 'swim', label: 'Swimming, moderate', met: 5.8 },
  { id: 'strength', label: 'Strength training', met: 5 },
  { id: 'hiit', label: 'HIIT', met: 8 },
  { id: 'yoga', label: 'Yoga', met: 2.5 },
  { id: 'housework', label: 'Housework', met: 3.3 },
  { id: 'sitting', label: 'Sitting quietly', met: 1.3 },
  { id: 'sleep', label: 'Sleeping', met: 0.95 },
];

export const stepPaces = [
  { id: 'easy', label: 'Easy, 4 km/h', kmh: 4, met: 3 },
  { id: 'normal', label: 'Normal, 4.8 km/h', kmh: 4.8, met: 3.5 },
  { id: 'brisk', label: 'Brisk, 5.6 km/h', kmh: 5.6, met: 4.3 },
];

export const drinks = [
  { id: 'lager', label: 'Lager, 330 ml', volume: '330', abv: '5', carbs: '3' },
  { id: 'pint', label: 'Pint of beer, 568 ml', volume: '568', abv: '4.5', carbs: '3' },
  { id: 'red', label: 'Red wine, 150 ml', volume: '150', abv: '13', carbs: '0.6' },
  { id: 'white', label: 'White wine, 150 ml', volume: '150', abv: '12', carbs: '0.8' },
  { id: 'shot', label: 'Spirit shot, 44 ml', volume: '44', abv: '40', carbs: '0' },
  { id: 'sweet', label: 'Sweet cocktail, 200 ml', volume: '200', abv: '10', carbs: '8' },
  { id: 'custom', label: 'Custom drink', volume: '330', abv: '5', carbs: '3' },
];

export const foods = [
  { id: 'egg', label: 'Boiled egg', kcal: 155, protein: 13, carbs: 1.1, fat: 11, pieceGrams: 50, pieceLabel: '1 large egg' },
  { id: 'chicken', label: 'Chicken breast, cooked', kcal: 165, protein: 31, carbs: 0, fat: 3.6 },
  { id: 'rice', label: 'Cooked white rice', kcal: 130, protein: 2.7, carbs: 28, fat: 0.3, pieceGrams: 158, pieceLabel: '1 cup' },
  { id: 'chapati', label: 'Chapati', kcal: 297, protein: 11, carbs: 46, fat: 7, pieceGrams: 40, pieceLabel: '1 medium' },
  { id: 'banana', label: 'Banana', kcal: 89, protein: 1.1, carbs: 23, fat: 0.3, pieceGrams: 118, pieceLabel: '1 medium' },
  { id: 'apple', label: 'Apple', kcal: 52, protein: 0.3, carbs: 14, fat: 0.2, pieceGrams: 182, pieceLabel: '1 medium' },
  { id: 'paneer', label: 'Paneer', kcal: 265, protein: 18, carbs: 3.6, fat: 20 },
  { id: 'dal', label: 'Cooked lentils', kcal: 116, protein: 9, carbs: 20, fat: 0.4, pieceGrams: 198, pieceLabel: '1 cup' },
  { id: 'salmon', label: 'Salmon, cooked', kcal: 208, protein: 20, carbs: 0, fat: 13 },
  { id: 'bread', label: 'Sandwich bread', kcal: 265, protein: 9, carbs: 49, fat: 3.2, pieceGrams: 28, pieceLabel: '1 slice' },
  { id: 'yogurt', label: 'Plain yogurt', kcal: 61, protein: 3.5, carbs: 4.7, fat: 3.3, pieceGrams: 245, pieceLabel: '1 cup' },
  { id: 'whey', label: 'Whey protein', kcal: 400, protein: 80, carbs: 8, fat: 4, pieceGrams: 30, pieceLabel: '1 scoop' },
];
