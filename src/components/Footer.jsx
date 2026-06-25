import React from 'react';

const Footer = () => {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-lavender-footer/85 border-t border-zinc-200/50 py-16 px-6 md:px-12 text-zinc-650 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Logo & Info */}
          <div className="md:col-span-4 flex flex-col gap-4 text-left">
            <a 
              href="#home" 
              onClick={(e) => handleScrollTo(e, 'home')} 
              className="text-2xl font-black font-heading tracking-tighter text-zinc-950 uppercase"
            >
              Elson Benanzal A<span className="text-violet-600">.</span>
            </a>
            <p className="text-xs text-zinc-500 leading-relaxed max-w-xs font-medium">
              Architecting secure Generative AI workflow systems, stateful reasoning nodes, and robust data orchestrations.
            </p>
          </div>

          {/* Site Navigation links columns */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-left">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase">Navigation</span>
              <a href="#about" onClick={(e) => handleScrollTo(e, 'about')} className="text-xs font-semibold text-zinc-800 hover:text-violet-600 transition-colors">
                About Profile
              </a>
              <a href="#experience" onClick={(e) => handleScrollTo(e, 'experience')} className="text-xs font-semibold text-zinc-800 hover:text-violet-600 transition-colors">
                Experience
              </a>
              <a href="#projects" onClick={(e) => handleScrollTo(e, 'projects')} className="text-xs font-semibold text-zinc-800 hover:text-violet-600 transition-colors">
                Case Studies
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase">Directory</span>
              <a href="#skills" onClick={(e) => handleScrollTo(e, 'skills')} className="text-xs font-semibold text-zinc-800 hover:text-violet-600 transition-colors">
                Competencies
              </a>
              <a href="#achievements" onClick={(e) => handleScrollTo(e, 'achievements')} className="text-xs font-semibold text-zinc-800 hover:text-violet-600 transition-colors">
                Achievements
              </a>
              <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')} className="text-xs font-semibold text-zinc-800 hover:text-violet-600 transition-colors">
                Get In Touch
              </a>
            </div>
          </div>

          {/* Newsletter subscription layout matching reference Image 2 */}
          <div className="md:col-span-4 flex flex-col gap-4 text-left">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase block mb-1">Newsletter</span>
              <span className="text-xs font-bold text-zinc-850">Subscribe to my tech updates</span>
            </div>
            
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 bg-white/80 border border-zinc-200 p-1.5 rounded-full shadow-sm">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-transparent border-0 px-3 py-1.5 text-xs text-zinc-950 placeholder-zinc-400 focus:outline-none focus:ring-0 font-sans"
              />
              <button 
                type="submit" 
                className="bg-zinc-950 text-white text-[10px] font-bold uppercase tracking-wider py-2.5 px-4 rounded-full hover:bg-zinc-900 transition-colors cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider line */}
        <div className="h-[1px] bg-zinc-300/40 w-full" />

        {/* Bottom Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[9px] font-bold text-zinc-450 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Elson Benanzal. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed & Engineered By <span className="text-violet-600 font-extrabold">Elson Benanzal A</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
