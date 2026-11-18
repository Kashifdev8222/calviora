'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Faq({ faqs }) {
  const [open, setOpen] = useState(0);
  const [answerHeight, setAnswerHeight] = useState(0);
  const measureRefs = useRef([]);

  useLayoutEffect(() => {
    const height = Math.max(0, ...measureRefs.current.map((node) => node?.offsetHeight || 0));
    setAnswerHeight(height);
  }, [faqs]);

  return (
    <section id="faq" className="scroll-mt-24 py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-action">FAQ</p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-brand-deep">Questions, answered plainly</h2>
        </div>

        <div className="relative border-y border-slate-200">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 invisible" aria-hidden="true">
            {faqs.map((item, index) => (
              <p
                key={`measure-${item.id || item.question}`}
                ref={(node) => {
                  measureRefs.current[index] = node;
                }}
                className="pb-5 text-sm leading-relaxed"
              >
                {item.answer}
              </p>
            ))}
          </div>

          <div className="divide-y divide-slate-200">
            {faqs.map((item, index) => {
              const expanded = open === index;
              return (
                <div key={item.id || item.question}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={expanded}
                    onClick={() => setOpen(expanded ? -1 : index)}
                  >
                    <span className="font-bold text-brand-deep">{item.question}</span>
                    <ChevronDown className={`h-5 w-5 shrink-0 text-brand-action transition ${expanded ? 'rotate-180' : ''}`} />
                  </button>
                  {expanded && (
                    <p className="pb-5 text-sm leading-relaxed text-slate-600" style={{ minHeight: answerHeight || undefined }}>
                      {item.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
          {open < 0 && answerHeight > 0 && <div aria-hidden="true" style={{ height: answerHeight }} />}
        </div>
      </div>
    </section>
  );
}
