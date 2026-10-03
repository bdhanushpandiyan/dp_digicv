import SectionHeader from '../SectionHeader/SectionHeader.jsx';

/**
 * Standard section shell: landmark, heading, container and one reveal block.
 * `meta` is an entry from `sections` in data/profile.js.
 */
export default function Section({ id, meta, tone, children }) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`section${tone === 'raised' ? ' section--raised' : ''}`}
    >
      <div className="container" data-reveal>
        <SectionHeader id={headingId} number={meta.number} title={meta.title} intro={meta.intro} />
        {children}
      </div>
    </section>
  );
}
