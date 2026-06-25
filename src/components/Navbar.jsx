import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
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
      setScrolled(window.scrollY > 50);
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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-550 ${scrolled
        ? 'bg-zinc-950/85 backdrop-blur-md border-b border-zinc-900/50 py-3.5 shadow-lg shadow-black/10'
        : 'bg-transparent py-6'
      }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-3 items-center">
        {/* Left Side: Desktop Social Links */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="www.linkedin.com/in/elson-benanzal-7451b129a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors duration-250 flex items-center gap-1 group"
          >
            LinkedIn <ArrowUpRight size={10} className="opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="https://github.com/elsonbenanzal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors duration-250 flex items-center gap-1 group"
          >
            GitHub <ArrowUpRight size={10} className="opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="https://leetcode.com/elsonbenanzal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors duration-250"
          >
            LeetCode
          </a>
        </div>

        {/* Mobile Spacer / Mobile Social Toggle Placeholder */}
        <div className="lg:hidden flex items-center">
          <a
            href="#about"
            onClick={(e) => handleLinkClick(e, '#about')}
            className="text-xs font-mono font-bold tracking-wider text-zinc-400 hover:text-white transition-colors"
          >
            // ME.
          </a>
        </div>

        {/* Center: Brand Logo */}
        <div className="flex justify-center">
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="text-xl font-black font-heading tracking-tighter text-white hover:opacity-80 transition-opacity duration-200"
          >
            Elson Benanzal A<span className="text-brand-primary">.</span>
          </a>
        </div>

        {/* Right Side: Navigation Trigger / Desktop Menu */}
        <div className="flex justify-end items-center gap-6">
          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.slice(0, 4).map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs font-semibold uppercase tracking-wider text-zinc-350 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          <a
            href="/assets/Elson_Benanzal_Resume.pdf"
            download="Elson_Benanzal_Resume.pdf"
            className="hidden sm:inline-flex items-center justify-center text-xs font-mono font-semibold text-white bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full hover:bg-white hover:text-zinc-950 transition-all duration-300 shadow-sm shadow-black/5"
          >
            Resume
          </a>

          {/* Mobile Hamburguer menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-zinc-300 hover:text-white focus:outline-none transition-colors"
            aria-label="Toggle menu"
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
            className="absolute top-full left-0 w-full bg-zinc-950 border-b border-zinc-900/80 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col px-8 py-8 gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-lg font-bold font-heading text-zinc-300 hover:text-white py-1 transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <div className="h-[1px] bg-zinc-900 my-2" />

              {/* Mobile Socials in Drawer */}
              <div className="flex gap-4 items-center">
                <a href="www.linkedin.com/in/elson-benanzal-7451b129a" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white">
                  <Linkedin size={18} />
                </a>
                <a href="https://github.com/Elson18" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white">
                  <Github size={18} />
                </a>
                <a href="https://leetcode.com/Elson18/" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-zinc-400 hover:text-white">
                  LeetCode
                </a>
              </div>

              <a
                href="/assets/Elson_Benanzal_Resume.pdf"
                download="Elson_Benanzal_Resume.pdf"
                className="w-full text-center font-mono font-semibold text-zinc-950 bg-white py-3 rounded-xl hover:bg-zinc-100 transition-colors mt-2"
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
