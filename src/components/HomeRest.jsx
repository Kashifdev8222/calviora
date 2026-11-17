import Screenshots from './Screenshots.jsx';
import Goals from './Goals.jsx';
import Features from './Features.jsx';
import AppPreview from './AppPreview.jsx';
import Pricing from './Pricing.jsx';
import Faq from './Faq.jsx';
import AskAi from './AskAi.jsx';
import Download from './Download.jsx';
import { DayFlow, WhoFor } from './HomeStory.jsx';

export default function HomeRest({ plans, faqs }) {
  return (
    <>
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
  );
}
