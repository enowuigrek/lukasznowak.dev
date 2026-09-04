'use client';

import Link from 'next/link';
import Logo from './Logo';
import '../styles/footer.css';

const navLinks = [
  { href: '/#co-robie', label: 'Co robię' },
  { href: '/#realizacje', label: 'Realizacje' },
  { href: '/#o-mnie', label: 'O mnie' },
  { href: '/#kontakt', label: 'Kontakt' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <Logo className="footer-logo-svg" />
            <p className="footer-location">Częstochowa · Polska</p>
          </div>

          {/* Nawigacja */}
          <div className="footer-col">
            <p className="footer-col-label">Nawigacja</p>
            <ul className="footer-links">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="footer-link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <span className="footer-copyright">© {year} Łukasz Nowak</span>
        </div>

      </div>
    </footer>
  );
}
