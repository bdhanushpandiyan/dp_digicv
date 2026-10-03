import { playPulseSound } from '../lib/sound.js';

export default function Methodology() {
  return (
    <section id="methodology" className="max-w-container-max mx-auto px-margin py-32">
        <div className="mb-24">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.3em]">Expertise Map</span>
            <h2 className="font-headline-md text-6xl mt-4">Technical Proficiency</h2>
        </div>
    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card p-8 rounded-[2rem] group h-full flex flex-col" onClick={playPulseSound}>
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-secondary text-3xl">magnification_small</span>
                </div>
                <h4 className="font-headline-md text-2xl mb-6">Microbiology</h4>
                <ul className="text-outline text-sm space-y-3 flex-1">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary/50"></div> Microbial Culture & Isolation</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary/50"></div> Aseptic & Staining Techniques</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary/50"></div> Biosafety & Lab Operations</li>
                </ul>
            </div>
    
            <div className="glass-card p-8 rounded-[2rem] group h-full flex flex-col md:mt-12" onClick={playPulseSound}>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-primary text-3xl">Dna</span>
                </div>
                <h4 className="font-headline-md text-2xl mb-6">Molecular Biology</h4>
                <ul className="text-outline text-sm space-y-3 flex-1">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div> PCR & Gel Electrophoresis (AGE)</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div> DNA/RNA Extraction</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div> SDS-PAGE & RFLP Analysis</li>
                </ul>
            </div>
    
            <div className="glass-card p-8 rounded-[2rem] group h-full flex flex-col" onClick={playPulseSound}>
                <div className="w-14 h-14 rounded-2xl bg-secondary-fixed/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-secondary-fixed text-3xl">precision_manufacturing</span>
                </div>
                <h4 className="font-headline-md text-2xl mb-6">Bioprocess Engineering</h4>
                <ul className="text-outline text-sm space-y-3 flex-1">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary-fixed/50"></div> Fermentation Probiotics</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary-fixed/50"></div> Prototype Design</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary-fixed/50"></div> Lab to Pilot Scale Up</li>
                </ul>
            </div>
    
            <div className="glass-card p-8 rounded-[2rem] group h-full flex flex-col lg:mt-12" onClick={playPulseSound}>
                <div className="w-14 h-14 rounded-2xl bg-primary-fixed/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-primary-fixed text-3xl">computer</span>
                </div>
                <h4 className="font-headline-md text-2xl mb-6">Computational Bio</h4>
                <ul className="text-outline text-sm space-y-3 flex-1">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-fixed/50"></div> Julia Programming</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-fixed/50"></div> Machine Learning Models</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-fixed/50"></div> Molecular Docking</li>
                </ul>
            </div>
    
            <div className="glass-card p-8 rounded-[2rem] group h-full flex flex-col" onClick={playPulseSound}>
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-secondary text-3xl">monitoring</span>
                </div>
                <h4 className="font-headline-md text-2xl mb-6">Diagnostics & Cell Bio</h4>
                <ul className="text-outline text-sm space-y-3 flex-1">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary/50"></div> Mammalian Cell Culture</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary/50"></div> ELISA & Immunoassays</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary/50"></div> Sample Preparation</li>
                </ul>
            </div>
    
            <div className="glass-card p-8 rounded-[2rem] group h-full flex flex-col lg:mt-12" onClick={playPulseSound}>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-primary text-3xl">hub</span>
                </div>
                <h4 className="font-headline-md text-2xl mb-6">Microbiome Research</h4>
                <ul className="text-outline text-sm space-y-3 flex-1">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div> Tumor & Oral Wash Profiling</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div> <i>Bacteroides fragilis</i> (<i>susD</i>) Analysis</li>
                </ul>
            </div>
        </div>
    </section>
  );
}
