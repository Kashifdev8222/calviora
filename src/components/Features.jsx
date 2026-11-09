import { Activity, BookOpen, Camera, Droplet, Sparkles, Zap } from 'lucide-react';
import { onSamePageClick } from '../lib/navigate.js';
import { featurePath } from '../data/topics.js';

const features = [
  {
    slug: 'ai-meal-scan',
    title: 'AI Meal Scan',
    badge: 'Instant Scan',
    copy: 'Snap a photo of your plate. Calviora estimates the portion, calories, and macros in seconds.',
    footerLeft: 'Auto-detect calories',
    footerRight: '3 free scans/day',
    Icon: Camera,
    icon: 'bg-gradient-to-br from-emerald-400 to-brand-action text-brand-dark shadow-emerald-500/20',
    badgeClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    card: 'hover:border-brand-leaf/50 hover:shadow-brand-action/20',
    titleHover: 'group-hover:text-brand-leaf',
    glow: 'bg-brand-leaf/10 group-hover:bg-brand-leaf/20',
    rightClass: 'text-brand-leaf',
  },
  {
    slug: 'meal-logging',
    title: 'Meal Logging',
    badge: 'Daily Diary',
    copy: 'Save breakfast, lunch, dinner, and snacks in one diary so your day stays easy to review.',
    footerLeft: 'Photo or manual log',
    footerRight: 'Macros included',
    Icon: BookOpen,
    icon: 'bg-gradient-to-br from-amber-400 to-orange-500 text-amber-950 shadow-amber-500/20',
    badgeClass: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    card: 'hover:border-amber-400/50 hover:shadow-amber-500/20',
    titleHover: 'group-hover:text-amber-300',
    glow: 'bg-amber-400/10 group-hover:bg-amber-400/20',
    rightClass: 'text-amber-300',
  },
  {
    slug: 'activity-tracker',
    title: 'Activity Tracker',
    badge: 'Move More',
    copy: 'Log steps and workouts so the calories you burn sit next to the calories you eat.',
    footerLeft: 'Steps and workouts',
    footerRight: 'Net calorie view',
    Icon: Activity,
    icon: 'bg-gradient-to-br from-sky-400 to-blue-600 text-white shadow-sky-500/20',
    badgeClass: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
    card: 'hover:border-sky-400/50 hover:shadow-sky-500/20',
    titleHover: 'group-hover:text-sky-300',
    glow: 'bg-sky-400/10 group-hover:bg-sky-400/20',
    rightClass: 'text-sky-300',
  },
  {
    slug: 'water-intake-tracker',
    title: 'Water Intake Tracker',
    badge: 'Stay Hydrated',
    copy: 'Tap to log glasses through the day and see how close you are to your hydration goal.',
    footerLeft: 'Daily water goal',
    footerRight: '2.5L example',
    Icon: Droplet,
    icon: 'bg-gradient-to-br from-cyan-400 to-sky-600 text-white shadow-cyan-500/20',
    badgeClass: 'bg-cyan-500/20 text-cyan-200 border-cyan-500/30',
    card: 'hover:border-cyan-300/50 hover:shadow-cyan-500/20',
    titleHover: 'group-hover:text-cyan-200',
    glow: 'bg-cyan-400/10 group-hover:bg-cyan-400/20',
    rightClass: 'text-cyan-200',
  },
  {
    slug: 'ai-nutrition-coach',
    title: 'AI Nutrition Coach',
    badge: 'Guidance',
    copy: 'Get plain-language coaching on portions, protein, and the next meal that fits your goal.',
    footerLeft: 'Goal-aware tips',
    footerRight: 'Ask anytime',
    Icon: Sparkles,
    icon: 'bg-gradient-to-br from-purple-400 to-indigo-600 text-white shadow-purple-500/20',
    badgeClass: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    card: 'hover:border-purple-400/50 hover:shadow-purple-500/20',
    titleHover: 'group-hover:text-purple-300',
    glow: 'bg-purple-400/10 group-hover:bg-purple-400/20',
    rightClass: 'text-purple-300',
  },
];

export default function Features() {
  return (
    <section id="features" className="scroll-mt-24 py-24 bg-gradient-to-b from-slate-900 via-brand-dark to-slate-900 text-white relative overflow-hidden">
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
            Scan meals, log food, track activity and water, and get coaching without juggling extra apps.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.Icon;
            return (
              <a
                key={feature.slug}
                href={featurePath(feature.slug)}
                onClick={onSamePageClick}
                className={`group relative bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between overflow-hidden ${feature.card}`}
              >
                <div className={`absolute -right-8 -top-8 w-24 h-24 rounded-full blur-xl transition ${feature.glow}`}></div>
                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-300 ${feature.icon}`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border ${feature.badgeClass}`}>
                      {feature.badge}
                    </span>
                  </div>
                  <h3 className={`text-xl font-bold text-white mb-2 transition ${feature.titleHover}`}>{feature.title}</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{feature.copy}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 bg-black/20 -mx-6 -mb-6 p-4 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="text-slate-200 font-semibold">{feature.footerLeft}</span>
                  <span className={`font-bold ${feature.rightClass}`}>{feature.footerRight}</span>
                </div>
              </a>
            );
          })}
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
            href="/#pricing"
            onClick={onSamePageClick}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-leaf text-brand-deep font-extrabold text-sm hover:bg-white transition text-center shadow-lg whitespace-nowrap"
          >
            Try 3 Free Scans Now
          </a>
        </div>
      </div>
    </section>
  );
}
