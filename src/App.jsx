import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import VHSOverlay from './components/VHSOverlay';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectPage from './components/ProjectPage';
import PeriaPage from './components/PeriaPage';
import StrzkawaPage from './components/StrzkawaPage';
import UknutaMagiaPage from './components/UknutaMagiaPage';
import JobOdysseyPage from './components/JobOdysseyPage';
import useGlitchEffects from './hooks/useGlitchEffects';

function HomePage() {
  const [activeSection, setActiveSection] = useState('hero');

  // Globalny hook — glitch-in observer + scroll glitch
  useGlitchEffects();

  // IntersectionObserver — track active section
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
      {
        root: null,
        threshold: 0.4,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>Łukasz Nowak — Strony WWW, Sklepy, Aplikacje | Częstochowa</title>
        <meta name="description" content="Projektuję i koduję strony internetowe, sklepy e-commerce i aplikacje webowe. Pracuję sam — rozmawiasz wprost z osobą, która zrealizuje Twój projekt od A do Z." />
        <link rel="canonical" href="https://lukasznowak.dev" />
        <meta property="og:url" content="https://lukasznowak.dev" />
        <meta property="og:title" content="Łukasz Nowak — Strony WWW, Sklepy, Aplikacje" />
        <meta property="og:description" content="Projektuję i koduję strony internetowe, sklepy e-commerce i aplikacje webowe. Częstochowa i cała Polska." />
      </Helmet>
      <VHSOverlay />
      <Navbar activeSection={activeSection} />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projekt/peria" element={<PeriaPage />} />
        <Route path="/projekt/strzykawa" element={<StrzkawaPage />} />
        <Route path="/projekt/uknuta-magia" element={<UknutaMagiaPage />} />
        <Route path="/projekt/job-odyssey" element={<JobOdysseyPage />} />
        <Route path="/projekt/:slug" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}
