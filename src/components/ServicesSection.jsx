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
      <div className="fade-in">
        <div className="services-header">
          <span className="label">Co robię</span>
        </div>

        <div className="services-grid">
          {services.map(({ number, title }) => (
            <div className="service-tile" key={number}>
              <span className="service-number">{number}</span>
              <h3 className="service-title" data-text={title}>{title}</h3>
              <span className="service-arrow">↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
