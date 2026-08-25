import '../styles/services.css';

const services = [
  'Systemy rezerwacji, sklepy, strony, panele i automatyzacje.',
  'Przejmuję to, co odciąga Cię od tego, co naprawdę robisz.',
];

export default function ServicesSection() {
  return (
    <section className="section section--light services" id="co-robie" data-guide="Co robię">
      <div className="services-header">
        <p className="label">Co robię</p>
      </div>
      <ul className="services-list">
        {services.map((item) => (
          <li key={item} className="services-item">{item}</li>
        ))}
      </ul>
    </section>
  );
}
