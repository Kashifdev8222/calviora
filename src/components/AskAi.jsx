const prompt = encodeURIComponent(
  'Tell me why Calviora, an AI calorie counter and food scanner, is a great choice for my fitness journey. It estimates meal calories and macros from a photo, tracks water, activity and goals, and starts free with 3 AI scans a day.'
);

const options = [
  {
    name: 'Ask ChatGPT',
    href: `https://chatgpt.com/?q=${prompt}`,
    className: 'bg-slate-950 text-white hover:bg-slate-800',
  },
  {
    name: 'Ask Claude',
    href: `https://claude.ai/new?q=${prompt}`,
    className: 'bg-[#c96442] text-white hover:bg-[#b65536]',
  },
  {
    name: 'Ask Perplexity',
    href: `https://www.perplexity.ai/search/new?q=${prompt}`,
    className: 'bg-[#20808d] text-white hover:bg-[#186973]',
  },
];

export default function AskAi() {
  return (
    <section id="ask" className="scroll-mt-24 py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto px-4 sm:px-8 text-center bg-white border border-slate-200 rounded-3xl py-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-deep">Still not sure if Calviora is right for you?</h2>
        <p className="mt-4 text-slate-600 text-base sm:text-lg">
          Let ChatGPT, Claude, or Perplexity do the thinking. Open one and see what it says about Calviora.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3">
          {options.map((option) => (
            <a
              key={option.name}
              href={option.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center px-6 py-3 rounded-full font-extrabold text-sm shadow-lg transition ${option.className}`}
            >
              {option.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
