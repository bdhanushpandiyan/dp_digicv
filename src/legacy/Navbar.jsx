import { playPulseSound, playBioResonanceSound } from '../lib/sound.js';

export default function Navbar({ scrolled }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] px-6 py-8">
        <nav className={`max-w-7xl mx-auto flex justify-between items-center px-8 ${scrolled ? 'py-2 bg-surface/80' : 'py-3 bg-surface/40'} backdrop-blur-2xl rounded-full border border-outline-variant/10 shadow-2xl transition-all duration-300`}>
            <div className="font-headline-md text-xl font-bold tracking-tighter flex items-center gap-2 group cursor-pointer" onClick={playPulseSound}>
                <span className="w-2 h-2 rounded-full bg-secondary bioluminescent-glow"></span>
                <span className="text-primary group-hover:text-secondary transition-colors">DP_DigiCV</span>
            </div>
            <div className="hidden md:flex gap-10">
                <a href="#portfolio" className="nav-link relative font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-all" onClick={playPulseSound}>Portfolio</a>
                <a href="#research" className="nav-link relative font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-all" onClick={playPulseSound}>Research</a>
                <a href="#methodology" className="nav-link relative font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-all" onClick={playPulseSound}>Methodology</a>
                <a href="#contact" className="nav-link relative font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-all" onClick={playPulseSound}>Contact</a>
            </div>
            <a href="#contact" className="bg-secondary/10 hover:bg-secondary text-secondary hover:text-on-secondary px-6 py-2 rounded-full font-label-sm text-label-sm uppercase tracking-widest transition-all duration-300 border border-secondary/20 active:scale-95 inline-block" onClick={playBioResonanceSound}>
                Connect
            </a>
        </nav>
    </header>
  );
}
