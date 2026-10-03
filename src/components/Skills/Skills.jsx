import { sections } from '../../data/profile.js';
import { skillCategories } from '../../data/skills.js';
import Section from '../Section/Section.jsx';
import PlaceholderBadge from '../ui/PlaceholderBadge.jsx';
import './Skills.css';

export default function Skills() {
  return (
    <Section id="skills" meta={sections.skills} tone="raised">
      <div className="skills">
        {skillCategories.map((category) => (
          <section key={category.id} className="skills__group" aria-labelledby={`skills-${category.id}`}>
            <h3 id={`skills-${category.id}`} className="skills__title">
              {category.title}
            </h3>
            {category.items.length > 0 ? (
              <ul className="tag-list">
                {category.items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="tag tag--empty">
                Skills to be added
                <PlaceholderBadge />
              </p>
            )}
          </section>
        ))}
      </div>
    </Section>
  );
}
