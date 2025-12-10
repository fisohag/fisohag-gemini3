import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundAnimation from './components/BackgroundAnimation';

function App() {
  return (
    <div className="min-h-screen bg-brand-950 text-white selection:bg-brand-500/30 relative">
      <BackgroundAnimation />
      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <Expertise />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;