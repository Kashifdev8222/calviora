export const calculatorTools = [
  { id: 'tdee', label: 'TDEE Calculator' },
  { id: 'weight-loss', label: 'Weight Loss Calculator' },
  { id: 'weight-gain', label: 'Weight Gain Calculator' },
  { id: 'protein', label: 'Protein Intake Calculator' },
  { id: 'calories-burned', label: 'Calories Burned Calculator' },
  { id: 'burn-it-off', label: 'Burn It Off Calculator' },
  { id: 'alcohol', label: 'Alcohol Calories Calculator' },
  { id: 'serving', label: 'Serving Size Calculator' },
  { id: 'calorie-counter', label: 'AI Calorie Counter' },
  { id: 'macros', label: 'Macro Calculator' },
  { id: 'pcos', label: 'PCOS Macro Calculator' },
  { id: 'pregnancy-calories', label: 'Pregnancy Calorie Calculator' },
  { id: 'pregnancy-macros', label: 'Pregnancy Macro Calculator' },
  { id: 'diabetes', label: 'Diabetes Macro Calculator' },
];

export function calculatorHash(id) {
  return `#calc-${id}`;
}

export function toolFromHash(hash = '') {
  const id = hash.replace('#', '');
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
