import { calculatorPath, calculatorTools, toolFromHash, toolFromPath } from '../data/calculators.js';

export const HOME_TITLE = 'Calviora | AI Calorie Counter and Food Scanner App';

export function syncTitle() {
  const id = toolFromPath(window.location.pathname);
  const tool = calculatorTools.find((item) => item.id === id);
  document.title = tool ? `${tool.label} | Calviora` : HOME_TITLE;
}

export function scrollToLocation() {
  const hash = window.location.hash.replace('#', '');
  const tool = toolFromPath(window.location.pathname);
  const id = hash && !hash.startsWith('calc-') ? hash : tool ? 'calculators' : '';
  if (!id) {
    window.scrollTo(0, 0);
    return;
  }
  document.getElementById(id)?.scrollIntoView();
}

export function adoptCalculatorUrl() {
  const legacy = toolFromHash(window.location.hash);
  if (legacy) {
    window.history.replaceState({}, '', calculatorPath(legacy));
    return;
  }
  if (window.location.pathname.startsWith('/calculators/') && !toolFromPath(window.location.pathname)) {
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
