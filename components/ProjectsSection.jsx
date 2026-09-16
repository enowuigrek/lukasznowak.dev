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
    role: 'Frontend + SEO',
    stack: 'Headless Shopify · React · Next.js',
    href: 'https://strzykawa.com',
    desktopImg: '/screenshots/strzykawa-desktop.png',
    mobileImg: '/screenshots/strzykawa-mobile.png',
  },
  {
    number: '02',
    title: 'WHEN',
    subtitle: 'Autorski system rezerwacji',
    description: 'Multi-tenant system rezerwacji wdrażany u pierwszych klientów. Bez prowizji, bez vendor lock-in. Panel admina, embeddable widget.',
    role: 'Fullstack',
    stack: 'Next.js · Supabase · TypeScript',
    href: 'https://whenbooking.pl',
    desktopImg: '/screenshots/when-desktop.png',
    mobileImg: '/screenshots/when-mobile.png',
  },
];

function ProjectRow({ project, index }) {
  const visualRef = useRef(null);
  const timerRef = useRef(null);

  const onEnter = useCallback(() => {
    clearTimeout(timerRef.current);
    const el = visualRef.current;
    if (!el) return;
    el.classList.remove('is-leaving');
    el.classList.add('is-hovered');
  }, []);

  const onLeave = useCallback(() => {
    const el = visualRef.current;
    if (!el) return;
    el.classList.remove('is-hovered');
    el.classList.add('is-leaving');
    timerRef.current = setTimeout(() => el.classList.remove('is-leaving'), 500);
  }, []);

  const stackTags = project.stack.split(' · ');
  const urlLabel = project.href.replace('https://', '');

  return (
    <div className="project-row vhs-in" style={{ '--i': index }}>

      {/* Kolumna tekstowa */}
      <div className="project-row-content">
        <div className="project-row-meta">
          <span className="project-row-number">{project.number}</span>
          <span className="project-row-category">{project.subtitle}</span>
        </div>
        <h3 className="project-row-title rgb-split-target">{project.title}</h3>
        <p className="project-row-desc">{project.description}</p>
        <div className="project-row-metrics">
          <div className="project-row-metric">
            <span className="project-row-metric-label">Rola</span>
            <span className="project-row-metric-value">{project.role}</span>
          </div>
          <div className="project-row-metric">
            <span className="project-row-metric-label">Stack</span>
            <span className="project-row-metric-value">{project.stack}</span>
          </div>
        </div>
        <a href={project.href} target="_blank" rel="noopener noreferrer" className="project-row-link">
          Zobacz projekt →
        </a>
      </div>

      {/* Kolumna wizualna */}
      <div
        ref={visualRef}
        className="project-row-visual"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <div className="mockup-browser">
          <div className="mockup-browser-bar">
            <span className="mockup-browser-dot" />
            <span className="mockup-browser-dot" />
            <span className="mockup-browser-dot" />
            <span className="mockup-browser-url">{urlLabel}</span>
          </div>
          <div className="mockup-browser-screen">
            <Image
              src={project.desktopImg}
              alt={project.title}
              width={1280}
              height={720}
              className="project-row-img"
              unoptimized
            />
            <span className="tracking-bar" aria-hidden="true" />
          </div>
        </div>

        {/* Hover reveal — "pod maską" */}
        <div className="project-reveal" aria-hidden="true">
          <span className="project-reveal-scan" />
          <div className="project-reveal-panel">
            <span className="project-reveal-label">{project.number} — {project.title}</span>
            <div className="project-reveal-line" />
            <p className="project-reveal-desc">{project.description}</p>
            <div className="project-reveal-tags">
              {stackTags.map(tag => (
                <span key={tag} className="project-reveal-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Mini telefon */}
        {project.mobileImg && (
          <div className="mockup-phone-mini">
            <Image
              src={project.mobileImg}
              alt={`${project.title} — mobile`}
              width={375}
              height={812}
              className="project-phone-img"
              unoptimized
            />
          </div>
        )}
      </div>

    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section className="section section--light projects" id="realizacje" data-guide="Realizacje">
      <div className="projects-header">
        <p className="label">Realizacje</p>
      </div>
      <div className="project-rows">
        {projects.map((project, i) => (
          <ProjectRow key={project.number} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
