import { site } from '../../data/profile.js';

/** Marks structural placeholder content. Hidden globally via site.showPlaceholderMarkers. */
export default function PlaceholderBadge({ children = 'Placeholder' }) {
  if (!site.showPlaceholderMarkers) return null;
  return <span className="placeholder-badge">{children}</span>;
}
