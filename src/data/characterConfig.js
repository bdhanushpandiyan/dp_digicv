const BASE = import.meta.env.BASE_URL;

export const characterConfig = {
  frameCount: 64,
  centerSrc: `${BASE}character/center.webp`,
  frameSrc: (i) => `${BASE}character/frames/frame-${String(i).padStart(3, '0')}.webp`,

  // Source frames are 1920x1080; the canvas keeps this aspect ratio.
  aspectRatio: 1920 / 1080,

  // Face centre inside the image, normalised 0..1 (x from left, y from top).
  faceCenter: { x: 0.5, y: 0.44 },

  // Cursor within this radius of the face shows center.webp. Fraction of the
  // displayed canvas height. `deadzoneExit` adds hysteresis so the boundary
  // doesn't flicker between center and a directional frame.
  deadzone: 0.1,
  deadzoneExit: 0.12,

  // Frame 0 points up and indices advance clockwise (16 = right, 32 = down,
  // 48 = left). Shift if the frame set is re-rendered with a different start.
  frameOffset: 0,

  // Exponential smoothing time constant (ms) for the head angle.
  smoothingMs: 90,

  // Extra frame distance beyond the half-frame boundary required before the
  // displayed frame changes (prevents flicker on a boundary).
  frameHysteresis: 0.2,

  // Cap on the canvas backing-store width in device pixels (source is 1920).
  maxBackingWidth: 1920,
};
