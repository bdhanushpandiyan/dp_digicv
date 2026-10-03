import { achievements } from '../../data/achievements.js';
import './Achievements.css';

/** Achievements subsection, rendered inside the Experience section. */
export default function Achievements() {
  return (
    <section className="achievements" aria-labelledby="achievements-heading">
      <h3 id="achievements-heading" className="achievements__heading">
        Achievements
      </h3>
      <ol className="achievements__list">
        {achievements.map((item, i) => (
          <li key={item.id} className="achievements__item">
            <p className="achievements__index" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </p>
            <div>
              <p className="achievements__title">{item.title}</p>
              {item.details.length > 0 && (
                <dl className="achievements__details">
                  {item.details.map((d) => (
                    <div key={d.label}>
                      <dt className="label">{d.label}</dt>
                      <dd>{d.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
