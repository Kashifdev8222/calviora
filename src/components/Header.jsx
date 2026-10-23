import { useState } from 'react';
import { ArrowRight, Camera, Menu, X } from 'lucide-react';

const links = [
  { href: '#features', label: 'Features' },
  { href: '#goals', label: 'Your Goals' },
  { href: '#app-preview', label: 'App Preview' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 glass-card border-b border-brand-soft/50 bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-3">
        <a href="#" onClick={close} className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <div className="w-10 h-10 shrink-0 rounded-2xl bg-brand-deep flex items-center justify-center text-brand-leaf font-bold text-xl shadow-md">
            <Camera className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <span className="block text-xl sm:text-2xl font-extrabold tracking-tight text-brand-deep leading-none">
              Calviora
            </span>
            <span className="hidden sm:block text-[10px] uppercase font-bold tracking-widest text-brand-action mt-1">
              Good food. Better you.
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-4 xl:gap-8 font-semibold text-sm text-slate-700 whitespace-nowrap">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-brand-action transition">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href="#pricing"
            className="hidden lg:inline-flex items-center gap-2 px-4 xl:px-5 py-2.5 rounded-full bg-brand-soft text-brand-deep font-bold text-sm hover:bg-brand-action hover:text-white transition whitespace-nowrap"
          >
            3 Free AI Scans
          </a>
          <a
            href="#download"
            onClick={close}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-6 py-2.5 rounded-full bg-brand-deep text-brand-leaf font-bold text-sm hover:bg-brand-dark transition shadow-lg shadow-brand-deep/20 whitespace-nowrap"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </a>
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-brand-action/20 text-brand-deep bg-white"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="lg:hidden border-t border-brand-soft/80 bg-white/95 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="px-3 py-3 rounded-xl font-semibold text-slate-700 hover:bg-brand-soft hover:text-brand-action transition"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={close}
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
