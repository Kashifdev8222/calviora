'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Smartphone } from 'lucide-react';
import { useOnScreen } from './useOnScreen.js';

const shots = [
  { src: '/screenshots/daily-progress.jpeg', alt: 'Calviora home screen with calories eaten today', caption: "Today's Log: See your meals, calories and macros for the day." },
  { src: '/screenshots/ai-food-scan.jpeg', alt: 'Calviora quick add with AI Food Scan', caption: 'AI Food Scan: Point your camera at your plate and get an estimate.' },
  { src: '/screenshots/meal-times.jpeg', alt: 'Breakfast, lunch, and dinner times in Calviora', caption: 'Meal Reminders: Get a nudge around the times you usually eat.' },
  { src: '/screenshots/personal-plan.jpeg', alt: 'Calviora personal plan with daily energy and meal split', caption: 'Your Plan: See your daily calorie target and how it splits across meals.' },
  { src: '/screenshots/hydration.jpeg', alt: 'Calviora hydration screen', caption: 'Hydration' },
  { src: '/screenshots/activities.jpeg', alt: 'Calviora activity list', caption: 'Activities' },
  { src: '/screenshots/diet-type.jpeg', alt: 'Diet types in Calviora', caption: 'Diet type' },
  { src: '/screenshots/goals.jpeg', alt: 'Goal choices in Calviora', caption: 'Goals' },
  { src: '/screenshots/goal-lose-weight.jpeg', alt: 'Lose Weight selected in Calviora', caption: 'Lose Weight' },
  { src: '/screenshots/goal-gain-weight.jpeg', alt: 'Calviora target weight showing kilograms to gain', caption: 'Gain Weight' },
  { src: '/screenshots/bmi-summary.jpeg', alt: 'Calviora summary with height, weight, and BMI', caption: 'Your summary' },
];

export default function Screenshots() {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const showShots = useOnScreen(sectionRef);

  const scrollScreens = (direction) => {
    containerRef.current?.scrollBy({
      left: direction * 300,
      behavior: 'smooth',
    });
  };

  return (
    <section ref={sectionRef} id="app-screenshots" className="scroll-mt-24 overflow-hidden border-y border-brand-soft bg-gradient-to-b from-brand-cloud via-white to-brand-cloud py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-action">
            <Smartphone className="h-4 w-4" /> Calviora Experience
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl lg:text-5xl">
            See How Calviora Fits Into Your Day
          </h2>
          <p className="mt-3 text-base font-medium text-slate-600 sm:text-lg">
            From a quick food scan to your daily streak, here's a look inside the AI calorie counter app.
          </p>
        </div>

        <div className="relative mx-auto min-w-0 max-w-6xl">
          <button
            type="button"
            aria-label="Scroll Left"
            onClick={() => scrollScreens(-1)}
            className="absolute left-0 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-brand-action/20 bg-white text-brand-deep shadow-xl transition hover:bg-brand-action hover:text-white sm:left-1 sm:h-12 sm:w-12 xl:-left-6"
          >
            <ChevronLeft className="h-6 w-6 stroke-[2.5]" />
          </button>
          <button
            type="button"
            aria-label="Scroll Right"
            onClick={() => scrollScreens(1)}
            className="absolute right-0 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-brand-action/20 bg-white text-brand-deep shadow-xl transition hover:bg-brand-action hover:text-white sm:right-1 sm:h-12 sm:w-12 xl:-right-6"
          >
            <ChevronRight className="h-6 w-6 stroke-[2.5]" />
          </button>

          <div ref={containerRef} className="flex w-full min-w-0 gap-5 overflow-x-auto scroll-smooth px-12 py-6 hide-scrollbar">
            {shots.map((shot) => (
              <figure key={shot.src} className="w-[240px] shrink-0 sm:w-[280px]">
                {showShots ? (
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    width="576"
                    height="1280"
                    decoding="async"
                    className="w-full rounded-[28px] border border-slate-200 bg-white shadow-xl"
                  />
                ) : (
                  <div className="aspect-[576/1280] w-full rounded-[28px] border border-slate-200 bg-white shadow-xl" />
                )}
                <figcaption className="mt-3 text-center text-sm font-extrabold text-brand-deep">{shot.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
