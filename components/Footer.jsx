import Link from 'next/link';
import '../styles/footer.css';

const navLinks = [
  { href: '/#uslugi', label: 'Usługi' },
  { href: '/#projekty', label: 'Projekty' },
  { href: '/#cennik', label: 'Cennik' },
  { href: '/#kontakt', label: 'Kontakt' },
];

const socialLinks = [
  { href: 'https://github.com/enowuigrek', label: 'GitHub' },
  { href: 'https://linkedin.com/in/lukasznowak-dev', label: 'LinkedIn' },
  { href: 'https://useme.com/pl/roles/contractor/lukasz-nowak,205949/', label: 'Useme' },
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
          <span className="footer-stack">Next.js · Netlify · Sanity</span>
        </div>
      </div>
    </footer>
  );
}
