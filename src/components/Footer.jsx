export default function Footer() {
  return (
    <footer className="bg-brand-dark text-slate-400 py-10 border-t border-white/10 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        <div>
          <span className="text-white font-bold text-base">Calviora</span>
          <span className="ml-2 text-slate-400">— Good food. Better you.</span>
        </div>
        <div>&copy; 2026 Calviora Inc. All rights reserved.</div>
      </div>
    </footer>
  );
}
