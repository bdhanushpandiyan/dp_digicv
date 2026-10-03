import { useEffect, useState } from 'react';
import Navbar from './Navbar.jsx';
import TestHero from './TestHero.jsx';
import LegacyHero from './LegacyHero.jsx';
import Portfolio from './Portfolio.jsx';
import Timeline from './Timeline.jsx';
import Methodology from './Methodology.jsx';
import Research from './Research.jsx';
import Honors from './Honors.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import { useScrollReveal } from './useScrollReveal.js';

const debugCharacter = new URLSearchParams(window.location.search).has('debug');

export default function LegacyApp() {
  const [scrolled, setScrolled] = useState(false);
  useScrollReveal();

  // Navbar shrink: state only flips when crossing the threshold.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="floating-bg">
        <div className="orb bg-secondary w-96 h-96 top-1/4 -left-20"></div>
        <div className="orb bg-primary w-[500px] h-[500px] bottom-1/4 -right-20" style={{ animationDelay: '-5s' }}></div>
        <div className="orb bg-surface-container-highest w-80 h-80 top-1/2 left-1/2" style={{ animationDelay: '-10s' }}></div>
      </div>

      <Navbar scrolled={scrolled} />

      <main className="relative z-10">
        <TestHero debug={debugCharacter} />
        <LegacyHero />
        <Portfolio />
        <Timeline />
        <Methodology />
        <Research />
        <Honors />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
