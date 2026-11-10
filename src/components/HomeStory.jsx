import { onSamePageClick } from '../lib/navigate.js';

const steps = [
  {
    n: '1',
    title: 'Scan the plate',
    text: 'A photo returns an estimate of calories, protein, carbs, and fat. Change the portion if the serving looks off.',
    href: '/features/ai-meal-scan',
    label: 'AI Meal Scan',
  },
  {
    n: '2',
    title: 'Save the meal',
    text: 'Breakfast, lunch, dinner, and snacks stay in one diary, so one heavy plate does not hide the rest of the day.',
    href: '/features/meal-logging',
    label: 'Meal Logging',
  },
  {
    n: '3',
    title: 'Ask what to change',
    text: 'The coach talks about portions, protein, and the next meal that still fits the goal you picked.',
    href: '/features/ai-nutrition-coach',
    label: 'AI Nutrition Coach',
  },
  {
    n: '4',
    title: 'Check the rest of the day',
    text: 'Water and activity sit beside the food log, so the day is more than a calorie total.',
    href: '/features/water-intake-tracker',
    label: 'Water and activity',
  },
];

const audiences = [
  {
    title: 'Homemade plates',
    text: 'Curry, rice, eggs, and leftovers rarely come with a label. A photo is the faster start.',
    href: '/features/ai-meal-scan',
    points: ['South Asian dishes included', 'Portion stays editable'],
  },
  {
    title: 'Losing weight',
    text: 'See what is already eaten before the next meal, while the choice is still easy to change.',
    href: '/goals/lose-weight',
    points: ['A steady deficit', 'Meals you can measure'],
  },
  {
    title: 'Training days',
    text: 'Protein is easier to hit when each meal shows what is still missing.',
    href: '/goals/gain-muscle',
    points: ['Protein next to the plate', 'Workouts in the same view'],
  },
  {
    title: 'Busy days',
    text: 'Log close to the meal. A usual breakfast does not need a new search every morning.',
    href: '/features/meal-logging',
    points: ['Photo or typed food', 'A diary you can review'],
  },
  {
    title: 'Low-energy afternoons',
    text: 'Meals, movement, and water in one place make a slump easier to notice.',
    href: '/goals/boost-energy',
    points: ['Hydration goal', 'Activity beside food'],
  },
  {
    title: 'Gaining on purpose',
    text: 'Add calories with meals you can measure, instead of guessing that you ate enough.',
    href: '/goals/gain-weight',
    points: ['A higher target', 'The same scan and log'],
  },
];

export function DayFlow() {
  return (
    <section id="routine" className="scroll-mt-24 py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-action">How it works</p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-brand-deep tracking-tight">Scan, log, ask, adjust</h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Start with the meal in front of you. Calviora turns that plate into a number you can correct, then a day you can see.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {steps.map((step) => (
            <a
              key={step.n}
              href={step.href}
              onClick={onSamePageClick}
              className="rounded-3xl border border-slate-200 bg-brand-cloud p-5 hover:border-brand-action"
            >
              <div className="w-9 h-9 rounded-full bg-brand-deep text-brand-leaf font-extrabold flex items-center justify-center">{step.n}</div>
              <h3 className="mt-4 text-lg font-extrabold text-brand-deep">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{step.text}</p>
              <p className="mt-4 text-sm font-bold text-brand-action">{step.label}</p>
            </a>
          ))}
        </div>

        <div className="mt-8 grid lg:grid-cols-2 gap-4">
          <article className="rounded-3xl bg-brand-cloud border border-slate-200 p-5 sm:p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Example question</p>
            <p className="mt-3 font-bold text-brand-deep">Lunch was heavy. What should dinner look like?</p>
          </article>
          <article className="rounded-3xl bg-brand-deep text-white p-5 sm:p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-leaf">Example answer</p>
            <p className="mt-3 leading-relaxed">
              Keep dinner smaller and put protein on the plate. Scan that plate in the app if you want to see whether protein is still short.
            </p>
            <p className="mt-4 text-xs text-brand-soft">An example of the coach. The live chat is in the app, not on this page.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export function WhoFor() {
  return (
    <section id="who" className="scroll-mt-24 py-16 sm:py-20 bg-brand-cloud">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-action">Who it is for</p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-brand-deep tracking-tight">Built around the meal you actually eat</h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">The scan, the log, and the coach change with the reason you opened the app.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {audiences.map((item) => (
            <a
              key={item.title}
              href={item.href}
              onClick={onSamePageClick}
              className="rounded-3xl bg-white border border-slate-200 p-6 hover:border-brand-action hover:-translate-y-1 transition"
            >
              <h3 className="text-xl font-extrabold text-brand-deep">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.text}</p>
              <ul className="mt-4 space-y-1 text-sm font-semibold text-brand-action">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
