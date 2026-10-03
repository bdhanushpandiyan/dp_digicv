import { sections } from '../../data/profile.js';
import { researchAreas } from '../../data/research.js';
import Section from '../Section/Section.jsx';
import PlaceholderBadge from '../ui/PlaceholderBadge.jsx';
import './Research.css';

export default function Research() {
  return (
    <Section id="research" meta={sections.research} tone="raised">
      <ol className="research">
        {researchAreas.map((area, i) => (
          <li key={area.id} className="research__item">
            <article>
              <p className="research__index" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="research__title">{area.title}</h3>
              <p className="research__summary">
                {area.summary.text}
                {area.summary.placeholder && <PlaceholderBadge />}
              </p>
              {area.keywords.length > 0 && (
                <ul className="tag-list research__keywords" aria-label={`${area.title} keywords`}>
                  {area.keywords.map((k) => (
                    <li key={k} className="tag">
                      {k}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
