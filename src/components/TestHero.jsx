import CursorCharacter from './CursorCharacter.jsx';

// TEMPORARY hero used only to verify the cursor-tracking character.
// Replaced by the real hero in a later phase.
export default function TestHero({ debug = false }) {
  return (
    <section
      data-no-reveal
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-16"
    >
      <CursorCharacter className="max-w-[720px] rounded-3xl overflow-hidden" debug={debug} />
      <h1 className="mt-8 font-headline-md text-headline-md text-on-surface">Character test</h1>
      <p className="mt-2 font-label-sm text-label-sm uppercase tracking-widest text-outline">
        Move your cursor
      </p>
    </section>
  );
}
