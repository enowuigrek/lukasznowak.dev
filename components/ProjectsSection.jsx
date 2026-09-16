'use client';
import { useRef, useCallback } from 'react';
import Image from 'next/image';
import '../styles/projects.css';

const projects = [
  {
    number: '01',
    title: 'Strzykawa',
    subtitle: 'Palarnia kawy, Częstochowa',
    description: 'Headless Shopify z własnym frontendem React. SEO setup z JSON-LD, Google Merchant Center i AEO Tracker monitorujący widoczność marki w odpowiedziach AI.',
    reveal: 'Frontend odpięty od Shopify, dane przez Storefront API. Feed produktowy do Merchant Center, dane strukturalne JSON-LD, własny tracker widoczności w odpowiedziach AI.',
    role: 'Frontend + SEO',
    stack: 'Headless Shopify · React · Next.js',
    href: 'https://strzykawa.com',
    desktopImg: '/screenshots/strzykawa-shop.png',
    mobileImg: '/screenshots/strzykawa-mobile-shop.png',
    logo: '/strzykawa-logo.png',
  },
  {
    number: '02',
    title: 'WHEN',
    subtitle: 'Autorski system rezerwacji',
    description: 'Multi-tenant system rezerwacji wdrażany u pierwszych klientów. Bez prowizji, bez vendor lock-in. Panel admina, embeddable widget.',
    reveal: 'Jedna instancja obsługuje wielu klientów, dane rozdzielone przez Row Level Security. Widget do osadzenia na cudzej stronie, panel admina z harmonogramem i powiadomieniami.',
    role: 'Fullstack',
    stack: 'Next.js · Supabase · TypeScript',
    href: 'https://whenbooking.pl',
    desktopImg: '/screenshots/when-panel.png',
    mobileImg: '/screenshots/when-mobile-panel.png',
    logo: '/when-logo.svg',
  },
];

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const timerRef = useRef(null);

  const onEnter = useCallback(() => {
    clearTimeout(timerRef.current);
    const el = cardRef.current;
    if (!el) return;
    el.classList.remove('is-leaving');
    // Restart scan animation
    const scan = el.querySelector('.project-reveal-scan');
    if (scan) {
      scan.style.animation = 'none';
      void scan.offsetWidth;
      scan.style.animation = '';
    }
    el.classList.add('is-hovered');
  }, []);

  const onLeave = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    el.classList.remove('is-hovered');
    el.classList.add('is-leaving');
    timerRef.current = setTimeout(() => el.classList.remove('is-leaving'), 400);
  }, []);

  const urlLabel = project.href.replace('https://', '');

  return (
    <a
      ref={cardRef}
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card card-in"
      style={{ '--i': index }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* Kadr wizualny */}
      <div className="project-card-visual">

        {/* Poświata teal */}
        <div className="project-card-glow" aria-hidden="true" />
        {/* Scanlines */}
        <div className="project-card-scanlines" aria-hidden="true" />

        {/* Logo klienta */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.logo}
          alt={project.title}
          className="project-card-logo"
          aria-hidden="true"
        />

        {/* Desktop mockup — perspektywa pochylona w lewo */}
        <div className="project-card-desktop">
          <div className="project-card-browser-bar">
            <span className="project-card-dot" />
            <span className="project-card-dot" />
            <span className="project-card-dot" />
            <span className="project-card-url">{urlLabel}</span>
          </div>
          <div className="project-card-screen">
            <Image
              src={project.desktopImg}
              alt={project.title}
              width={1280}
              height={800}
              className="project-card-img"
              unoptimized
            />
          </div>
        </div>

        {/* Telefon — prawy dolny róg, cały w kadrze */}
        <div className="project-card-phone" aria-hidden="true">
          <div className="project-card-phone-speaker" />
          <div className="project-card-phone-screen">
            <Image
              src={project.mobileImg}
              alt=""
              width={375}
              height={812}
              className="project-card-phone-img"
              unoptimized
            />
          </div>
          <div className="project-card-phone-home" />
        </div>

        {/* Tracking bar */}
        <span className="tracking-bar" aria-hidden="true" />

        {/* Hover reveal */}
        <div className="project-reveal" aria-hidden="true">
          <span className="project-reveal-scan" />
          <div className="project-reveal-panel">
            <span className="project-reveal-label">{project.number} — pod maską</span>
            <div className="project-reveal-bar" />
            <p className="project-reveal-desc">{project.reveal}</p>
            <div className="project-reveal-metrics">
              <div className="project-reveal-metric">
                <span className="project-reveal-metric-label">Rola</span>
                <span className="project-reveal-metric-value">{project.role}</span>
              </div>
              <div className="project-reveal-metric">
                <span className="project-reveal-metric-label">Stack</span>
                <span className="project-reveal-metric-value">{project.stack}</span>
              </div>
            </div>
            <span className="project-reveal-url">{urlLabel}</span>
          </div>
        </div>
      </div>

      {/* Stopka — zawsze widoczna */}
      <div className="project-card-foot">
        <div className="project-card-meta">
          <span className="project-card-number">{project.number}</span>
          <span className="project-card-subtitle">{project.subtitle}</span>
        </div>
        <div className="project-card-row">
          <h3 className="project-card-title rgb-split-target">{project.title}</h3>
          <span className="project-card-cta">Zobacz →</span>
        </div>

        {/* Body widoczne tylko na dotyku (hover:none) */}
        <div className="project-card-body">
          <p className="project-card-body-desc">{project.reveal}</p>
          <div className="project-card-body-metrics">
            <div className="project-card-body-metric">
              <span>Rola</span>
              <span>{project.role}</span>
            </div>
            <div className="project-card-body-metric">
              <span>Stack</span>
              <span>{project.stack}</span>
            </div>
          </div>
          <span className="project-card-body-url">{urlLabel}</span>
        </div>
      </div>
    </a>
  );
}

export default function ProjectsSection() {
  return (
    <section className="section section--light projects" id="realizacje" data-guide="Realizacje">
      <div className="projects-header">
        <p className="label">Realizacje</p>
      </div>
      <div className="project-grid">
        {projects.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
