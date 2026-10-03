import Icon from '../ui/Icon.jsx';
import PlaceholderBadge from '../ui/PlaceholderBadge.jsx';

/** One project. All fields come from data/projects.js. */
export default function ProjectCard({ project, areaTitle }) {
  const { title, description, methods, technologies, outcome, link, placeholder } = project;

  return (
    <article className={`project${placeholder ? ' is-placeholder' : ''}`}>
      <p className="project__area label">
        {areaTitle}
        {placeholder && <PlaceholderBadge />}
      </p>
      <h3 className="project__title">{title}</h3>
      <p className="project__description">{description}</p>

      <dl className="project__details">
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
                  <li key={t} className="tag tag--tech">
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
            <dd className="project__outcome">{outcome}</dd>
          </div>
        )}
      </dl>

      {link && (
        <a className="link-arrow project__link" href={link.href} target="_blank" rel="noopener noreferrer">
          {link.label}
          <Icon name="arrow-up-right" size={16} />
        </a>
      )}
    </article>
  );
}
