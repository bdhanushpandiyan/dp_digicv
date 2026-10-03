import { profile, sections } from '../../data/profile.js';
import Section from '../Section/Section.jsx';
import PlaceholderBadge from '../ui/PlaceholderBadge.jsx';
import './About.css';

export default function About() {
  const { lead, paragraphs, facts } = profile.about;
  const { education } = profile;

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

      <section className="education" aria-labelledby="education-heading">
        <h3 id="education-heading" className="education__heading label">
          Education
        </h3>
        <ol className="education__list">
          {education.map((entry) => (
            <li key={entry.degree} className="education__item">
              <p className="education__period label">{entry.period}</p>
              <div>
                <h4 className="education__degree">{entry.degree}</h4>
                <p className="education__institution">{entry.institution}</p>
                {entry.note && <p className="education__note">{entry.note}</p>}
              </div>
              <p className="education__cgpa">
                <span className="label">CGPA</span>
                <span>{entry.cgpa}</span>
              </p>
            </li>
          ))}
        </ol>
      </section>
    </Section>
  );
}
