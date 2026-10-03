import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import TestHero from './components/TestHero.jsx';
import LegacyHero from './components/LegacyHero.jsx';
import Portfolio from './components/Portfolio.jsx';
import Timeline from './components/Timeline.jsx';
import Methodology from './components/Methodology.jsx';
import Research from './components/Research.jsx';
import Honors from './components/Honors.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { useScrollReveal } from './hooks/useScrollReveal.js';

const debugCharacter = new URLSearchParams(window.location.search).has('debug');

export default function App() {
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
