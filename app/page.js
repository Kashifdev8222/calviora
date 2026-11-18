import Hero from '../src/components/Hero.jsx';
import HomeRest from '../src/components/HomeRest.jsx';
import { APP_STORE_URL, PLAY_STORE_URL } from '../src/components/StoreBadges.jsx';
import { getContent } from '../server/getContent.js';

export const dynamic = 'force-dynamic';

const HOME_DESCRIPTION = 'Calviora is an AI calorie counter app that scans desi and global meals for instant calories and macros. Start free with 3 AI scans a day.';

function homeSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'Calviora Inc.',
        url: 'https://calviora.app/',
        logo: 'https://calviora.app/logo.jpg',
        sameAs: [
          'https://www.facebook.com/profile.php?id=61594939689899',
          'https://www.instagram.com/calviora.app/',
          'https://www.tiktok.com/@calviora.app',
        ],
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Calviora',
        applicationCategory: 'HealthApplication',
        operatingSystem: 'iOS, Android',
        url: 'https://calviora.app/',
        description: HOME_DESCRIPTION,
        installUrl: APP_STORE_URL,
        downloadUrl: PLAY_STORE_URL,
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };
}

export default async function HomePage() {
  const { plans, faqs } = await getContent();
  const schema = JSON.stringify(homeSchema(faqs)).replace(/</g, '\\u003c');
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <Hero />
      <HomeRest plans={plans} faqs={faqs} />
    </>
  );
}
