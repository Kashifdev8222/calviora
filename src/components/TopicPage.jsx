'use client';

import { ArrowRight } from 'lucide-react';
import Download from './Download.jsx';
import StoreBadges from './StoreBadges.jsx';
import Questions from './Questions.jsx';
import { onSamePageClick } from '../lib/navigate.js';

const goalStep = {
  kind: 'ring',
  pct: 60,
  center: '6',
  unit: 'of 10',
  label: 'Step 6 of 10',
  color: '#087C50',
};

function goalPhone(file, title) {
  return {
    src: `/screenshots/${file}`,
    alt: `Calviora goal screen with ${title} selected`,
    caption: title,
    pill: title,
    framed: false,
    chart: goalStep,
  };
}

const screenBySlug = {
  'ai-meal-scan': {
    src: '/screenshots/phone-history.png',
    alt: 'Calviora History screen with 559 of 1,801 kcal, 48g protein, 22g carbs, and 31g fat',
    caption: 'AI Meal Scan',
    pill: 'AI Meal Scan',
    framed: false,
    chart: {
      kind: 'donut',
      center: '559',
      unit: 'kcal',
      slices: [
        { label: 'Protein 48g', share: 192, color: '#fb923c' },
        { label: 'Carbs 22g', share: 88, color: '#34d399' },
        { label: 'Fat 31g', share: 279, color: '#c4b5fd' },
      ],
    },
  },
  'meal-logging': {
    src: '/screenshots/phone-meal.png',
    alt: 'Grilled chicken salad with avocado, 410 kcal, 41g protein, 9g carbs, and 22g fat',
    caption: 'Meal Logging',
    pill: 'Meal Logging',
    framed: false,
    chart: {
      kind: 'donut',
      center: '410',
      unit: 'kcal',
      slices: [
        { label: 'Protein 41g', share: 164, color: '#087C50' },
        { label: 'Carbs 9g', share: 36, color: '#94a3b8' },
        { label: 'Fat 22g', share: 198, color: '#fb923c' },
      ],
    },
  },
  'activity-tracker': {
    src: '/screenshots/phone-activity.png',
    alt: 'Calviora activity tracker with 6,420 steps, 64 percent of 10,000',
    caption: 'Activity Tracker',
    pill: 'Activity Tracker',
    framed: false,
    chart: { kind: 'ring', pct: 64, center: '6,420', unit: 'steps', label: '64% of 10,000', color: '#087C50' },
  },
  'water-intake-tracker': {
    src: '/screenshots/phone-history.png',
    alt: 'Calviora History screen showing 0.8 L of water logged',
    caption: 'Water Tracker',
    pill: 'Water Tracker',
    framed: false,
    chart: { kind: 'ring', pct: 32, center: '0.8', unit: 'L', label: '0.8 L logged', color: '#0284c7' },
  },
  'ai-nutrition-coach': {
    src: '/screenshots/phone-meal.png',
    alt: 'A scanned meal, grilled chicken salad with avocado, estimated at 410 kcal',
    caption: 'AI Nutrition Coach',
    pill: 'AI Coach',
    framed: false,
    chart: {
      kind: 'donut',
      center: '410',
      unit: 'kcal',
      slices: [
        { label: 'Protein 41g', share: 164, color: '#087C50' },
        { label: 'Carbs 9g', share: 36, color: '#94a3b8' },
        { label: 'Fat 22g', share: 198, color: '#fb923c' },
      ],
    },
  },
  'lose-weight': goalPhone('phone-lose-weight.png', 'Lose Weight'),
  'gain-muscle': goalPhone('phone-gain-muscle.png', 'Gain Muscle'),
  'maintain-weight': goalPhone('phone-maintain-weight.png', 'Maintain Weight'),
  'improve-nutrition': goalPhone('phone-improve-nutrition.png', 'Improve Nutrition'),
  'boost-energy': goalPhone('phone-boost-energy.png', 'Boost Energy'),
  'gain-weight': goalPhone('phone-gain-weight.png', 'Gain Weight'),
};

function HeroWave() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 text-brand-action" aria-hidden="true">
      <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="block h-16 w-full sm:h-24">
        <path fill="currentColor" d="M0,58 C280,8 520,8 760,42 C1000,76 1220,92 1440,36 L1440,90 L0,90 Z" />
      </svg>
    </div>
  );
}

function MacroDonut({ center, unit, slices }) {
  const total = slices.reduce((sum, slice) => sum + slice.share, 0) || 1;
  let cursor = 0;
  const stops = slices.map((slice) => {
    const start = (cursor / total) * 100;
    cursor += slice.share;
    const end = (cursor / total) * 100;
    return `${slice.color} ${start}% ${end}%`;
  });
  const places = ['-left-1 -top-3', '-right-2 top-1', '-bottom-3 left-3'];

  return (
    <div className="relative h-36 w-36">
      <div className="h-full w-full rounded-full shadow-lg" style={{ background: `conic-gradient(${stops.join(', ')})` }} aria-hidden="true" />
      <div className="absolute inset-4 flex flex-col items-center justify-center rounded-full bg-white text-center">
        <span className="text-2xl font-extrabold leading-none text-slate-900">{center}</span>
        <span className="mt-1 text-[11px] font-bold text-slate-500">{unit}</span>
      </div>
      {slices.map((slice, index) => (
        <span
          key={slice.label}
          className={`absolute whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-extrabold text-white shadow ${places[index]}`}
          style={{ background: slice.color }}
        >
          {slice.label}
        </span>
      ))}
    </div>
  );
}

function ProgressRing({ pct, center, unit, label, color }) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const dash = (Math.max(0, Math.min(100, pct)) / 100) * circumference;
  return (
    <div className="w-36 text-center">
      <div className="relative mx-auto h-36 w-36">
        <svg viewBox="0 0 140 140" className="h-full w-full -rotate-90" aria-hidden="true">
          <circle cx="70" cy="70" r={radius} fill="white" stroke="#e2e8f0" strokeWidth="12" />
          <circle
            cx="70"
            cy="70"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={`${dash} ${circumference - dash}`}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-extrabold leading-none text-slate-900">{center}</span>
          <span className="mt-1 text-[11px] font-bold text-slate-500">{unit}</span>
        </div>
      </div>
      <p className="mx-auto mt-2 max-w-[9rem] text-center text-[11px] font-extrabold leading-tight text-brand-deep">{label}</p>
    </div>
  );
}

function RateBars({ title, caption, max, items }) {
  return (
    <div className="w-56 rounded-3xl bg-white p-4 shadow-xl">
      <p className="text-2xl font-extrabold leading-none text-slate-900">{title}</p>
      <p className="mt-1 text-[11px] font-bold text-slate-500">{caption}</p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item.label}>
            <div className="flex items-center justify-between gap-2 text-[11px] font-bold text-slate-600">
              <span>{item.label}</span>
              <span>{item.value} kcal / min</span>
            </div>
            <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full rounded-full bg-brand-action" style={{ width: `${(item.value / max) * 100}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ScaleBar({ value, min, max, center, unit, ends, note }) {
  const pct = Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100));
  return (
    <div className="w-56 rounded-3xl bg-white p-4 shadow-xl">
      <p className="text-3xl font-extrabold leading-none text-slate-900">
        {center} <span className="text-sm font-bold text-slate-500">{unit}</span>
      </p>
      <div className="relative mt-4 h-2 rounded-full bg-gradient-to-r from-sky-400 via-brand-leaf to-orange-400">
        <span className="absolute top-1/2 h-4 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-deep" style={{ left: `${pct}%` }} />
      </div>
      <div className="mt-1 flex justify-between text-[10px] font-bold text-slate-500">
        <span>{ends[0]}</span>
        <span>{ends[1]}</span>
      </div>
      {note ? <p className="mt-2 text-xs font-extrabold text-brand-action">{note}</p> : null}
    </div>
  );
}

function ScreenChart({ chart }) {
  if (chart.kind === 'donut') return <MacroDonut {...chart} />;
  if (chart.kind === 'ring') return <ProgressRing {...chart} />;
  if (chart.kind === 'bars') return <RateBars {...chart} />;
  return <ScaleBar {...chart} />;
}

function ScreenStage({ screen }) {
  return (
    <div className="relative mx-auto flex w-full max-w-[640px] items-center justify-center gap-2 sm:gap-4">
      <div className="z-20 shrink-0 scale-90 sm:scale-100">
        <ScreenChart chart={screen.chart} />
      </div>
      <figure className="relative z-10 w-[188px] shrink-0 sm:w-[260px]">
        {screen.framed === false ? (
          <img
            src={screen.src}
            alt={screen.alt}
            width="768"
            height="1024"
            loading="lazy"
            decoding="async"
            className="h-auto w-full drop-shadow-2xl"
          />
        ) : (
          <div className="rounded-[2.2rem] border-[8px] border-[#1c1c1e] bg-[#1c1c1e] shadow-2xl">
            <img
              src={screen.src}
              alt={screen.alt}
              width="576"
              height="1280"
              loading="lazy"
              decoding="async"
              className="block w-full rounded-[1.6rem] bg-white"
            />
          </div>
        )}
        <figcaption className="mt-3 text-center text-sm font-extrabold text-brand-deep">{screen.caption}</figcaption>
      </figure>
      <p className="z-20 max-w-[108px] shrink-0 rounded-full bg-[#ff5a67] px-3 py-2 text-center text-xs font-extrabold leading-snug text-white shadow-lg sm:max-w-[132px] sm:px-4 sm:text-sm">
        {screen.pill}
      </p>
    </div>
  );
}

export default function TopicPage({ topic }) {
  const screen = screenBySlug[topic.slug];

  return (
    <main>
      <section className="relative overflow-x-clip pt-12 pb-20 sm:pt-16 sm:pb-24">
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
            <StoreBadges stacked className="mt-8 justify-center lg:justify-start" />
          </div>

          {screen ? <ScreenStage screen={screen} /> : null}
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-action">{topic.group}</p>
          <h2 className="mt-2 max-w-2xl text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl">{topic.kicker}</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {topic.points.map((point) => (
              <article key={point.title} className="rounded-3xl border border-slate-200 bg-brand-cloud p-6 sm:p-8">
                <h3 className="text-xl font-extrabold text-brand-deep">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{point.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {topic.sections.map((section, index) => (
        <section key={section.heading} className={index % 2 === 0 ? 'bg-brand-cloud' : 'bg-white'}>
          <div className="mx-auto grid max-w-6xl items-start gap-6 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-12 lg:gap-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl lg:col-span-5">{section.heading}</h2>
            <div className="space-y-4 lg:col-span-7">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-slate-600 sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section id="questions" className="scroll-mt-24 bg-brand-cloud py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.4fr_0.8fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-action">FAQ</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl">Questions</h2>
            <div className="mt-6 rounded-3xl border border-slate-200 bg-white px-5 sm:px-6">
              <Questions items={topic.faqs} />
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-action">Related</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl">Keep going</h2>
            <div className="mt-6 grid gap-3">
              {topic.related.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={onSamePageClick}
                  className="flex items-center justify-between gap-3 rounded-3xl border border-slate-200 bg-white px-5 py-5 text-sm font-extrabold text-brand-deep transition hover:-translate-y-0.5 hover:border-brand-action hover:shadow-lg"
                >
                  {item.label} <ArrowRight className="h-4 w-4 shrink-0 text-brand-action" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Download />
    </main>
  );
}
