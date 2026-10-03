import { useEffect, useState } from 'react';
import { characterConfig } from '../data/characterConfig.js';

// Module-level cache: every image is requested and decoded once per page load,
// no matter how many times the component mounts (e.g. React StrictMode).
let centerPromise = null;
let framesPromise = null;

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      // decode() is a best-effort warm-up so the first draw doesn't stall; a
      // decode hiccup is not fatal because drawImage() decodes on demand.
      img.decode().catch(() => {}).then(() => resolve(img));
    };
    img.onerror = () => reject(new Error(`Failed to load ${src}`));
    img.src = src;
  });
}

function loadCenter() {
  centerPromise ??= loadImage(characterConfig.centerSrc);
  return centerPromise;
}

function loadFrames(onProgress) {
  if (!framesPromise) {
    let done = 0;
    const { frameCount, frameSrc } = characterConfig;
    framesPromise = Promise.all(
      Array.from({ length: frameCount }, (_, i) =>
        loadImage(frameSrc(i)).then((img) => {
          onProgress?.(++done, frameCount);
          return img;
        }),
      ),
    );
    framesPromise.catch(() => {
      framesPromise = null; // allow a retry on next mount
    });
  }
  return framesPromise;
}

/**
 * Preloads character images.
 * - interactive: loads center + all frames, ready only when everything decoded.
 * - otherwise (touch / reduced motion): loads only center.webp.
 */
export function useCharacterFrames(interactive) {
  const [state, setState] = useState({ status: 'loading', progress: 0, center: null, frames: null });

  useEffect(() => {
    let cancelled = false;
    const safeSet = (next) => !cancelled && setState((s) => ({ ...s, ...next }));

    const run = async () => {
      try {
        const center = await loadCenter();
        if (!interactive) {
          safeSet({ status: 'ready', center, frames: null, progress: 1 });
          return;
        }
        safeSet({ status: 'loading', progress: 0 });
        const frames = await loadFrames((done, total) => safeSet({ progress: done / total }));
        safeSet({ status: 'ready', center, frames, progress: 1 });
      } catch (err) {
        console.error(err);
        safeSet({ status: 'error' });
      }
    };
    run();

    return () => {
      cancelled = true;
    };
  }, [interactive]);

  return state;
}
