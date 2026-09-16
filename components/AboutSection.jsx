'use client';
import { useRef, useCallback } from 'react';
import Image from 'next/image';
import '../styles/about.css';

export default function AboutSection() {
  const frameRef = useRef(null);

  const handleMouseEnter = useCallback(() => {
    const frame = frameRef.current;
    if (!frame) return;
    // Restart scan animation
    const scan = frame.querySelector('.about-photo-scan');
    if (scan) {
      scan.style.animation = 'none';
      void scan.offsetWidth;
      scan.style.animation = '';
    }
    frame.classList.add('is-hovered');
  }, []);

  const handleMouseLeave = useCallback(() => {
    frameRef.current?.classList.remove('is-hovered');
  }, []);

  return (
    <section className="section about" id="o-mnie" data-guide="O mnie">
      <div className="about-header">
        <p className="label">O mnie</p>
      </div>

      <div className="about-content">

        {/* Kolumna ze zdjęciem — sticky na desktopie */}
        <div className="about-photo-col">
          <div
            ref={frameRef}
            className="about-photo-frame"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="about-photo-inner">
              <Image
                src="/photos/portrait.png"
                alt="Łukasz Nowak"
                width={600}
                height={750}
                className="about-photo"
                priority
                unoptimized
              />
              <div className="about-photo-duo" aria-hidden="true" />
              <div className="about-photo-lines" aria-hidden="true" />
              <span className="about-photo-scan" aria-hidden="true" />
              <div className="about-photo-gradient" aria-hidden="true" />
              <span className="about-photo-rec" aria-hidden="true">REC ●</span>
            </div>
          </div>
        </div>

        {/* Kolumna tekstowa */}
        <div className="about-text-col">
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
          <p className="about-text about-meta">
            Częstochowa · dostępny do nowych projektów
          </p>
        </div>

      </div>
    </section>
  );
}
