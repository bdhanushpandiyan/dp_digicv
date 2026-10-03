import { profile, sections } from '../../data/profile.js';
import Section from '../Section/Section.jsx';
import Icon from '../ui/Icon.jsx';
import PlaceholderBadge from '../ui/PlaceholderBadge.jsx';
import './Contact.css';

export default function Contact() {
  const { email, linkedin, github, other, intro } = profile.contact;

  // Only links that have been supplied are rendered.
  const links = [
    linkedin && { label: 'LinkedIn', href: linkedin },
    github && { label: 'GitHub', href: github },
    ...other,
  ].filter(Boolean);

  return (
    <Section id="contact" meta={sections.contact} tone="raised">
      <div className="contact">
        <div>
          <p className="contact__intro">
            {intro.text}
            {intro.placeholder && <PlaceholderBadge />}
          </p>
          <a className="contact__email" href={`mailto:${email}`}>
            <span className="label">Email</span>
            <span className="contact__address">{email}</span>
          </a>
        </div>

        <ul className="contact__links" aria-label="Professional links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <span>{link.label}</span>
                <Icon name="arrow-up-right" size={18} />
              </a>
            </li>
          ))}
          <li className="contact__location">
            <span className="label">Based in</span>
            <span>{profile.location}</span>
          </li>
        </ul>
      </div>
    </Section>
  );
}
