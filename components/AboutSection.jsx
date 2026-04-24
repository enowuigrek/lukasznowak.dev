import '../styles/about.css';

export default function AboutSection() {
  return (
    <section className="section about" id="o-mnie" data-guide="O mnie">
      <div className="about-header glitch-in">
        <h2 className="label" data-text="Kilka słów o mnie">Kilka słów o mnie</h2>
      </div>

      <div className="about-content">
        <p className="about-text slide-in-left" style={{ '--i': 0 }}>
          Jestem Łukasz — projektuję i&nbsp;koduję strony, sklepy internetowe i&nbsp;aplikacje webowe. Pracuję samodzielnie, więc od&nbsp;początku do&nbsp;końca rozmawiasz z&nbsp;osobą, która realnie buduje projekt. Bez pośredników.
        </p>
        <p className="about-text slide-in-left" style={{ '--i': 1 }}>
          Poza pracą dla klientów buduję też własne narzędzia internetowe. Zauważam problemy, upraszczam procesy i&nbsp;tworzę rzeczy, które rozwiązują konkretne potrzeby. Dzięki temu patrzę na projekty nie tylko jak developer, ale też jak ktoś, kto pyta — po&nbsp;co ta funkcja istnieje i&nbsp;czy naprawdę ma sens.
        </p>
        <p className="about-text slide-in-left" style={{ '--i': 2 }}>
          Lubię proste rozwiązania, jasny proces i&nbsp;rzeczy, które mają konkretny cel. Bez nadmiaru funkcji, bez przekombinowania — z&nbsp;naciskiem na czytelność, szybkość i&nbsp;możliwość dalszego rozwoju.
        </p>
        <p className="about-text about-meta slide-in-left" style={{ '--i': 3 }}>
          Mieszkam w&nbsp;Częstochowie, pracuję dla klientów z&nbsp;całej Polski.
        </p>
      </div>
    </section>
  );
}
