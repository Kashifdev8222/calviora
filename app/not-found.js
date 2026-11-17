export default function NotFound() {
  return (
    <section className="bg-brand-cloud px-4 py-24 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight text-brand-deep">Page not found</h1>
      <p className="mx-auto mt-4 max-w-md text-slate-600">That address is not part of the Calviora site.</p>
      <a
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-deep px-6 py-3 text-sm font-extrabold text-white"
      >
        Back to home
      </a>
    </section>
  );
}
