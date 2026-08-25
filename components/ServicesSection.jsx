import '../styles/services.css';

const services = [
  'Systemy rezerwacji',
  'Sklepy internetowe',
  'Panele i automatyzacje',
  'Strony',
  'I to, co powtarzasz od nowa za każdym razem.',
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
