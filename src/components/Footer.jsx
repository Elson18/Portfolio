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
    <footer className="bg-white border-t border-slate-100 py-12 px-6 md:px-12 text-slate-400 font-sans text-xs">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Navigation links */}
        <div className="flex flex-wrap items-center justify-center gap-6 font-semibold">
          <a href="#about" onClick={(e) => handleScrollTo(e, 'about')} className="hover:text-slate-900 transition-colors">
            About
          </a>
          <a href="#experience" onClick={(e) => handleScrollTo(e, 'experience')} className="hover:text-slate-900 transition-colors">
            Experience
          </a>
          <a href="#projects" onClick={(e) => handleScrollTo(e, 'projects')} className="hover:text-slate-900 transition-colors">
            Projects
          </a>
          <a href="#skills" onClick={(e) => handleScrollTo(e, 'skills')} className="hover:text-slate-900 transition-colors">
            Skills
          </a>
          <a href="#achievements" onClick={(e) => handleScrollTo(e, 'achievements')} className="hover:text-slate-900 transition-colors">
            Achievements
          </a>
          <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')} className="hover:text-slate-900 transition-colors">
            Contact
          </a>
        </div>

        {/* Legal copyrights */}
        <div className="text-center sm:text-right font-medium">
          <p>© {new Date().getFullYear()} Elson Benanzal. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
