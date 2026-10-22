import { CheckCircle, Droplet, PlayCircle, QrCode, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-soft text-brand-deep font-semibold text-xs sm:text-sm mb-6 border border-brand-action/20">
              <span className="flex h-2 w-2 rounded-full bg-brand-leaf animate-pulse"></span>
              AI Food Scan & South Asian Dish Recognition
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-deep leading-[1.15]">
              Eat Smart. Track Easy. <br className="hidden sm:block" />
              <span className="text-brand-action underline decoration-brand-leaf decoration-wavy decoration-2">
                Live Better.
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-medium">
              Snap a photo of your plate—whether it's Biryani, Avocado Toast, or a homemade curry—and let Calviora AI
              calculate your calories, macros & nutrition in seconds.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#pricing"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-brand-action text-white font-extrabold text-base hover:bg-brand-deep transition shadow-xl shadow-brand-action/25 flex items-center justify-center gap-3"
              >
                <Sparkles className="w-5 h-5 text-brand-leaf" />
                Start Free Trial (3 Free Scans/Day)
              </a>
              <a
                href="#app-preview"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white border border-slate-200 text-slate-700 font-bold text-base hover:border-brand-action transition flex items-center justify-center gap-2"
              >
                <PlayCircle className="w-5 h-5 text-brand-action" />
                See How It Works
              </a>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-8">
              <div>
                <div className="text-2xl font-extrabold text-brand-deep">18,500+</div>
                <div className="text-xs text-slate-500 font-medium">Foods & Desi Dishes Recognized</div>
              </div>
              <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
              <div>
                <div className="text-2xl font-extrabold text-brand-deep">98%</div>
                <div className="text-xs text-slate-500 font-medium">Calorie AI Accuracy</div>
              </div>
              <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
              <div>
                <div className="text-2xl font-extrabold text-brand-deep">Zero</div>
                <div className="text-xs text-slate-500 font-medium">Manual Search Hassle</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center relative">
            <div className="w-72 sm:w-80 h-[560px] bg-slate-900 rounded-[48px] p-4 shadow-2xl border-4 border-slate-800 relative z-10 flex flex-col justify-between overflow-hidden">
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

            <div className="absolute -top-6 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-20">
              <div className="w-10 h-10 rounded-xl bg-brand-soft text-brand-action flex items-center justify-center font-bold">
                <QrCode className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800">Barcode Scanner</div>
                <div className="text-[10px] text-slate-500">Scan packaged items instantly</div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-4 bg-brand-deep text-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3">
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
