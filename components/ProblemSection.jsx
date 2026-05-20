import '../styles/problem.css';

export default function ProblemSection() {
  return (
    <section className="section problem" id="problem" data-guide="Problem">
      <div className="problem-body">
        <h2 className="problem-question fade-in">
          Twoja robota jest lepsza niż pokazuje Twoja strona?
        </h2>

        <ul className="problem-examples slide-in-left" style={{ '--i': 0 }}>
          <li>Sieciówka zdefiniowała kawę.</li>
          <li>Galeria&nbsp;— strzyżenie.</li>
          <li>AI generuje tysiące &ldquo;dobrych&rdquo; zdjęć za darmo.</li>
        </ul>

        <p className="problem-text slide-in-left" style={{ '--i': 1 }}>
          Klient który nigdy nie miał prawdziwej matchy myśli że ta z&nbsp;marketu to matcha.
          I&nbsp;z&nbsp;tą miarą przychodzi do&nbsp;Ciebie.
          Ocenia Cię zanim spróbuje. Zanim wejdzie. Zanim zadzwoni.
        </p>

        <p className="problem-closing slide-in-left" style={{ '--i': 2 }}>
          Twoja strona powinna tłumaczyć tę różnicę.<br />
          Zanim klient ją wyrobi sobie sam.
        </p>
      </div>
    </section>
  );
}
