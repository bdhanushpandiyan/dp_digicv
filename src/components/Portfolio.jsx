import { playPulseSound } from '../lib/sound.js';

export default function Portfolio() {
  return (
    <section id="portfolio" className="max-w-container-max mx-auto px-margin py-32">
        <div className="stagger-grid">
            <div className="col-span-12 lg:col-span-7 mb-12 lg:mb-0">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.3em] mb-6 block bioluminescent-glow">Executive Summary</span>
                <h3 className="font-headline-xl text-5xl md:text-6xl mb-12 leading-tight">Bridging Molecular Biology with Computational Precision</h3>
                
                <div className="font-body-lg text-on-surface-variant space-y-8 max-w-2xl">
                    <p className="leading-relaxed border-l-2 border-secondary/20 pl-8">Multidisciplinary researcher completing an MSc in Biotechnology at the Sri Ramachandra Institute of Higher Education and Research. Expertise encompasses advanced microbiology, molecular diagnostics (PCR, SDS-PAGE), and applying machine learning via Julia for bioinformatics.</p>
                    <p className="leading-relaxed border-l-2 border-primary/20 pl-8 opacity-80">Proven track record in complex research, including breast cancer microbiome profiling and predictive viral strain modeling. Dedicated to integrating wet-lab methodologies with data-driven insights to drive innovative bioprocessing and disease diagnostics.</p>
                </div>
            </div>
    
            <div className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-4 lg:pt-24">
                <div className="glass-card p-10 rounded-[2rem] depth-shadow flex flex-col justify-between h-64 lg:mt-12" onClick={playPulseSound}>
                    <div className="text-secondary font-headline-md text-4xl mb-1">SRIHER</div>
                    <div className="text-label-sm uppercase font-label-sm tracking-widest text-outline">APPLIED RESEARCH</div>
                </div>
                <div className="glass-card p-10 rounded-[2rem] depth-shadow flex flex-col justify-between h-64" onClick={playPulseSound}>
                    <div className="text-primary font-headline-md text-4xl mb-1">MSc</div>
                    <div className="text-label-sm uppercase font-label-sm tracking-widest text-outline">BIOTECHNOLOGY</div>
                </div>
                <div className="glass-card p-10 rounded-[2rem] depth-shadow flex flex-col justify-between h-64 lg:-mt-12" onClick={playPulseSound}>
                    <div className="text-secondary-fixed font-headline-md text-4xl mb-1">Yukti</div>
                    <div className="text-label-sm uppercase font-label-sm tracking-widest text-outline">NATIONAL INNOVATOR</div>
                </div>
                <div className="glass-card p-10 rounded-[2rem] depth-shadow flex flex-col justify-between h-64" onClick={playPulseSound}>
                    <div className="text-primary-fixed font-headline-md text-4xl mb-1">AI/ML</div>
                    <div className="text-label-sm uppercase font-label-sm tracking-widest text-outline">BIO-INTEGRATION</div>
                </div>
            </div>
        </div>
    </section>
  );
}
