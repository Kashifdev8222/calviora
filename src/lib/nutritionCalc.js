import { activities, burnActivities, foods, stepPaces } from '../data/calculators.js';

const CLINICAL =
  'A planning estimate, not medical advice. Your doctor, midwife, or dietitian overrides this number.';

function num(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : NaN;
}

function kcal(value) {
  return `${Math.round(value).toLocaleString('en-US')} kcal`;
}

function grams(value) {
  return `${Math.round(value)} g`;
}

function bmr({ sex, kg, cm, age }) {
  const base = 10 * kg + 6.25 * cm - 5 * age;
  return sex === 'male' ? base + 5 : base - 161;
}

function body(form, limits = {}) {
  const minAge = limits.minAge ?? 15;
  const maxAge = limits.maxAge ?? 80;
  const minWeight = limits.minWeight ?? 35;
  const maxWeight = limits.maxWeight ?? 250;
  const age = num(form.age);
  const height = num(form.height);
  const weight = num(form.weight);
  const activity = num(form.activity);
  const sex = form.sex === 'male' ? 'male' : 'female';
  const ok =
    age >= minAge &&
    age <= maxAge &&
    height >= 120 &&
    height <= 230 &&
    weight >= minWeight &&
    weight <= maxWeight &&
    activity >= 1.2 &&
    activity <= 1.9;

  if (!ok) {
    return {
      error: `Enter an age of ${minAge}–${maxAge}, height of 120–230 cm, and weight of ${minWeight}–${maxWeight} kg.`,
    };
  }

  const resting = bmr({ sex, kg: weight, cm: height, age });
  return { age, height, weight, activity, sex, resting, maintenance: Math.round(resting * activity) };
}

function weightOnly(form) {
  const weight = num(form.weight);
  if (!(weight >= 35 && weight <= 250)) return { error: 'Enter a weight between 35 and 250 kg.' };
  return { weight };
}

function kcalPerMinute(met, kg) {
  return (met * 3.5 * kg) / 200;
}

function addDays(days) {
  const date = new Date();
  date.setDate(date.getDate() + Math.round(days));
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function goalCalories(maintenance, goal) {
  if (goal === 'lose') return Math.round(maintenance * 0.82);
  if (goal === 'gain') return Math.round(maintenance * 1.125);
  return maintenance;
}

function splitMacros({ calories, weight, proteinPerKg, fatRatio, carbFloor = 0 }) {
  const protein = Math.round(weight * proteinPerKg);
  let fat = Math.round((calories * fatRatio) / 9);
  let carbs = Math.round((calories - protein * 4 - fat * 9) / 4);
  let note = '';

  if (carbFloor && carbs < carbFloor) {
    carbs = carbFloor;
    fat = Math.round((calories - protein * 4 - carbs * 4) / 9);
    note = `Carbs are held at ${carbFloor} g. Fat fills the rest of the calories.`;
  }

  if (carbs < 0 || fat < 0) {
    return { error: 'These inputs do not leave room for a balanced split. Raise calories or check the weight.' };
  }

  return { protein, fat, carbs, note };
}

function macroResult({ kicker, calories, parts, note }) {
  return {
    kicker,
    value: kcal(calories),
    detail: note,
    stats: [
      { label: 'Protein', value: grams(parts.protein) },
      { label: 'Carbs', value: grams(parts.carbs) },
      { label: 'Fat', value: grams(parts.fat) },
    ],
  };
}

function scaleFood(food, gramsValue) {
  const factor = gramsValue / 100;
  return {
    kcal: food.kcal * factor,
    protein: food.protein * factor,
    carbs: food.carbs * factor,
    fat: food.fat * factor,
  };
}

function tdeeResult(form) {
  const stats = body(form);
  if (stats.error) return stats;
  const rows = activities.map((item) => ({
    label: item.label,
    value: kcal(stats.resting * Number(item.value)),
  }));

  return {
    kicker: 'Maintenance calories',
    value: kcal(stats.maintenance),
    detail: 'Eat around this to hold your current weight.',
    stats: [
      { label: 'BMR', value: kcal(stats.resting) },
      { label: 'Cut, 20% below', value: kcal(stats.maintenance * 0.8) },
      { label: 'Bulk, 10% above', value: kcal(stats.maintenance * 1.1) },
    ],
    rows,
    note: 'Mifflin–St Jeor BMR times an activity factor. Weigh in for two weeks, then adjust.',
  };
}

function lossResult(form) {
  const stats = body(form);
  if (stats.error) return stats;
  const goalWeight = num(form.goalWeight);
  const pace = num(form.pace);
  if (!(goalWeight >= 35 && goalWeight <= 250) || !(goalWeight < stats.weight - 0.1)) {
    return { error: 'Goal weight should be below your current weight, between 35 and 250 kg.' };
  }
  if (![0.25, 0.5, 0.75, 1].includes(pace)) return { error: 'Pick a weekly loss pace.' };

  const floor = stats.sex === 'male' ? 1500 : 1200;
  const wantedDeficit = (pace * 7700) / 7;
  let calories = Math.round(stats.maintenance - wantedDeficit);
  let weekly = pace;
  let note = 'About 7,700 kcal per kilogram. A pace above 1% of body weight a week is aggressive.';

  if (calories < floor) {
    calories = floor;
    weekly = ((stats.maintenance - floor) * 7) / 7700;
    note = `The calorie floor is ${floor.toLocaleString('en-US')} kcal, so the date uses that slower pace.`;
  }

  if (weekly <= 0) return { error: 'Maintenance is already at the calorie floor, so this plan cannot create a deficit.' };

  const kg = stats.weight - goalWeight;
  const days = (kg / weekly) * 7;
  const percent = (weekly / stats.weight) * 100;

  return {
    kicker: 'Eat this much a day',
    value: kcal(calories),
    detail: `${kg.toFixed(1)} kg to lose at about ${weekly.toFixed(2)} kg a week. You reach ${goalWeight.toFixed(1)} kg around ${addDays(days)}.`,
    stats: [
      { label: 'Daily deficit', value: kcal(stats.maintenance - calories) },
      { label: 'Weekly loss', value: `${weekly.toFixed(2)} kg` },
      { label: 'Weeks to goal', value: `${Math.max(1, Math.round(days / 7))}` },
    ],
    note: `${note} This pace is about ${percent.toFixed(2)}% of body weight a week. ${CLINICAL}`,
  };
}

function gainResult(form) {
  const stats = body(form);
  if (stats.error) return stats;
  const goalWeight = num(form.goalWeight);
  const pace = num(form.gainPace);
  if (!(goalWeight >= 35 && goalWeight <= 250) || !(goalWeight > stats.weight + 0.1)) {
    return { error: 'Goal weight should be above your current weight, between 35 and 250 kg.' };
  }
  if (![0.25, 0.5].includes(pace)) return { error: 'Pick a weekly gain pace.' };

  const surplus = pace === 0.25 ? 250 : 500;
  const calories = stats.maintenance + surplus;
  const kg = goalWeight - stats.weight;
  const weeks = kg / pace;
  const low = Math.round(stats.weight * 1.6);
  const high = Math.round(stats.weight * 2.2);

  return {
    kicker: 'Bulking calories',
    value: kcal(calories),
    detail: `${stats.maintenance.toLocaleString('en-US')} maintenance plus ${surplus} kcal. ${kg.toFixed(1)} kg takes about ${Math.max(1, Math.round(weeks))} weeks, around ${addDays(weeks * 7)}.`,
    stats: [
      { label: 'Surplus', value: `+${surplus} kcal` },
      { label: 'Weekly gain', value: `${pace.toFixed(2)} kg` },
      { label: 'Protein', value: `${low}–${high} g` },
    ],
    note: 'The lean pace adds about 0.25 kg a week. The standard pace is faster and brings more fat with it.',
  };
}

function proteinResult(form) {
  const stats = body(form);
  if (stats.error) return stats;
  const ranges = {
    maintain: [1.2, 1.6],
    endurance: [1.2, 1.6],
    lose: [1.6, 2.2],
    muscle: [1.6, 2.2],
  };
  let [lowRate, highRate] = ranges[form.proteinGoal] || ranges.maintain;
  let band = '1.2 to 1.6 g per kg';
  if (form.proteinGoal === 'lose' || form.proteinGoal === 'muscle') band = '1.6 to 2.2 g per kg';
  if (stats.age >= 65 && form.proteinGoal !== 'muscle') {
    lowRate = 1.2;
    highRate = 1.5;
    band = '1.2 to 1.5 g per kg from age 65';
  }

  const low = Math.round(stats.weight * lowRate);
  const high = Math.round(stats.weight * highRate);
  const meals = 4;
  const share = Math.round(((high * 4) / stats.maintenance) * 100);

  return {
    kicker: 'Daily protein',
    value: `${low}–${high} g`,
    detail: band,
    stats: [
      { label: 'Per meal, 4 meals', value: `${Math.round(low / meals)}–${Math.round(high / meals)} g` },
      { label: 'Top of range', value: `${high * 4} kcal` },
      { label: 'Share of maintenance', value: `${share}%` },
    ],
    note: 'Spread protein across the day. Above about 2.2 g per kg, extra protein adds little muscle.',
  };
}

function burnedResult(form) {
  const stats = body(form);
  if (stats.error) return stats;

  if (form.burnMode === 'steps') {
    const steps = num(form.steps);
    const pace = stepPaces.find((item) => item.id === form.stepPace) || stepPaces[1];
    if (!(steps >= 100 && steps <= 100000)) return { error: 'Enter a step count between 100 and 100,000.' };
    const strideKm = (stats.height * 0.414) / 100000;
    const distance = steps * strideKm;
    const minutes = (distance / pace.kmh) * 60;
    const burned = Math.round(kcalPerMinute(pace.met, stats.weight) * minutes);
    return {
      kicker: 'Calories burned',
      value: kcal(burned),
      detail: `${Math.round(steps).toLocaleString('en-US')} steps is about ${distance.toFixed(1)} km at ${pace.label.toLowerCase()}.`,
      stats: [
        { label: 'Minutes', value: `${Math.round(minutes)}` },
        { label: 'Per hour', value: kcal(kcalPerMinute(pace.met, stats.weight) * 60) },
        { label: 'Share of maintenance', value: `${Math.round((burned / stats.maintenance) * 100)}%` },
      ],
      note: 'Stride is estimated as 0.414 times height. If daily steps are already in your activity level, do not eat these calories again.',
    };
  }

  const activity = burnActivities.find((item) => item.id === form.burnActivity) || burnActivities[0];
  const minutes = num(form.minutes);
  if (!(minutes >= 1 && minutes <= 1440)) return { error: 'Enter a duration between 1 and 1,440 minutes.' };
  const burned = Math.round(kcalPerMinute(activity.met, stats.weight) * minutes);
  return {
    kicker: 'Calories burned',
    value: kcal(burned),
    detail: `${activity.label} for ${Math.round(minutes)} minutes.`,
    stats: [
      { label: 'MET', value: activity.met.toFixed(2) },
      { label: 'Per hour', value: kcal(kcalPerMinute(activity.met, stats.weight) * 60) },
      { label: 'Share of maintenance', value: `${Math.round((burned / stats.maintenance) * 100)}%` },
    ],
    note: 'Calories per minute = MET × 3.5 × kg ÷ 200. MET values follow common compendium figures.',
  };
}

function burnOffResult(form) {
  const stats = weightOnly(form);
  if (stats.error) return stats;
  const foodCalories = num(form.foodCalories);
  if (!(foodCalories >= 1 && foodCalories <= 5000)) return { error: 'Enter food calories between 1 and 5,000.' };

  const minutes = (met) => Math.round(foodCalories / kcalPerMinute(met, stats.weight));
  const perStep = 0.04 * (stats.weight / 70);
  const steps = Math.round(foodCalories / perStep);
  const stepsPerKg = Math.round(7700 / perStep);

  return {
    kicker: 'Minutes to burn it off',
    value: `${minutes(3.5)} min walking`,
    detail: `${kcal(foodCalories)} at ${stats.weight} kg.`,
    stats: [
      { label: 'Running, 9.7 km/h', value: `${minutes(9.8)} min` },
      { label: 'Cycling, moderate', value: `${minutes(6.8)} min` },
      { label: 'Walking steps', value: steps.toLocaleString('en-US') },
    ],
    note: `About ${stepsPerKg.toLocaleString('en-US')} steps to account for 1 kg of body fat at this weight, if the rest of the day stays at maintenance. Minutes include resting burn, so the extra burn is a little lower.`,
  };
}

function alcoholResult(form) {
  const stats = weightOnly(form);
  if (stats.error) return stats;
  const volume = num(form.volume);
  const abv = num(form.abv);
  const carbsPer100 = num(form.carbsPer100);
  const drinks = num(form.drinks);
  const weekly = form.drinksWeek === '' ? NaN : num(form.drinksWeek);

  if (!(volume >= 10 && volume <= 2000)) return { error: 'Enter a drink volume between 10 and 2,000 ml.' };
  if (!(abv >= 0 && abv <= 80)) return { error: 'Enter an ABV between 0 and 80%.' };
  if (!(carbsPer100 >= 0 && carbsPer100 <= 40)) return { error: 'Enter carbs per 100 ml between 0 and 40 g.' };
  if (!(drinks >= 1 && drinks <= 30)) return { error: 'Enter 1 to 30 drinks.' };

  const alcoholGrams = volume * (abv / 100) * 0.789;
  const alcoholKcal = alcoholGrams * 7;
  const carbKcal = (carbsPer100 * volume) / 100 * 4;
  const each = alcoholKcal + carbKcal;
  const total = each * drinks;
  const walk = Math.round(total / kcalPerMinute(3.5, stats.weight));
  const weekValue = weekly >= 0 && weekly <= 100 ? kcal(each * weekly) : 'Add drinks per week';

  return {
    kicker: drinks === 1 ? 'Calories for 1 drink' : `Calories for ${drinks} drinks`,
    value: kcal(total),
    detail: `${kcal(each)} per drink: ${kcal(alcoholKcal)} from alcohol and ${kcal(carbKcal)} from carbs.`,
    stats: [
      { label: 'Alcohol', value: `${(alcoholGrams * drinks).toFixed(1)} g` },
      { label: 'Walking', value: `${walk} min` },
      { label: 'Per week', value: weekValue },
    ],
    note: 'Alcohol is 7 kcal per gram. Carb calories are an estimate from the grams per 100 ml you enter.',
  };
}

function servingResult(form) {
  const food = foods.find((item) => item.id === form.foodId) || foods[0];
  let gramsValue = num(form.grams);
  if (form.portionMode === 'pieces') {
    const pieces = num(form.pieces);
    if (!food.pieceGrams) return { error: `${food.label} needs a weight in grams.` };
    if (!(pieces >= 0.25 && pieces <= 40)) return { error: 'Enter between 0.25 and 40 pieces.' };
    gramsValue = pieces * food.pieceGrams;
  }
  if (!(gramsValue >= 1 && gramsValue <= 2000)) return { error: 'Enter a portion between 1 and 2,000 g.' };

  const portion = scaleFood(food, gramsValue);
  const base = scaleFood(food, 100);
  const rows = [
    { label: 'Per 100 g', value: `${Math.round(base.kcal)} kcal · ${base.protein.toFixed(1)}p / ${base.carbs.toFixed(1)}c / ${base.fat.toFixed(1)}f` },
  ];
  if (food.pieceGrams) {
    const piece = scaleFood(food, food.pieceGrams);
    rows.push({
      label: food.pieceLabel,
      value: `${Math.round(piece.kcal)} kcal · ${piece.protein.toFixed(1)}p / ${piece.carbs.toFixed(1)}c / ${piece.fat.toFixed(1)}f`,
    });
  }

  return {
    kicker: `${Math.round(gramsValue)} g of ${food.label.toLowerCase()}`,
    value: kcal(portion.kcal),
    detail: 'Scaled from standard values per 100 g.',
    stats: [
      { label: 'Protein', value: `${portion.protein.toFixed(1)} g` },
      { label: 'Carbs', value: `${portion.carbs.toFixed(1)} g` },
      { label: 'Fat', value: `${portion.fat.toFixed(1)} g` },
    ],
    rows,
  };
}

function counterResult(form) {
  const plate = Array.isArray(form.plate) ? form.plate : [];
  if (!plate.length) return { error: 'Add at least one food.' };

  const totals = { kcal: 0, protein: 0, carbs: 0, fat: 0 };
  const rows = [];
  for (const item of plate) {
    const food = foods.find((entry) => entry.id === item.foodId);
    const gramsValue = num(item.grams);
    if (!food || !(gramsValue >= 1 && gramsValue <= 2000)) return { error: 'Each food needs a portion between 1 and 2,000 g.' };
    const scaled = scaleFood(food, gramsValue);
    totals.kcal += scaled.kcal;
    totals.protein += scaled.protein;
    totals.carbs += scaled.carbs;
    totals.fat += scaled.fat;
    rows.push({ label: `${food.label}, ${Math.round(gramsValue)} g`, value: kcal(scaled.kcal) });
  }

  return {
    kicker: 'This plate',
    value: kcal(totals.kcal),
    detail: 'Standard values for the portions you entered. The Calviora app can estimate a plate from a photo.',
    stats: [
      { label: 'Protein', value: `${totals.protein.toFixed(1)} g` },
      { label: 'Carbs', value: `${totals.carbs.toFixed(1)} g` },
      { label: 'Fat', value: `${totals.fat.toFixed(1)} g` },
    ],
    rows,
  };
}

function standardMacroResult(form) {
  const stats = body(form);
  if (stats.error) return stats;
  const calories = goalCalories(stats.maintenance, form.goal);
  const proteinPerKg = form.goal === 'lose' ? 2 : form.goal === 'gain' ? 1.8 : 1.6;
  const parts = splitMacros({ calories, weight: stats.weight, proteinPerKg, fatRatio: 0.25 });
  if (parts.error) return parts;
  const goalLabel = form.goal === 'lose' ? 'Fat loss, about 18% under maintenance' : form.goal === 'gain' ? 'Muscle gain, about 12% over maintenance' : 'Maintenance';
  return {
    ...macroResult({ kicker: 'Daily macros', calories, parts, note: `${goalLabel}. Maintenance is ${kcal(stats.maintenance)}.` }),
    note: 'Protein is set from body weight. Fat is about 25% of calories, and carbs take the rest.',
  };
}

function pcosResult(form) {
  const stats = body({ ...form, sex: 'female' });
  if (stats.error) return stats;
  const goal = form.goal === 'gain' ? 'maintain' : form.goal;
  const calories = goalCalories(stats.maintenance, goal === 'lose' ? 'lose' : 'maintain');
  const parts = splitMacros({ calories, weight: stats.weight, proteinPerKg: 1.8, fatRatio: 0.32 });
  if (parts.error) return parts;
  return {
    ...macroResult({
      kicker: 'PCOS macro estimate',
      calories,
      parts,
      note: `${goal === 'lose' ? 'About 18% under maintenance' : 'At maintenance'}. Maintenance is ${kcal(stats.maintenance)}.`,
    }),
    note: `Higher protein, fat near 30–35% of calories, and carbs in what remains. ${CLINICAL}`,
  };
}

function pregnancyCalories(form) {
  const stats = body({ ...form, sex: 'female' }, { minAge: 18, maxAge: 50, maxWeight: 180 });
  if (stats.error) return stats;
  const extras = { 1: 0, 2: 340, 3: 452 };
  const trimester = String(form.trimester);
  const extra = extras[trimester];
  if (extra === undefined) return { error: 'Pick a trimester.' };
  const bmi = stats.weight / (stats.height / 100) ** 2;
  const gain = bmi < 18.5 ? '12.5–18 kg' : bmi < 25 ? '11.5–16 kg' : bmi < 30 ? '7–11.5 kg' : '5–9 kg';

  return {
    kicker: 'This trimester',
    value: kcal(stats.maintenance + extra),
    detail: `Pre-pregnancy maintenance is ${kcal(stats.maintenance)}, plus ${extra} kcal.`,
    stats: [
      { label: 'First, +0', value: kcal(stats.maintenance) },
      { label: 'Second, +340', value: kcal(stats.maintenance + 340) },
      { label: 'Third, +452', value: kcal(stats.maintenance + 452) },
    ],
    note: `One-baby estimate from maintenance plus the Institute of Medicine trimester additions. A common total gain range at this pre-pregnancy BMI is ${gain}. Twins and gestational diabetes need your own care team’s number. ${CLINICAL}`,
  };
}

function pregnancyMacros(form) {
  const stats = body({ ...form, sex: 'female' }, { minAge: 18, maxAge: 50, maxWeight: 180 });
  if (stats.error) return stats;
  const extras = { 1: 0, 2: 340, 3: 452 };
  const extra = extras[String(form.trimester)];
  if (extra === undefined) return { error: 'Pick a trimester.' };
  const calories = stats.maintenance + extra;
  const parts = splitMacros({ calories, weight: stats.weight, proteinPerKg: 1.1, fatRatio: 0.3, carbFloor: 175 });
  if (parts.error) return parts;
  return {
    ...macroResult({
      kicker: 'Pregnancy macros',
      calories,
      parts,
      note: parts.note || `Protein is about 1.1 g per kg of pre-pregnancy weight. Fat is about 30% of calories.`,
    }),
    note: `Carbohydrate stays at or above 175 g. ${CLINICAL}`,
  };
}

function diabetesResult(form) {
  const stats = body(form);
  if (stats.error) return stats;
  const calories = goalCalories(stats.maintenance, form.goal);
  const parts = splitMacros({ calories, weight: stats.weight, proteinPerKg: 1.4, fatRatio: 0.32 });
  if (parts.error) return parts;
  const perMeal = Math.round(parts.carbs / 3);

  return {
    kicker: 'Diabetes macro estimate',
    value: kcal(calories),
    detail: `Maintenance is ${kcal(stats.maintenance)}. About ${perMeal} g of carbohydrate if the day’s carbs are split across 3 meals.`,
    stats: [
      { label: 'Protein', value: grams(parts.protein) },
      { label: 'Carbs', value: grams(parts.carbs) },
      { label: 'Fat', value: grams(parts.fat) },
    ],
    note: `This is daily nutrition arithmetic only. It does not set medication, insulin, or glucose targets. A carb change can change how much medicine you need, so check it with your clinician. ${CLINICAL}`,
  };
}

const calculators = {
  tdee: tdeeResult,
  'weight-loss': lossResult,
  'weight-gain': gainResult,
  protein: proteinResult,
  'calories-burned': burnedResult,
  'burn-it-off': burnOffResult,
  alcohol: alcoholResult,
  serving: servingResult,
  'calorie-counter': counterResult,
  macros: standardMacroResult,
  pcos: pcosResult,
  'pregnancy-calories': pregnancyCalories,
  'pregnancy-macros': pregnancyMacros,
  diabetes: diabetesResult,
};

export function calculate(tool, form) {
  const run = calculators[tool] || calculators.tdee;
  return run(form);
}
