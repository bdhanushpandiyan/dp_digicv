import { playBioResonanceSound } from '../lib/sound.js';

export default function Honors() {
  return (
    <section className="max-w-container-max mx-auto px-margin py-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col justify-center mb-8 md:mb-0">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.3em] mb-4">Distinctions</span>
                <h2 className="font-headline-md text-4xl">Honors & Certifications</h2>
            </div>
            
            <div className="glass-card p-8 rounded-3xl text-center border-b-4 border-b-secondary group" onClick={playBioResonanceSound}>
                <span className="material-symbols-outlined text-secondary text-5xl mb-6 group-hover:rotate-12 transition-transform">workspace_premium</span>
                <h5 className="font-label-sm text-on-surface uppercase mb-2 tracking-widest leading-relaxed">NPTEL Elite Scholar</h5>
                <p className="text-xs text-outline mt-1">Food Microbiology (IIT Kharagpur)</p>
            </div>
            
            <div className="glass-card p-8 rounded-3xl text-center border-b-4 border-b-primary group md:mt-12" onClick={playBioResonanceSound}>
                <span className="material-symbols-outlined text-primary text-5xl mb-6 group-hover:-rotate-12 transition-transform">emoji_events</span>
                <h5 className="font-label-sm text-on-surface uppercase mb-2 tracking-widest leading-relaxed">Yukti 2024 Winner</h5>
                <p className="text-xs text-outline mt-1">National Innovation Contest</p>
            </div>
            
            <div className="glass-card p-8 rounded-3xl text-center border-b-4 border-b-secondary group md:mt-24" onClick={playBioResonanceSound}>
                <span className="material-symbols-outlined text-secondary text-5xl mb-6 group-hover:scale-110 transition-transform">record_voice_over</span>
                <h5 className="font-label-sm text-on-surface uppercase mb-2 tracking-widest leading-relaxed">SRM Conference</h5>
                <p className="text-xs text-outline mt-1">Oral Presenter</p>
            </div>
        </div>
    </section>
  );
}
