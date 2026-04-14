import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PersonalInfo from './components/PersonalInfo';
import LoadingScreen from './components/LoadingScreen';
import Services from './components/Services';
import GithubStats from './components/GithubStats';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import Blog from './components/Blog';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import InteractiveTerminal from './components/InteractiveTerminal';
import { AnimatePresence } from 'framer-motion';


function App() {
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Apply theme class to the HTML document body
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-background text-gray-200' : 'bg-gray-50 text-gray-900'} selection:bg-primary/30 selection:text-white`}>
          <Navbar toggleTheme={toggleTheme} isDark={isDark} onOpenTerminal={() => setIsTerminalOpen(true)} />
          
          <AnimatePresence>
            {isTerminalOpen && <InteractiveTerminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />}
          </AnimatePresence>
          
          <main>
            <Hero />
            <PersonalInfo />
            <Services />
            <GithubStats />
            <Projects />
            <Blog />
            <Experience />
            <Skills />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      )}
    </>
  );
}

export default App;