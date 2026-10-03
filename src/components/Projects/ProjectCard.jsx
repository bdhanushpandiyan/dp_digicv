import { asItem } from '../../lib/content.js';
import Icon from '../ui/Icon.jsx';
import PlaceholderBadge from '../ui/PlaceholderBadge.jsx';

/** One project. All fields come from data/projects.js; empty fields are not shown. */
export default function ProjectCard({ project, areaTitle }) {
  const { title, status, supervisor, institution, methods = [], technologies = [], outcome, link } = project;
  const description = asItem(project.description);

  const facts = [
    supervisor && { label: 'Supervisor', value: supervisor },
    institution && { label: 'Institution', value: institution },
  ].filter(Boolean);

  return (
    <article className="project">
      <p className="project__area label">{project.areaLabel || areaTitle}</p>
      <h3 className="project__title">{title}</h3>
      {status && (
        <p className="project__status">
          <span className="tag tag--status">{status}</span>
        </p>
      )}
      {description && (
        <p className="project__description">
          {description.text}
          {description.placeholder && <PlaceholderBadge />}
        </p>
      )}

      {(facts.length > 0 || methods.length > 0 || technologies.length > 0 || outcome) && (
        <dl className="project__details">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="label">{fact.label}</dt>
              <dd className="project__fact">{fact.value}</dd>
            </div>
          ))}
          {methods.length > 0 && (
            <div>
              <dt className="label">Methods</dt>
              <dd>
                <ul className="tag-list">
                  {methods.map((m) => (
                    <li key={m} className="tag">
                      {m}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          )}
          {technologies.length > 0 && (
            <div>
              <dt className="label">Technologies</dt>
              <dd>
                <ul className="tag-list">
                  {technologies.map((t) => (
                    <li key={t} className="tag">
                      {t}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          )}
          {outcome && (
            <div>
              <dt className="label">Outcome</dt>
              <dd className="project__fact">{outcome}</dd>
            </div>
          )}
        </dl>
      )}

      {link && (
        <a className="link-arrow project__link" href={link.href} target="_blank" rel="noopener noreferrer">
          {link.label}
          <Icon name="arrow-up-right" size={16} />
        </a>
      )}
    </article>
  );
}
