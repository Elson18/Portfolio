import React from 'react';
import { motion } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion as motionModule } from 'framer-motion';

const Hero = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    }
  };

  return (
    <section id="home" className="min-h-[85vh] flex items-center bg-white px-6 md:px-12 py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Typography Block */}
        <motionModule.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col text-left"
        >
          {/* Tag */}
          <motionModule.div variants={itemVariants} className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-blue-50/50 border border-blue-100/60 px-3.5 py-1.5 rounded-full inline-block">
              AI & Generative AI Developer
            </span>
          </motionModule.div>

          {/* Main Headline */}
          <motionModule.h1 
            variants={itemVariants} 
            className="text-5xl md:text-7xl font-extrabold font-heading tracking-tight leading-[1.05] text-slate-900 mb-6"
          >
            Building <br />
            Intelligent AI <br />
            <span className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary bg-clip-text text-transparent">
              Experiences.
            </span>
          </motionModule.h1>

          {/* Subheading */}
          <motionModule.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-500 font-normal max-w-xl leading-relaxed mb-8"
          >
            AI Engineer specializing in Generative AI, Machine Learning, Agentic Workflows, and Intelligent Automation.
          </motionModule.p>

          {/* CTA Row */}
          <motionModule.div variants={itemVariants} className="flex flex-wrap gap-4">
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, 'projects')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-brand-primary hover:bg-blue-700 px-6 py-3 rounded-full shadow-sm hover:shadow transition-all duration-200"
            >
              <span>View Projects</span>
              <ArrowRight size={16} />
            </a>
            <a
              href="/assets/Elson_Benanzal_Resume.pdf"
              download="Elson_Benanzal_Resume.pdf"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 border border-slate-200 hover:border-slate-400 px-6 py-3 rounded-full hover:bg-slate-50 transition-all duration-200"
            >
              Resume
            </a>
          </motionModule.div>
        </motionModule.div>

        {/* Right Minimal Illustration Block */}
        <motionModule.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="lg:col-span-5 hidden lg:flex items-center justify-center relative w-full h-[320px] md:h-[400px]"
        >
          {/* Subtle architectural coordinates graphic represent math dimension */}
          <div className="absolute inset-0 border border-slate-100/60 rounded-3xl bg-slate-50/30 flex items-center justify-center">
            {/* Minimal SVG Coordinate Blueprint */}
            <svg width="280" height="280" viewBox="0 0 200 200" className="opacity-80">
              {/* Outer grid boundaries */}
              <rect x="10" y="10" width="180" height="180" stroke="#f1f5f9" strokeWidth="1" fill="none" />
              
              {/* Mathematical alignment ticks */}
              <line x1="100" y1="10" x2="100" y2="190" stroke="#f1f5f9" strokeWidth="0.8" strokeDasharray="3 3" />
              <line x1="10" y1="100" x2="190" y2="100" stroke="#f1f5f9" strokeWidth="0.8" strokeDasharray="3 3" />
              
              {/* Abstract coordinated lines */}
              <path d="M 40 100 L 100 40 L 160 100 L 100 160 Z" stroke="#e2e8f0" strokeWidth="1" fill="none" />
              
              {/* Active neural nodes */}
              <circle cx="100" cy="40" r="4" fill="#2563EB" />
              <circle cx="160" cy="100" r="4" fill="#7C3AED" />
              <circle cx="100" cy="160" r="4" fill="#06B6D4" />
              <circle cx="40" cy="100" r="4" fill="#64748b" />
              
              {/* Vector dimension weights */}
              <path d="M 40 100 Q 100 80 160 100" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="1 1" fill="none" opacity="0.6" />
              <path d="M 100 40 Q 120 100 100 160" stroke="#7C3AED" strokeWidth="1.5" fill="none" opacity="0.4" />
            </svg>
          </div>
        </motionModule.div>
      </div>
    </section>
  );
};

export default Hero;
