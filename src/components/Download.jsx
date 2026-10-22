export default function Download() {
  return (
    <section id="download" className="py-16 bg-brand-deep text-white text-center relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">Ready to transform your health habits?</h2>
        <p className="text-brand-soft text-lg mt-4 max-w-xl mx-auto">Download Calviora today and claim your 3 free AI food scans.</p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="px-8 py-4 bg-brand-leaf text-brand-deep rounded-2xl font-extrabold text-base hover:bg-white transition shadow-xl inline-flex items-center gap-3"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.85c.67-.82 1.12-1.96.99-3.1-.97.04-2.15.65-2.85 1.47-.63.73-1.18 1.89-1.03 3.01 1.09.08 2.22-.56 2.89-1.38z" />
            </svg>
            <span>Download on App Store</span>
          </a>
          <a
            href="#"
            className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-2xl font-extrabold text-base hover:bg-white hover:text-brand-deep transition inline-flex items-center gap-3"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a1.861 1.861 0 0 1-.61-1.386V3.2a1.86 1.86 0 0 1 .609-1.386zm11.3 9.072l2.306-2.306 3.732 2.133c.895.511.895 1.343 0 1.854l-3.732 2.133-2.306-2.306zm-1.131 1.131l-9.842 9.842a1.815 1.815 0 0 0 2.052.127l10.37-5.926-2.58-2.583zm0-2.034l2.58-2.583-10.37-5.926a1.815 1.815 0 0 0-2.052.127l9.842 9.842z" />
            </svg>
            <span>GET IT ON Google Play</span>
          </a>
        </div>
      </div>
    </section>
  );
}
