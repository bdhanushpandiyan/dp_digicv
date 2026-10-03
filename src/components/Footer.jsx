export default function Footer() {
  return (
    <footer className="py-12 border-t border-outline-variant/5 bg-surface-container-lowest/30 backdrop-blur-md">
        <div className="max-w-container-max mx-auto px-margin flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-headline-md text-xl font-bold text-primary tracking-tighter">DP_DigiCV</div>
            
            <div className="font-label-sm text-[10px] text-outline/60 tracking-[0.2em] uppercase text-center md:text-right">
                © 2026 Dhanush Pandiyan Balakrishnan.<br className="block md:hidden" /> All Rights Reserved.
            </div>
        </div>
    </footer>
  );
}
