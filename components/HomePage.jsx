'use client';

import { useState, useEffect } from 'react';
import VHSOverlay from './VHSOverlay';
import Navbar from './Navbar';
import ScrollProgress from './ScrollProgress';
import HeroSection from './HeroSection';
import MarqueeStrip from './MarqueeStrip';
import ServicesSection from './ServicesSection';
import TimeSection from './TimeSection';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import useGlitchEffects from '../hooks/useGlitchEffects';
import useScrollEffects from '../hooks/useScrollEffects';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('hero');

  useGlitchEffects();
  useScrollEffects();

  useEffect(() => {
    const sections = document.querySelectorAll('.section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, threshold: 0.4 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <VHSOverlay />
      <ScrollProgress />
      <Navbar activeSection={activeSection} />
      <main>
        <HeroSection />
        <MarqueeStrip />
        <ServicesSection />
        <TimeSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
