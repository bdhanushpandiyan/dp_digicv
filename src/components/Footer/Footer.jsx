import { profile } from '../../data/profile.js';
import Icon from '../ui/Icon.jsx';
import './Footer.css';

export default function Footer() {
  const { name } = profile;
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          © {new Date().getFullYear()} {name.given} {name.middle} {name.family}. All Rights Reserved.
        </p>
        <a className="footer__top" href="#home">
          Back to top
          <Icon name="arrow-up" size={16} />
        </a>
      </div>
    </footer>
  );
}
