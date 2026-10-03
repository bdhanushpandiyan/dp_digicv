import { profile, sections } from '../../data/profile.js';
import Section from '../Section/Section.jsx';
import Button from '../ui/Button.jsx';
import PlaceholderBadge from '../ui/PlaceholderBadge.jsx';
import './CV.css';

export default function CV() {
  const { summary, pdfUrl, viewUrl } = profile.cv;

  return (
    <Section id="cv" meta={sections.cv}>
      <div className="cv">
        <div className="cv__summary">
          <p className="label">Professional summary</p>
          <p className="cv__text">
            {summary.text}
            {summary.placeholder && <PlaceholderBadge />}
          </p>
        </div>

        <div className="cv__actions">
          {pdfUrl ? (
            <Button href={pdfUrl} variant="primary" icon="download" download>
              Download CV (PDF)
            </Button>
          ) : (
            <Button variant="primary" icon="download" disabled aria-describedby="cv-note">
              CV PDF unavailable
            </Button>
          )}
          {viewUrl && (
            <Button href={viewUrl} variant="ghost" icon="arrow-up-right" target="_blank" rel="noopener noreferrer">
              View online
            </Button>
          )}
          {!pdfUrl && (
            <p id="cv-note" className="cv__note">
              The CV PDF has not been added yet.
            </p>
          )}
        </div>
      </div>
    </Section>
  );
}
