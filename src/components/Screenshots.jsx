import { useRef } from 'react';
import {
  ArrowLeft,
  BookOpen,
  Camera,
  ChevronLeft,
  ChevronRight,
  Droplet,
  Flame,
  Footprints,
  Gem,
  HelpCircle,
  Image,
  Plus,
  Smartphone,
  Sparkles,
  Timer,
  User,
  Utensils,
  Zap,
} from 'lucide-react';

export default function Screenshots() {
  const containerRef = useRef(null);

  const scrollScreens = (direction) => {
    containerRef.current?.scrollBy({
      left: direction * 300,
      behavior: 'smooth',
    });
  };

  return (
    <section id="app-screenshots" className="scroll-mt-24 py-16 bg-gradient-to-b from-brand-cloud via-white to-brand-cloud overflow-hidden border-y border-brand-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-soft text-brand-action font-bold text-xs uppercase tracking-wider mb-3">
            <Smartphone className="w-4 h-4" /> Calviora Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-deep tracking-tight">
            Designed to make healthy eating effortless
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg font-medium">
            Take a look inside Calviora — from instant AI food scans to streak achievements.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto group">
          <button
            id="scrollLeftBtn"
            type="button"
            aria-label="Scroll Left"
            onClick={() => scrollScreens(-1)}
            className="absolute left-0 sm:left-1 xl:-left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-brand-deep border-2 border-brand-action/20 shadow-xl flex items-center justify-center hover:bg-brand-action hover:text-white hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          <button
            id="scrollRightBtn"
            type="button"
            aria-label="Scroll Right"
            onClick={() => scrollScreens(1)}
            className="absolute right-0 sm:right-1 xl:-right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-brand-deep border-2 border-brand-action/20 shadow-xl flex items-center justify-center hover:bg-brand-action hover:text-white hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>

          <div
            id="screenshotsContainer"
            ref={containerRef}
            className="flex items-center gap-4 sm:gap-6 overflow-x-auto scroll-smooth py-6 px-4 hide-scrollbar"
          >
            <div className="w-64 sm:w-72 flex-shrink-0 bg-white rounded-[36px] p-3 shadow-xl border-4 border-slate-900 transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-slate-50 rounded-[28px] p-5 h-[480px] flex flex-col justify-between border border-slate-200">
                <div className="text-center pt-6">
                  <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-slate-200"
                        strokeWidth="3"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-brand-action"
                        strokeDasharray="75, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute text-2xl font-black text-slate-900">75%</span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 mt-6 leading-tight">We're creating your plan...</h3>
                </div>

                <div className="space-y-3 px-2 mb-6 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-brand-action text-white flex items-center justify-center text-[10px]">✓</div>
                    <span>Analyzing your answers</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-brand-action text-white flex items-center justify-center text-[10px]">✓</div>
                    <span>Calculating your calorie goal</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-brand-action text-white flex items-center justify-center text-[10px]">✓</div>
                    <span>Predicting your progress</span>
                  </div>
                  <div className="flex items-center gap-2.5 opacity-40">
                    <div className="w-5 h-5 rounded-full border border-slate-400"></div>
                    <span>Adding finishing touches</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-64 sm:w-72 flex-shrink-0 bg-white rounded-[36px] p-3 shadow-xl border-4 border-slate-900 transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-slate-950 text-white rounded-[28px] p-4 h-[480px] flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-center justify-between text-slate-300 text-xs font-bold pt-1">
                  <ArrowLeft className="w-5 h-5" />
                  <span className="text-sm font-black tracking-wider text-white">Calviora</span>
                  <HelpCircle className="w-5 h-5" />
                </div>

                <div className="relative my-auto w-full h-56 rounded-2xl overflow-hidden border-2 border-white/20 shadow-inner">
                  <img
                    src="https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80"
                    alt="Croissant & Coffee"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-4 border-2 border-dashed border-brand-leaf/80 rounded-xl pointer-events-none"></div>
                  <div className="absolute bottom-2 left-0 right-0 text-center px-3">
                    <span className="bg-black/60 backdrop-blur-md text-[10px] font-medium text-white px-3 py-1 rounded-full border border-white/10">
                      Make sure your meal is well lit
                    </span>
                  </div>
                </div>

                <div className="pb-2">
                  <div className="flex items-center justify-around mb-4">
                    <button type="button" className="flex flex-col items-center gap-1 text-[10px] text-slate-400 hover:text-white">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                        <Image className="w-4 h-4" />
                      </div>
                      <span>Gallery</span>
                    </button>

                    <button
                      type="button"
                      className="w-14 h-14 rounded-full bg-brand-action text-brand-leaf flex items-center justify-center shadow-lg shadow-brand-action/50 border-2 border-white"
                    >
                      <Camera className="w-7 h-7" />
                    </button>

                    <button type="button" className="flex flex-col items-center gap-1 text-[10px] text-slate-400 hover:text-white">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                        <Zap className="w-4 h-4" />
                      </div>
                      <span>Flash</span>
                    </button>
                  </div>

                  <div className="flex justify-center gap-6 text-[11px] font-bold text-slate-400 border-t border-white/10 pt-2">
                    <span className="text-brand-leaf flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> AI Camera
                    </span>
                    <span>Search</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-64 sm:w-72 flex-shrink-0 bg-white rounded-[36px] p-3 shadow-xl border-4 border-slate-900 transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-slate-50 rounded-[28px] p-4 h-[480px] flex flex-col justify-between border border-slate-200">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xl font-black text-slate-900">Today</span>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                      <span className="flex items-center gap-1 text-sky-600">
                        <Gem className="w-3.5 h-3.5" /> 2000
                      </span>
                      <span className="flex items-center gap-1 text-orange-500">
                        <Flame className="w-3.5 h-3.5 fill-current" /> 135
                      </span>
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-400 font-bold mb-3">Week 175</div>

                  <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm text-center mb-3">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Summary</div>
                    <div className="relative w-24 h-24 mx-auto flex flex-col items-center justify-center">
                      <div className="text-xl font-black text-slate-900 leading-none">868</div>
                      <div className="text-[10px] text-slate-500 font-bold">Remaining</div>
                    </div>

                    <div className="grid grid-cols-3 gap-1 pt-2 border-t border-slate-100 text-[10px] font-semibold text-slate-600">
                      <div>
                        <span className="block text-slate-400">Eaten</span>1,020
                      </div>
                      <div>
                        <span className="block text-slate-400">Protein</span>46g
                      </div>
                      <div>
                        <span className="block text-slate-400">Burned</span>142
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-bold text-slate-800">
                      <span>Nutrition</span>
                      <span className="text-brand-action text-[10px]">More</span>
                    </div>

                    <div className="bg-white p-2.5 rounded-xl border border-slate-200 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs">🍳</div>
                        <div>
                          <div className="text-xs font-bold text-slate-800">Breakfast</div>
                          <div className="text-[10px] text-slate-500">466 / 566 Cal</div>
                        </div>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs">+</div>
                    </div>

                    <div className="bg-white p-2.5 rounded-xl border border-slate-200 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">🥗</div>
                        <div>
                          <div className="text-xs font-bold text-slate-800">Lunch</div>
                          <div className="text-[10px] text-slate-500">554 / 755 Cal</div>
                        </div>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs">+</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-around pt-2 border-t border-slate-200 text-[9px] font-bold text-slate-400">
                  <span className="text-brand-action flex flex-col items-center">
                    <BookOpen className="w-4 h-4" /> Diary
                  </span>
                  <span className="flex flex-col items-center">
                    <Utensils className="w-4 h-4" /> Recipes
                  </span>
                  <span className="flex flex-col items-center">
                    <Timer className="w-4 h-4" /> Fasting
                  </span>
                  <span className="flex flex-col items-center">
                    <User className="w-4 h-4" /> Profile
                  </span>
                </div>
              </div>
            </div>

            <div className="w-64 sm:w-72 flex-shrink-0 bg-white rounded-[36px] p-3 shadow-xl border-4 border-slate-900 transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-slate-50 rounded-[28px] p-4 h-[480px] flex flex-col justify-between border border-slate-200">
                <div>
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-4">
                    <div className="text-xs font-extrabold text-slate-900 mb-2">Water Tracker</div>
                    <div className="text-center py-2">
                      <div className="text-[10px] text-slate-400 font-bold uppercase">Goal: 74 fl oz</div>
                      <div className="text-2xl font-black text-sky-600 mt-0.5">72 fl oz</div>
                    </div>

                    <div className="grid grid-cols-4 gap-2 my-2">
                      <div className="h-7 bg-sky-100 text-sky-600 rounded-lg flex items-center justify-center">
                        <Droplet className="w-4 h-4 fill-current" />
                      </div>
                      <div className="h-7 bg-sky-100 text-sky-600 rounded-lg flex items-center justify-center">
                        <Droplet className="w-4 h-4 fill-current" />
                      </div>
                      <div className="h-7 bg-sky-100 text-sky-600 rounded-lg flex items-center justify-center">
                        <Droplet className="w-4 h-4 fill-current" />
                      </div>
                      <div className="h-7 bg-sky-500 text-white rounded-lg flex items-center justify-center font-bold text-xs">
                        <Plus className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="text-[9px] text-center text-slate-400 font-semibold">+ Water from food: 0.0 fl oz</div>
                  </div>

                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-extrabold text-slate-900">Activities</span>
                      <span className="text-[10px] text-brand-action font-bold">More</span>
                    </div>

                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center">
                          <Footprints className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-800">Steps</div>
                          <div className="text-[10px] text-slate-400">Automatic Tracking</div>
                        </div>
                      </div>
                      <button type="button" className="px-3 py-1 bg-slate-900 text-white text-[10px] font-bold rounded-lg">
                        Connect
                      </button>
                    </div>

                    <button type="button" className="w-full mt-2 py-1.5 text-center text-[10px] font-bold text-brand-action">
                      Track steps manually
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-slate-200">
                  <div className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center font-bold text-slate-600 text-xs">+</div>
                  <div className="text-[10px] font-bold text-slate-500 flex items-center gap-1">🏃 361 Cal</div>
                </div>
              </div>
            </div>

            <div className="w-64 sm:w-72 flex-shrink-0 bg-white rounded-[36px] p-3 shadow-xl border-4 border-slate-900 transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-slate-50 rounded-[28px] p-5 h-[480px] flex flex-col justify-between border border-slate-200 text-center">
                <div className="pt-6">
                  <div className="relative w-24 h-24 mx-auto mb-2 flex items-center justify-center">
                    <div className="absolute inset-0 bg-orange-400/20 rounded-full blur-xl animate-pulse"></div>
                    <div className="text-6xl relative z-10">🔥</div>
                  </div>

                  <div className="text-4xl font-black text-slate-900">3</div>
                  <div className="text-lg font-extrabold text-slate-800 tracking-tight">Day Milestone</div>

                  <div className="grid grid-cols-7 gap-1 mt-6 bg-white p-2 rounded-xl border border-slate-200 text-[10px] font-bold text-slate-600">
                    <div>
                      Mo<span className="block text-brand-action font-black">✓</span>
                    </div>
                    <div>
                      Tu<span className="block text-brand-action font-black">✓</span>
                    </div>
                    <div>
                      We<span className="block text-brand-action font-black">✓</span>
                    </div>
                    <div className="opacity-40">Th</div>
                    <div className="opacity-40">Fr</div>
                    <div className="opacity-40">Sa</div>
                    <div className="opacity-40">Su</div>
                  </div>

                  <p className="text-xs text-slate-600 font-medium mt-4 px-2">Amazing! Now, let's go for the 7-day milestone.</p>
                </div>

                <div>
                  <button type="button" className="text-xs font-bold text-brand-action block mb-3 w-full">
                    Share My Milestone
                  </button>
                  <button
                    type="button"
                    className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-xs shadow-md hover:bg-brand-deep transition"
                  >
                    I'm committed
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
