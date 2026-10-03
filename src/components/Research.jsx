import { playBioResonanceSound } from '../lib/sound.js';

export default function Research() {
  return (
    <section id="research" className="py-32">
        <div className="max-w-container-max mx-auto px-margin">
            <div className="mb-24 text-center">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.3em]">Select Research</span>
                <h2 className="font-headline-md text-6xl mt-4">Pioneering Bio-Computational Projects</h2>
            </div>
    
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-8 group relative overflow-hidden rounded-[2.5rem] h-[500px] cursor-pointer" onClick={playBioResonanceSound}>
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8CrdmPMh0lXm2buhmLYPW184n9hPsswKT4dkomJ5vmWYGs5d5oxqyOq_DD1H7I1Zcx7N_2H850Z_VgewqiXMk8ms3TJphMsQkg7U18he71F5RGNdKx6NbcstIPvd3T1WQPTXwQwXJOd5wBzJaD4Zw3Io0RtxGuFm7ar0BifbEtcWdgM92sTel_wzK18XSKAM7pPk4ryhxSFQja41EXT4m-18MAbcbdHMrfKusJI-m36y-vkkFW5B3zgX802y8NwjFqYOZVAhMLByG" alt="Tumor Microbiome Profiling" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-90"></div>
                    <div className="absolute bottom-0 left-0 p-12 w-full">
                        <div className="flex gap-2 mb-4">
                            <span className="text-[10px] font-label-sm uppercase bg-secondary/20 text-secondary border border-secondary/30 px-3 py-1 rounded-full">CLINICAL RESEARCH</span>
                            <span className="text-[10px] font-label-sm uppercase bg-secondary/20 text-secondary border border-secondary/30 px-3 py-1 rounded-full">METAGENOMICS</span>
                        </div>
                        <h4 className="font-headline-md text-4xl mb-4">Tumor Microbiome Profiling</h4>
                        <p className="text-outline max-w-xl">Investigated the role of <i>Bacteroides fragilis</i> (<i>susD</i> gene) in breast cancer-associated microbiome profiles utilizing tumor and oral wash samples.</p>
                    </div>
                </div>
    
                <div className="md:col-span-4 group relative overflow-hidden rounded-[2.5rem] h-[500px] cursor-pointer" onClick={playBioResonanceSound}>
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIV5pSmM2MJtPdsFc_1a425ZuowWiRtgqSU_ErXqsZcUkQ31fo2gqgsoUGUxDLGYQpcFAtEf45xHzbwTq5LfzZCZJ7EXFfy3286GNLP5yCP8uc7ZFTGKWck-GksPcNo2nSfPlgl8X6DceXrIt6A5jvBId4t3B38Z5ZVVIPw_Go3ti9PDCfhbZs48ZJT-7Jf7b9dCg_PpquVw3kNnpmkKxn1ek1zWIkpO7uaJxv8KE9WAc7DipOw5UXqQUm07ecVYpiXLv-X_L4PX8G" alt="Viral Strain Prediction" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-90"></div>
                    <div className="absolute bottom-0 left-0 p-10 w-full">
                        <div className="flex gap-2 mb-4 flex-wrap">
                            <span className="text-[10px] font-label-sm uppercase bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full">MACHINE LEARNING</span>
                            <span className="text-[10px] font-label-sm uppercase bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full">JULIA</span>
                        </div>
                        <h4 className="font-headline-md text-2xl mb-4 leading-tight">Viral Strain Prediction</h4>
                        <p className="text-outline text-sm">Developed a supervised machine learning model using physicochemical features of spike proteins for the epidemiological profiling of various viruses.</p>
                    </div>
                </div>
    
                <div className="md:col-span-12 group relative overflow-hidden rounded-[2.5rem] h-[400px] cursor-pointer" onClick={playBioResonanceSound}>
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx0fmQlVr5n4J9bFdbO39wTcjxnxeL-nlGK6iMGn4d1tC_fOBsCLvlJ8b99yKHKxT1vrwVpqDZlbDJvJf-kNXQa1NT9MoTWxnwUyp9VaCu-4vuu8uxh9-OegZzoPHkyL8AfqVmMzYoneoUjy_V2_cLqfG97bAzIMGeVU8rd_ULFi0oOJjQt2kAoY1vosMUVvUzvLj8Rozses5K78GhLfHW9LYbuMDy0n3ab6zKnLfD0xxKSoBTyldD0UrarL0CcqkvIA_9dgjaJe2S" alt="Probiotic Fermentation Scaling" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-r from-surface to-transparent opacity-95"></div>
                    <div className="absolute inset-0 flex flex-col justify-center p-12 max-w-2xl">
                        <div className="flex gap-2 mb-6">
                            <span className="text-[10px] font-label-sm uppercase bg-secondary-fixed/20 text-secondary-fixed border border-secondary-fixed/30 px-4 py-1 rounded-full">BIO-ENGINEERING</span>
                            <span className="text-[10px] font-label-sm uppercase bg-secondary-fixed/20 text-secondary-fixed border border-secondary-fixed/30 px-4 py-1 rounded-full">YUKTI WINNER</span>
                        </div>
                        <h4 className="font-headline-md text-4xl mb-6">Probiotic Fermentation Scaling</h4>
                        <p className="text-outline font-body-md">Designed and optimized instant fermentation-based probiotic prototypes, successfully scaling the process from laboratory to pilot production.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
