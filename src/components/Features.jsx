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

        {(() => {
          const [lead, ...rest] = features;
          const LeadIcon = lead.Icon;
          return (
            <>
              <a
                href={featurePath(lead.slug)}
                onClick={onSamePageClick}
                className="group mb-5 grid overflow-hidden rounded-[28px] border border-slate-200 bg-white hover:border-brand-action/40 hover:shadow-lg transition lg:grid-cols-2"
              >
                <div className="flex flex-col justify-center p-7 sm:p-10">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-md ${lead.icon}`}>
                      <LeadIcon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-brand-soft px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-deep">
                      {lead.badge}
                    </span>
                  </div>
                  <h3 className="mb-2 text-3xl font-extrabold text-brand-deep">{lead.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{lead.copy}</p>
                  <div className="mt-5 flex items-center justify-between gap-2 border-t border-slate-100 pt-4 text-xs">
                    <span className="font-semibold text-slate-500">{lead.footerLeft}</span>
                    <span className="font-bold text-brand-action">{lead.footerRight}</span>
                  </div>
                </div>
                <div className="relative min-h-[280px] bg-brand-deep">
                  <img
                    src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80"
                    alt="Chicken biryani on a plate"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/85 via-brand-deep/10 to-transparent"></div>
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 p-4 shadow-xl">
                    <p className="text-sm font-extrabold text-brand-deep">Chicken Biryani</p>
                    <p className="mt-1 text-xs font-semibold text-slate-500">540 kcal · Protein 28g · Carbs 62g · Fat 18g</p>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full w-[72%] rounded-full bg-brand-action"></div>
                    </div>
                  </div>
                </div>
              </a>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {rest.map((feature) => {
                  const Icon = feature.Icon;
                  return (
                    <a
                      key={feature.slug}
                      href={featurePath(feature.slug)}
                      onClick={onSamePageClick}
                      className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-action/40 hover:shadow-lg"
                    >
                      <div className="mb-5 flex items-center justify-between gap-3">
                        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-md ${feature.icon}`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="rounded-full bg-brand-soft px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-deep">
                          {feature.badge}
                        </span>
                      </div>
                      <h3 className="mb-2 text-xl font-extrabold text-brand-deep">{feature.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-600">{feature.copy}</p>
                      <div className="mt-5 flex items-center justify-between gap-2 border-t border-slate-100 pt-4 text-xs">
                        <span className="font-semibold text-slate-500">{feature.footerLeft}</span>
                        <span className="font-bold text-brand-action">{feature.footerRight}</span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </>
          );
        })()}

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
