import { sections } from '../../data/profile.js';
import { publications } from '../../data/publications.js';
import Section from '../Section/Section.jsx';
import Icon from '../ui/Icon.jsx';
import PlaceholderBadge from '../ui/PlaceholderBadge.jsx';
import './Publications.css';

function entryHref(entry) {
  if (entry.doi) return `https://doi.org/${entry.doi}`;
  return entry.url || null;
}

export default function Publications() {
  return (
    <Section id="publications" meta={sections.publications}>
      <ol className="pubs">
        {publications.map((entry) => {
          const href = entryHref(entry);
          return (
            <li key={entry.id} className={`pubs__item${entry.placeholder ? ' is-placeholder' : ''}`}>
              <p className="pubs__year label">{entry.year}</p>
              <div className="pubs__main">
                <h3 className="pubs__title">
                  {entry.title}
                  {entry.placeholder && <PlaceholderBadge />}
                </h3>
                <p className="pubs__authors">{entry.authors}</p>
                <p className="pubs__venue">{entry.venue}</p>
                {href && (
                  <a className="link-arrow pubs__link" href={href} target="_blank" rel="noopener noreferrer">
                    {entry.doi ? `DOI: ${entry.doi}` : 'View'}
                    <Icon name="arrow-up-right" size={16} />
                  </a>
                )}
              </div>
              <p className="pubs__type">
                <span className="tag">{entry.type}</span>
              </p>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
