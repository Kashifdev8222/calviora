'use client';

import { useEffect } from 'react';

export default function Analytics() {
  useEffect(() => {
    const start = () => {
      window.setTimeout(() => {
        if (document.querySelector('script[src*="googletagmanager.com/gtm.js"]')) return;
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-K8CGMPS6';
        document.head.appendChild(script);
      }, 8000);
    };
    if (document.readyState === 'complete') start();
    else window.addEventListener('load', start, { once: true });
  }, []);

  return (
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-K8CGMPS6"
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
