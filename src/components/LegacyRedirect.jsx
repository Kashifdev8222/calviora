'use client';

import { useEffect } from 'react';
import { calculatorPath, toolFromHash } from '../data/calculators.js';

export default function LegacyRedirect() {
  useEffect(() => {
    const legacy = toolFromHash(window.location.hash);
    if (legacy) window.location.replace(calculatorPath(legacy));
  }, []);

  return null;
}
