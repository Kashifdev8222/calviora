import { ArrowRight } from 'lucide-react';
import Download from './Download.jsx';
import { onSamePageClick } from '../lib/navigate.js';

export default function TopicPage({ topic }) {
  return (
    <main className="bg-brand-cloud">
      <section className="pt-12 sm:pt-16 pb-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-action">{topic.group}</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-brand-deep tracking-tight">{topic.title}</h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600">{topic.summary}</p>
        </div>
      </section>

      <section className="pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid sm:grid-cols-3 gap-4">
          {topic.points.map((point) => (
            <article key={point.title} className="bg-white rounded-3xl border border-slate-200 p-5 shadow-sm">
              <h2 className="text-lg font-extrabold text-brand-deep">{point.title}</h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{point.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          {topic.sections.map((section) => (
            <article key={section.heading}>
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

      <section className="pb-4">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-action">Related</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {topic.related.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={onSamePageClick}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-bold text-brand-deep hover:border-brand-action hover:text-brand-action"
              >
                {item.label} <ArrowRight className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <Download />
    </main>
  );
}
