import { useEffect, useRef } from 'react';
import '../styles/services.css';

const services = [
  {
    number: '01',
    title: 'STRONY WWW',
    description: 'Projektuję i koduję strony, które przyciągają klientów, budują zaufanie i przekonują do działania. Szybkie, czytelne i z charakterem Twojej marki. Wizytówka firmy, landing page, portfolio — bez szablonów, bez page builderów, od zera.',
    example: 'Prowadzisz gabinet, studio albo firmę usługową i klienci Cię nie znajdują? Potrzebujesz strony, która pokaże czym się zajmujesz i przekona do kontaktu. Od tego zaczynam.',
  },
  {
    number: '02',
    title: 'E-COMMERCE',
    description: 'Sklepy internetowe, które nie tylko wyglądają — sprzedają. Buduję na Shopify z własnym frontendem i dbam o to, żeby ścieżka klienta była prosta: od produktu do koszyka, od koszyka do płatności. Bez zgubienia się po drodze.',
    example: 'Masz produkt i chcesz go sprzedawać online — kawę, książkę, rękodzieło? Postawię Ci sklep, w którym Twój klient kupi w 3 kliknięcia, a Ty będziesz zarządzać zamówieniami bez bólu głowy.',
  },
  {
    number: '03',
    title: 'APLIKACJE WEBOWE',
    description: 'Buduję aplikacje webowe — od prostych narzędzi po rozbudowane panele z bazą danych, logowaniem i integracjami z AI. Działają w przeglądarce i na telefonie.',
    example: 'Masz pomysł na narzędzie, które ułatwi Ci pracę albo da wartość Twoim klientom? Tracker, dashboard, system do zarządzania — powiedz co chcesz osiągnąć, a ja zbuduję to od zera.',
  },
];

export default function ServicesSection() {
  const titlesRef = useRef([]);
  const activeTimers = useRef(new Set());

  // Losowy auto-glitch na tytułach usług — jak krótki hover
  useEffect(() => {
    const timers = activeTimers.current;

    const scheduleGlitch = (el) => {
      const delay = 3000 + Math.random() * 5000;
      const id = setTimeout(() => {
        timers.delete(id);
        // Dodaj auto-glitch
        el.classList.add('auto-glitch');

        // Usuń po 400ms i zaplanuj następny
        const removeId = setTimeout(() => {
          timers.delete(removeId);
          el.classList.remove('auto-glitch');
          scheduleGlitch(el);
        }, 400);
        timers.add(removeId);
      }, delay);
      timers.add(id);
    };

    titlesRef.current.forEach((el) => {
      if (!el) return;
      scheduleGlitch(el);
    });

    return () => {
      timers.forEach(clearTimeout);
      timers.clear();
    };
  }, []);

  return (
    <section className="section services" id="uslugi">
      <div className="services-header glitch-in">
        <span className="label" data-text="Co robię">Co robię</span>
      </div>

      <div className="services-grid">
        {services.map(({ number, title, description, example }, index) => (
          <div className={`service-tile glitch-in stagger-${index + 1}`} key={number}>
            <span className="service-number">{number}</span>
            <h3
              className="service-title"
              data-text={title}
              ref={(el) => { titlesRef.current[index] = el; }}
            >
              {title}
            </h3>
            <p className="service-description">{description}</p>
            <p className="service-example">{example}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
