'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import VHSOverlay from './VHSOverlay';
import Footer from './Footer';
import RelatedProjects from './RelatedProjects';
import useGlitchEffects from '../hooks/useGlitchEffects';
import '../styles/project-page.css';
import '../styles/peria-page.css';

export default function ProjectPageLayout({ slug, children, overlay }) {
  useGlitchEffects();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-page">
      <VHSOverlay />
      <nav className="project-page-nav">
        <Link href="/" className="project-page-back glitch-word" data-text="← POWRÓT">
          ← POWRÓT
        </Link>
      </nav>
      <main>
        {children}
        <RelatedProjects currentSlug={slug} />
        <Footer />
      </main>
      {overlay}
    </div>
  );
}
