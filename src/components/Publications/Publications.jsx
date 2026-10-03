import { sections } from '../../data/profile.js';
import { publicationGroups } from '../../data/publications.js';
import Section from '../Section/Section.jsx';
import Icon from '../ui/Icon.jsx';
import './Publications.css';

function entryHref(entry) {
  if (entry.doi) return `https://doi.org/${entry.doi}`;
  return entry.url || null;
}

function Entry({ entry }) {
  const href = entryHref(entry);
  const badge = entry.status || entry.type;
  return (
    <li className="pubs__item">
      <p className="pubs__year label">
        {entry.year || <span aria-hidden="true">—</span>}
        {!entry.year && <span className="sr-only">Year not supplied</span>}
      </p>
      <div className="pubs__main">
        <h4 className="pubs__title">{entry.title}</h4>
        {entry.authors && <p className="pubs__authors">{entry.authors}</p>}
        {entry.venue && <p className="pubs__venue">{entry.venue}</p>}
        {href && (
          <a className="link-arrow pubs__link" href={href} target="_blank" rel="noopener noreferrer">
            {entry.doi ? `DOI: ${entry.doi}` : 'View'}
            <Icon name="arrow-up-right" size={16} />
          </a>
        )}
      </div>
      {badge && (
        <p className="pubs__type">
          <span className="tag">{badge}</span>
        </p>
      )}
    </li>
  );
}

export default function Publications() {
  return (
    <Section id="publications" meta={sections.publications}>
      <div className="pubs">
        {publicationGroups.map((group) => (
          <section key={group.id} className="pubs__group" aria-labelledby={`pubs-${group.id}`}>
            <h3 id={`pubs-${group.id}`} className="pubs__heading">
              {group.heading}
            </h3>
            {group.entries.length > 0 ? (
              <ol>
                {group.entries.map((entry) => (
                  <Entry key={entry.id} entry={entry} />
                ))}
              </ol>
            ) : (
              <p className="pubs__empty">{group.emptyNote}</p>
            )}
          </section>
        ))}
      </div>
    </Section>
  );
}
