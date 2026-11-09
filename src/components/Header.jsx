import { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { calculatorPath, calculatorTools } from '../data/calculators.js';
import { featurePages, featurePath, goalPages, goalPath } from '../data/topics.js';
import { onSamePageClick } from '../lib/navigate.js';

const menus = [
  {
    id: 'features',
    label: 'Features',
    items: featurePages.map((item) => ({ href: featurePath(item.slug), label: item.title })),
  },
  {
    id: 'goals',
    label: 'Goals',
    items: goalPages.map((item) => ({ href: goalPath(item.slug), label: item.title })),
  },
  {
    id: 'calculators',
    label: 'Calculators',
    items: calculatorTools.map((item) => ({ href: calculatorPath(item.id), label: item.label })),
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState('');
  const close = () => {
    setOpen(false);
    setMenu('');
  };

  useEffect(() => {
    if (!open && !menu) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, menu]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1280) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (!menu) return undefined;
    const onPointer = (event) => {
      if (event.target instanceof Element && event.target.closest('[data-nav-root]')) return;
      setMenu('');
    };
    document.addEventListener('pointerdown', onPointer);
    return () => document.removeEventListener('pointerdown', onPointer);
  }, [menu]);

  return (
    <header className="sticky top-0 z-50 glass-card border-b border-brand-soft/50 bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-3">
        <a href="/" onClick={(event) => { onSamePageClick(event); close(); }} className="flex items-center min-w-0 shrink">
          <img src="/logo.jpg" alt="Calviora" className="h-14 sm:h-16 w-auto object-contain" />
        </a>

        <nav className="hidden xl:flex items-center gap-5 2xl:gap-7 font-semibold text-sm text-slate-700 whitespace-nowrap">
          <a href="/" onClick={onSamePageClick} className="hover:text-brand-action transition">
            Home
          </a>
          {menus.map((item) => (
            <DesktopMenu key={item.id} item={item} open={menu === item.id} onToggle={() => setMenu((current) => (current === item.id ? '' : item.id))} onPick={() => setMenu('')} />
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href="/#pricing"
            onClick={onSamePageClick}
            className="hidden xl:inline-flex items-center gap-2 px-4 2xl:px-5 py-2.5 rounded-full bg-brand-soft text-brand-deep font-bold text-sm hover:bg-brand-action hover:text-white transition whitespace-nowrap"
          >
            3 Free AI Scans
          </a>
          <a
            href="/#download"
            onClick={(event) => { onSamePageClick(event); close(); }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-6 py-2.5 rounded-full bg-brand-deep text-brand-leaf font-bold text-sm hover:bg-brand-dark transition shadow-lg shadow-brand-deep/20 whitespace-nowrap"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </a>
          <button
            type="button"
            className="xl:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-brand-action/20 text-brand-deep bg-white"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="xl:hidden border-t border-brand-soft/80 bg-white/95 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
            <a
              href="/"
              onClick={(event) => { onSamePageClick(event); close(); }}
              className="px-3 py-3 rounded-xl font-semibold text-slate-700 hover:bg-brand-soft hover:text-brand-action transition"
            >
              Home
            </a>
            {menus.map((item) => (
              <div key={item.id} data-nav-root>
                <button
                  type="button"
                  className="w-full px-3 py-3 rounded-xl font-semibold text-slate-700 hover:bg-brand-soft hover:text-brand-action transition text-left inline-flex items-center justify-between"
                  aria-expanded={menu === item.id}
                  onClick={() => setMenu((current) => (current === item.id ? '' : item.id))}
                >
                  {item.label}
                  <ChevronDown className={`w-4 h-4 transition ${menu === item.id ? 'rotate-180' : ''}`} />
                </button>
                {menu === item.id ? (
                  <div className="pl-3 flex flex-col gap-1 max-h-64 overflow-y-auto">
                    {item.items.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={(event) => { onSamePageClick(event); close(); }}
                        className="px-3 py-2 rounded-xl text-sm font-semibold text-slate-600 hover:bg-brand-soft hover:text-brand-action transition"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <a
              href="/#pricing"
              onClick={(event) => { onSamePageClick(event); close(); }}
              className="mt-2 px-3 py-3 rounded-xl bg-brand-soft text-brand-deep font-bold text-center hover:bg-brand-action hover:text-white transition"
            >
              3 Free AI Scans
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

function DesktopMenu({ item, open, onToggle, onPick }) {
  return (
    <div className="relative" data-nav-root>
      <button
        type="button"
        className="inline-flex items-center gap-1 hover:text-brand-action transition"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={onToggle}
      >
        {item.label}
        <ChevronDown className={`w-4 h-4 transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open ? (
        <div className="absolute left-1/2 top-full z-50 mt-3 w-max -translate-x-1/2 max-h-[70vh] overflow-y-auto hide-scrollbar rounded-2xl border border-slate-200 bg-white py-2 shadow-xl">
          {item.items.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => { onSamePageClick(event); onPick(); }}
              className="block whitespace-nowrap px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-brand-soft hover:text-brand-action"
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}
