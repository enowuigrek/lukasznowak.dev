import { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VHSOverlay from './components/VHSOverlay';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectPage from './components/ProjectPage';

function HomePage() {
  const [activeSection, setActiveSection] = useState('hero');
  const scrollTimeout = useRef(null);

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

  // Fade-in / glitch-in animations (staggered)
  useEffect(() => {
    const animElements = document.querySelectorAll('.fade-in, .glitch-in');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    animElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Scroll glitch effect — RGB split przy scrollowaniu
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const dir = currentScrollY > lastScrollY ? 1 : -1;
      lastScrollY = currentScrollY;

      document.documentElement.style.setProperty('--scroll-dir', dir);
      document.documentElement.classList.add('scroll-glitch-active');

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        document.documentElement.classList.remove('scroll-glitch-active');
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <>
      <VHSOverlay />
      <Navbar activeSection={activeSection} />

      <main>
        <HeroSection />
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
        <Route path="/projekt/:slug" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}
