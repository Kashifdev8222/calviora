import { calculatorPath, calculatorTools } from '../data/calculators.js';
import { featurePages, featurePath, goalPages, goalPath } from '../data/topics.js';
import { onSamePageClick } from '../lib/navigate.js';

function Column({ title, children }) {
  return (
    <div>
      <h2 className="text-xs font-bold uppercase tracking-widest text-brand-leaf">{title}</h2>
      <div className="mt-4 flex flex-col gap-2">{children}</div>
    </div>
  );
}

function Item({ href, children }) {
  return (
    <a href={href} onClick={onSamePageClick} className="text-sm text-slate-300 hover:text-white">
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-slate-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="/" onClick={onSamePageClick} className="inline-flex">
            <img src="/logo.jpg" alt="Calviora" className="h-16 w-auto rounded-xl bg-white" />
          </a>
          <p className="mt-4 text-sm leading-relaxed max-w-xs">Track meals, water, and activity. Eat with a clearer picture of the day.</p>
        </div>
        <Column title="Features">
          {featurePages.map((item) => (
            <Item key={item.slug} href={featurePath(item.slug)}>
              {item.title}
            </Item>
          ))}
        </Column>
        <Column title="Goals">
          {goalPages.map((item) => (
            <Item key={item.slug} href={goalPath(item.slug)}>
              {item.title}
            </Item>
          ))}
        </Column>
        <Column title="Calculators">
          {calculatorTools.map((item) => (
            <Item key={item.id} href={calculatorPath(item.id)}>
              {item.label}
            </Item>
          ))}
        </Column>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-xs text-center sm:text-left">
          &copy; 2026 Calviora Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
