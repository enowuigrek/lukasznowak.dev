'use client';

import Link from 'next/link';
import '../styles/footer.css';

const IconNextjs = () => (
  <svg viewBox="0 0 180 180" fill="none" aria-label="Next.js" className="footer-tech-icon">
    <path d="M149.508 157.52L69.142 54H54V125.97H66.284V71.3L141.638 166.845C144.395 163.891 147 160.793 149.508 157.52Z" fill="currentColor"/>
    <rect x="115" y="54" width="12" height="72" fill="currentColor"/>
  </svg>
);

const IconReact = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-label="React" className="footer-tech-icon">
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
    <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="currentColor" strokeWidth="1.2" fill="none"/>
    <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="currentColor" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="currentColor" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/>
  </svg>
);

const IconNetlify = () => (
  <svg viewBox="0 0 128 128" fill="none" aria-label="Netlify" className="footer-tech-icon">
    <path d="M79.4 55.1l-9.5-9.5 18.5-18.5 9.5 9.5-18.5 18.5zm-30.5 0L30.4 36.6l18.5-18.5 18.5 18.5-18.5 18.5zm15.3-5.6l-7.1-7.1 7.1-7.1 7.1 7.1-7.1 7.1zm16.9 46.8l7.1-7.1 7.1 7.1-7.1 7.1-7.1-7.1zm-33.8 0l7.1-7.1 7.1 7.1-7.1 7.1-7.1-7.1zM48.9 73.5H34.2v-19h14.7v19zm29.5 0H63.7v-19h14.7v19zM21.5 91.5L10 80l11.5-11.5 11.5 11.5-11.5 11.5zm85 0L95 80l11.5-11.5 11.5 11.5-11.5 11.5z" fill="currentColor"/>
  </svg>
);

const navLinks = [
  { href: '/#uslugi', label: 'Usługi' },
  { href: '/#projekty', label: 'Projekty' },
  { href: '/#cennik', label: 'Cennik' },
  { href: '/#kontakt', label: 'Kontakt' },
];

const socialLinks = [
  { href: 'https://github.com/enowuigrek', label: 'GitHub' },
  { href: 'https://linkedin.com/in/lukasznowak-dev', label: 'LinkedIn' },
  { href: 'https://useme.com/pl/roles/contractor/lukasz-nowak,631474/', label: 'Useme' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">LN</div>
            <p className="footer-name">Łukasz Nowak</p>
            <p className="footer-location">Częstochowa · Polska</p>
            <a href="mailto:kontakt@lukasznowak.dev" className="footer-email">
              kontakt@lukasznowak.dev
            </a>
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

          {/* Social */}
          <div className="footer-col">
            <p className="footer-col-label">Social</p>
            <ul className="footer-links">
              {socialLinks.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="footer-link footer-link-external" target="_blank" rel="noopener noreferrer">
                    {label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <span className="footer-copyright">© {year} Łukasz Nowak</span>
          <span className="footer-stack" aria-label="Next.js, React, Netlify">
            <IconNextjs />
            <IconReact />
            <IconNetlify />
          </span>
        </div>
      </div>
    </footer>
  );
}
