'use client';

import { useState, useEffect } from 'react';
import VHSOverlay from './VHSOverlay';
import Navbar from './Navbar';
import ScrollGuide from './ScrollGuide';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import ProjectsSection from './ProjectsSection';
import FaqSection from './FaqSection';
import ProcessSection from './ProcessSection';
import ForWhomSection from './ForWhomSection';
import PricingSection from './PricingSection';
// import BlogSection from './BlogSection'; // TODO: przywrócić gdy będą prawdziwe posty (np. seria o Job Odyssey)
// import TestimonialsSection from './TestimonialsSection'; // TODO: przywrócić gdy będą prawdziwe referencje
import ContactSection from './ContactSection';
import Footer from './Footer';
import useGlitchEffects from '../hooks/useGlitchEffects';

export default function HomePage({ posts = [] }) {
  const [activeSection, setActiveSection] = useState('hero');

  useGlitchEffects();

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
      <Navbar activeSection={activeSection} />
      <ScrollGuide />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ProcessSection />
        <ForWhomSection />
        <PricingSection />
        {/* <BlogSection posts={posts} /> — wyłączone do czasu prawdziwych postów */}
        {/* <TestimonialsSection /> — wyłączone do czasu prawdziwych referencji */}
        <FaqSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
