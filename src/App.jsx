import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Metrics from './components/Metrics';

const ExperienceStrip = lazy(() => import('./components/ExperienceStrip'));
const AboutPreview = lazy(() => import('./components/AboutPreview'));
const Skills = lazy(() => import('./components/Skills'));
const CaseStudies = lazy(() => import('./components/CaseStudies'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <main className="page-frame">
      <Navbar />
      <Hero />
      <Metrics />
      <Suspense fallback={null}>
        <ExperienceStrip />
        <AboutPreview />
        <Skills />
        <CaseStudies />
        <Contact />
      </Suspense>
    </main>
  );
}

export default App;
