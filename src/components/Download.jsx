function AppleMark() {
  return (
    <svg className="w-6 h-6 shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.85c.67-.82 1.12-1.96.99-3.1-.97.04-2.15.65-2.85 1.47-.63.73-1.18 1.89-1.03 3.01 1.09.08 2.22-.56 2.89-1.38z" />
    </svg>
  );
}

function PlayMark() {
  return (
    <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M3.2 20.6c.2.4.6.6 1 .5l9.4-5.4-2.2-2.2-8.2 7.1z" />
      <path fill="#34A853" d="M21.4 10.6l-3.4-2-3.6 3.4 3.6 3.4 3.5-2c.8-.5.8-1.8-.1-2.3z" />
      <path fill="#FBBC04" d="M4.2 3.4c-.3.3-.5.7-.5 1.2v14.8l8.3-8.2L4.2 3.4z" />
      <path fill="#EA4335" d="M13.6 12 4.2 3.4l9.4 5.4 3.4 2-3.4 1.2z" />
    </svg>
  );
}

const badgeClass =
  'inline-flex items-center gap-3 h-14 px-4 rounded-lg bg-black text-white border border-white/10 shadow-lg hover:bg-slate-900 transition w-full sm:w-auto justify-center';

const APP_STORE_URL = 'https://apps.apple.com/us/app/calviora-ai-calorie-tracker/id6764837841';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.calorie.vibe.ai&hl=en_NZ';

export default function Download() {
  return (
    <section id="download" className="scroll-mt-24 py-16 bg-brand-deep text-white text-center relative overflow-hidden">
      <div className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-brand-leaf/30 blur-3xl"></div>
      <div className="pointer-events-none absolute -right-8 bottom-0 h-40 w-40 rounded-full bg-white/10 blur-3xl"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">Ready to transform your health habits?</h2>
        <p className="text-brand-soft text-lg mt-4 max-w-xl mx-auto">Download Calviora today and claim your 3 free AI food scans.</p>

        <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3">
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className={badgeClass} aria-label="Download on the App Store">
            <AppleMark />
            <span className="text-left leading-none">
              <span className="block text-[10px] font-medium tracking-wide">Download on the</span>
              <span className="block text-lg font-semibold mt-0.5">App Store</span>
            </span>
          </a>
          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className={badgeClass} aria-label="Get it on Google Play">
            <PlayMark />
            <span className="text-left leading-none">
              <span className="block text-[10px] font-medium tracking-wider">GET IT ON</span>
              <span className="block text-lg font-semibold mt-0.5">Google Play</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
