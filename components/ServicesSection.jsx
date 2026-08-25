import '../styles/services.css';

const services = [
  'Systemy rezerwacji',
  'Sklepy internetowe',
  'Panele i automatyzacje',
  'Strony',
  'Narzędzia, które pracują kiedy Ty nie musisz.',
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
