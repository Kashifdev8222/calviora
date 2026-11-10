import { useEffect, useLayoutEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Screenshots from './components/Screenshots.jsx';
import Goals from './components/Goals.jsx';
import Features from './components/Features.jsx';
import AppPreview from './components/AppPreview.jsx';
import Pricing from './components/Pricing.jsx';
import Faq from './components/Faq.jsx';
import Calculators from './components/Calculators.jsx';
import AskAi from './components/AskAi.jsx';
import Download from './components/Download.jsx';
import Footer from './components/Footer.jsx';
import { plans as defaultPlans, faqs as defaultFaqs } from '../shared/content.js';
import { adoptCalculatorUrl, locationKey, onSamePageClick, scrollToLocation, syncTitle } from './lib/navigate.js';
import { toolFromPath } from './data/calculators.js';
import { topicFromPath } from './data/topics.js';
import TopicPage from './components/TopicPage.jsx';
import { DayFlow, WhoFor } from './components/HomeStory.jsx';

const pageJump = [
  { href: '/#routine', label: 'How it works' },
  { href: '/#goals', label: 'Goals' },
  { href: '/#who', label: 'Who it is for' },
  { href: '/#features', label: 'Features' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/#download', label: 'Download' },
];

function PageJump() {
  return (
    <nav aria-label="On this page" className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-3 overflow-x-auto hide-scrollbar">
        <span className="shrink-0 text-sm text-slate-500">On this page</span>
        <span className="shrink-0 text-slate-300" aria-hidden="true">›</span>
        {pageJump.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onSamePageClick}
            className="shrink-0 text-sm font-semibold text-brand-deep hover:text-brand-action"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default function App() {
  const [route, setRoute] = useState(locationKey);
  const [plans, setPlans] = useState(defaultPlans);
  const [faqs, setFaqs] = useState(defaultFaqs);

  useLayoutEffect(() => {
    const remember = () => setRoute(locationKey());
    window.addEventListener('popstate', remember);
    window.addEventListener('hashchange', remember);
    return () => {
      window.removeEventListener('popstate', remember);
      window.removeEventListener('hashchange', remember);
    };
  }, []);

  useLayoutEffect(() => {
    adoptCalculatorUrl();
    const next = locationKey();
    if (next !== route) {
      setRoute(next);
      return;
    }
    syncTitle();
    scrollToLocation();
  }, [route]);

  useEffect(() => {
    let ignore = false;

    fetch('/api/content')
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (ignore || !data) return;
        if (Array.isArray(data.plans) && data.plans.length) setPlans(data.plans);
        if (Array.isArray(data.faqs) && data.faqs.length) setFaqs(data.faqs);
      })
      .catch(() => {});

    return () => {
      ignore = true;
    };
  }, []);

  const path = route.split('#')[0].split('?')[0] || '/';
  const topic = topicFromPath(path);
  const calculator = toolFromPath(path);

  return (
    <>
      <Header />
      {topic ? (
        <TopicPage topic={topic} />
      ) : calculator ? (
        <>
          <Calculators />
          <AskAi />
          <Download />
        </>
      ) : (
        <>
          <PageJump />
          <Hero />
          <Screenshots />
          <DayFlow />
          <Goals />
          <WhoFor />
          <Features />
          <AppPreview />
          <Pricing plans={plans} />
          <Faq faqs={faqs} />
          <AskAi />
          <Download />
        </>
      )}
      <Footer />
    </>
  );
}
