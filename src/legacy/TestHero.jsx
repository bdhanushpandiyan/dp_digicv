import CursorCharacter from '../components/CursorCharacter/CursorCharacter.jsx';
import { characterRed } from '../data/characterConfig.js';

// TEMPORARY hero used only to verify the cursor-tracking character.
// Replaced by the real hero in a later phase.
//
// The canvas is full-bleed and the section uses the frames' dominant red, so
// the frame's background continues into the page without a visible box.
export default function TestHero({ debug = false }) {
  return (
    <section
      data-no-reveal
      className="relative overflow-hidden"
      style={{ backgroundColor: characterRed }}
    >
      <CursorCharacter debug={debug} />
      <div className="px-6 py-8 text-center text-white lg:absolute lg:bottom-[5vw] lg:left-[4vw] lg:p-0 lg:text-left">
        <h1 className="font-headline-md text-headline-md">Character test</h1>
        <p className="mt-2 font-label-sm text-label-sm uppercase tracking-widest text-white/70">
          Move your cursor
        </p>
      </div>
    </section>
  );
}
