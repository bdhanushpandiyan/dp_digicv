import PlaceholderBadge from '../ui/PlaceholderBadge.jsx';
import './SectionHeader.css';

export default function SectionHeader({ id, number, title, intro }) {
  return (
    <header className="section-header">
      <p className="section-header__index" aria-hidden="true">
        <span>{number}</span>
        <span className="section-header__rule" />
      </p>
      <h2 id={id} className="section-header__title">
        {title}
      </h2>
      {intro && (
        <p className="section-header__intro">
          {intro.text}
          {intro.placeholder && <PlaceholderBadge />}
        </p>
      )}
    </header>
  );
}
