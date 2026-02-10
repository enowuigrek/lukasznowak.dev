import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-services">
        PROJEKTY WEBOWE
        <span className="dot">•</span>
        STRONY
        <span className="dot">•</span>
        E-COMMERCE
        <span className="dot">•</span>
        AUTOMATYZACJE
      </div>
      <div className="footer-right">
        © {new Date().getFullYear()} ŁUKASZ NOWAK
      </div>
    </footer>
  );
}
