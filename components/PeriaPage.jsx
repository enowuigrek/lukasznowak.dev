'use client';

import { useState } from 'react';
import GlitchText from './GlitchText';
import ProjectPageLayout from './ProjectPageLayout';

const features = [
  {
    number: '01',
    title: 'PO PROSTU MÓW — PERIA ZAPISUJE',
    description:
      'Urywki, pomysły, refleksje — wszystko ląduje w\u00A0jednym miejscu. Żadnego pisania, żadnego organizowania.',
  },
  {
    number: '02',
    title: 'ZAZNACZ I IDŹ DALEJ',
    description:
      'Prosta lista rzeczy do zrobienia. Bez projektów, bez tablic, bez drag\u00A0&\u00A0drop. Dodajesz, odhaczasz, idziesz dalej.',
  },
  {
    number: '03',
    title: 'PERIA ROZUMIE KIEDY I CO',
    description:
      'Mówisz \u201Espotkanie z\u00A0Markiem w\u00A0piątek o\u00A015\u201D — Peria tworzy wydarzenie z\u00A0datą i\u00A0opisem. Bez formularzy.',
  },
];

const installSteps = {
  ios: [
    'Otwórz Perię w\u00A0Safari (link znajdziesz poniżej)',
    'Kliknij ikonę udostępniania (kwadrat ze strzałką)',
    'Wybierz \u201EDodaj do ekranu początkowego\u201D',
    'Gotowe — Peria pojawi się jako ikona na Twoim ekranie',
  ],
  android: [
    'Otwórz Perię w\u00A0Chrome (link znajdziesz poniżej)',
    'Kliknij menu (trzy kropki) w\u00A0prawym górnym rogu',
    'Wybierz \u201EZainstaluj aplikację\u201D lub \u201EDodaj do ekranu głównego\u201D',
    'Gotowe — Peria działa jak natywna aplikacja',
  ],
};

export default function PeriaPage() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const lightbox = lightboxImage ? (
    <div className="lightbox" onClick={() => setLightboxImage(null)}>
      <img src={lightboxImage} alt="Powiększony screenshot" className="lightbox-image" />
    </div>
  ) : null;

  return (
    <ProjectPageLayout slug="peria" overlay={lightbox}>
      {/* Hero */}
      <section className="project-page-hero">
        <div className="fade-in">
          <GlitchText text="PERIA" as="h1" className="project-page-title" />
          <p className="peria-tagline">
            Powiedz jedno zdanie. Peria zrobi z&nbsp;niego listę, notatkę i&nbsp;wydarzenie.
          </p>
          <p className="peria-intro">
            Głosem. Bez pisania, bez organizowania. Mówisz — ona rozumie i&nbsp;dzieli na części.
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="peria-section glitch-in">
        <div className="peria-section-label slide-in-left">
          <h2 className="label" data-text="Historia">Historia</h2>
        </div>
        <p className="peria-text">
          Najlepsze pomysły nie przychodzą przy biurku. Przychodzą na spacerze, pod prysznicem, w&nbsp;korku, tuż przed snem — wtedy, gdy umysł odpuszcza. Problem w&nbsp;tym, że równie szybko znikają. Peria powstała dokładnie z&nbsp;tego powodu. Żeby złapać to, co umyka — zanim umknie.
        </p>
      </section>

      {/* Skąd nazwa? */}
      <section className="peria-section section-light glitch-in">
        <div className="peria-section-label slide-in-left">
          <h2 className="label" data-text="Skąd nazwa?">Skąd nazwa?</h2>
        </div>
        <p className="peria-text">
          Arystoteles uczył chodząc. Jego szkoła filozoficzna nazywała się perypatetyczną — od greckiego <em>peripatein</em>, czyli spacerować. Wierzył, że ruch ciała uwalnia umysł. Peria to nawiązanie do tego stanu — chwili między ruchem a&nbsp;refleksją, kiedy myśl pojawia się sama, bez wysiłku, bo przestajesz jej szukać.
        </p>
      </section>

      {/* Co robi Peria? */}
      <section className="peria-section glitch-in">
        <div className="peria-section-label slide-in-left">
          <h2 className="label" data-text="Co robi Peria?">Co robi Peria?</h2>
        </div>
        <p className="peria-text">
          Mówisz jedną rzecz — Peria rozbija ją na kategorie. Jedna głosówka. Trzy osobne rzeczy. Gotowe.
        </p>
        <p className="peria-text" style={{marginTop: '1rem', opacity: 0.75}}>
          Na przykład: <em>„Muszę zadzwonić do Marka w&nbsp;sprawie projektu, kupić kawę i&nbsp;mleko, i&nbsp;mam spotkanie w&nbsp;czwartek o&nbsp;10"</em> — Peria tworzy notatkę, checklistę zakupów i&nbsp;wydarzenie w&nbsp;kalendarzu.
        </p>

        <div className="peria-screenshots">
          <img
            src="/screenshots/peria/peria-voice-input.png"
            alt="Peria — ekran nagrywania głosowego z przyciskiem mikrofonu"
            className="peria-screenshot"
            onClick={() => setLightboxImage('/screenshots/peria/peria-voice-input.png')}
          />
          <img
            src="/screenshots/peria/peria-split-result.png"
            alt="Peria — wynik rozpoznawania: notatka, lista zadań i wydarzenie w kalendarzu"
            className="peria-screenshot"
            onClick={() => setLightboxImage('/screenshots/peria/peria-split-result.png')}
          />
        </div>

        <div className="peria-features-grid">
          {features.map(({ number, title, description }) => (
            <div className="peria-feature" key={number}>
              <span className="peria-feature-number">{number}</span>
              <h3 className="peria-feature-title">{title}</h3>
              <p className="peria-feature-description">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Filozofia */}
      <section className="peria-section section-light glitch-in">
        <div className="peria-section-label slide-in-left">
          <h2 className="label" data-text="Filozofia">Filozofia</h2>
        </div>
        <p className="peria-text">
          Peria nie każe Ci organizować. Nie ma folderów, tagów, kategorii. Mówisz — ona zapisuje. Wszystko trafia w&nbsp;jedno miejsce, posortowane chronologicznie. Myśl nie powinna wymagać decyzji, gdzie ją włożyć.
        </p>
        <blockquote className="peria-blockquote">
          Myśl jest wartościowa w&nbsp;momencie, w&nbsp;którym się pojawia. Nie wtedy, gdy znajdziesz na nią folder.
        </blockquote>
      </section>

      {/* Jak zainstalować? */}
      <section className="peria-section glitch-in">
        <div className="peria-section-label slide-in-left">
          <h2 className="label" data-text="Jak zainstalować?">Jak zainstalować?</h2>
        </div>
        <p className="peria-install-intro">
          Peria to aplikacja PWA — działa w&nbsp;przeglądarce, ale możesz ją zainstalować na telefonie jak zwykłą aplikację. Bez App Store, bez Google Play.
        </p>

        <div className="peria-install-grid">
          <div className="peria-install-card">
            <h3 className="peria-install-platform">iOS (Safari)</h3>
            <ol className="peria-install-steps">
              {installSteps.ios.map((step, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: step }} />
              ))}
            </ol>
            <div className="peria-install-screenshots">
              <img
                src="/screenshots/peria/peria-ios-install-1.png"
                alt="iOS Safari — menu udostępniania, krok 1 instalacji Peria PWA na iPhone"
                className="peria-install-screenshot"
              />
              <img
                src="/screenshots/peria/peria-ios-install-2.png"
                alt="iOS Safari — opcja Dodaj do ekranu głównego, krok 2 instalacji Peria PWA"
                className="peria-install-screenshot"
              />
            </div>
          </div>

          <div className="peria-install-card">
            <h3 className="peria-install-platform">Android (Chrome)</h3>
            <ol className="peria-install-steps">
              {installSteps.android.map((step, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: step }} />
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Status */}
      <section className="peria-section section-light glitch-in">
        <div className="peria-section-label slide-in-left">
          <h2 className="label" data-text="Status">Status</h2>
        </div>
        <p className="peria-text">
          Peria jest w&nbsp;fazie wczesnego rozwoju. Działa, można jej używać, ale wciąż się zmienia. Nowe funkcje pojawiają się regularnie.
        </p>
      </section>

      {/* CTA */}
      <section className="peria-section glitch-in">
        <h2 className="peria-cta-heading">Wypróbuj Perię</h2>
        <a
          href="https://peria.netlify.app"
          className="peria-cta-btn glitch-hover"
          data-text="OTWÓRZ APLIKACJĘ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="glitch-bg-blue" />
          <div className="glitch-bg-red" />
          <span>OTWÓRZ APLIKACJĘ</span>
        </a>
      </section>

      {/* Postaw kawę */}
      <section className="project-page-coffee glitch-in">
        <div className="coffee-inner">
          <h2 className="label" data-text="Wsparcie">Wsparcie</h2>
          <h2 className="coffee-heading">
            Aplikacja jest dla Ciebie przydatna?
          </h2>
          <p className="coffee-text">
            Jeśli Peria pomogła Ci złapać choć jedną myśl — możesz postawić kawę.
          </p>
          <a
            href="https://buycoffee.to/lukasznowak.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://buycoffee.to/static/img/share/share-button-white.png"
              alt="Postaw mi kawę na buycoffee.to"
              className="buycoffee-btn"
            />
          </a>
        </div>
      </section>
    </ProjectPageLayout>
  );
}
