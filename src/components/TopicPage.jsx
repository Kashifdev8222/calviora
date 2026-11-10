import { ArrowRight } from 'lucide-react';
import Download from './Download.jsx';
import Questions from './Questions.jsx';
import { onSamePageClick } from '../lib/navigate.js';

const jumps = [
  { href: '#highlights', label: 'Highlights' },
  { href: '#guide', label: 'Guide' },
  { href: '#questions', label: 'Questions' },
  { href: '#related', label: 'Related' },
];

export default function TopicPage({ topic }) {
  const crumb = topic.group === 'Goals' ? '/#goals' : '/#features';

  return (
    <main>
      <nav aria-label="On this page" className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-3 overflow-x-auto hide-scrollbar">
          <a href="/" onClick={onSamePageClick} className="shrink-0 text-sm font-semibold text-slate-500 hover:text-brand-action">Home</a>
          <span className="shrink-0 text-slate-300" aria-hidden="true">/</span>
          <a href={crumb} onClick={onSamePageClick} className="shrink-0 text-sm font-semibold text-slate-500 hover:text-brand-action">{topic.group}</a>
          <span className="shrink-0 text-slate-300" aria-hidden="true">/</span>
          <span className="shrink-0 text-sm font-semibold text-brand-deep">{topic.title}</span>
          <span className="shrink-0 text-slate-300" aria-hidden="true">›</span>
          {jumps.map((item) => (
            <a key={item.href} href={item.href} onClick={onSamePageClick} className="shrink-0 text-sm font-semibold text-brand-deep hover:text-brand-action">
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <section className="bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-14 pb-12 sm:pt-20 sm:pb-16 text-center">
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
