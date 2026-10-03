const BASE = import.meta.env.BASE_URL;

export const characterConfig = {
  frameCount: 64,
  centerSrc: `${BASE}character/center.webp`,
  frameSrc: (i) => `${BASE}character/frames/frame-${String(i).padStart(3, '0')}.webp`,

  // Production frames are 1280x720; the canvas keeps this exact 16:9 aspect ratio.
  sourceWidth: 1280,
  aspectRatio: 1280 / 720,

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

  // Cap on the canvas backing-store width in device pixels. Drawing more pixels
  // than the source contains only costs fill-rate, so it matches the frames.
  maxBackingWidth: 1280,
};

// Dominant background red of the frames, sampled from their left/right edges.
// The test hero uses it so the frame's red continues seamlessly into the page.
export const characterRed = '#B92523';
