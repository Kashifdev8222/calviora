'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Faq({ faqs }) {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="scroll-mt-24 py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-action">FAQ</p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-brand-deep">Questions, answered plainly</h2>
        </div>

        <div className="divide-y divide-slate-200 border-t border-slate-200">
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
              </div>
            );
          })}
        </div>
        <div className="grid border-b border-slate-200">
          {faqs.map((item, index) => (
            <p
              key={item.id || item.question}
              className={`col-start-1 row-start-1 py-5 text-sm leading-relaxed text-slate-600 ${open === index ? '' : 'invisible'}`}
              aria-hidden={open !== index}
            >
              {item.answer}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
