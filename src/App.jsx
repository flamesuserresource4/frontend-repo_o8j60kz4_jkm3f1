import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
