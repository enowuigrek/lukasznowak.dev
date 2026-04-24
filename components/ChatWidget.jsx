'use client';

import { useState } from 'react';
import '../styles/chat-widget.css';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setStatus('sending');

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'chat',
          'bot-field': '',
          name: name || 'Anonimowy',
          email: email || 'brak',
          message,
        }).toString(),
      });
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  const reset = () => {
    setName(''); setEmail(''); setMessage('');
    setStatus('idle');
  };

  return (
    <>
      {/* Panel */}
      {open && (
        <div className="chat-panel">
          <div className="chat-panel-header">
            <div>
              <p className="chat-panel-title">Napisz do mnie</p>
              <p className="chat-panel-sub">Odpiszę na email, zwykle w ciągu dnia.</p>
            </div>
            <button className="chat-close" onClick={() => { setOpen(false); reset(); }} aria-label="Zamknij">
              ×
            </button>
          </div>

          {status === 'sent' ? (
            <div className="chat-sent">
              <p className="chat-sent-icon">✓</p>
              <p className="chat-sent-title">Wysłane.</p>
              <p className="chat-sent-text">
                {email ? `Odpiszę na ${email}.` : 'Jeśli podasz email — odpisze. Jeśli nie — napisz na kontakt@lukasznowak.dev.'}
              </p>
              <button className="chat-again" onClick={reset}>Wyślij kolejną →</button>
            </div>
          ) : (
            <form className="chat-form" onSubmit={handleSubmit}>
              <div className="chat-field">
                <label className="chat-label">Imię <span className="chat-opt">(opcjonalne)</span></label>
                <input
                  className="chat-input"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jan"
                  disabled={status === 'sending'}
                />
              </div>

              <div className="chat-field">
                <label className="chat-label">Email <span className="chat-opt">(żebym mógł odpisać)</span></label>
                <input
                  className="chat-input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jan@firma.pl"
                  disabled={status === 'sending'}
                />
              </div>

              <div className="chat-field">
                <label className="chat-label">Wiadomość *</label>
                <textarea
                  className="chat-input chat-textarea"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Cześć, chciałbym porozmawiać o..."
                  rows={4}
                  required
                  disabled={status === 'sending'}
                />
              </div>

              {status === 'error' && (
                <p className="chat-error">Coś poszło nie tak. Napisz bezpośrednio: kontakt@lukasznowak.dev</p>
              )}

              <button
                type="submit"
                className="chat-submit"
                disabled={!message.trim() || status === 'sending'}
              >
                {status === 'sending' ? 'Wysyłanie...' : 'Wyślij →'}
              </button>
            </form>
          )}
        </div>
      )}

      {/* Trigger button */}
      <button
        className={`chat-trigger ${open ? 'active' : ''}`}
        onClick={() => { setOpen(!open); if (!open) reset(); }}
        aria-label={open ? 'Zamknij' : 'Napisz wiadomość'}
        title="Napisz do mnie — odpiszę mailem"
      >
        {open ? (
          <span className="chat-trigger-icon" aria-hidden="true">×</span>
        ) : (
          <>
            <span className="chat-trigger-dot" aria-hidden="true" />
            <svg
              className="chat-trigger-svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="square"
              strokeLinejoin="miter"
              aria-hidden="true"
            >
              {/* Envelope */}
              <rect x="3" y="5" width="18" height="14" />
              <polyline points="3,6 12,13 21,6" />
            </svg>
          </>
        )}
      </button>
    </>
  );
}
