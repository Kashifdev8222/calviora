import { ArrowRight } from 'lucide-react';
import Download from './Download.jsx';
import { onSamePageClick } from '../lib/navigate.js';

export default function TopicPage({ topic }) {
  return (
    <main>
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-14 pb-12 sm:pt-20 sm:pb-16 text-center">
          <p className="inline-flex rounded-full bg-brand-soft px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-action">
            {topic.group}
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

      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid sm:grid-cols-3 gap-4">
          {topic.points.map((point, index) => (
            <article key={point.title} className="bg-white rounded-3xl border border-slate-200 p-6">
              <div className="w-9 h-9 rounded-full bg-brand-soft text-brand-deep font-extrabold flex items-center justify-center">
                {index + 1}
              </div>
              <h2 className="mt-4 text-lg font-extrabold text-brand-deep">{point.title}</h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{point.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
          {topic.sections.map((section) => (
            <article key={section.heading} className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8">
              <h2 className="text-2xl font-extrabold text-brand-deep">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-slate-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </article>
          ))}
        </div>
      </section>

      <section className="pb-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-action">Keep going</h2>
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
