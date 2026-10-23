import { Camera, Droplet } from 'lucide-react';

export default function AppPreview() {
  return (
    <section id="app-preview" className="scroll-mt-24 py-20 bg-brand-cloud border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-brand-action uppercase tracking-widest bg-brand-soft px-3 py-1 rounded-full">
            Designed for simplicity
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-deep mt-3">See how Calviora fits your daily routine</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 pb-6">
          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-md flex flex-col items-center text-center">
            <div className="w-full bg-slate-900 rounded-2xl p-3 text-white mb-4">
              <div className="w-12 h-12 rounded-full bg-brand-action mx-auto flex items-center justify-center font-bold text-brand-leaf text-lg mb-2">
                75%
              </div>
              <div className="text-xs font-bold">Calculating Plan...</div>
            </div>
            <h4 className="font-bold text-brand-deep text-base">1. Personalized Plan</h4>
            <p className="text-xs text-slate-500 mt-1">AI creates your customized calorie & macro budget instantly.</p>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-md flex flex-col items-center text-center">
            <div className="w-full bg-slate-900 rounded-2xl p-3 text-white mb-4 relative overflow-hidden h-36 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80"
                alt=""
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="relative z-10 w-10 h-10 rounded-full bg-brand-leaf text-brand-deep flex items-center justify-center shadow-lg">
                <Camera className="w-5 h-5" />
              </div>
            </div>
            <h4 className="font-bold text-brand-deep text-base">2. Photo AI Scan</h4>
            <p className="text-xs text-slate-500 mt-1">Point camera at your meal. AI detects food and portions.</p>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-md flex flex-col items-center text-center">
            <div className="w-full bg-slate-900 rounded-2xl p-3 text-white mb-4">
              <div className="text-xs text-slate-400">Remaining Today</div>
              <div className="text-2xl font-extrabold text-brand-leaf my-1">868 kcal</div>
              <div className="flex justify-between text-[10px] text-slate-300">
                <span>Carbs: 97g</span>
                <span>Protein: 46g</span>
              </div>
            </div>
            <h4 className="font-bold text-brand-deep text-base">3. Daily Dashboard</h4>
            <p className="text-xs text-slate-500 mt-1">See your remaining calories and nutrients live.</p>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-md flex flex-col items-center text-center">
            <div className="w-full bg-slate-900 rounded-2xl p-3 text-white mb-4">
              <div className="text-xs text-slate-400">Water Log</div>
              <div className="text-lg font-bold text-sky-400 my-1">72 fl oz</div>
              <div className="flex justify-center gap-1 text-sky-400 text-xs">
                <Droplet className="w-3 h-3 fill-current" />
                <Droplet className="w-3 h-3 fill-current" />
                <Droplet className="w-3 h-3 fill-current" />
              </div>
            </div>
            <h4 className="font-bold text-brand-deep text-base">4. Habit Tracking</h4>
            <p className="text-xs text-slate-500 mt-1">Log water, weight check-ins & activity seamlessly.</p>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-md flex flex-col items-center text-center">
            <div className="w-full bg-slate-900 rounded-2xl p-3 text-white mb-4">
              <div className="w-10 h-10 mx-auto rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold mb-1">
                🔥 3
              </div>
              <div className="text-xs font-bold text-amber-300">Streak Achieved!</div>
            </div>
            <h4 className="font-bold text-brand-deep text-base">5. Streaks & Progress</h4>
            <p className="text-xs text-slate-500 mt-1">Build daily consistency with habit milestone awards.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
