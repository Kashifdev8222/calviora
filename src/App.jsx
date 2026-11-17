import { lazy, Suspense, useEffect, useLayoutEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';
import { plans as defaultPlans, faqs as defaultFaqs } from '../shared/content.js';
import { adoptCalculatorUrl, locationKey, scrollToLocation, syncTitle } from './lib/navigate.js';
import { toolFromPath } from './data/calculators.js';
import { topicFromPath } from './data/topics.js';

const loadHomeRest = () => import('./components/HomeRest.jsx');
if ((window.location.pathname.replace(/\/+$/, '') || '/') === '/') {
  window.addEventListener('load', () => {
    loadHomeRest();
  }, { once: true });
}
const HomeRest = lazy(loadHomeRest);
const TopicPage = lazy(() => import('./components/TopicPage.jsx'));
const Calculators = lazy(() => import('./components/Calculators.jsx'));
const AskAi = lazy(() => import('./components/AskAi.jsx'));
const Download = lazy(() => import('./components/Download.jsx'));
const Legal = lazy(() => import('./components/Legal.jsx'));

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
  const legal = bare === '/privacy' || bare === '/terms' || bare === '/delete-account' ? bare : '';

  return (
    <>
      <Header />
      <main>
      {topic ? (
        <Suspense fallback={<div className="min-h-[50vh] bg-brand-cloud" />}>
          <TopicPage topic={topic} />
        </Suspense>
      ) : calculator ? (
        <Suspense fallback={<div className="min-h-[50vh] bg-brand-cloud" />}>
          <Calculators />
          <AskAi />
          <Download />
        </Suspense>
      ) : legal ? (
        <Suspense fallback={<div className="min-h-[50vh] bg-brand-cloud" />}>
          <Legal path={legal} />
        </Suspense>
      ) : (
        <>
          <Hero />
          <Suspense fallback={null}>
            <HomeRest plans={plans} faqs={faqs} />
          </Suspense>
        </>
      )}
      </main>
      <Footer />
    </>
  );
}
