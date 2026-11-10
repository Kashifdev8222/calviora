export default function Faq({ faqs }) {
  return (
    <section id="faq" className="scroll-mt-24 py-16 bg-brand-cloud">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-action">FAQ</p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-brand-deep">Questions, answered plainly</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((item) => (
            <div key={item.id || item.question} className="bg-white p-6 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-brand-deep text-base">{item.question}</h3>
              <p className="text-slate-600 text-sm mt-2">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
