import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { scrollToSection } from '../utils/helpers';
import SectionDivider from '../components/ui/SectionDivider';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Education from '../components/sections/Education';
import Experience from '../components/sections/Experience';
import Skills from '../components/sections/Skills';
import SoftSkills from '../components/sections/SoftSkills';
import Languages from '../components/sections/Languages';
import Projects from '../components/sections/Projects';
import Certifications from '../components/sections/Certifications';
import Contact from '../components/sections/Contact';

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    const targetId = state?.scrollTo || (location.hash ? location.hash.replace('#', '') : null);

    if (targetId) {
      const timer = setTimeout(() => {
        scrollToSection(targetId);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Kenneth Solórzano — Desarrollador Backend</title>
        <meta
          name="description"
          content="Portafolio profesional de Kenneth Franklin Solórzano Canás. Desarrollador Backend especializado en Java, Spring Boot y tecnologías web modernas."
        />
        <meta property="og:title" content="Kenneth Solórzano — Desarrollador Backend" />
        <meta
          property="og:description"
          content="Portafolio profesional de Kenneth Franklin Solórzano Canás. Desarrollador Backend especializado en Java, Spring Boot y tecnologías web modernas."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/" />
      </Helmet>

      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Education />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <SoftSkills />
      <SectionDivider />
      <Languages />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Certifications />
      <SectionDivider />
      <Contact />
    </>
  );
}
