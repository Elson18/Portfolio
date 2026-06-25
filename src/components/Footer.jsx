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
    <footer className="bg-white border-t border-slate-200 py-16 px-6 md:px-12 text-text-muted font-sans relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Logo & Info */}
          <div className="md:col-span-4 flex flex-col gap-4 text-left">
            <a 
              href="#home" 
              onClick={(e) => handleScrollTo(e, 'home')} 
              className="text-2xl font-black font-heading tracking-tighter text-text uppercase"
            >
              Elson Benanzal A<span className="text-brand-primary">.</span>
            </a>
            <p className="text-xs text-text-muted leading-relaxed max-w-xs font-medium font-sans">
              Architecting secure Generative AI workflow systems, stateful reasoning nodes, and robust data orchestrations.
            </p>
          </div>

          {/* Site Navigation links columns */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-left">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-mono font-bold tracking-widest text-text-muted uppercase opacity-60">Navigation</span>
              <a href="#about" onClick={(e) => handleScrollTo(e, 'about')} className="text-xs font-semibold text-text hover:text-brand-primary transition-colors uppercase tracking-wider text-[10px] font-mono">
                About Profile
              </a>
              <a href="#chronology" onClick={(e) => handleScrollTo(e, 'chronology')} className="text-xs font-semibold text-text hover:text-brand-primary transition-colors uppercase tracking-wider text-[10px] font-mono">
                Chronology
              </a>
              <a href="#playground" onClick={(e) => handleScrollTo(e, 'playground')} className="text-xs font-semibold text-text hover:text-brand-primary transition-colors uppercase tracking-wider text-[10px] font-mono">
                Playground
              </a>
              <a href="#projects" onClick={(e) => handleScrollTo(e, 'projects')} className="text-xs font-semibold text-text hover:text-brand-primary transition-colors uppercase tracking-wider text-[10px] font-mono">
                Case Studies
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-mono font-bold tracking-widest text-text-muted uppercase opacity-60">Directory</span>
              <a href="#skills" onClick={(e) => handleScrollTo(e, 'skills')} className="text-xs font-semibold text-text hover:text-brand-primary transition-colors uppercase tracking-wider text-[10px] font-mono">
                Competencies
              </a>
              <a href="#achievements" onClick={(e) => handleScrollTo(e, 'achievements')} className="text-xs font-semibold text-text hover:text-brand-primary transition-colors uppercase tracking-wider text-[10px] font-mono">
                Achievements
              </a>
              <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')} className="text-xs font-semibold text-text hover:text-brand-primary transition-colors uppercase tracking-wider text-[10px] font-mono">
                Get In Touch
              </a>
            </div>
          </div>

          {/* Newsletter subscription */}
          <div className="md:col-span-4 flex flex-col gap-4 text-left">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-text-muted uppercase block mb-1 opacity-60">Newsletter</span>
              <span className="text-xs font-bold text-text">Subscribe to my tech updates</span>
            </div>
            
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 bg-slate-50 border border-slate-200 p-1.5 rounded-full shadow-inner">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-transparent border-0 px-3 py-1.5 text-xs text-text placeholder-slate-400 focus:outline-none focus:ring-0 font-sans"
              />
              <button 
                type="submit" 
                className="bg-text text-bg text-[10px] font-bold uppercase tracking-wider py-2.5 px-4 rounded-full hover:opacity-90 transition-opacity cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider line */}
        <div className="h-[1px] bg-slate-200 w-full" />

        {/* Bottom Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[9px] font-bold text-text-muted uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Elson Benanzal. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed & Engineered By <span className="text-brand-primary font-extrabold">Elson Benanzal A</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
