import '../styles/usp.css';

export default function UspSection() {
  return (
    <section className="section usp" id="usp" data-guide="Dlaczego nie agencja">
      <div className="usp-body">
        <div className="usp-contrast fade-in">
          <p><span>Agencja pyta: jaki budżet?</span></p>
          <p>Ja pytam: co nie działa?</p>
        </div>

        <p className="usp-statement slide-in-left" style={{ '--i': 0 }}>
          13 lat rozmawiałem z&nbsp;firmami o&nbsp;ich problemach.
          Teraz buduję narzędzia które je rozwiązują.
          Nie wchodzę z&nbsp;gotową ofertą. Wchodzę z&nbsp;diagnozą.
        </p>

        <p className="usp-personal slide-in-left" style={{ '--i': 1 }}>
          Parzę specialty w&nbsp;domu. Warzę piwo. Nagrywam rap.
          Wypiekam pizzę i&nbsp;chleb na zakwasie&nbsp;— rzeczy które nie działają na skróty.
          Nie ma triku który zastąpi tysiąc prób.{' '}
          Wiem co to znaczy robić coś z&nbsp;głową i&nbsp;patrzeć jak komercyjna wersja
          wygrywa tylko dlatego że jest głośniejsza.
        </p>

        <p className="usp-closing slide-in-left" style={{ '--i': 2 }}>
          Dlatego nie wchodzę z&nbsp;zewnątrz z&nbsp;ofertą.<br />
          Wchodzę z&nbsp;rozumieniem.
        </p>
      </div>
    </section>
  );
}
