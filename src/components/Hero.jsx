'use client';

import { useEffect, useState } from 'react';
import { Droplet, QrCode } from 'lucide-react';
import StoreBadges from './StoreBadges.jsx';
import { RingSweep } from './RingSweep.jsx';

const sampleRings = [
  { label: 'Calories', value: '72%', pct: 72, color: '#087C50' },
  { label: 'Protein', value: '64%', pct: 64, color: '#f59e0b' },
  { label: 'Water', value: '80%', pct: 80, color: '#0284c7' },
];

function SampleRing({ label, value, pct, color }) {
  return (
    <div className="text-center">
      <RingSweep pct={pct} color={color} play instant className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-xs font-extrabold text-brand-deep">
          {value}
        </div>
      </RingSweep>
      <p className="mt-2 text-[11px] font-bold uppercase tracking-wide text-slate-500">{label}</p>
    </div>
  );
}

function PhoneMock() {
  return (
    <>
      <img
        src="/screenshots/hero-history.png"
        alt="Calviora History screen with today's meals, calories, and macros"
        width="512"
        height="1024"
        decoding="async"
        className="relative z-10 h-auto w-[210px] min-[420px]:w-[240px] sm:w-[270px] drop-shadow-2xl"
      />

      <div className="absolute top-0 right-0 xl:-top-6 xl:-right-4 bg-white p-3 sm:p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-20 max-w-[168px] sm:max-w-none">
        <div className="w-10 h-10 rounded-xl bg-brand-soft text-brand-action flex items-center justify-center font-bold">
          <QrCode className="w-5 h-5" />
        </div>
        <div>
          <div className="text-xs font-bold text-slate-800">Barcode Scanner</div>
          <div className="text-[10px] text-slate-500">Scan packaged items instantly</div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 xl:-bottom-6 xl:-left-4 bg-brand-deep text-white p-3 sm:p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 max-w-[168px] sm:max-w-none">
        <div className="w-10 h-10 rounded-xl bg-brand-leaf text-brand-deep flex items-center justify-center font-bold">
          <Droplet className="w-5 h-5" />
        </div>
        <div>
          <div className="text-xs font-bold text-brand-leaf">Water Tracker</div>
          <div className="text-[10px] text-slate-200">Goal: 2.5L Logged</div>
        </div>
      </div>
    </>
  );
}

export default function Hero() {
  const [showPhone, setShowPhone] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setShowPhone(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="relative overflow-hidden pt-12 pb-28 md:pt-20 md:pb-36">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 text-brand-action" aria-hidden="true">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="block h-16 w-full sm:h-24">
          <path fill="currentColor" d="M0,58 C280,8 520,8 760,42 C1000,76 1220,92 1440,36 L1440,90 L0,90 Z" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid xl:grid-cols-12 gap-12 items-center">
          <div className="xl:col-span-7 text-center xl:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-deep leading-[1.15]">
              AI Calorie Counter App For Every Plate You Eat
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto xl:mx-0 font-medium">
              Calviora is an AI calorie counter app that turns a photo of your meal, from a pasta bowl to avocado toast, into estimated calories and macros in seconds. Start free with 3 AI scans a day.
            </p>

            <StoreBadges className="mt-8 justify-center xl:justify-start" />
            <p className="mt-4 text-sm font-medium text-slate-500">Try the free plan first. Upgrade only if you need more scans.</p>

            <div className="mt-8 flex flex-wrap items-center justify-center xl:justify-start gap-2">
              {['3 Free Scans Every Day', 'Meals From Many Cuisines', 'Free Plan Available'].map((label) => (
                <div key={label} className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 shadow-sm">
                  <span className="text-xs font-bold text-brand-deep sm:text-sm">{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-[11px] font-bold uppercase tracking-widest text-slate-600">Sample day</p>
              <div className="mt-3 flex items-start justify-center gap-6 xl:justify-start">
                {sampleRings.map((ring) => (
                  <SampleRing key={ring.label} {...ring} />
                ))}
              </div>
            </div>
          </div>

          <div className="xl:col-span-5 relative mx-auto w-full max-w-[440px] xl:max-w-none flex justify-center py-6 xl:py-0">
            {showPhone ? <PhoneMock /> : <div className="aspect-[1/2] w-[250px] min-[420px]:w-72 sm:w-80" />}
          </div>
        </div>
      </div>
    </section>
  );
}
