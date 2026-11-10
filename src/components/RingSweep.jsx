import { useEffect, useRef, useState } from 'react';

const SWEEP = '1.15s cubic-bezier(0.22, 0.8, 0.28, 1)';

export function useSweep(resetKey) {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    setPlay(false);
    const id = window.setTimeout(() => setPlay(true), 40);
    return () => window.clearTimeout(id);
  }, [resetKey]);

  return play;
}

function reducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function RingSweep({ pct, color, play, className, children }) {
  const ref = useRef(null);
  const amount = Math.max(0, Math.min(100, pct)) * 3.6;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--ring-color', color);
    if (!play || reducedMotion()) {
      el.style.transition = 'none';
      el.style.setProperty('--ring-turn', play || reducedMotion() ? `${amount}deg` : '0deg');
      return;
    }
    const frame = window.requestAnimationFrame(() => {
      el.style.transition = `--ring-turn ${SWEEP}`;
      el.style.setProperty('--ring-turn', `${amount}deg`);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [amount, color, play]);

  return (
    <div ref={ref} className={`ring-sweep ${className || ''}`} style={{ '--ring-color': color }}>
      {children}
    </div>
  );
}

export function FillBar({ pct, color, play }) {
  const ref = useRef(null);
  const amount = Math.max(0, Math.min(100, pct));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.background = color;
    if (!play || reducedMotion()) {
      el.style.transition = 'none';
      el.style.width = play || reducedMotion() ? `${amount}%` : '0%';
      return;
    }
    const frame = window.requestAnimationFrame(() => {
      el.style.transition = `width ${SWEEP}`;
      el.style.width = `${amount}%`;
    });
    return () => window.cancelAnimationFrame(frame);
  }, [amount, color, play]);

  return <div ref={ref} className="fill-bar" style={{ background: color }} />;
}
