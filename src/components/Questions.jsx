import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Questions({ items }) {
  const [open, setOpen] = useState(0);
  if (!items?.length) return null;

  return (
    <div className="divide-y divide-slate-200 border-y border-slate-200">
      {items.map((item, index) => {
        const expanded = open === index;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="w-full py-4 flex items-center justify-between gap-4 text-left"
              aria-expanded={expanded}
              onClick={() => setOpen(expanded ? -1 : index)}
            >
              <span className="font-bold text-brand-deep">{item.q}</span>
              <ChevronDown className={`w-5 h-5 shrink-0 text-brand-action transition ${expanded ? 'rotate-180' : ''}`} />
            </button>
            {expanded ? <p className="pb-4 text-sm text-slate-600 leading-relaxed">{item.a}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
