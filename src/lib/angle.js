const TWO_PI = Math.PI * 2;

/** Wrap an angle (radians) into [0, 2π). */
export function wrapAngle(a) {
  return ((a % TWO_PI) + TWO_PI) % TWO_PI;
}

/** Signed shortest rotation (radians, in (-π, π]) that takes `from` to `to`. */
export function shortestAngleDelta(from, to) {
  let d = wrapAngle(to - from);
  if (d > Math.PI) d -= TWO_PI;
  return d;
}

/**
 * Clockwise angle (radians, [0, 2π)) measured from screen-up, computed with
 * atan2. dx grows to the right, dy grows downward (client coordinates).
 *   up → 0, right → π/2, down → π, left → 3π/2
 */
export function directionAngle(dx, dy) {
  return wrapAngle(Math.atan2(dx, -dy));
}

/** Continuous (fractional) frame position in [0, frameCount) for an angle. */
export function angleToFramePosition(angle, frameCount, frameOffset = 0) {
  const pos = (wrapAngle(angle) / TWO_PI) * frameCount + frameOffset;
  return ((pos % frameCount) + frameCount) % frameCount;
}

/** Shortest circular distance between two frame positions. */
export function circularFrameDistance(a, b, frameCount) {
  const d = Math.abs(a - b) % frameCount;
  return Math.min(d, frameCount - d);
}
