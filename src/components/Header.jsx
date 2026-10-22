import { ArrowRight, Camera } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 glass-card border-b border-brand-soft/50 bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-brand-deep flex items-center justify-center text-brand-leaf font-bold text-xl shadow-md">
            <Camera className="w-5 h-5" />
          </div>
          <div>
            <span className="text-2xl font-extrabold tracking-tight text-brand-deep">Calviora</span>
            <span className="block text-[10px] uppercase font-bold tracking-widest text-brand-action -mt-1">
              Good food. Better you.
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 font-semibold text-sm text-slate-700">
          <a href="#features" className="hover:text-brand-action transition">
            Features
          </a>
          <a href="#goals" className="hover:text-brand-action transition">
            Your Goals
          </a>
          <a href="#app-preview" className="hover:text-brand-action transition">
            App Preview
          </a>
          <a href="#pricing" className="hover:text-brand-action transition">
            Pricing
          </a>
          <a href="#faq" className="hover:text-brand-action transition">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-soft text-brand-deep font-bold text-sm hover:bg-brand-action hover:text-white transition"
          >
            3 Free AI Scans
          </a>
          <a
            href="#download"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-deep text-brand-leaf font-bold text-sm hover:bg-brand-dark transition shadow-lg shadow-brand-deep/20"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
