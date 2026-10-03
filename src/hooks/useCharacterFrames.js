import { useEffect, useState } from 'react';
import { characterConfig } from '../data/characterConfig.js';

// Module-level cache: every image is requested and decoded once per page load,
// no matter how many times the component mounts (e.g. React StrictMode).
//
// Frames are held as ImageBitmaps rather than <img> elements. An <img> is
// decoded once for decode() and again (a second full-size copy) the first time
// it is drawn to a canvas; an ImageBitmap is decoded exactly once, up front, and
// drawImage() reuses it. Measured: ~236 MB less renderer memory for 64 frames.
let centerPromise = null;
let framesPromise = null;

function loadImage(src, retries = 2) {
  return fetchBitmap(src).catch((err) => {
    if (retries <= 0) throw err;
    // One flaky request among 65 shouldn't take the whole character down.
    return new Promise((resolve) => setTimeout(resolve, 250)).then(() => loadImage(src, retries - 1));
  });
}

function fetchBitmap(src) {
  return fetch(src)
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.blob();
    })
    .then((blob) => createImageBitmap(blob))
    .catch((err) => {
      throw new Error(`Failed to load ${src}: ${err.message}`);
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
