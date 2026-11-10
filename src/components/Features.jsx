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
    <section id="features" className="scroll-mt-24 py-16 sm:py-20 bg-brand-cloud">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-action">Features</p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-brand-deep tracking-tight leading-tight">
            Everything you need for smart nutrition
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Scan meals, log food, track activity and water, and get coaching without juggling extra apps.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {features.map((feature) => {
            const Icon = feature.Icon;
            return (
              <a
                key={feature.slug}
                href={featurePath(feature.slug)}
                onClick={onSamePageClick}
                className="group bg-white p-6 rounded-3xl border border-slate-200 hover:border-brand-action/40 hover:-translate-y-1 hover:shadow-lg transition duration-300 flex flex-col"
              >
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className={`w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center shadow-md ${feature.icon}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-soft text-brand-deep">
                    {feature.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-brand-deep mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.copy}</p>
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-2 text-xs">
                  <span className="font-semibold text-slate-500">{feature.footerLeft}</span>
                  <span className="font-bold text-brand-action">{feature.footerRight}</span>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-brand-deep text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-brand-leaf text-brand-deep flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold">No credit card required to start</h4>
              <p className="text-sm text-brand-soft mt-0.5">Try the app with 3 free AI food scans every day.</p>
            </div>
          </div>
          <a
            href="/#pricing"
            onClick={onSamePageClick}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-brand-leaf text-brand-deep font-extrabold text-sm hover:bg-white transition text-center whitespace-nowrap"
          >
            Try 3 free scans
          </a>
        </div>
      </div>
    </section>
  );
}
