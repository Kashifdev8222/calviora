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
import { adoptCalculatorUrl, scrollToLocation, syncTitle } from './lib/navigate.js';

export default function App() {
  const [plans, setPlans] = useState(defaultPlans);
  const [faqs, setFaqs] = useState(defaultFaqs);

  useLayoutEffect(() => {
    adoptCalculatorUrl();
    const apply = () => {
      syncTitle();
      scrollToLocation();
    };
    apply();
    window.addEventListener('popstate', apply);
    window.addEventListener('hashchange', apply);
    return () => {
      window.removeEventListener('popstate', apply);
      window.removeEventListener('hashchange', apply);
    };
  }, []);

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

  return (
    <>
      <Header />
      <Hero />
      <Screenshots />
      <Goals />
      <Features />
      <AppPreview />
      <Pricing plans={plans} />
      <Faq faqs={faqs} />
      <Calculators />
      <AskAi />
      <Download />
      <Footer />
    </>
  );
}
