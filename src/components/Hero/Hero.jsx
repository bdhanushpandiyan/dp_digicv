import { profile } from '../../data/profile.js';
import CursorCharacter from '../CursorCharacter/CursorCharacter.jsx';
import Button from '../ui/Button.jsx';
import PlaceholderBadge from '../ui/PlaceholderBadge.jsx';
import './Hero.css';

const debugCharacter = new URLSearchParams(window.location.search).has('debug');

export default function Hero() {
  const { name, title, eyebrow, positioning, hero } = profile;

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__text">
        <p className="eyebrow hero__enter">{eyebrow}</p>

        <h1 id="hero-title" className="hero__name hero__enter">
          <span>{name.given}</span> <span>{name.middle}</span> <span>{name.family}</span>
        </h1>

        <p className="hero__title hero__enter">{title}</p>

        <p className="hero__statement hero__enter">
          {positioning.text}
          {positioning.placeholder && <PlaceholderBadge />}
        </p>

        <div className="hero__actions hero__enter">
          <Button href={hero.primaryCta.href} variant="primary" icon="arrow-right">
            {hero.primaryCta.label}
          </Button>
          <Button href={hero.secondaryCta.href} variant="ghost">
            {hero.secondaryCta.label}
          </Button>
        </div>
      </div>

      {/* The stage's background continues the frame's top-edge red, so the
          character sits on a single uninterrupted colour field. */}
      <div className="hero__stage">
        <CursorCharacter
          debug={debugCharacter}
          alt={`Interactive portrait of ${name.given} ${name.middle} ${name.family}. The head turns to follow your cursor.`}
        />
        <p className="hero__caption" aria-hidden="true">
          Move your cursor
        </p>
      </div>
    </section>
  );
}
