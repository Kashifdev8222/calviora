import { Check } from 'lucide-react';

const styles = {
  free: {
    card: 'bg-brand-cloud rounded-3xl p-6 border border-slate-200 flex flex-col justify-between',
    kicker: 'text-xs font-bold text-slate-500 uppercase tracking-wider',
    price: 'text-3xl font-extrabold text-brand-deep mt-2',
    period: 'text-xs font-normal text-slate-500',
    description: 'text-slate-600 text-xs mt-2',
    list: 'mt-6 space-y-3 text-xs text-slate-700 font-medium',
    icon: 'w-4 h-4 text-brand-action',
    cta: 'mt-8 w-full py-3 rounded-xl bg-white border border-brand-action text-brand-action font-bold text-xs text-center hover:bg-brand-soft transition',
  },
  monthly: {
    card: 'bg-white rounded-3xl p-6 border border-slate-200 shadow-lg flex flex-col justify-between',
    kicker: 'text-xs font-bold text-brand-action uppercase tracking-wider',
    price: 'text-3xl font-extrabold text-brand-deep mt-2',
    period: 'text-xs font-normal text-slate-500',
    description: 'text-slate-600 text-xs mt-2',
    list: 'mt-6 space-y-3 text-xs text-slate-700 font-medium',
    icon: 'w-4 h-4 text-brand-action',
    cta: 'mt-8 w-full py-3 rounded-xl bg-brand-action text-white font-bold text-xs text-center hover:bg-brand-deep transition',
  },
  quarterly: {
    card: 'bg-brand-deep text-white rounded-3xl p-6 shadow-2xl relative flex flex-col justify-between border-2 border-brand-leaf',
    kicker: 'text-xs font-bold text-brand-leaf uppercase tracking-wider',
    price: 'text-3xl font-extrabold text-white mt-2',
    period: 'text-xs font-normal text-slate-300',
    description: 'text-slate-200 text-xs mt-2',
    list: 'mt-6 space-y-3 text-xs text-slate-200 font-medium',
    icon: 'w-4 h-4 text-brand-leaf',
    cta: 'mt-8 w-full py-3 rounded-xl bg-brand-leaf text-brand-deep font-extrabold text-xs text-center hover:bg-white transition shadow-lg',
  },
  annual: {
    card: 'bg-white rounded-3xl p-6 border border-slate-200 shadow-lg flex flex-col justify-between',
    kicker: 'text-xs font-bold text-brand-action uppercase tracking-wider',
    price: 'text-3xl font-extrabold text-brand-deep mt-2',
    period: 'text-xs font-normal text-slate-500',
    description: 'text-slate-600 text-xs mt-2',
    list: 'mt-6 space-y-3 text-xs text-slate-700 font-medium',
    icon: 'w-4 h-4 text-brand-action',
    cta: 'mt-8 w-full py-3 rounded-xl bg-slate-900 text-white font-bold text-xs text-center hover:bg-brand-deep transition',
  },
};

export default function Pricing({ plans }) {
  return (
    <section id="pricing" className="scroll-mt-24 py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-action uppercase tracking-widest bg-brand-soft px-3 py-1 rounded-full">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-deep mt-3">Simple plans for every budget</h2>
          <p className="mt-4 text-slate-600 text-base">
            Start with 3 free AI scans daily or unlock higher volume for continuous tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch pt-3">
          {plans.map((plan) => {
            const style = styles[plan.variant] || styles.monthly;
            return (
              <div key={plan.id || plan.variant || plan.name} className={style.card}>
                {plan.badge ? (
                  <div className="absolute -top-3 right-4 bg-brand-leaf text-brand-deep px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wide">
                    {plan.badge}
                  </div>
                ) : null}
                <div>
                  <div className={style.kicker}>{plan.name}</div>
                  <div className={style.price}>
                    {plan.price} <span className={style.period}>{plan.period}</span>
                  </div>
                  <p className={style.description}>{plan.description}</p>
                  <ul className={style.list}>
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className={style.icon} /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href={plan.href || '#download'} className={style.cta}>
                  {plan.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
