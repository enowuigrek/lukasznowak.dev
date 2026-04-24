import '../styles/testimonials.css';

const testimonials = [
  {
    quote: 'Łukasz dostarczył sklep na czas i dokładnie tak jak ustalaliśmy. Nie musiałem tłumaczyć dwa razy — rozumiał co chcę osiągnąć, nie tylko co powiedziałem.',
    name: 'Adam K.',
    context: 'Strzykawa Coffee Roastery',
  },
  {
    quote: 'Potrzebowałem prostego miejsca do sprzedaży książki bez miesięcznych opłat i prowizji. Łukasz zbudował dokładnie to — i zadziałało od pierwszego dnia.',
    name: 'Adrian Z.',
    context: 'Uknuta Magia',
  },
  {
    quote: 'Polecam każdemu kto szuka kogoś, kto pyta o cel a nie tylko o wygląd. Strona działa, klienci piszą — o to chodziło.',
    name: '— wkrótce —',
    context: 'Twoja opinia tutaj',
    placeholder: true,
  },
];

export default function TestimonialsSection() {
  const real = testimonials.filter((t) => !t.placeholder);

  return (
    <section className="section testimonials" id="referencje" data-guide="Referencje">
      <div className="testimonials-header fade-in">
        <p className="label">Referencje</p>
        <h2 className="testimonials-heading">Co mówią klienci.</h2>
      </div>

      <div className="testimonials-grid">
        {real.map((t, i) => (
          <div key={i} className="testimonial-card">
            <p className="testimonial-quote">„{t.quote}"</p>
            <div className="testimonial-author">
              <span className="testimonial-name">{t.name}</span>
              <span className="testimonial-context">{t.context}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
