import { ArrowRight } from 'lucide-react';
import Download from './Download.jsx';
import Questions from './Questions.jsx';
import { FillBar, RingSweep, useSweep } from './RingSweep.jsx';
import { onSamePageClick } from '../lib/navigate.js';

const washes = ['from-emerald-100 to-white', 'from-amber-100 to-white', 'from-sky-100 to-white'];

const shotsBySlug = {
  'ai-meal-scan': [
    { src: '/screenshots/ai-food-scan.jpeg', alt: 'Calviora quick add with AI Food Scan', caption: 'AI Food Scan' },
  ],
  'meal-logging': [
    { src: '/screenshots/daily-progress.jpeg', alt: 'Calviora daily progress with calories eaten', caption: 'Today’s log' },
    { src: '/screenshots/meal-times.jpeg', alt: 'Breakfast, lunch, and dinner times in Calviora', caption: 'Meal times' },
  ],
  'activity-tracker': [
    { src: '/screenshots/activities.jpeg', alt: 'Calviora activity list with calories per minute', caption: 'Activities' },
  ],
  'water-intake-tracker': [
    { src: '/screenshots/hydration.jpeg', alt: 'Calviora hydration screen with a water glass', caption: 'Hydration' },
  ],
  'ai-nutrition-coach': [
    { src: '/screenshots/personal-plan.jpeg', alt: 'Calviora personal plan with daily energy and meal split', caption: 'Your plan' },
    { src: '/screenshots/daily-progress.jpeg', alt: 'Calviora home screen with a note about the day', caption: 'A note on the day' },
  ],
  'lose-weight': [
    { src: '/screenshots/goal-lose-weight.jpeg', alt: 'Lose Weight selected in Calviora goals', caption: 'Lose Weight' },
    { src: '/screenshots/personal-plan.jpeg', alt: 'A Calviora plan set for losing weight', caption: 'The plan' },
  ],
  'gain-muscle': [
    { src: '/screenshots/goals.jpeg', alt: 'Gain Muscle listed in Calviora goals', caption: 'Gain Muscle' },
    { src: '/screenshots/daily-progress.jpeg', alt: 'Protein shown beside calories in Calviora', caption: 'Protein on the day' },
  ],
  'maintain-weight': [
    { src: '/screenshots/bmi-summary.jpeg', alt: 'Calviora summary with weight in a normal range', caption: 'Hold the range' },
    { src: '/screenshots/daily-progress.jpeg', alt: 'Daily calories against the goal in Calviora', caption: 'Close to the goal' },
  ],
  'improve-nutrition': [
    { src: '/screenshots/diet-type.jpeg', alt: 'Diet types in Calviora, including balanced and high protein', caption: 'Diet type' },
    { src: '/screenshots/daily-progress.jpeg', alt: 'Calories, carbs, protein, and fat in Calviora', caption: 'Macros on the plate' },
  ],
  'boost-energy': [
    { src: '/screenshots/hydration.jpeg', alt: 'Calviora hydration tracker', caption: 'Water through the day' },
    { src: '/screenshots/meal-times.jpeg', alt: 'Meal times spread through the day in Calviora', caption: 'Meals spread out' },
  ],
  'gain-weight': [
    { src: '/screenshots/goal-gain-weight.jpeg', alt: 'Calviora target weight showing kilograms to gain', caption: 'A higher target' },
    { src: '/screenshots/goals.jpeg', alt: 'Gain Weight listed in Calviora goals', caption: 'Gain Weight' },
  ],
};

const metersBySlug = {
  'ai-meal-scan': [
    { label: 'Protein', value: '21%', figure: '28g', pct: 21, color: '#087C50' },
    { label: 'Carbs', value: '46%', figure: '62g', pct: 46, color: '#f59e0b' },
    { label: 'Fat', value: '30%', figure: '18g', pct: 30, color: '#e11d48' },
  ],
  'meal-logging': [
    { label: 'Calories', value: '85%', figure: '1,860 kcal', pct: 85, color: '#087C50' },
    { label: 'Protein', value: '77%', figure: '92g', pct: 77, color: '#f59e0b' },
    { label: 'Water', value: '64%', figure: '1.6L', pct: 64, color: '#0284c7' },
  ],
  'activity-tracker': [
    { label: 'Steps', value: '84%', figure: '8,400', pct: 84, color: '#087C50' },
    { label: 'Workout', value: '60%', figure: '45 min', pct: 60, color: '#f59e0b' },
    { label: 'Meals', value: '70%', figure: '3 logged', pct: 70, color: '#0284c7' },
  ],
  'water-intake-tracker': [
    { label: 'Water', value: '72%', figure: '1.8L', pct: 72, color: '#0284c7' },
    { label: 'Meals', value: '58%', figure: '2 logged', pct: 58, color: '#087C50' },
    { label: 'Steps', value: '40%', figure: '4,200', pct: 40, color: '#f59e0b' },
  ],
  'ai-nutrition-coach': [
    { label: 'Left', value: '46%', figure: '920 kcal', pct: 46, color: '#087C50' },
    { label: 'Protein', value: '71%', figure: '86g', pct: 71, color: '#f59e0b' },
    { label: 'Water', value: '55%', figure: '1.4L', pct: 55, color: '#0284c7' },
  ],
  'lose-weight': [
    { label: 'Intake', value: '78%', figure: '1,720 kcal', pct: 78, color: '#087C50' },
    { label: 'Protein', value: '88%', figure: '118g', pct: 88, color: '#f59e0b' },
    { label: 'Water', value: '63%', figure: '1.6L', pct: 63, color: '#0284c7' },
  ],
  'gain-muscle': [
    { label: 'Protein', value: '94%', figure: '156g', pct: 94, color: '#f59e0b' },
    { label: 'Calories', value: '91%', figure: '2,640 kcal', pct: 91, color: '#087C50' },
    { label: 'Water', value: '68%', figure: '2.1L', pct: 68, color: '#0284c7' },
  ],
  'maintain-weight': [
    { label: 'Calories', value: '99%', figure: '2,180 kcal', pct: 99, color: '#087C50' },
    { label: 'Protein', value: '80%', figure: '110g', pct: 80, color: '#f59e0b' },
    { label: 'Water', value: '74%', figure: '1.9L', pct: 74, color: '#0284c7' },
  ],
  'improve-nutrition': [
    { label: 'Plants', value: '86%', figure: '5 colors', pct: 86, color: '#087C50' },
    { label: 'Protein', value: '69%', figure: '98g', pct: 69, color: '#f59e0b' },
    { label: 'Calories', value: '73%', figure: '1,940 kcal', pct: 73, color: '#0284c7' },
  ],
  'boost-energy': [
    { label: 'Water', value: '92%', figure: '2.3L', pct: 92, color: '#0284c7' },
    { label: 'Meals', value: '61%', figure: '1,540 kcal', pct: 61, color: '#087C50' },
    { label: 'Move', value: '48%', figure: '35 min', pct: 48, color: '#f59e0b' },
  ],
  'gain-weight': [
    { label: 'Calories', value: '96%', figure: '2,680 kcal', pct: 96, color: '#087C50' },
    { label: 'Protein', value: '82%', figure: '140g', pct: 82, color: '#f59e0b' },
    { label: 'Meals', value: '90%', figure: '4 logged', pct: 90, color: '#0284c7' },
  ],
};

const scenes = {
  'ai-meal-scan': {
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80',
    alt: 'Chicken biryani on a plate',
    chip: 'Chicken Biryani',
    meta: '540 kcal · Protein 28g · Carbs 62g · Fat 18g',
  },
  'meal-logging': {
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80',
    alt: 'A meal laid out to log',
    chip: 'Today’s diary',
    meta: 'Breakfast · Lunch · Dinner · Snacks',
  },
  'activity-tracker': {
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=1200&q=80',
    alt: 'Person running outdoors',
    chip: 'Afternoon walk',
    meta: '45 min · Next to the meal log',
  },
  'water-intake-tracker': {
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Glass of water',
    chip: 'Water today',
    meta: '1.8L of a 2.5L example',
  },
  'ai-nutrition-coach': {
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80',
    alt: 'A colorful plate of food',
    chip: 'Next meal',
    meta: 'Smaller plate · Protein still on it',
  },
  'lose-weight': {
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    alt: 'Person training to lose weight',
    chip: 'Steady deficit',
    meta: 'About 0.25–0.5 kg a week',
  },
  'gain-muscle': {
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Person strength training',
    chip: 'Protein first',
    meta: 'Each meal shows what is still missing',
  },
  'maintain-weight': {
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80',
    alt: 'Balanced meal',
    chip: 'Close to maintenance',
    meta: 'Meals, activity, and water together',
  },
  'improve-nutrition': {
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
    alt: 'Colorful nutritious meal',
    chip: 'Everyday plate',
    meta: 'Calories and macros on homemade food',
  },
  'boost-energy': {
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=1200&q=80',
    alt: 'Person running outdoors',
    chip: 'Afternoon check',
    meta: 'Meals, movement, and water',
  },
  'gain-weight': {
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Hearty nutritious plate',
    chip: 'A measured surplus',
    meta: 'Add calories with meals you can see',
  },
};

function Rings({ meters, play }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {meters.map((ring) => (
        <div key={ring.label} className="text-center">
          <RingSweep
            pct={ring.pct}
            color={ring.color}
            play={play}
            className="mx-auto flex h-[68px] w-[68px] items-center justify-center rounded-full"
          >
            <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white text-[11px] font-extrabold text-brand-deep">
              {ring.value}
            </div>
          </RingSweep>
          <p className="mt-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">{ring.label}</p>
          <p className="text-[10px] font-semibold text-brand-deep">{ring.figure}</p>
        </div>
      ))}
    </div>
  );
}

function HeroWave() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 text-brand-action" aria-hidden="true">
      <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="block h-16 w-full sm:h-24">
        <path fill="currentColor" d="M0,58 C280,8 520,8 760,42 C1000,76 1220,92 1440,36 L1440,90 L0,90 Z" />
      </svg>
    </div>
  );
}

export default function TopicPage({ topic }) {
  const scene = scenes[topic.slug] || scenes['ai-meal-scan'];
  const meters = metersBySlug[topic.slug] || metersBySlug['ai-meal-scan'];
  const shots = shotsBySlug[topic.slug] || [];
  const play = useSweep(topic.slug);

  return (
    <main>
      <section className="relative overflow-hidden pt-12 pb-28 sm:pt-16 sm:pb-36">
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern"></div>
        <div className="pointer-events-none absolute -left-16 top-8 h-56 w-56 rounded-full bg-brand-leaf/40 blur-3xl"></div>
        <HeroWave />
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <p className="inline-flex rounded-full border border-brand-action/20 bg-brand-soft px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-action">
              {topic.group}
            </p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-brand-deep sm:text-6xl">{topic.title}</h1>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-xl">{topic.summary}</p>
            <a
              href="/#download"
              onClick={onSamePageClick}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-deep px-7 py-3.5 text-sm font-extrabold text-white shadow-xl shadow-brand-deep/20 hover:bg-brand-action"
            >
              Get started free <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="relative min-h-[460px] overflow-hidden rounded-[32px] bg-brand-deep shadow-2xl">
            <img src={scene.image} alt={scene.alt} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/20 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 rounded-3xl bg-white/95 p-4 shadow-xl">
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Sample day</p>
                  <p className="font-extrabold text-brand-deep">{scene.chip}</p>
                  <p className="mt-0.5 text-xs font-semibold text-slate-500">{scene.meta}</p>
                </div>
              </div>
              <Rings meters={meters} play={play} />
              <p className="mt-3 rounded-2xl bg-brand-cloud px-3 py-2 text-sm font-semibold text-brand-deep">{topic.kicker}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="highlights" className="scroll-mt-24 bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-action">Highlights</p>
          <h2 className="mt-2 text-3xl font-extrabold text-brand-deep sm:text-4xl">What you get</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {topic.points.map((point, index) => (
              <article key={point.title} className={`rounded-3xl border border-slate-200 bg-gradient-to-b p-6 ${washes[index % washes.length]}`}>
                <div className="flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-deep font-extrabold text-brand-leaf">
                    {index + 1}
                  </div>
                </div>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white">
                  <FillBar pct={meters[index % meters.length].pct} color={meters[index % meters.length].color} play={play} />
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-brand-deep">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{point.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {shots.length ? (
        <section id="in-the-app" className="scroll-mt-24 py-14 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-action">In the app</p>
            <h2 className="mt-2 text-3xl font-extrabold text-brand-deep sm:text-4xl">See it on this screen</h2>
            <p className="mt-3 max-w-2xl text-slate-600">Screens from Calviora for {topic.title}.</p>
            <div className="mt-8 flex gap-5 overflow-x-auto pb-3">
              {shots.map((shot) => (
                <figure key={shot.src} className="w-[220px] shrink-0 sm:w-[240px]">
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    className="w-full rounded-[28px] border border-slate-200 bg-white shadow-xl"
                  />
                  <figcaption className="mt-3 text-center text-sm font-extrabold text-brand-deep">{shot.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section id="guide" className="scroll-mt-24 py-14 sm:py-16">
        <div className="mx-auto max-w-3xl space-y-4 px-4 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-action">Guide</p>
          <h2 className="text-3xl font-extrabold text-brand-deep sm:text-4xl">How to use it</h2>
          {topic.sections.map((section, index) => (
            <article key={section.heading} className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <p className="text-xs font-extrabold uppercase tracking-widest text-brand-action">Step {index + 1}</p>
              <h3 className="mt-2 text-2xl font-extrabold text-brand-deep">{section.heading}</h3>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-3 leading-relaxed text-slate-600">
                  {paragraph}
                </p>
              ))}
            </article>
          ))}
        </div>
      </section>

      <section id="questions" className="scroll-mt-24 bg-white py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-action">FAQ</p>
          <h2 className="mt-2 text-3xl font-extrabold text-brand-deep sm:text-4xl">Questions</h2>
          <div className="mt-4 rounded-3xl border border-slate-200 bg-brand-cloud px-5 sm:px-6">
            <Questions items={topic.faqs} />
          </div>
        </div>
      </section>

      <section id="related" className="scroll-mt-24 py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-action">Related</p>
          <h2 className="mt-2 text-3xl font-extrabold text-brand-deep sm:text-4xl">Keep going</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {topic.related.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={onSamePageClick}
                className="flex items-center justify-between gap-3 rounded-3xl border border-slate-200 bg-white px-5 py-5 text-sm font-extrabold text-brand-deep transition hover:-translate-y-1 hover:border-brand-action hover:shadow-lg"
              >
                {item.label} <ArrowRight className="h-4 w-4 shrink-0 text-brand-action" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <Download />
    </main>
  );
}
