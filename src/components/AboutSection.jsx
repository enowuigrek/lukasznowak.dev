import '../styles/about.css';

export default function AboutSection() {
  return (
    <section className="section about" id="o-mnie">
      <div className="about-header glitch-in">
        <span className="label" data-text="Kilka słów o mnie">Kilka słów o mnie</span>
      </div>

      <div className="about-content glitch-in stagger-2">
        <p className="about-text">
          Jestem Łukasz — projektuję i&nbsp;koduję strony, sklepy internetowe i&nbsp;aplikacje webowe. Pracuję sam, bez pośredników — Ty rozmawiasz wprost z&nbsp;osobą, która zaprojektuje i&nbsp;zakoduje Twój projekt od&nbsp;A&nbsp;do&nbsp;Z.
        </p>
      </div>
    </section>
  );
}
