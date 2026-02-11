import { useState } from 'react';
import '../styles/contact.css';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mailto fallback
    const subject = encodeURIComponent(`Wiadomość od ${form.name}`);
    const body = encodeURIComponent(
      `Imię: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:kontakt@lukasznowak.dev?subject=${subject}&body=${body}`;
    setSent(true);

    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="section contact" id="kontakt">
      <div className="contact-header glitch-in">
        <span className="label" data-text="Kontakt">Kontakt</span>
      </div>

      <div className="contact-wrapper glitch-in stagger-2">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="name">Imię</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              placeholder="Twoje imię"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="twoj@email.pl"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="message">Wiadomość</label>
            <textarea
              id="message"
              name="message"
              className="form-input"
              placeholder="Twoja wiadomość"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="form-submit glitch-hover"
            data-text={sent ? 'WYSŁANO' : 'WYŚLIJ WIADOMOŚĆ'}
          >
            <div className="glitch-bg-blue" />
            <div className="glitch-bg-red" />
            <span>{sent ? 'WYSŁANO' : 'WYŚLIJ WIADOMOŚĆ'}</span>
          </button>
        </form>

        <div className="contact-info">
          <div className="contact-info-label">
            <span className="label" data-text="Email">Email</span>
          </div>
          <a
            href="mailto:kontakt@lukasznowak.dev"
            className="contact-email glitch-word"
            data-text="kontakt@lukasznowak.dev"
          >
            kontakt@lukasznowak.dev
          </a>
          <p className="contact-description">
            Masz pomysł na projekt? Napisz do mnie — chętnie porozmawiam
            o Twoich potrzebach i zaproponuję rozwiązanie.
          </p>
        </div>
      </div>
    </section>
  );
}
