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

const socials = [
  { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61594939689899' },
  { name: 'Instagram', href: 'https://www.instagram.com/calviora.app/' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@calviora.app' },
];

function SocialIcon({ name }) {
  if (name === 'Facebook') {
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
        <path d="M14 8h3V5h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13V9c0-.6.4-1 1-1z" />
      </svg>
    );
  }
  if (name === 'Instagram') {
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
      <path d="M14 3h2.1c.3 1.7 1.3 3.1 3 3.5v2.2c-1.1-.1-2.1-.5-3-.9v6.7c0 3.1-2.5 5.5-5.6 5.5S5 17.6 5 14.5 7.5 9 10.6 9c.3 0 .6 0 .9.1v2.4c-.3-.1-.6-.2-.9-.2-1.7 0-3 1.4-3 3.1s1.3 3.1 3 3.1 2.9-1.4 2.9-3.1V3z" />
    </svg>
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
          <div className="mt-5 flex gap-2">
            {socials.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white hover:border-brand-leaf hover:text-brand-leaf"
              >
                <SocialIcon name={item.name} />
              </a>
            ))}
          </div>
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
          {calculatorTools.slice(0, 6).map((item) => (
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
