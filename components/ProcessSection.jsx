'use client';

import '../styles/process.css';

const steps = [
  {
    number: '01',
    title: 'Rozmowa',
    description: 'Na początku rozmawiamy o tym, czego potrzebujesz i co chcesz osiągnąć. Sprawdzamy, czy dobrze się rozumiemy i czy to projekt, który warto realizować razem.',
  },
  {
    number: '02',
    title: 'Brief i wycena',
    description: 'Na podstawie rozmowy przygotowuję brief z zakresem, propozycją techniczną i wyceną. Dostajesz to na piśmie zanim cokolwiek podpiszesz.',
  },
  {
    number: '03',
    title: 'Umowa i zaliczka',
    description: 'Krótka umowa — zakres, terminy, prawa autorskie, gwarancja. Zaliczka 30-50% na start. Wszystko jasne zanim zaczynam pisać pierwszy wiersz kodu.',
  },
  {
    number: '04',
    title: 'Projektowanie i kod',
    description: 'Pracuję i na bieżąco pokazuję postępy — przez live demo, staging albo repozytorium. Żadnych niespodzianek na końcu.',
  },
  {
    number: '05',
    title: 'Demo i korekty',
    description: 'Udostępniam gotową wersję do oceny. Masz rundę korekt w cenie — zmiany mieszczące się w ustalonym zakresie projektu.',
  },
  {
    number: '06',
    title: 'Wdrożenie',
    description: 'Wgrywam na serwer, konfiguruję domenę, SSL, monitoring. Sprawdzam na urządzeniach mobilnych, tabletach i desktopie. Dopiero potem faktura końcowa.',
  },
];

export default function ProcessSection() {
  return (
    <section className="section process" id="proces" data-guide="Proces">
      <div className="process-header fade-in">
        <p className="label">Jak pracuję</p>
        <h2 className="process-heading">Od rozmowy<br />do wdrożenia.</h2>
        <p className="process-intro">
          Żadnych niespodzianek, żadnych niejasności. Zawsze wiesz co i kiedy się dzieje.
        </p>
      </div>

      <div className="process-steps">
        {steps.map((step, i) => (
          <div key={step.number} className="process-step">
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
