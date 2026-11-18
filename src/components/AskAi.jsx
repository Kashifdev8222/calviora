const prompt = encodeURIComponent(
  'Tell me why Calviora, an AI calorie counter and food scanner, is a great choice for my fitness journey. It estimates meal calories and macros from a photo, tracks water, activity and goals, and starts free with 3 AI scans a day.'
);

function ChatGptMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden="true">
      <path d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9A6.07 6.07 0 0 0 4.98 4.18a5.98 5.98 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.51 2.9 6.07 6.07 0 0 0 10.27 1.63 5.98 5.98 0 0 0 4-2.9 6.05 6.05 0 0 0-.74-7.1zM13.05 19.47a4.07 4.07 0 0 1-2.46-.8l.14-.08 4.08-2.36a.67.67 0 0 0 .34-.58v-5.76l1.7.98a.08.08 0 0 1 .04.07v4.74a4.08 4.08 0 0 1-3.84 3.79zM6.6 16.73a4.05 4.05 0 0 1-.62-2.67l.14.08 4.08 2.36a.67.67 0 0 0 .68 0l4.98-2.88v1.96a.08.08 0 0 1-.03.07l-4.1 2.37a4.08 4.08 0 0 1-5.13-1.29zM4.2 8.6a4.07 4.07 0 0 1 2.15-1.87v4.86a.67.67 0 0 0 .34.58l4.98 2.88-1.7.98a.08.08 0 0 1-.08 0L5.8 13.4a4.08 4.08 0 0 1-1.6-4.8zm15.08 2.8-4.98-2.88 1.7-.98a.08.08 0 0 1 .08 0l4.09 2.36a4.08 4.08 0 0 1-.62 7.47v-4.86a.67.67 0 0 0-.27-.59zm-6.4-6.2a4.07 4.07 0 0 1 3.08 1.4v.02l-4.08 2.36a.67.67 0 0 0-.34.58v5.76l-1.7-.98a.08.08 0 0 1-.04-.07V7.2a4.08 4.08 0 0 1 3.08-2z" />
    </svg>
  );
}

function ClaudeMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden="true">
      <path d="M12 1.6 13.35 7.2 18.7 4.9 16.1 9.7 21.8 11.2 16.4 13.4 18.2 18.5 13.1 16.2 12 22.4 10.9 16.2 5.8 18.5 7.6 13.4 2.2 11.2 7.9 9.7 5.3 4.9 10.65 7.2 12 1.6z" />
    </svg>
  );
}

function PerplexityMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden="true">
      <path d="M12 1.5 13.7 7.4 19.8 4.8 16.6 10.2 22.5 12 16.6 13.8 19.8 19.2 13.7 16.6 12 22.5 10.3 16.6 4.2 19.2 7.4 13.8 1.5 12 7.4 10.2 4.2 4.8 10.3 7.4 12 1.5z" />
    </svg>
  );
}

const options = [
  {
    name: 'Ask ChatGPT',
    href: `https://chatgpt.com/?q=${prompt}`,
    className: 'bg-slate-950 text-white hover:bg-slate-800',
    Mark: ChatGptMark,
  },
  {
    name: 'Ask Claude',
    href: `https://claude.ai/new?q=${prompt}`,
    className: 'bg-[#6f2c1a] text-white hover:bg-[#542114]',
    Mark: ClaudeMark,
  },
  {
    name: 'Ask Perplexity',
    href: `https://www.perplexity.ai/search/new?q=${prompt}`,
    className: 'bg-[#20808d] text-white hover:bg-[#186973]',
    Mark: PerplexityMark,
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
              className={`inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full font-extrabold text-sm shadow-lg transition ${option.className}`}
            >
              <option.Mark />
              {option.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
