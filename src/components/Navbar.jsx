import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import Magnetic from './Magnetic';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Chronology', href: '#chronology' },
  { name: 'Architecture', href: '#architecture' },
  { name: 'Playground', href: '#playground' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-card/85 backdrop-blur-md border-b border-border py-3 shadow-lg shadow-black/10'
        : 'bg-transparent py-5'
      }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Left Side: Desktop Logo */}
        <div className="flex items-center">
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="text-lg font-black font-heading tracking-tighter text-text hover:opacity-80 transition-opacity duration-200"
          >
            Elson Benanzal A<span className="text-brand-primary">.</span>
          </a>
        </div>

        {/* Center: Desktop Navigation Items */}
        <div className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-text-muted hover:text-text transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Side: Social links + Theme Toggle + Resume Button */}
        <div className="hidden lg:flex items-center gap-5">
          <div className="flex items-center gap-4 border-r border-border pr-5">
            <a
              href="https://www.linkedin.com/in/elson-benanzal-7451b129a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-mono font-semibold uppercase tracking-wider text-text-muted hover:text-text transition-colors duration-200 flex items-center gap-1 group"
            >
              LinkedIn <ArrowUpRight size={10} className="opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <a
              href="https://github.com/Elson18"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-mono font-semibold uppercase tracking-wider text-text-muted hover:text-text transition-colors duration-200 flex items-center gap-1 group"
            >
              GitHub <ArrowUpRight size={10} className="opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          <Magnetic range={40} strength={0.3}>
            <a
              href="/assets/Elson_Benanzal_Resume.pdf"
              download="Elson_Benanzal_Resume.pdf"
              className="inline-flex items-center justify-center text-xs font-mono font-bold text-text bg-card border border-border px-5 py-2.5 rounded-full hover:bg-text hover:text-bg transition-all duration-300 shadow-sm"
            >
              Resume
            </a>
          </Magnetic>
        </div>

        {/* Mobile Hamburguer trigger */}
        <div className="xl:hidden flex items-center gap-3">
          <a
            href="/assets/Elson_Benanzal_Resume.pdf"
            download="Elson_Benanzal_Resume.pdf"
            className="inline-flex xl:hidden items-center justify-center text-[10px] font-mono font-bold text-text bg-card border border-border px-3.5 py-2 rounded-full hover:bg-text hover:text-bg transition-all duration-300"
          >
            CV
          </a>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-text-muted hover:text-text focus:outline-none transition-colors cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute top-full left-0 w-full bg-bg border-b border-border shadow-2xl overflow-hidden z-50 xl:hidden"
          >
            <div className="flex flex-col px-8 py-8 gap-5 text-left">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-base font-black font-heading text-text-muted hover:text-text py-1 transition-colors uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}

              <div className="h-[1px] bg-border my-2" />

              {/* Mobile Socials in Drawer */}
              <div className="flex gap-4 items-center">
                <a href="https://www.linkedin.com/in/elson-benanzal-7451b129a" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text">
                  <Linkedin size={18} />
                </a>
                <a href="https://github.com/Elson18" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text">
                  <Github size={18} />
                </a>
                <a href="https://leetcode.com/Elson18/" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-text-muted hover:text-text">
                  LeetCode
                </a>
              </div>

              <a
                href="/assets/Elson_Benanzal_Resume.pdf"
                download="Elson_Benanzal_Resume.pdf"
                className="w-full text-center font-mono font-bold text-bg bg-text py-3 rounded-xl hover:opacity-90 transition-opacity mt-2"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
