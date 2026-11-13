import { calculatorPath, calculatorTools, toolFromHash, toolFromPath } from '../data/calculators.js';
import { topicFromPath } from '../data/topics.js';

export const HOME_TITLE = 'Calviora | AI Calorie Counter and Food Scanner App';
export const SITE_ORIGIN = 'https://calviora.app';

function syncCanonical() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const href = path === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${path}`;
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

export function locationKey() {
  return `${window.location.pathname}${window.location.search}${window.location.hash}`;
}

export function syncTitle() {
  syncCanonical();
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  if (path === '/privacy') {
    document.title = 'Privacy | Calviora';
    return;
  }
  if (path === '/terms') {
    document.title = 'Terms of Use | Calviora';
    return;
  }
  const topic = topicFromPath(window.location.pathname);
  if (topic) {
    document.title = `${topic.title} | Calviora`;
    return;
  }
  const id = toolFromPath(window.location.pathname);
  const tool = calculatorTools.find((item) => item.id === id);
  document.title = tool ? `${tool.label} | Calviora` : HOME_TITLE;
}

export function scrollToLocation() {
  const hash = window.location.hash.replace('#', '');
  if (hash && !hash.startsWith('calc-')) {
    const target = document.getElementById(hash);
    if (target) {
      target.scrollIntoView();
      return;
    }
  }
  window.scrollTo(0, 0);
}

export function adoptCalculatorUrl() {
  const legacy = toolFromHash(window.location.hash);
  if (legacy) {
    window.history.replaceState({}, '', calculatorPath(legacy));
    return;
  }
  const path = window.location.pathname;
  if (path.startsWith('/calculators/') && !toolFromPath(path)) {
    window.history.replaceState({}, '', '/');
    return;
  }
  if ((path.startsWith('/features/') || path.startsWith('/goals/')) && !topicFromPath(path)) {
    window.history.replaceState({}, '', '/');
  }
}

export function go(path) {
  const url = new URL(path, window.location.origin);
  const next = `${url.pathname}${url.search}${url.hash}`;
  const current = `${window.location.pathname}${window.location.search}${window.location.hash}`;
  if (next !== current) window.history.pushState({}, '', next);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

export function onSamePageClick(event) {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const anchor = event.currentTarget;
  if (!anchor?.href) return;
  const url = new URL(anchor.href);
  if (url.origin !== window.location.origin) return;
  event.preventDefault();
  go(`${url.pathname}${url.search}${url.hash}`);
}
