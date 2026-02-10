import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-copyright glitch-word" data-text={`\u00A9 ${new Date().getFullYear()} LUKASZ NOWAK`}>
        &copy; {new Date().getFullYear()} LUKASZ NOWAK
      </div>
    </footer>
  );
}
