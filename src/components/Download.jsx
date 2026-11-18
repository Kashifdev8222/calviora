import StoreBadges from './StoreBadges.jsx';

export default function Download() {
  return (
    <section id="download" className="scroll-mt-24 py-16 bg-brand-deep text-white text-center relative overflow-hidden">
      <div className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-brand-leaf/30 blur-3xl"></div>
      <div className="pointer-events-none absolute -right-8 bottom-0 h-40 w-40 rounded-full bg-white/10 blur-3xl"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">Scan Your Next Meal With Calviora</h2>
        <p className="text-brand-soft text-lg mt-4 max-w-xl mx-auto">
          Download the app and try your first scan today. Three free scans are waiting for you every day.
        </p>
        <StoreBadges className="mt-8 justify-center" />
      </div>
    </section>
  );
}
