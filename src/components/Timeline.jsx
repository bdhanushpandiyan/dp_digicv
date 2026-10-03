import { playBioResonanceSound } from '../lib/sound.js';

export default function Timeline() {
  return (
    <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-surface-container-low/50 -skew-y-3 origin-right"></div>
        
        <div className="max-w-container-max mx-auto px-margin relative z-10">
            <div className="mb-24">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.3em]">Timeline</span>
                <h2 className="font-headline-md text-6xl mt-4">Professional Evolution</h2>
            </div>
    
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="glass-card p-10 rounded-3xl border-l-4 border-l-secondary relative overflow-hidden group h-full flex flex-col" onClick={playBioResonanceSound}>
                    <div className="absolute -right-8 -top-8 w-32 h-32 bg-secondary/5 rounded-full blur-2xl group-hover:bg-secondary/10 transition-colors"></div>
                    <div className="flex items-center justify-between mb-8">
                        <span className="text-4xl font-headline-xl text-outline/20">01</span>
                        <time className="font-label-sm text-secondary px-4 py-1 border border-secondary/20 rounded-full">2024 - 2026</time>
                    </div>
                    <div className="mb-6 flex-1">
                        <span className="text-xs text-outline px-2 py-0.5 bg-surface-container rounded-full uppercase tracking-tighter mb-2 inline-block">Master's Degree</span>
                        <h4 className="font-headline-md text-2xl font-bold">MSc Biotechnology</h4>
                        <p className="text-primary font-body-md mt-1">Sri Ramachandra Institute of Higher Education and Research (SRIHER)</p>
                        <p className="text-outline font-body-md border-t border-outline-variant/10 pt-6 mt-6">Investigated the role of the <i>Bacteroides fragilis</i> (<i>susD</i> gene) in breast cancer-associated microbiome profiles and developed supervised machine learning models in Julia for viral strain prediction. Maintained an 8.54 CGPA.</p>
                    </div>
                    <div className="mt-4 progress-bar"><div className="progress-fill" style={{ width: '100%' }}></div></div>
                </div>
    
                <div className="glass-card p-10 rounded-3xl border-l-4 border-l-primary relative overflow-hidden group lg:mt-12 h-full flex flex-col" onClick={playBioResonanceSound}>
                    <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
                    <div className="flex items-center justify-between mb-8">
                        <span className="text-4xl font-headline-xl text-outline/20">02</span>
                        <time className="font-label-sm text-primary px-4 py-1 border border-primary/20 rounded-full">2024</time>
                    </div>
                    <div className="mb-6 flex-1">
                        <span className="text-xs text-outline px-2 py-0.5 bg-surface-container rounded-full uppercase tracking-tighter mb-2 inline-block">R&D Fellow</span>
                        <h4 className="font-headline-md text-2xl font-bold">Research & Development Fellow</h4>
                        <p className="text-secondary font-body-md mt-1">MakerGhat Foundation Incubation Program</p>
                        <p className="text-outline font-body-md border-t border-outline-variant/10 pt-6 mt-6">Designed and optimized prototypes of instant fermentation-based probiotic products, successfully scaling the process from laboratory to pilot scale during a 6-month incubation.</p>
                    </div>
                    <div className="mt-4 progress-bar"><div className="progress-fill" style={{ width: '100%' }}></div></div>
                </div>
    
                <div className="glass-card p-10 rounded-3xl border-l-4 border-l-secondary-fixed relative overflow-hidden group lg:mt-24 h-full flex flex-col" onClick={playBioResonanceSound}>
                    <div className="absolute -right-8 -top-8 w-32 h-32 bg-secondary-fixed/5 rounded-full blur-2xl group-hover:bg-secondary-fixed/10 transition-colors"></div>
                    <div className="flex items-center justify-between mb-8">
                        <span className="text-4xl font-headline-xl text-outline/20">03</span>
                        <time className="font-label-sm text-secondary-fixed px-4 py-1 border border-secondary-fixed/20 rounded-full">2021 - 2024</time>
                    </div>
                    <div className="mb-6 flex-1">
                        <span className="text-xs text-outline px-2 py-0.5 bg-surface-container rounded-full uppercase tracking-tighter mb-2 inline-block">Bachelor's Degree</span>
                        <h4 className="font-headline-md text-2xl font-bold">BSc Botany</h4>
                        <p className="text-primary-fixed font-body-md mt-1">Thiagarajar College (Autonomous)</p>
                        <p className="text-outline font-body-md border-t border-outline-variant/10 pt-6 mt-6">Graduated with a 9.06 CGPA (Third Rank Holder). Won the TC Yukti 2024 Innovation Contest for developing an instant ferment probiotic product. Recognized with the Academic Excellence Award.</p>
                    </div>
                    <div className="mt-4 progress-bar"><div className="progress-fill" style={{ width: '100%' }}></div></div>
                </div>
            </div>
        </div>
    </section>
  );
}
