import '../styles/time.css';

export default function TimeSection() {
  return (
    <section className="section section--light time" id="gdzie-ucieka-czas" data-guide="Gdzie ucieka czas">
      <div className="time-body">
        <p className="time-text">
          Większość firm ma procesy które powtarzają się codziennie.
          Przepisywanie tych samych danych, umawianie, przypominanie, sprawdzanie drugi raz.
        </p>
        <p className="time-text">
          Robiąc to rutynowo przestaje się to widzieć - to po prostu część dnia.
          Dopiero jak ktoś policzy, wychodzi ile to godzin w miesiącu.
        </p>
        <p className="time-text">
          Duże systemy niby to rozwiązują. Tylko że są budowane dla firm o dwa rozmiary
          większych. Płacisz za dziesięć funkcji, używasz dwóch, a swoją robotę i tak
          musisz podciągnąć pod to jak działa program.
        </p>
        <p className="time-text">
          Narzędzie zbudowane pod jedną firmę robi dokładnie tyle ile ma robić.
          Nie dokłada kosztu, nie dokłada obsługi. Oddaje czas.
        </p>
      </div>
    </section>
  );
}
