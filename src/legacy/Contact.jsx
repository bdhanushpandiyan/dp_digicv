import { playPulseSound, playBioResonanceSound } from '../lib/sound.js';

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-margin">
            <div className="glass-card rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden depth-shadow" onClick={playBioResonanceSound}>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
                
                <h2 className="font-headline-md text-5xl md:text-6xl mb-8 leading-tight">Let's Synthesize Something Great</h2>
                <p className="font-body-lg text-outline mb-16 max-w-xl mx-auto">Open for research collaborations, PhD opportunities, and innovative R&D roles.</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    <a href="mailto:b.dhanushpandiyan@gmail.com" className="flex items-center gap-4 bg-surface/50 p-6 rounded-2xl hover:bg-secondary/10 hover:border-secondary/20 border border-transparent transition-all group overflow-hidden" onClick={(e) => { e.stopPropagation(); playPulseSound(); }}>
                        <div className="w-12 h-12 rounded-xl bg-secondary/10 flex-shrink-0 flex items-center justify-center text-secondary">
                            <span className="material-symbols-outlined">mail</span>
                        </div>
                        <div className="text-left min-w-0">
                            <div className="text-xs uppercase text-outline tracking-widest">Email Me</div>
                            <div className="font-body-md text-sm group-hover:text-secondary transition-colors truncate">b.dhanushpandiyan@gmail.com</div>
                        </div>
                    </a>
                    
                    <div className="flex items-center gap-4 bg-surface/50 p-6 rounded-2xl border border-transparent" onClick={(e) => { e.stopPropagation(); playPulseSound(); }}>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined">location_on</span>
                        </div>
                        <div className="text-left min-w-0">
                            <div className="text-xs uppercase text-outline tracking-widest">Based In</div>
                            <div className="font-body-md text-sm truncate">Madurai, Tamil Nadu, India</div>
                        </div>
                    </div>
                </div>
    
                <div className="flex justify-center gap-8">
                    <a href="https://linkedin.com/in/dhanushpandiyanb" target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex items-center justify-center rounded-full bg-surface border border-outline-variant/30 hover:border-secondary hover:text-secondary transition-all hover:scale-110" onClick={(e) => { e.stopPropagation(); playPulseSound(); }}>
                        <span className="material-symbols-outlined">link</span>
                    </a>
                    <a href="#" className="w-14 h-14 flex items-center justify-center rounded-full bg-surface border border-outline-variant/30 hover:border-secondary hover:text-secondary transition-all hover:scale-110" onClick={(e) => { e.stopPropagation(); playPulseSound(); }}>
                        <span className="material-symbols-outlined">share</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
  );
}
