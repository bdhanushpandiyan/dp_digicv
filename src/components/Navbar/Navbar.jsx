import { useCallback, useEffect, useRef, useState } from 'react';
import { navItems } from '../../data/profile.js';
import { useActiveSection } from '../../hooks/useActiveSection.js';
import Icon from '../ui/Icon.jsx';
import './Navbar.css';

const sectionIds = ['home', 'about', 'research', 'projects', 'experience', 'publications', 'skills', 'cv', 'contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);
  const menuButtonRef = useRef(null);
  const drawerRef = useRef(null);

  // Header gains a backdrop once the page scrolls (state flips only at the threshold).
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = useCallback(() => {
    setOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  // Drawer: lock scroll, Escape to close, keep Tab focus inside, close if the
  // viewport grows to the desktop layout.
  useEffect(() => {
    if (!open) return undefined;

    const drawer = drawerRef.current;
    const focusable = () =>
      drawer.querySelectorAll('a[href], button:not([disabled])');
    focusable()[0]?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeMenu();
      } else if (e.key === 'Tab') {
        const items = focusable();
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    const mql = window.matchMedia('(min-width: 900px)');
    const onChange = () => mql.matches && setOpen(false);

    document.addEventListener('keydown', onKeyDown);
    mql.addEventListener('change', onChange);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      mql.removeEventListener('change', onChange);
    };
  }, [open, closeMenu]);

  return (
    <>
      <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
        <div className="nav__inner container">
          <a className="nav__brand" href="#home" aria-label="DP_DigiCV, back to top">
            DP<span>_</span>DigiCV
          </a>

          <nav className="nav__links" aria-label="Primary">
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="nav__link"
                    aria-current={active === item.id ? 'location' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            ref={menuButtonRef}
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => (open ? closeMenu() : setOpen(true))}
          >
            <Icon name={open ? 'close' : 'menu'} size={22} />
          </button>
        </div>

      </header>

      {open && (
        <>
          <div className="nav__scrim" onClick={closeMenu} aria-hidden="true" />
          <div
            id="mobile-menu"
            ref={drawerRef}
            className="nav__drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <nav aria-label="Mobile">
              <ul>
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="nav__drawer-link"
                      aria-current={active === item.id ? 'location' : undefined}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
