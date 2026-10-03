import { useEffect, useState } from 'react';

/** Subscribes to a CSS media query and re-renders only when its result flips. */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia(query).matches,
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}

export const usePrefersReducedMotion = () => useMediaQuery('(prefers-reduced-motion: reduce)');

/** True only when a precise hovering pointer (mouse/trackpad) is available. */
export const useHasFinePointer = () => useMediaQuery('(hover: hover) and (pointer: fine)');
