import '../styles/services.css';

const services = [
  'Systemy rezerwacji',
  'Sklepy internetowe',
  'Panele i automatyzacje',
  'Strony',
  'Własne oprogramowanie i integracje',
];

export default function ServicesSection() {
  return (
    <section className="section section--light services" id="co-robie" data-guide="Co robię">
      <div className="services-header">
        <p className="label">Co robię</p>
      </div>
      <ul className="services-list">
        {services.map((item, i) => (
          <li key={item} className="services-item">
            <span className="services-item-number">{String(i + 1).padStart(2, '0')}</span>
            <span className="services-item-name">{item}</span>
            <span className="services-item-arrow" aria-hidden="true">→</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
