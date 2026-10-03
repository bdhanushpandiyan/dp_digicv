import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Research from './components/Research/Research.jsx';
import Projects from './components/Projects/Projects.jsx';
import Experience from './components/Experience/Experience.jsx';
import Publications from './components/Publications/Publications.jsx';
import Skills from './components/Skills/Skills.jsx';
import CV from './components/CV/CV.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import { useReveal } from './hooks/useReveal.js';

export default function App() {
  useReveal();

  return (
    <div className="site">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Research />
        <Projects />
        <Experience />
        <Publications />
        <Skills />
        <CV />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
