import '../styles/about.css';

export default function AboutSection() {
  return (
    <section className="section section--light about" id="o-mnie" data-guide="O mnie">
      <div className="about-header">
        <p className="label">O mnie</p>
      </div>

      <div className="about-content">
        <p className="about-text slide-in-left" style={{ '--i': 0 }}>
          Przez ponad dekadę pracowałem w sprzedaży B2B. Telefon, maile, tabelki.
        </p>
        <p className="about-text slide-in-left" style={{ '--i': 1 }}>
          Sporo z tego co robiłem codziennie dało się uprościć, więc zacząłem budować
          sobie narzędzia. Najpierw dla siebie, potem dla zespołu.
          Nauczyłem się programować, żeby robić to porządnie.
        </p>
        <p className="about-text slide-in-left" style={{ '--i': 2 }}>
          Dziś robię to samo, tylko w cudzych firmach.
          Szukam miejsc gdzie coś zajmuje trzy godziny, a mogłoby pięć minut.
        </p>
        <p className="about-text slide-in-left" style={{ '--i': 3 }}>
          Poza pracą warzę piwo, wypiekam na zakwasie i nagrywam rap.
          Wszystko rzeczy które nie wychodzą za pierwszym razem.
        </p>
      </div>
    </section>
  );
}
