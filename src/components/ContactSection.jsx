import { useState } from 'react';
import '../styles/contact.css';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const body = new URLSearchParams({
        'form-name': 'contact',
        ...form,
      });

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section className="section contact" id="kontakt">
      <div className="contact-header glitch-in">
        <span className="label" data-text="Kontakt">Kontakt</span>
      </div>

      <div className="contact-wrapper glitch-in stagger-2">
        <form className="contact-form" name="contact" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />
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
              placeholder="Opisz krótko czego potrzebujesz — stronę, sklep, aplikację? Im więcej napiszesz, tym lepiej będę mógł pomóc."
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="form-submit glitch-hover"
            disabled={status === 'sending'}
            data-text={
              status === 'sent' ? 'WYSŁANO' :
              status === 'error' ? 'BŁĄD — SPRÓBUJ PONOWNIE' :
              status === 'sending' ? 'WYSYŁANIE...' :
              'WYŚLIJ WIADOMOŚĆ'
            }
          >
            <div className="glitch-bg-blue" />
            <div className="glitch-bg-red" />
            <span>
              {status === 'sent' ? 'WYSŁANO' :
               status === 'error' ? 'BŁĄD — SPRÓBUJ PONOWNIE' :
               status === 'sending' ? 'WYSYŁANIE...' :
               'WYŚLIJ WIADOMOŚĆ'}
            </span>
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
