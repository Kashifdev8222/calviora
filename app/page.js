import Hero from '../src/components/Hero.jsx';
import HomeRest from '../src/components/HomeRest.jsx';
import { getContent } from '../server/getContent.js';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const { plans, faqs } = await getContent();
  return (
    <>
      <Hero />
      <HomeRest plans={plans} faqs={faqs} />
    </>
  );
}
