'use client';

import { BookOpen, Camera, Clock, Dumbbell, Droplet, Sparkles, TrendingDown, TrendingUp, Zap } from 'lucide-react';
import { FillBar, useSweep } from './RingSweep.jsx';
import { onSamePageClick } from '../lib/navigate.js';

const steps = [
  {
    n: '1',
    title: 'Take A Photo',
    text: 'Aim your camera at your meal. Calviora estimates the calories, protein, carbs and fat. If a portion looks wrong, you can fix it.',
    href: '/features/ai-meal-scan',
    label: 'AI Meal Scan',
    Icon: Camera,
    wash: 'from-emerald-100 to-white',
    pct: 72,
    color: '#087C50',
  },
  {
    n: '2',
    title: 'Add It To Your Day',
    text: 'Put the meal under breakfast, lunch, dinner or snacks. Your daily total updates right away.',
    href: '/features/meal-logging',
    label: 'Meal Logging',
    Icon: BookOpen,
    wash: 'from-amber-100 to-white',
    pct: 54,
    color: '#fbbf24',
  },
  {
    n: '3',
    title: 'Get A Second Opinion',
    text: "Ask the AI Nutrition Coach what to eat next. It answers using the meals you've already logged.",
    href: '/features/ai-nutrition-coach',
    label: 'AI Nutrition Coach',
    Icon: Sparkles,
    wash: 'from-violet-100 to-white',
    pct: 40,
    color: '#a78bfa',
  },
  {
    n: '4',
    title: 'Watch The Full Picture',
    text: 'Water and activity sit beside your food, so your whole day is easy to read.',
    href: '/features/water-intake-tracker',
    label: 'Water And Activity',
    Icon: Droplet,
    wash: 'from-sky-100 to-white',
    pct: 80,
    color: '#38bdf8',
  },
];

const audiences = [
  {
    title: 'Home Cooked Meals',
    text: "Pasta, stir fry, curry and a Sunday roast are everyday food for many of us. Calviora works with home cooked dishes, and you can correct the portion if it's off.",
    points: ['Home cooked dishes supported', 'Correct the portion if it is off'],
    Icon: Camera,
    iconWrap: 'bg-emerald-100 text-emerald-700',
  },
  {
    title: 'Weight Loss Weeks',
    text: "Know what a meal costs you while it's still on your plate, not at midnight.",
    points: ['Count it while it is on the plate', 'No midnight catch-up'],
    Icon: TrendingDown,
    iconWrap: 'bg-rose-100 text-rose-600',
  },
  {
    title: 'Gym Days',
    text: "See your protein meal by meal, so you know if you're close to your target.",
    points: ['Protein meal by meal', 'See if you are close'],
    Icon: Dumbbell,
    iconWrap: 'bg-amber-100 text-amber-700',
  },
  {
    title: 'Packed Schedules',
    text: "Skip the typing. One photo takes seconds, and you're back to your day.",
    points: ['Skip the typing', 'One photo takes seconds'],
    Icon: Clock,
    iconWrap: 'bg-sky-100 text-sky-700',
  },
  {
    title: 'Slow Afternoons',
    text: 'Look back at your meals, water and movement to find out what might be draining you.',
    points: ['Meals, water, and movement', 'Find what is draining you'],
    Icon: Zap,
    iconWrap: 'bg-yellow-100 text-yellow-700',
  },
  {
    title: 'Building Up',
    text: "If you're trying to eat more, tracking shows you if you really are.",
    points: ['Eat more on purpose', 'See if you really are'],
    Icon: TrendingUp,
    iconWrap: 'bg-orange-100 text-orange-700',
  },
];

export function DayFlow() {
  const play = useSweep('routine');

  return (
    <section id="routine" className="scroll-mt-24 py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-action">How It Works</p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-brand-deep tracking-tight">How Does The Calviora AI Calorie Counter App Work?</h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            You eat. Calviora does the counting. You decide what to change.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {steps.map((step) => {
            const Icon = step.Icon;
            return (
              <a
                key={step.n}
                href={step.href}
                onClick={onSamePageClick}
                className={`rounded-3xl border border-slate-200 bg-gradient-to-b ${step.wash} p-5 hover:border-brand-action`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-white shadow-sm text-brand-deep flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-extrabold text-brand-action">{step.n}</span>
                </div>
                <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white">
                  <FillBar pct={step.pct} color={step.color} play={play} />
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-brand-deep">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{step.text}</p>
                <p className="mt-4 text-sm font-bold text-brand-action">{step.label}</p>
              </a>
            );
          })}
        </div>

        <div className="mt-8 grid lg:grid-cols-2 gap-4">
          <article className="rounded-3xl bg-brand-cloud border border-slate-200 p-5 sm:p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Example question</p>
            <p className="mt-3 font-bold text-brand-deep">I Had A Big Lunch. What Should I Eat Tonight?</p>
          </article>
          <article className="rounded-3xl bg-brand-deep text-white p-5 sm:p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-leaf">Example answer</p>
            <p className="mt-3 leading-relaxed">
              Go lighter tonight and build your plate around protein and vegetables. Log it, then check how your day adds up.
            </p>
            <p className="mt-4 text-xs text-brand-soft">Example only. Coach replies are general tips, not medical advice.</p>
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
          <p className="text-xs font-bold uppercase tracking-widest text-brand-action">Who It's For</p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-brand-deep tracking-tight">Who Is The Calviora AI Calorie Counter App Made For?</h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">Calviora is built for how people actually eat, not just salads and smoothies.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {audiences.map((item) => {
            const Icon = item.Icon;
            return (
            <article
              key={item.title}
              className="rounded-3xl bg-white border border-slate-200 p-6"
            >
              <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${item.iconWrap}`}>
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-xl font-extrabold text-brand-deep">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.text}</p>
              <ul className="mt-4 space-y-1 text-sm font-semibold text-brand-action">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
