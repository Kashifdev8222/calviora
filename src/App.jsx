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
import { adoptCalculatorUrl, locationKey, scrollToLocation, syncTitle } from './lib/navigate.js';
import { toolFromPath } from './data/calculators.js';
import { topicFromPath } from './data/topics.js';
import TopicPage from './components/TopicPage.jsx';
import Legal from './components/Legal.jsx';
import { DayFlow, WhoFor } from './components/HomeStory.jsx';

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
  const bare = path.replace(/\/+$/, '') || '/';
  const topic = topicFromPath(path);
  const calculator = toolFromPath(path);
  const legal = bare === '/privacy' || bare === '/terms' ? bare : '';

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
      ) : legal ? (
        <Legal path={legal} />
      ) : (
        <>
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
