import { Activity, Camera, CheckCircle2, Flame, Footprints, Sparkles, Timer, Utensils, Zap } from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-slate-900 via-brand-dark to-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-action/20 rounded-full filter blur-[128px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-leaf/10 rounded-full filter blur-[128px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-action/20 border border-brand-leaf/30 text-brand-leaf font-bold text-xs uppercase tracking-widest mb-4">
            <Sparkles className="w-4 h-4" /> Powerful All-In-One Suite
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Everything you need for smart nutrition & lifestyle
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg font-medium">
            Say goodbye to multiple cluttery apps. Calviora combines smart visual logging, intermittent fasting, and regional nutrition into one seamless hub.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group relative bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 hover:border-brand-leaf/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-action/20 flex flex-col justify-between overflow-hidden">
            <div className="absolute -right-8 -top-8 w-24 h-24 bg-brand-leaf/10 rounded-full blur-xl group-hover:bg-brand-leaf/20 transition"></div>
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-brand-action text-brand-dark flex items-center justify-center font-extrabold shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition duration-300">
                  <Camera className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Instant Scan
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-leaf transition">AI Visual Food Scan</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Snap any plate or snack. Our AI instantly measures portion sizes and breaks down calories and macros with 98% accuracy.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 bg-black/20 -mx-6 -mb-6 p-4 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-slate-200 font-semibold">
                <span className="w-2 h-2 rounded-full bg-brand-leaf animate-ping"></span>
                <span>Auto-Detect Calories</span>
              </div>
              <span className="text-brand-leaf font-extrabold">98% Match</span>
            </div>
          </div>

          <div className="group relative bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 hover:border-sky-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/20 flex flex-col justify-between overflow-hidden">
            <div className="absolute -right-8 -top-8 w-24 h-24 bg-sky-400/10 rounded-full blur-xl group-hover:bg-sky-400/20 transition"></div>
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 text-white flex items-center justify-center font-extrabold shadow-lg shadow-sky-500/20 group-hover:scale-110 transition duration-300">
                  <Timer className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30">
                  Custom Timers
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition">Smart Fasting Tracker</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Flexible fasting modes (16:8, 14:10, 5:2) with real-time biological stage alerts (Ketosis, Fat Burning, Autophagy).
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 bg-black/20 -mx-6 -mb-6 p-4 flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5 text-sky-300 font-bold">
                <Flame className="w-3.5 h-3.5 fill-current" />
                <span>Fat Burning Mode</span>
              </div>
              <span className="text-white font-mono font-bold">14h : 22m</span>
            </div>
          </div>

          <div className="group relative bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/20 flex flex-col justify-between overflow-hidden">
            <div className="absolute -right-8 -top-8 w-24 h-24 bg-amber-400/10 rounded-full blur-xl group-hover:bg-amber-400/20 transition"></div>
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-amber-950 flex items-center justify-center font-extrabold shadow-lg shadow-amber-500/20 group-hover:scale-110 transition duration-300">
                  <Utensils className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  18,500+ Dishes
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition">Desi & Global Library</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Full support for complex South Asian and global homemade dishes (Biryani, Nihari, Daal, Roti) with authentic oil & spice factors.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 bg-black/20 -mx-6 -mb-6 p-4 flex items-center justify-between text-xs">
              <span className="text-slate-300 font-medium">Verified Portion Metrics</span>
              <span className="text-amber-300 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Custom Recipes
              </span>
            </div>
          </div>

          <div className="group relative bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 flex flex-col justify-between overflow-hidden">
            <div className="absolute -right-8 -top-8 w-24 h-24 bg-purple-400/10 rounded-full blur-xl group-hover:bg-purple-400/20 transition"></div>
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-400 to-indigo-600 text-white flex items-center justify-center font-extrabold shadow-lg shadow-purple-500/20 group-hover:scale-110 transition duration-300">
                  <Activity className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  Auto Sync
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition">Hydration & Activity Sync</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Sync your daily steps, active workout calories, and hydration logs in one place to maintain an accurate net burn rate.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 bg-black/20 -mx-6 -mb-6 p-4 flex items-center justify-between text-xs">
              <div className="flex items-center gap-1 text-purple-300 font-semibold">
                <Footprints className="w-3.5 h-3.5" /> 8,420 Steps
              </div>
              <span className="text-emerald-400 font-bold">+2.2L Water</span>
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-brand-action/30 via-white/10 to-brand-deep border border-brand-leaf/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-brand-leaf text-brand-deep flex items-center justify-center font-black flex-shrink-0 mx-auto sm:mx-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">No credit card required to start</h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Test all premium features with 3 free AI food scans every single day.
              </p>
            </div>
          </div>
          <a
            href="#pricing"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-leaf text-brand-deep font-extrabold text-sm hover:bg-white transition text-center shadow-lg whitespace-nowrap"
          >
            Try 3 Free Scans Now
          </a>
        </div>
      </div>
    </section>
  );
}
