import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import ExperienceStrip from './components/ExperienceStrip';
import AboutPreview from './components/AboutPreview';
import Skills from './components/Skills';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';

function App() {
  return (
    <main className="page-frame">
      <Navbar />
      <Hero />
      <Metrics />
      <ExperienceStrip />
      <AboutPreview />
      <Skills />
      <CaseStudies />
      <Contact />
    </main>
  );
}

export default App;