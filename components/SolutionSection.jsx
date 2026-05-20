import '../styles/solution.css';

export default function SolutionSection() {
  return (
    <section className="section solution" id="rozwiazanie" data-guide="Rozwiązanie">
      <div className="solution-body">
        <h2 className="solution-lead fade-in">
          Buduję strony które opowiadają Twoją różnicę.
        </h2>

        <p className="solution-sub slide-in-left" style={{ '--i': 0 }}>
          Nie &ldquo;ładne strony&rdquo;. Strony które wyjaśniają dlaczego to co robisz
          nie ma nic wspólnego z&nbsp;tym co sprzedaje market.
        </p>

        <ul className="solution-benefits slide-in-left" style={{ '--i': 1 }}>
          <li>Klienci trafiają na stronę która mówi ich językiem.</li>
          <li>Rezerwacje, FAQ, opinie&nbsp;— chodzą same.</li>
          <li>Ty skupiasz się na swojej robocie.</li>
        </ul>

        <p className="solution-closing slide-in-left" style={{ '--i': 2 }}>
          Żebyś mógł palić kawę.<br />
          A&nbsp;nie tłumaczyć przy każdym nowym kliencie dlaczego jest lepsza.
        </p>
      </div>
    </section>
  );
}
