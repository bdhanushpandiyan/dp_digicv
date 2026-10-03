import { sections } from '../../data/profile.js';
import { experience } from '../../data/experience.js';
import Section from '../Section/Section.jsx';
import PlaceholderBadge from '../ui/PlaceholderBadge.jsx';
import './Experience.css';

export default function Experience() {
  return (
    <Section id="experience" meta={sections.experience} tone="raised">
      <ol className="timeline">
        {experience.map((entry) => (
          <li key={entry.id} className={`timeline__item${entry.placeholder ? ' is-placeholder' : ''}`}>
            <div className="timeline__meta">
              <p className="timeline__dates label">{entry.dates}</p>
              <p className="timeline__org">
                {entry.organization}
                {entry.placeholder && <PlaceholderBadge />}
              </p>
            </div>

            <div className="timeline__body">
              <h3 className="timeline__role">{entry.role}</h3>
              {entry.focus && (
                <p className="timeline__focus">
                  <span className="label">Research focus</span>
                  {entry.focus}
                </p>
              )}
              <div className="timeline__lists">
                {entry.responsibilities.length > 0 && (
                  <div>
                    <h4 className="label">Responsibilities</h4>
                    <ul>
                      {entry.responsibilities.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {entry.achievements.length > 0 && (
                  <div>
                    <h4 className="label">Achievements</h4>
                    <ul>
                      {entry.achievements.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
