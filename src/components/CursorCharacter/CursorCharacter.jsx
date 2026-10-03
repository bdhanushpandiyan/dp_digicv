import { useEffect, useRef } from 'react';
import { characterConfig } from '../../data/characterConfig.js';
import { useCharacterFrames } from '../../hooks/useCharacterFrames.js';
import { useHasFinePointer, usePrefersReducedMotion } from '../../hooks/useMediaQuery.js';
import {
  angleToFramePosition,
  circularFrameDistance,
  directionAngle,
  shortestAngleDelta,
  wrapAngle,
} from '../../lib/angle.js';

/**
 * A stationary character whose head follows the cursor.
 *
 * Rendering model: 64 pre-rendered frames are drawn one at a time onto a 2D
 * canvas (never blended, never CSS-transformed). All high-frequency state
 * (mouse position, smoothed angle, frame index) lives in the effect closure and
 * is driven by requestAnimationFrame, so React never re-renders on mouse move.
 *
 * Falls back to a static center.webp for touch / no-hover devices and when
 * prefers-reduced-motion is set.
 */
export default function CursorCharacter({
  config = characterConfig,
  alt = 'Portrait whose head turns to follow the cursor',
  className = '',
  debug = false,
}) {
  const reducedMotion = usePrefersReducedMotion();
  const finePointer = useHasFinePointer();
  const interactive = finePointer && !reducedMotion;

  const { status, progress, center, frames } = useCharacterFrames(interactive);

  const wrapRef = useRef(null);
  const canvasRef = useRef(null);

  const ready = status === 'ready' && (!interactive || frames);

  useEffect(() => {
    if (!ready) return undefined;

    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: false });
    const { frameCount, aspectRatio, faceCenter } = config;

    // ---- High-frequency state (intentionally not React state) -------------
    const mouse = { x: 0, y: 0, seen: false };
    let angle = 0; // smoothed head angle, radians clockwise from up
    let angleInit = false;
    let frameIndex = null; // currently displayed directional frame
    let inDeadzone = true;
    let lastTime = 0;
    let rafId = 0;
    let drawn = { img: null, w: 0, h: 0 };

    const draw = (img, label) => {
      const w = canvas.width;
      const h = canvas.height;
      if (drawn.img === img && drawn.w === w && drawn.h === h && !debug) return;
      ctx.drawImage(img, 0, 0, w, h);
      if (debug) drawDebug(w, h, label);
      drawn = { img, w, h };
      canvas.dataset.frame = label;
    };

    // Debug overlay: face centre, deadzone ring, current angle and frame index.
    const drawDebug = (w, h, label) => {
      const fx = faceCenter.x * w;
      const fy = faceCenter.y * h;
      const unit = w / 720; // scale overlay with the canvas
      ctx.strokeStyle = '#44e2cd';
      ctx.fillStyle = '#44e2cd';
      ctx.lineWidth = 2 * unit;
      ctx.beginPath();
      ctx.moveTo(fx - 12 * unit, fy);
      ctx.lineTo(fx + 12 * unit, fy);
      ctx.moveTo(fx, fy - 12 * unit);
      ctx.lineTo(fx, fy + 12 * unit);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(fx, fy, config.deadzone * h, 0, Math.PI * 2);
      ctx.stroke();

      const deg = ((angle * 180) / Math.PI).toFixed(1);
      const text = `angle ${angleInit ? deg : '--'}\u00b0  frame ${label}`;
      ctx.font = `${14 * unit}px ui-monospace, Menlo, monospace`;
      const pad = 8 * unit;
      const tw = ctx.measureText(text).width;
      ctx.fillStyle = 'rgba(0,0,0,0.6)';
      ctx.fillRect(pad, pad, tw + pad * 2, 14 * unit + pad * 1.5);
      ctx.fillStyle = '#44e2cd';
      ctx.textBaseline = 'top';
      ctx.fillText(text, pad * 2, pad * 1.5);
    };

    const render = () => {
      if (!interactive || inDeadzone) draw(center, 'center');
      else draw(frames[frameIndex], String(frameIndex));
    };

    // ---- Sizing: keep aspect ratio, crisp on high-DPI ---------------------
    const resize = () => {
      const cssWidth = wrap.clientWidth;
      if (!cssWidth) return;
      const dpr = window.devicePixelRatio || 1;
      const w = Math.min(Math.round(cssWidth * dpr), config.maxBackingWidth);
      const h = Math.round(w / aspectRatio);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w; // resets the bitmap, so force a redraw
        canvas.height = h;
        ctx.imageSmoothingQuality = 'high'; // reset along with the bitmap
        drawn = { img: null, w: 0, h: 0 };
      }
      render();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(wrap);
    window.addEventListener('resize', resize);
    resize();

    if (!interactive) {
      return () => {
        resizeObserver.disconnect();
        window.removeEventListener('resize', resize);
      };
    }

    // ---- Tracking loop ----------------------------------------------------
    const tick = (now) => {
      rafId = 0;
      const dt = lastTime ? Math.min(now - lastTime, 64) : 16;
      lastTime = now;

      const rect = canvas.getBoundingClientRect();
      const dx = mouse.x - (rect.left + faceCenter.x * rect.width);
      const dy = mouse.y - (rect.top + faceCenter.y * rect.height);
      const dist = Math.hypot(dx, dy);

      // Hysteresis on the deadzone edge to avoid center/frame flicker.
      const radius = (inDeadzone ? config.deadzoneExit : config.deadzone) * rect.height;
      const nowInDeadzone = dist < radius;

      let converging = false;
      if (!nowInDeadzone) {
        const target = directionAngle(dx, dy);
        if (!angleInit) {
          angle = target;
          angleInit = true;
        }
        const delta = shortestAngleDelta(angle, target);
        angle = wrapAngle(angle + delta * (1 - Math.exp(-dt / config.smoothingMs)));
        converging = Math.abs(delta) > 0.0005;

        // Only switch frame once clearly past the half-frame boundary.
        const pos = angleToFramePosition(angle, frameCount, config.frameOffset);
        if (
          frameIndex === null ||
          circularFrameDistance(pos, frameIndex, frameCount) > 0.5 + config.frameHysteresis
        ) {
          frameIndex = Math.round(pos) % frameCount;
        }
      }
      inDeadzone = nowInDeadzone;

      render();
      if (converging) schedule();
      else lastTime = 0;
    };

    const schedule = () => {
      if (!rafId) rafId = requestAnimationFrame(tick);
    };

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.seen = true;
      schedule();
    };
    // Page scroll moves the character relative to a stationary cursor.
    const onScroll = () => {
      if (mouse.seen) schedule();
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', resize);
      resizeObserver.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [ready, interactive, center, frames, config, debug]);

  return (
    <div
      ref={wrapRef}
      className={`relative w-full ${className}`}
      style={{ aspectRatio: String(config.aspectRatio) }}
    >
      {ready ? (
        <canvas
          ref={canvasRef}
          role="img"
          aria-label={alt}
          className="absolute inset-0 block h-full w-full"
        />
      ) : (
        <div
          className="absolute inset-0 flex items-center justify-center font-label-sm text-label-sm uppercase tracking-widest text-outline"
          role="status"
        >
          {status === 'error' ? 'Character unavailable' : `Loading ${Math.round(progress * 100)}%`}
        </div>
      )}
    </div>
  );
}
