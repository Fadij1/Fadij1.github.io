import { useState, useEffect } from 'react';
import { Menu, X, Terminal as TerminalIcon, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ toggleTheme, isDark, onOpenTerminal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Lab', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Notes', href: '#notes' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-gray-800 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button
          onClick={onOpenTerminal}
          className="flex items-center gap-2 text-white font-bold text-xl group cursor-pointer"
          title="Open Terminal"
          aria-label="Open Terminal"
        >
          <TerminalIcon className="text-primary group-hover:text-cyan-300 transition-colors" />
          <span>
            Fady<span className="text-primary">.dev</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="text-gray-400 hover:text-primary transition-colors"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary/10 transition-colors"
          >
            Resume
          </a>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-gray-400 hover:text-primary"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={24} /> : <Moon size={24} />}
          </button>

          <button
            className="text-gray-400 hover:text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface border-b border-gray-800 p-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:text-white font-medium block w-full py-2"
            >
              {link.name}
            </a>
          ))}

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-center font-medium border border-primary text-primary px-4 py-3 rounded-md hover:bg-primary/10 transition-colors mt-2"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}