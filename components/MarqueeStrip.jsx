import '../styles/marquee.css';

const services = [
  'Rezerwacje', 'E-commerce', 'Strony WWW', 'SEO',
  'Automatyzacje', 'Aplikacje webowe', 'Sklepy', 'Panele',
];

export default function MarqueeStrip() {
  // Duplikuj listę dla seamless loop
  const items = [...services, ...services];

  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-track">
        {items.map((label, i) => (
          <span key={i} className="marquee-item">
            {label}
            <span className="marquee-sep">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
