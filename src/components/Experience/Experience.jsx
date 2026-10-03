import { sections } from '../../data/profile.js';
import { experience } from '../../data/experience.js';
import { asItem } from '../../lib/content.js';
import Achievements from '../Achievements/Achievements.jsx';
import Section from '../Section/Section.jsx';
import PlaceholderBadge from '../ui/PlaceholderBadge.jsx';
import './Experience.css';

function ItemList({ label, items }) {
  if (!items || items.length === 0) return null;
  return (
    <div>
      <h4 className="label">{label}</h4>
      <ul>
        {items.map((raw) => {
          const item = asItem(raw);
          return (
            <li key={item.text}>
              {item.text}
              {item.placeholder && <PlaceholderBadge />}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Experience() {
  return (
    <Section id="experience" meta={sections.experience} tone="raised">
      <ol className="timeline">
        {experience.map((entry) => (
          <li key={entry.id} className="timeline__item">
            <div className="timeline__meta">
              <p className="timeline__dates label">{entry.dates}</p>
              {entry.status && <p className="timeline__status">{entry.status}</p>}
              <p className="timeline__org">{entry.organization}</p>
            </div>

            <div className="timeline__body">
              <h3 className="timeline__role">{entry.role}</h3>
              {entry.focus && (
                <p className="timeline__focus">
                  <span className="label">{entry.focusLabel || 'Research focus'}</span>
                  {entry.focus}
                </p>
              )}
              {entry.details && entry.details.length > 0 && (
                <dl className="timeline__details">
                  {entry.details.map((d) => (
                    <div key={d.label}>
                      <dt className="label">{d.label}</dt>
                      <dd>{d.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
              <div className="timeline__lists">
                <ItemList label="Work" items={entry.responsibilities} />
                <ItemList label="Achievements" items={entry.achievements} />
              </div>
            </div>
          </li>
        ))}
      </ol>

      <Achievements />
    </Section>
  );
}
