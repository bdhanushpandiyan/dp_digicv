import { playBioResonanceSound } from '../lib/sound.js';

export default function LegacyHero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
        <div className="relative group" onClick={playBioResonanceSound}>
            <div className="absolute inset-0 bg-secondary rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
            <div className="relative z-10 p-1 rounded-full bg-gradient-to-tr from-secondary/40 to-transparent">
                <img src="assets/profile.png" alt="Dhanush Pandiyan Balakrishnan" className="w-56 h-56 md:w-80 md:h-80 rounded-full object-cover object-top bg-surface grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-secondary/10 rounded-full animate-[spin_20s_linear_infinite] pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-primary/5 rounded-full animate-[spin_30s_linear_infinite_reverse] pointer-events-none"></div>
        </div>
    
        <div className="mt-12 text-center max-w-4xl">
            <h1 className="font-headline-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 tracking-tighter text-on-surface whitespace-nowrap">Dhanush Pandiyan Balakrishnan</h1>
            <h2 className="font-headline-md text-headline-md text-secondary mb-6 font-light">Researcher</h2>
            
            <div className="flex flex-wrap justify-center gap-4 text-outline font-body-lg">
                <span className="px-4 py-1 rounded-full border border-outline-variant/30 text-sm">Molecular Techniques</span>
                <span className="px-4 py-1 rounded-full border border-outline-variant/30 text-sm">Bioprocess Engineering</span>
                <span className="px-4 py-1 rounded-full border border-outline-variant/30 text-sm">Machine Learning</span>
                <span className="px-4 py-1 rounded-full border border-outline-variant/30 text-sm">Bioinformatics</span>
            </div>
        </div>
    
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <div className="w-px h-24 bg-gradient-to-b from-secondary to-transparent"></div>
        </div>
    </section>
  );
}
