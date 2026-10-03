import { profile, sections } from '../../data/profile.js';
import Section from '../Section/Section.jsx';
import Icon from '../ui/Icon.jsx';
import './Contact.css';

export default function Contact() {
  const { email, phone, linkedin, other } = profile.contact;

  // Only details supplied in the CV are rendered.
  const rows = [
    phone && { label: 'Phone', value: phone.display, href: `tel:${phone.tel}`, external: false },
    linkedin && { label: 'LinkedIn', value: linkedin.display, href: linkedin.href, external: true },
    ...other.map((o) => ({ label: o.label, value: o.label, href: o.href, external: true })),
  ].filter(Boolean);

  return (
    <Section id="contact" meta={sections.contact} tone="raised">
      <div className="contact">
        <a className="contact__email" href={`mailto:${email}`}>
          <span className="label">Email</span>
          <span className="contact__address">{email}</span>
        </a>

        <ul className="contact__rows">
          {rows.map((row) => (
            <li key={row.label}>
              <a
                href={row.href}
                {...(row.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <span className="contact__row-text">
                  <span className="label">{row.label}</span>
                  <span>{row.value}</span>
                </span>
                {row.external && <Icon name="arrow-up-right" size={18} />}
              </a>
            </li>
          ))}
          <li className="contact__location">
            <span className="label">Location</span>
            <span>{profile.location}</span>
          </li>
        </ul>
      </div>
    </Section>
  );
}
