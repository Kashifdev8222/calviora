export const featurePages = [
  {
    slug: 'ai-meal-scan',
    group: 'Features',
    title: 'AI Meal Scan',
    kicker: 'Photo to numbers',
    summary:
      'Take a photo of your plate and Calviora estimates the portion, calories, and macros. It is built for everyday meals, including homemade and South Asian dishes that do not come with a label.',
    points: [
      { title: 'One photo', text: 'Point the camera at the plate. You do not have to search a database for every item first.' },
      { title: 'Portion you can edit', text: 'The estimate is a starting point. Change the amount if the serving is bigger or smaller than it looks.' },
      { title: '3 free scans a day', text: 'Every account can try the scan without a card. Paid plans raise the number of scans.' },
    ],
    sections: [
      {
        heading: 'What the scan is for',
        paragraphs: [
          'A meal scan is for the plate in front of you: rice and curry, eggs and toast, a restaurant dish, or leftovers. Calviora reads the photo and returns calories, protein, carbs, and fat for that portion.',
          'Packaged food can still be logged by name. The scan is most useful when the meal was cooked at home and nobody printed the nutrition on the pot.',
        ],
      },
      {
        heading: 'How to get a clearer result',
        paragraphs: [
          'Use a clear photo of the full plate, in normal light, without a heavy filter. If two foods are piled together, the estimate is rougher, so split them in the log when you know the amounts.',
          'Treat the number as an estimate, not a lab test. If you weighed the rice, type the grams. The diary keeps the corrected meal, so the next similar plate is easier to log.',
        ],
      },
    ],
    related: [
      { href: '/features/meal-logging', label: 'Meal Logging' },
      { href: '/calculators/online-calorie-calculator', label: 'AI Calorie Counter' },
      { href: '/calculators/online-macro-calculator', label: 'Macro Calculator' },
    ],
  },
  {
    slug: 'meal-logging',
    group: 'Features',
    title: 'Meal Logging',
    kicker: 'A diary for the day',
    summary:
      'Save breakfast, lunch, dinner, and snacks in one place. A photo scan, a typed food, or a saved meal all land in the same daily log.',
    points: [
      { title: 'Four parts of the day', text: 'Breakfast, lunch, dinner, and snacks stay separate, so a heavy dinner does not hide inside one lump sum.' },
      { title: 'Photo or manual', text: 'Scan the plate when you are out. Type the food when you already know the portion.' },
      { title: 'Easy to review', text: 'Look back at the day before the next meal, while you can still change what you eat.' },
    ],
    sections: [
      {
        heading: 'Why the log matters more than one scan',
        paragraphs: [
          'A single photo answers one plate. The log answers the day: what you already ate, what is left of the calorie target, and whether protein is still short at dinner.',
          'People remember the big meal and forget the chai, the cooking oil, and the second helping. Writing those down is the part that makes the target useful.',
        ],
      },
      {
        heading: 'What a useful log looks like',
        paragraphs: [
          'Log close to the meal, not from memory at midnight. Repeat meals can be saved, so a usual breakfast does not need a new search every morning.',
          'The same diary sits next to water and activity. You can see food, drink, and movement together instead of keeping three separate notes.',
        ],
      },
    ],
    related: [
      { href: '/features/ai-meal-scan', label: 'AI Meal Scan' },
      { href: '/features/ai-nutrition-coach', label: 'AI Nutrition Coach' },
      { href: '/calculators/online-macro-calculator', label: 'Macro Calculator' },
    ],
  },
  {
    slug: 'activity-tracker',
    group: 'Features',
    title: 'Activity Tracker',
    kicker: 'Movement next to meals',
    summary:
      'Log steps and workouts so the calories you burn sit beside the calories you eat. The point is a fair picture of the day, not a reason to eat back every walk.',
    points: [
      { title: 'Steps and sessions', text: 'A daily step count and a named workout both belong in the same activity view.' },
      { title: 'Next to food', text: 'Burn only means something when it is compared with what you logged at meals.' },
      { title: 'No double counting', text: 'If your calorie target already includes an active day, do not add the same walk on top and then eat it again.' },
    ],
    sections: [
      {
        heading: 'What to record',
        paragraphs: [
          'Record the walk, the lift, the ride, or the sport, plus how long it lasted. Calviora keeps that next to the meal log so a training day and a rest day do not look the same.',
          'A short walk is still worth logging if it is part of how you judge the week. One huge workout does not cancel a week of unlogged meals.',
        ],
      },
      {
        heading: 'How this fits a calorie target',
        paragraphs: [
          'Maintenance calories already assume a level of daily movement. Use the activity log to see the session. Use the TDEE calculator when you want the full-day number.',
          'If the scale has not moved for two weeks, change food or the weekly plan. Do not keep adding bonus calories for movement that was already in the target.',
        ],
      },
    ],
    related: [
      { href: '/calculators/calories-burned-calculator', label: 'Calories Burned Calculator' },
      { href: '/calculators/tdee-calculator', label: 'TDEE Calculator' },
      { href: '/goals/boost-energy', label: 'Boost Energy' },
    ],
  },
  {
    slug: 'water-intake-tracker',
    group: 'Features',
    title: 'Water Intake Tracker',
    kicker: 'Glasses through the day',
    summary:
      'Tap to add a glass and see how close you are to the amount you set for the day. Hydration stays in the same app as meals, instead of a separate tally on paper.',
    points: [
      { title: 'Tap to log', text: 'Each glass is one tap. You can see the running total without opening a note.' },
      { title: 'A daily line', text: 'Set the amount you are aiming for and watch the gap close through the afternoon.' },
      { title: 'Beside meals', text: 'Thirst and hunger get mixed up. Seeing water next to food makes that easier to notice.' },
    ],
    sections: [
      {
        heading: 'A simple target',
        paragraphs: [
          'A common planning figure is about 35 ml of water per kilogram of body weight. That is a starting line, not a medical prescription. Hot weather, long training, and illness change what you need.',
          'Coffee and tea count as drinks, but the tracker is there so plain water does not get forgotten between meetings and meals.',
        ],
      },
      {
        heading: 'How people actually keep up',
        paragraphs: [
          'Log the glass when you drink it. A perfect total entered at night does not help you drink the water. A short gap after lunch is the usual place the day falls behind.',
          'Pair the tracker with the meal log. Many people find they snack less when the water goal is visible next to the calorie goal.',
        ],
      },
    ],
    related: [
      { href: '/features/meal-logging', label: 'Meal Logging' },
      { href: '/goals/boost-energy', label: 'Boost Energy' },
      { href: '/features/activity-tracker', label: 'Activity Tracker' },
    ],
  },
  {
    slug: 'ai-nutrition-coach',
    group: 'Features',
    title: 'AI Nutrition Coach',
    kicker: 'Plain-language guidance',
    summary:
      'Ask what to eat next, how a portion fits your goal, or where protein is short today. The coach answers in normal language from the meals and target you already logged.',
    points: [
      { title: 'Uses your goal', text: 'Lose, gain, or maintain changes the suggestion. A cut and a bulk should not get the same dinner tip.' },
      { title: 'Looks at today', text: 'The useful question is what is left: calories, protein, and the next meal, not a generic diet essay.' },
      { title: 'Not a clinician', text: 'Coaching here is nutrition guidance for planning. It does not diagnose, prescribe, or replace your doctor or dietitian.' },
    ],
    sections: [
      {
        heading: 'Questions it is meant to answer',
        paragraphs: [
          'What can I eat with 500 kcal left? Is this portion large for a fat-loss day? How do I add protein without adding a huge amount of food? Those are coach questions.',
          'The better the log, the better the answer. If lunch was never entered, the coach cannot see that the day is already high.',
        ],
      },
      {
        heading: 'What to do with the answer',
        paragraphs: [
          'Use it to pick the next meal, then log that meal. A tip you do not eat does not change the day. Save the meals that work so you are not starting from zero tomorrow.',
          'If you are pregnant, managing diabetes, or under care for an eating disorder, follow the plan from your care team. The coach is a general guide for everyday tracking.',
        ],
      },
    ],
    related: [
      { href: '/features/ai-meal-scan', label: 'AI Meal Scan' },
      { href: '/features/meal-logging', label: 'Meal Logging' },
      { href: '/calculators/online-macro-calculator', label: 'Macro Calculator' },
    ],
  },
];

export const goalPages = [
  {
    slug: 'lose-weight',
    group: 'Goals',
    title: 'Lose Weight',
    kicker: 'A steady deficit',
    summary:
      'Lose weight by eating a little under what you burn, and by knowing what is on the plate. Calviora keeps the meal scans, the log, and the daily target in one place.',
    points: [
      { title: 'See the portion', text: 'Most drift comes from servings that are larger than they look. A scan makes that visible.' },
      { title: 'A pace you can keep', text: 'About 0.25 to 0.5 kg a week suits a lot of people. Faster plans are harder to hold and easier to quit.' },
      { title: 'Protein stays up', text: 'On a cut, protein helps you stay full and hold on to muscle while the calories come down.' },
    ],
    sections: [
      {
        heading: 'How Calviora supports a cut',
        paragraphs: [
          'Set the goal to lose weight. The app lines up a calorie target under your maintenance and shows what is left after each meal. You still choose the food.',
          'Log the meals you usually forget: oil in the pan, drinks, and the extra roti. Those are often the gap between a plan that works on paper and a week that does not move.',
        ],
      },
      {
        heading: 'A safe way to read the number',
        paragraphs: [
          'The weight-loss calculator turns your details into a daily calorie figure and a weekly pace. It will not take the target under a basic floor. That number is a plan, not medical advice.',
          'Talk to a doctor before a deep deficit, and always if you are pregnant, under 18, or managing an illness. Recalculate after every 4 to 5 kg, because a lighter body burns less.',
        ],
      },
    ],
    related: [
      { href: '/calculators/weight-loss-calculator', label: 'Weight Loss Calculator' },
      { href: '/calculators/tdee-calculator', label: 'TDEE Calculator' },
      { href: '/features/ai-meal-scan', label: 'AI Meal Scan' },
    ],
  },
  {
    slug: 'gain-muscle',
    group: 'Goals',
    title: 'Gain Muscle',
    kicker: 'Protein and training',
    summary:
      'Muscle needs training and enough protein, with calories that match the work. Calviora tracks the protein on each plate so the target is not a guess at the end of the day.',
    points: [
      { title: 'Protein from your weight', text: 'A useful range for building muscle is about 1.6 to 2.2 g per kilogram of body weight.' },
      { title: 'Spread across meals', text: 'Four meals of a moderate serving are easier to eat than one huge dinner.' },
      { title: 'Training is the other half', text: 'Extra food without lifting mostly adds weight, not muscle. Log the sessions next to the meals.' },
    ],
    sections: [
      {
        heading: 'What to watch in the log',
        paragraphs: [
          'Calories tell you if you are eating enough to train. Protein tells you if the meals can support the work. Both should be visible before the last meal, when you can still add food.',
          'A scan of chicken, dal, eggs, paneer, or yogurt is enough to see whether the plate is actually high in protein or only feels like it.',
        ],
      },
      {
        heading: 'Gain muscle is not the same as gain as fast as possible',
        paragraphs: [
          'A small surplus is enough for most people who already train. A very large surplus adds fat faster than it adds muscle. The weight-gain calculator shows a lean pace and a standard pace.',
          'If you are new to lifting, progress in the gym matters as much as the gram target. Use the protein calculator for the daily range, then log against it.',
        ],
      },
    ],
    related: [
      { href: '/calculators/protein-intake-calculator', label: 'Protein Intake Calculator' },
      { href: '/calculators/weight-gain-calculator', label: 'Weight Gain Calculator' },
      { href: '/features/activity-tracker', label: 'Activity Tracker' },
    ],
  },
  {
    slug: 'maintain-weight',
    group: 'Goals',
    title: 'Maintain Weight',
    kicker: 'Eat about what you burn',
    summary:
      'Maintenance means holding your weight while you keep an eye on meals, movement, and water. The target sits near your TDEE, and the log shows when a week starts to drift.',
    points: [
      { title: 'A ceiling, not a crash diet', text: 'You eat around the calories you burn. There is no need for a steep cut or a forced surplus.' },
      { title: 'Weekly average', text: 'One heavy dinner does not decide the week. Compare the average, not a single morning on the scale.' },
      { title: 'Still worth logging', text: 'Maintenance fails quietly when portions creep up and nobody writes them down.' },
    ],
    sections: [
      {
        heading: 'Finding the number',
        paragraphs: [
          'The TDEE calculator estimates maintenance from your sex, age, height, weight, and activity. Eat near that figure, weigh in a few mornings a week, and nudge the target if the two-week trend climbs or drops.',
          'Activity you already counted in the TDEE should not be added again as bonus food. The activity tracker is for seeing the day, not for double entry.',
        ],
      },
      {
        heading: 'What maintenance looks like in the app',
        paragraphs: [
          'Meals, water, and workouts stay on one screen. You can keep the habits from a cut, such as scanning plates, without staying in a deficit.',
          'If life gets busier, log the repeat meals and the drinks. Those two categories are where maintenance usually slips.',
        ],
      },
    ],
    related: [
      { href: '/calculators/tdee-calculator', label: 'TDEE Calculator' },
      { href: '/features/meal-logging', label: 'Meal Logging' },
      { href: '/goals/improve-nutrition', label: 'Improve Nutrition' },
    ],
  },
  {
    slug: 'improve-nutrition',
    group: 'Goals',
    title: 'Improve Nutrition',
    kicker: 'See what the plate is made of',
    summary:
      'Improving nutrition starts with knowing the calories and macros on the food you already eat. Calviora is aimed at everyday plates, including homemade and South Asian dishes.',
    points: [
      { title: 'More than a calorie', text: 'Protein, carbs, and fat show whether a meal is mostly starch, mostly oil, or actually balanced.' },
      { title: 'Familiar food', text: 'Biryani, roti, dal, karahi, and home curry can be scanned. You do not have to switch to meals you would not cook.' },
      { title: 'Small swaps', text: 'The coach can suggest the next meal from what is left in the day, instead of replacing your whole menu.' },
    ],
    sections: [
      {
        heading: 'A practical way to improve a week',
        paragraphs: [
          'Log what you eat now for a few days before you change it. The pattern is usually obvious: low protein at breakfast, a large dinner, or drinks that never get counted.',
          'Change one meal first. A higher-protein breakfast or a smaller portion of rice is easier to keep than a new diet with foods you will not buy again.',
        ],
      },
      {
        heading: 'Quality and amount',
        paragraphs: [
          'Vegetables, dal, yogurt, eggs, fish, and fruit raise the quality of a day without requiring a perfect menu. The log is how you see whether they actually showed up.',
          'Use the macro calculator if you want gram targets. Use the meal scan when the food has no label. Together they turn “eat better” into something you can check.',
        ],
      },
    ],
    related: [
      { href: '/features/ai-meal-scan', label: 'AI Meal Scan' },
      { href: '/calculators/online-macro-calculator', label: 'Macro Calculator' },
      { href: '/features/ai-nutrition-coach', label: 'AI Nutrition Coach' },
    ],
  },
  {
    slug: 'boost-energy',
    group: 'Goals',
    title: 'Boost Energy',
    kicker: 'Meals, movement, and water',
    summary:
      'Steady energy comes from regular meals, some movement, and enough water. Calviora keeps those three visible so an afternoon slump is easier to trace.',
    points: [
      { title: 'Do not skip and then crash', text: 'A long gap with no food, then a very large meal, is a common reason the afternoon feels flat.' },
      { title: 'Water is part of it', text: 'Mild dehydration feels like tiredness. The water tracker shows whether you actually drank.' },
      { title: 'Move a little', text: 'A walk and a logged workout belong next to the meals, so the day is not only a food total.' },
    ],
    sections: [
      {
        heading: 'What the log can show you',
        paragraphs: [
          'Look at the days you felt drained. They often have a missed meal, a very high-carb lunch with little protein, or almost no water until evening.',
          'The coach can suggest a next meal that fits the calories you have left and includes some protein, which tends to carry you longer than a sweet snack alone.',
        ],
      },
      {
        heading: 'This is not a stimulant plan',
        paragraphs: [
          'Calviora does not sell energy as a pill or a detox. The goal is a day you can repeat: breakfast you log, water you tap in, and a walk you record.',
          'If tiredness is sudden, severe, or comes with other symptoms, that is a medical question. The app is for ordinary tracking, not for explaining illness.',
        ],
      },
    ],
    related: [
      { href: '/features/water-intake-tracker', label: 'Water Intake Tracker' },
      { href: '/features/activity-tracker', label: 'Activity Tracker' },
      { href: '/features/meal-logging', label: 'Meal Logging' },
    ],
  },
  {
    slug: 'gain-weight',
    group: 'Goals',
    title: 'Gain Weight',
    kicker: 'A surplus you can measure',
    summary:
      'Gaining weight on purpose means eating more than you burn, and knowing where those calories came from. Calviora tracks the surplus so it is not just a feeling that you ate a lot.',
    points: [
      { title: 'Add calories on purpose', text: 'A lean pace is about 250 kcal over maintenance. A standard pace is about 500.' },
      { title: 'Protein still counts', text: 'Extra calories without protein mostly add fat. Keep a protein range beside the surplus.' },
      { title: 'Log the low days', text: 'People who struggle to gain often eat less than they think once the whole week is written down.' },
    ],
    sections: [
      {
        heading: 'How to build the surplus',
        paragraphs: [
          'Start from maintenance, then add the surplus. Drinks, nut butter, olive oil, and an extra serving are easier to finish than another huge plate when you are already full.',
          'Weigh in a few mornings a week and use the average. If nothing has moved after two weeks, add another 150 to 200 kcal and check again.',
        ],
      },
      {
        heading: 'Keep it measurable',
        paragraphs: [
          'Scan or enter the meals that are doing the work. A plan you cannot see will drift back to the old intake within a few busy days.',
          'The weight-gain calculator shows the daily target, the weeks to a goal weight, and a protein range. Recalculate after every 4 to 5 kg, because the old surplus becomes maintenance as you grow.',
        ],
      },
    ],
    related: [
      { href: '/calculators/weight-gain-calculator', label: 'Weight Gain Calculator' },
      { href: '/calculators/protein-intake-calculator', label: 'Protein Intake Calculator' },
      { href: '/goals/gain-muscle', label: 'Gain Muscle' },
    ],
  },
];

export function featurePath(slug) {
  return `/features/${slug}`;
}

export function goalPath(slug) {
  return `/goals/${slug}`;
}

export function topicFromPath(pathname = '') {
  const feature = String(pathname).match(/^\/features\/([^/]+)\/?$/);
  if (feature) return featurePages.find((item) => item.slug === feature[1]) || null;
  const goal = String(pathname).match(/^\/goals\/([^/]+)\/?$/);
  if (goal) return goalPages.find((item) => item.slug === goal[1]) || null;
  return null;
}
