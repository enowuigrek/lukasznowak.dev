import '../styles/time.css';

export default function TimeSection() {
  return (
    <section className="section time" id="gdzie-ucieka-czas" data-guide="Gdzie ucieka czas">
      <div className="time-header">
        <p className="label">Gdzie ucieka czas</p>
      </div>

      <div className="time-grid">
        <div className="time-lead">
          <p className="time-lead-text">
            Większość firm ma procesy które powtarzają się codziennie.
            Przepisywanie tych samych danych, umawianie, przypominanie,
            sprawdzanie drugi raz.
          </p>
        </div>

        <div className="time-body">
          <div className="time-body-item">
            <span className="time-body-number">01</span>
            <p className="time-body-text">
              Robiąc to rutynowo przestaje się to widzieć - to po prostu część dnia.
              Dopiero jak ktoś policzy, wychodzi ile to godzin w miesiącu.
            </p>
          </div>
          <div className="time-body-sep" aria-hidden="true" />
          <div className="time-body-item">
            <span className="time-body-number">02</span>
            <p className="time-body-text">
              Duże systemy niby to rozwiązują. Tylko że są budowane dla firm
              o dwa rozmiary większych. Płacisz za dziesięć funkcji, używasz dwóch,
              a swoją robotę i tak musisz podciągnąć pod to jak działa program.
            </p>
          </div>
        </div>
      </div>

      <div className="time-conclusion">
        <p className="time-conclusion-text">
          Narzędzie zbudowane pod jedną firmę robi dokładnie tyle ile ma robić.
          Nie dokłada kosztu, nie dokłada obsługi.{' '}
          <span className="time-conclusion-accent">Oddaje czas.</span>
        </p>
      </div>
    </section>
  );
}
