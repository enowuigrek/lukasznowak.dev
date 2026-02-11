import '../styles/services.css';

const services = [
  { number: '01', title: 'STRONY WWW' },
  { number: '02', title: 'E-COMMERCE' },
  { number: '03', title: 'AUTOMATYZACJE' },
  { number: '04', title: 'PROJEKTY WEBOWE' },
];

export default function ServicesSection() {
  return (
    <section className="section services" id="uslugi">
      <div className="services-header glitch-in">
        <span className="label">Co robię</span>
      </div>

      <div className="services-grid">
        {services.map(({ number, title }, index) => (
          <div className={`service-tile glitch-in stagger-${index + 1}`} key={number}>
            <span className="service-number">{number}</span>
            <h3 className="service-title" data-text={title}>{title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
