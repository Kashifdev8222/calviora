export default function Faq({ faqs }) {
  return (
    <section id="faq" className="py-16 bg-brand-cloud">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-brand-deep">Frequently Asked Questions</h2>
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
