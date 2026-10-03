import { useLayoutEffect } from 'react';

/**
 * Fades each `[data-reveal]` block in once as it scrolls into view.
 * Blocks already on screen are left alone (no flash) and, because the hidden
 * state is only applied by JS, content is always visible if this never runs.
 */
export function useReveal() {
  useLayoutEffect(() => {
    const targets = [...document.querySelectorAll('[data-reveal]')].filter(
      (el) => el.getBoundingClientRect().top > window.innerHeight * 0.9,
    );
    if (!targets.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );

    targets.forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      targets.forEach((el) => el.classList.remove('reveal', 'is-visible'));
    };
  }, []);
}
