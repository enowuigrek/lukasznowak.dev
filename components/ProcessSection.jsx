'use client';

import '../styles/process.css';

const steps = [
  {
    number: '01',
    title: 'PYTAM',
    description: '15 minut — opisujesz problem swoimi słowami. Nie każdy problem rozwiązuje strona. Jeśli nie Twój — powiem wprost i wskażę kierunek.',
  },
  {
    number: '02',
    title: 'ROZUMIEM',
    description: 'Zanim zacznę budować, uczę się Twojego biznesu. Twoje rzemiosło, Twoi klienci, Twój rytm pracy. Nie wchodzę z zewnątrz z ofertą. Wchodzę ze zrozumieniem.',
  },
  {
    number: '03',
    title: 'BUDUJĘ I ZOSTAJĘ',
    description: 'Strona gotowa — ale nie znikam. Zmiana tekstu, pytanie techniczne, nowy pomysł. Jestem dostępny. Odbiorę po ludzku.',
  },
];

export default function ProcessSection() {
  return (
    <section className="section process" id="proces" data-guide="Jak pracuję">
      <div className="process-header fade-in">
        <p className="label">Jak to działa</p>
      </div>

      <div className="process-steps">
        {steps.map((step, i) => (
          <div key={step.number} className="process-step slide-in-left" style={{ '--i': i }}>
            <div className="process-step-left">
              <span className="process-step-number">{step.number}</span>
              {i < steps.length - 1 && <div className="process-step-line" />}
            </div>
            <div className="process-step-content">
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-desc">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
