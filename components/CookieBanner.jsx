'use client';

import { useState, useEffect } from 'react';
import '../styles/cookie-banner.css';

const STORAGE_KEY = 'cookie_consent';

// Zamień na swój URL GoatCounter, np. 'https://lukasznowak.goatcounter.com/count'
const GOATCOUNTER_URL = 'https://lukasznowak.goatcounter.com/count';

function loadAnalytics() {
  if (document.getElementById('gc-script')) return;
  const script = document.createElement('script');
  script.id = 'gc-script';
  script.async = true;
  script.src = '//gc.zgo.at/count.js';
  script.setAttribute('data-goatcounter', GOATCOUNTER_URL);
  document.head.appendChild(script);
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
    } else if (stored === 'accepted') {
      loadAnalytics();
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
    loadAnalytics();
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Zgoda na ciasteczka">
      <div className="cookie-banner-inner">
        <div className="cookie-banner-text">
          <span className="cookie-banner-label">Ciasteczka</span>
          <p className="cookie-banner-desc">
            Ta strona używa ciasteczek analitycznych do mierzenia ruchu. Dane są anonimowe i&nbsp;nie trafiają do Google. Możesz odmówić — strona działa tak samo.
          </p>
        </div>
        <div className="cookie-banner-actions">
          <button className="cookie-btn cookie-btn-accept" onClick={accept}>
            Akceptuję
          </button>
          <button className="cookie-btn cookie-btn-decline" onClick={decline}>
            Tylko niezbędne
          </button>
        </div>
      </div>
    </div>
  );
}
