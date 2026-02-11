import { useEffect, useRef } from 'react';
import '../styles/services.css';

const services = [
  { number: '01', title: 'STRONY WWW' },
  { number: '02', title: 'E-COMMERCE' },
  { number: '03', title: 'AUTOMATYZACJE' },
  { number: '04', title: 'PROJEKTY WEBOWE' },
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
        {services.map(({ number, title }, index) => (
          <div className={`service-tile glitch-in stagger-${index + 1}`} key={number}>
            <span className="service-number">{number}</span>
            <h3
              className="service-title"
              data-text={title}
              ref={(el) => { titlesRef.current[index] = el; }}
            >
              {title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
