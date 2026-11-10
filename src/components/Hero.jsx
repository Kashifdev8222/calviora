import { CheckCircle, Droplet, PlayCircle, QrCode, Sparkles } from 'lucide-react';

const sampleRings = [
  { label: 'Calories', value: '72%', turn: 259, color: '#087C50' },
  { label: 'Protein', value: '64%', turn: 230, color: '#f59e0b' },
  { label: 'Water', value: '80%', turn: 288, color: '#0284c7' },
];

function SampleRing({ label, value, turn, color }) {
  return (
    <div className="text-center">
      <div
        className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full"
        style={{ background: `conic-gradient(${color} ${turn}deg, #E6F3EA 0deg)` }}
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-xs font-extrabold text-brand-deep">
          {value}
        </div>
      </div>
      <p className="mt-2 text-[11px] font-bold uppercase tracking-wide text-slate-500">{label}</p>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-28 md:pt-20 md:pb-36">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>
      <div className="pointer-events-none absolute -left-16 top-10 h-56 w-56 rounded-full bg-brand-leaf/50 blur-3xl"></div>
      <div className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-brand-action/20 blur-3xl"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 text-brand-action" aria-hidden="true">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="block h-16 w-full sm:h-24">
          <path fill="currentColor" d="M0,58 C280,8 520,8 760,42 C1000,76 1220,92 1440,36 L1440,90 L0,90 Z" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid xl:grid-cols-12 gap-12 items-center">
          <div className="xl:col-span-7 text-center xl:text-left">
            <div className="inline-flex max-w-full items-center justify-center gap-2 px-4 py-2 rounded-full bg-brand-soft text-brand-deep font-semibold text-xs sm:text-sm mb-6 border border-brand-action/20 text-left">
              <span className="flex h-2 w-2 shrink-0 rounded-full bg-brand-leaf animate-pulse"></span>
              <span>AI Food Scan & South Asian Dish Recognition</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-deep leading-[1.15]">
              Eat Smart. Track Easy. <br className="hidden sm:block" />
              <span className="text-brand-action underline decoration-brand-leaf decoration-wavy decoration-2">
                Live Better.
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto xl:mx-0 font-medium">
              Snap a photo of your plate—whether it's Biryani, Avocado Toast, or a homemade curry—and let Calviora AI
              calculate your calories, macros & nutrition in seconds.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-3">
              <a
                href="#download"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-brand-deep text-white font-extrabold text-sm sm:text-base hover:bg-brand-action transition shadow-xl shadow-brand-deep/20 flex items-center justify-center gap-2 text-center"
              >
                <Sparkles className="w-5 h-5 text-brand-leaf" />
                Get started free
              </a>
              <a
                href="#app-preview"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white border border-slate-200 text-slate-700 font-bold text-sm sm:text-base hover:border-brand-action transition flex items-center justify-center gap-2"
              >
                <PlayCircle className="w-5 h-5 text-brand-action" />
                See how it works
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center xl:justify-start gap-2">
              {[
                ['18,500+', 'Foods recognized'],
                ['98%', 'Estimate accuracy'],
                ['3 free', 'AI scans a day'],
              ].map(([value, label]) => (
                <div key={label} className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-3 py-1.5 shadow-sm">
                  <span className="text-sm font-extrabold text-brand-deep">{value}</span>
                  <span className="text-xs font-medium text-slate-500">{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Sample day</p>
              <div className="mt-3 flex items-start justify-center gap-6 xl:justify-start">
                {sampleRings.map((ring) => (
                  <SampleRing key={ring.label} {...ring} />
                ))}
              </div>
            </div>
          </div>

          <div className="xl:col-span-5 relative mx-auto w-full max-w-[440px] xl:max-w-none flex justify-center py-6 xl:py-0">
            <div className="w-[250px] min-[420px]:w-72 sm:w-80 h-[500px] sm:h-[560px] bg-slate-900 rounded-[48px] p-3 sm:p-4 shadow-2xl border-4 border-slate-800 relative z-10 flex flex-col justify-between overflow-hidden">
              <div className="w-32 h-5 bg-slate-800 rounded-full mx-auto mb-2"></div>

              <div className="bg-brand-cloud flex-1 rounded-[32px] p-4 flex flex-col justify-between overflow-hidden relative border border-slate-200">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Today</div>
                    <div className="text-sm font-bold text-brand-deep">Dashboard</div>
                  </div>
                  <span className="px-2 py-1 bg-brand-soft text-brand-action text-[10px] font-bold rounded-full">
                    3 Free Scans
                  </span>
                </div>

                <div className="my-auto relative rounded-2xl overflow-hidden border-2 border-brand-action shadow-lg group">
                  <img
                    src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
                    alt="Biryani Dish"
                    className="w-full h-44 object-cover"
                  />
                  <div className="absolute inset-0 bg-brand-deep/30 flex items-center justify-center">
                    <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl text-center shadow-lg border border-brand-action/20">
                      <div className="flex items-center gap-1.5 text-brand-action text-xs font-extrabold">
                        <CheckCircle className="w-4 h-4" /> Chicken Biryani
                      </div>
                      <div className="text-slate-600 text-[11px] font-semibold mt-0.5">540 Cal | P: 28g | C: 62g | F: 18g</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                  <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                    <span>Daily Calorie Goal</span>
                    <span className="text-brand-action">1,420 / 1,960 kcal</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-brand-action h-full w-[72%] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

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
          </div>
        </div>
      </div>
    </section>
  );
}
