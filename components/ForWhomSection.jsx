import '../styles/for-whom.css';

const forWhom = [
  'Małe firmy i freelancerzy szukający pierwszej porządnej strony',
  'Firmy, które wiedzą, że ich strona zatrzymała się kilka lat temu',
  'Twórcy i autorzy z produktem do sprzedaży online',
  'Startupy potrzebujące MVP bez przepłacania agencji',
  'Firmy, którym nie podoba się własna strona, ale nie wiedzą dlaczego',
];

export default function ForWhomSection() {
  return (
    <section className="section for-whom" id="dla-kogo" data-guide="Dla kogo">
      <div className="for-whom-header fade-in">
        <p className="label">Klient</p>
        <h2 className="for-whom-heading">Dla kogo pracuję.</h2>
      </div>

      <ul className="for-whom-list">
        {forWhom.map((item, i) => (
          <li key={i} className="for-whom-item">
            <span className="for-whom-number">{String(i + 1).padStart(2, '0')}</span>
            <span className="for-whom-text">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
