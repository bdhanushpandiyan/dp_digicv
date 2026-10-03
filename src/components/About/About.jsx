import { profile, sections } from '../../data/profile.js';
import Section from '../Section/Section.jsx';
import PlaceholderBadge from '../ui/PlaceholderBadge.jsx';
import './About.css';

export default function About() {
  const { lead, paragraphs, facts } = profile.about;

  return (
    <Section id="about" meta={sections.about}>
      <div className="about">
        <div className="about__body">
          <p className="about__lead">
            {lead.text}
            {lead.placeholder && <PlaceholderBadge />}
          </p>
          {paragraphs.map((p) => (
            <p key={p.text} className="about__text">
              {p.text}
              {p.placeholder && <PlaceholderBadge />}
            </p>
          ))}
        </div>

        <dl className="about__facts">
          {facts.map((fact) => (
            <div key={fact.label} className="about__fact">
              <dt className="label">{fact.label}</dt>
              <dd>
                {fact.value}
                {fact.placeholder && <PlaceholderBadge />}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
