import { ArrowRight } from 'lucide-react';
import Download from './Download.jsx';
import Questions from './Questions.jsx';
import { onSamePageClick } from '../lib/navigate.js';

const bars = [
  ['Calories', '72%', 'bg-brand-action'],
  ['Protein', '64%', 'bg-amber-400'],
  ['Carbs', '48%', 'bg-sky-400'],
  ['Fat', '30%', 'bg-rose-400'],
];

function TopicVisual({ topic }) {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-brand-leaf/70 blur-2xl"></div>
      <div className="absolute -right-6 bottom-6 h-32 w-32 rounded-full bg-brand-action/25 blur-2xl"></div>
      <div className="relative rounded-[32px] border border-slate-200 bg-white p-5 shadow-xl">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Sample day</p>
            <p className="mt-1 font-extrabold text-brand-deep">{topic.title}</p>
          </div>
          <div className="flex h-16 w-16 items-center justify-center rounded-full border-[6px] border-brand-soft border-r-brand-leaf border-t-brand-action text-xs font-extrabold text-brand-deep">
            72%
          </div>
        </div>
        <div className="mt-5 space-y-3">
          {bars.map(([label, width, color]) => (
            <div key={label}>
              <div className="mb-1 flex justify-between text-xs font-bold text-slate-500">
                <span>{label}</span>
                <span>{width}</span>
              </div>
              <div className="h-2 rounded-full bg-slate-100">
                <div className={`h-full rounded-full ${color}`} style={{ width }}></div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-5 rounded-2xl bg-brand-cloud px-3 py-3 text-sm font-semibold text-brand-deep">{topic.kicker}</p>
      </div>
    </div>
  );
}

export default function TopicPage({ topic }) {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="pointer-events-none absolute -left-10 top-8 h-40 w-40 rounded-full bg-brand-leaf/40 blur-3xl"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-12 sm:pt-16 grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <p className="inline-flex rounded-full bg-brand-soft px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-action">
              {topic.kicker || topic.group}
            </p>
            <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold text-brand-deep tracking-tight">{topic.title}</h1>
            <p className="mt-5 text-base sm:text-xl text-slate-600 leading-relaxed">{topic.summary}</p>
            <a
              href="/#download"
              onClick={onSamePageClick}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-deep px-7 py-3.5 text-sm font-extrabold text-white hover:bg-brand-action"
            >
              Get started free <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <TopicVisual topic={topic} />
        </div>
      </section>

      <section id="highlights" className="scroll-mt-24 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-deep">What you get</h2>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {topic.points.map((point, index) => (
              <article key={point.title} className="bg-white rounded-3xl border border-slate-200 p-6">
                <div className="w-9 h-9 rounded-full bg-brand-deep text-brand-leaf font-extrabold flex items-center justify-center">
                  {index + 1}
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-brand-deep">{point.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{point.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="guide" className="scroll-mt-24 pb-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-deep">How to use it</h2>
          {topic.sections.map((section) => (
            <article key={section.heading} className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8">
              <h3 className="text-2xl font-extrabold text-brand-deep">{section.heading}</h3>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-slate-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </article>
          ))}
        </div>
      </section>

      <section id="questions" className="scroll-mt-24 pb-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-deep">Questions</h2>
          <div className="mt-4">
            <Questions items={topic.faqs} />
          </div>
        </div>
      </section>

      <section id="related" className="scroll-mt-24 pb-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-deep">Keep going</h2>
          <div className="mt-4 grid sm:grid-cols-3 gap-3">
            {topic.related.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={onSamePageClick}
                className="flex items-center justify-between gap-3 rounded-2xl bg-white border border-slate-200 px-4 py-4 text-sm font-bold text-brand-deep hover:border-brand-action"
              >
                {item.label} <ArrowRight className="w-4 h-4 shrink-0 text-brand-action" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <Download />
    </main>
  );
}
