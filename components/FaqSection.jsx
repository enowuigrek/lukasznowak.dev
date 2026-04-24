'use client';

import { useState } from 'react';
import '../styles/faq.css';

const faqs = [
  {
    q: 'Ile trwa realizacja?',
    a: 'Strona firmowa zwykle 2–4 tygodnie, sklep 4–8 tygodni, aplikacja 6–12 tygodni — zależnie od zakresu. Konkretny termin podaję po pierwszej rozmowie i briefie. Nie biorę kilku projektów naraz, więc Twój ma pełną uwagę.',
  },
  {
    q: 'Jak wygląda płatność?',
    a: '30–50% zaliczki na start, reszta po wdrożeniu. Większe projekty mogę dzielić na transze rozliczane po milestone’ach. Faktura VAT.',
  },
  {
    q: 'Co jeśli w trakcie chcę coś zmienić?',
    a: 'To naturalne — projekty żyją. Drobne korekty mieszczą się w ustalonym zakresie. Większe zmiany kierunku (np. „dodajmy panel klienta, którego nie było w briefie”) wyceniam osobno przed startem, żebyś nie miał niespodzianek na fakturze.',
  },
  {
    q: 'Czy mogę sam edytować treści?',
    a: 'To zależy od projektu. Jeśli planujesz częste zmiany treści, mogę dodać prosty panel do edycji. Jeśli strona ma być raczej stała, często lepiej sprawdza się lżejsze rozwiązanie bez CMS-a — szybsze i tańsze w utrzymaniu.',
  },
  {
    q: 'Czy możesz przerobić istniejącą stronę?',
    a: 'Przeważnie wolę zaczynać od zera, bo to wychodzi szybciej i czyściej niż łatanie cudzego kodu. Wyjątki: jeśli strona jest świeża i dobrze napisana, mogę kontynuować. Powiedz co masz, ocenimy razem.',
  },
  {
    q: 'Co dostaję po zakończeniu projektu?',
    a: 'Wszystko: kod, dostęp do repozytorium, dokumentację, dane logowania do hostingu i domen. Bez vendor lock-in, bez „prywatnych frameworków”. Jutro możesz przekazać projekt komukolwiek innemu i będzie się czuł jak w domu.',
  },
  {
    q: 'Czy tworzysz strony od zera czy na gotowych rozwiązaniach?',
    a: 'Buduję od zera, bo wtedy projekt jest szybszy, lżejszy i dopasowany do konkretnego celu. Nie zaczynam od gotowego motywu — buduję rozwiązanie pod Twój biznes i zakres funkcji.',
  },
  {
    q: 'Czy podpiszesz NDA?',
    a: 'Tak, bez problemu — szczególnie przy projektach przed launchem. Możesz przesłać swój wzór albo skorzystać z mojego.',
  },
  {
    q: 'Czy możesz pomóc też z treściami, SEO albo zdjęciami?',
    a: 'Mam sprawdzone osoby, z którymi współpracuję — copywriterzy, fotografowie, specjaliści od SEO. Mogę podpiąć ich do projektu i koordynować, żebyś nie musiał zarządzać kilkoma freelancerami naraz.',
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState(null);

  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section className="section faq" id="faq" data-guide="FAQ">
      <p className="faq-label">Pytania</p>
      <h2 className="faq-heading">
        Co klienci pytają<br />najczęściej.
      </h2>

      <div className="faq-list">
        {faqs.length === 0 ? (
          <div className="faq-empty">
            <div className="faq-empty-glyph" aria-hidden="true">[ ? ]</div>
            <p className="faq-empty-title">Sekcja w przygotowaniu</p>
            <p className="faq-empty-text">
              Zbieram najczęstsze pytania od klientów. Jeśli masz pytanie o współpracę,
              wycenę albo proces — napisz śmiało, odpiszę szybciej niż FAQ tutaj się pojawi.
            </p>
            <a href="#kontakt" className="faq-empty-cta">Zadaj pytanie →</a>
          </div>
        ) : faqs.map((item, i) => (
          <div
            key={i}
            className={`faq-item ${open === i ? 'open' : ''}`}
          >
            <button
              type="button"
              className="faq-question"
              onClick={() => toggle(i)}
              aria-expanded={open === i}
            >
              <span className="faq-number">{String(i + 1).padStart(2, '0')}</span>
              <span className="faq-q-text">{item.q}</span>
              <span className="faq-toggle" aria-hidden="true">+</span>
            </button>
            <div className="faq-answer-wrap">
              <p className="faq-answer">{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
