import '../styles/for-whom.css';

export default function ForWhomSection() {
  return (
    <section className="section for-whom" id="dla-kogo" data-guide="Dla kogo">
      <div className="for-whom-header glitch-in">
        <p className="label">Dla kogo</p>
      </div>

      <div className="for-whom-body">
        <p className="for-whom-lead slide-in-left" style={{ '--i': 0 }}>
          Dla firm które powstały z&nbsp;czegoś prawdziwego.
        </p>

        <ul className="for-whom-examples slide-in-left" style={{ '--i': 1 }}>
          <li>Palarni która wie że kawa specialty to nie Starbucks.</li>
          <li>Barbershopu który wie że strzyżenie to nie galeria w centrum handlowym.</li>
          <li>Studia które wie że autentyczne zdjęcie nie wychodzi z&nbsp;promptu AI.</li>
        </ul>

        <p className="for-whom-text slide-in-left" style={{ '--i': 2 }}>
          Robisz coś czego mainstream nie potrafi skopiować.<br />
          Bo to wymaga lat i&nbsp;decyzji żeby nie iść na skróty.
        </p>

        <p className="for-whom-text slide-in-left" style={{ '--i': 3 }}>
          Problem jest jeden: klienci którzy tego szukają&nbsp;— szukają w&nbsp;ciemno.<br />
          Komercyjna wersja Twojego produktu jest głośniejsza.<br />
          I&nbsp;często wyżej w&nbsp;Google.
        </p>

        <p className="for-whom-text for-whom-closing slide-in-left" style={{ '--i': 4 }}>
          Twoja strona powinna im pomóc Cię znaleźć.<br />
          I&nbsp;wytłumaczyć dlaczego to co robisz nie ma nic wspólnego z&nbsp;tym co krzyczą.
        </p>
      </div>
    </section>
  );
}
