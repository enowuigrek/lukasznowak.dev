import '../styles/about.css';

export default function AboutSection() {
  return (
    <section className="section about" id="o-mnie" data-guide="O mnie">
      <div className="about-header glitch-in">
        <h2 className="label" data-text="Kilka słów o mnie">Kilka słów o mnie</h2>
      </div>

      <div className="about-content">
        <p className="about-text slide-in-left" style={{ '--i': 0 }}>
          Przez lata siedziałem naprzeciwko różnych klientów — indywidualnych, małych firm,
          dużych korporacji. I nauczyłem się jednego: każdy chce żeby ktoś posłuchał
          zanim zaproponuje rozwiązanie.
        </p>
        <p className="about-text slide-in-left" style={{ '--i': 1 }}>
          W korporacji to trudne. Tam liczą się wyniki, nie klienci.
          Zacząłem więc budować narzędzia sam — nie dlatego że chciałem być developerem,
          dlatego że miałem problemy których nikt inny nie rozwiązywał.
          Job Odyssey, Peria — oba wyszły z pytania: dlaczego to jeszcze nie istnieje?
        </p>
        <p className="about-text slide-in-left" style={{ '--i': 2 }}>
          Dziś buduję dla małych firm. Z pomocą AI — bo AI robi za mnie rzeczy
          które nie wymagają myślenia, żebym mógł skupić się na tym co lubię:
          zrozumieniu problemu.
        </p>
        <p className="about-text slide-in-left" style={{ '--i': 3 }}>
          Sam parzę specialty, warzę piwo, nagrywam rap, wypiekam na zakwasie.
          Wiem jak wygląda praca nad sobą przez rzemiosło.
          Dlatego rozumiem klientów którzy robią to co robią.
        </p>
        <p className="about-text about-meta slide-in-left" style={{ '--i': 4 }}>
          Nadal siedzę po tej samej stronie stołu.<br />
          Tylko teraz między spotkaniami — narzędzia pracują za klienta.<br />
          A on może robić to po co założył firmę.
        </p>
      </div>
    </section>
  );
}
