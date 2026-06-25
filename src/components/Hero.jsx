import React from 'react';
import { ArrowRight, Sparkles, Cpu, Trophy, Layers, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

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
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const metrics = [
    {
      number: '1,000+',
      label: 'SOLVED PROBLEMS',
      sub: 'LeetCode & CodeChef',
      icon: <Cpu size={24} className="text-violet-500" />,
      delay: 0.4
    },
    {
      number: '5',
      label: 'HACKATHONS',
      sub: 'Finalist & Winner',
      icon: <Trophy size={24} className="text-amber-500" />,
      delay: 0.5
    },
    {
      number: '95%',
      label: 'RAG ACCURACY',
      sub: 'Semantic Retrieval',
      icon: <Layers size={24} className="text-cyan-500" />,
      delay: 0.6
    },
    {
      number: '45%',
      label: 'MATCHING SPEED',
      sub: 'Onboarding Reduction',
      icon: <BookOpen size={24} className="text-emerald-500" />,
      delay: 0.7
    }
  ];

  return (
    <section id="home" className="min-h-screen flex flex-col justify-between bg-zinc-950 text-white pt-32 pb-16 px-6 md:px-12 relative overflow-hidden bg-dot-grid-dark">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full glow-orb" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full glow-orb" />

      <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col justify-center items-center text-center relative z-10 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center max-w-5xl"
        >
          {/* Tagline Indicator */}
          <motion.div 
            variants={itemVariants} 
            className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full mb-8"
          >
            <Sparkles size={14} className="text-violet-400 animate-pulse" />
            <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-zinc-400 uppercase">
              AI Engineer Intern @ Cloud Destinations
            </span>
          </motion.div>

          {/* Big Bold Headline with Floating Pills */}
          <div className="relative mb-8">
            {/* Left Floating Pill */}
            <motion.div 
              initial={{ opacity: 0, x: -20, rotate: -6 }}
              animate={{ opacity: 1, x: 0, rotate: -6 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute -top-12 -left-8 md:-left-20 bg-violet-500 text-white text-[10px] font-bold tracking-wider py-1 px-3 rounded-full flex items-center gap-1 shadow-lg shadow-violet-500/20"
            >
              <span>Agentic</span>
              <svg width="6" height="6" viewBox="0 0 6 6" fill="none" className="inline-block">
                <circle cx="3" cy="3" r="3" fill="white" />
              </svg>
            </motion.div>

            {/* Right Floating Pill */}
            <motion.div 
              initial={{ opacity: 0, x: 20, rotate: 6 }}
              animate={{ opacity: 1, x: 0, rotate: 6 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="absolute -bottom-4 -right-8 md:-right-16 bg-cyan-500 text-zinc-950 text-[10px] font-bold tracking-wider py-1 px-3 rounded-full flex items-center gap-1 shadow-lg shadow-cyan-500/20"
            >
              <span>Stateful</span>
              <svg width="6" height="6" viewBox="0 0 6 6" fill="none" className="inline-block">
                <circle cx="3" cy="3" r="3" fill="#09090b" />
              </svg>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-heading tracking-tighter leading-[0.9] text-gradient-purple uppercase"
            >
              Intelligent<br />
              AI Pipelines
            </motion.h1>
          </div>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-10 font-sans"
          >
            I architect stateful agent networks, fine-tune neural model pipelines, and build production-ready machine learning infrastructures.
          </motion.p>

          {/* Action triggers */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center justify-center">
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, 'projects')}
              className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-zinc-950 bg-white hover:bg-zinc-100 px-7 py-4.5 rounded-full transition-all duration-300 shadow-xl shadow-white/5 group cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white border border-zinc-800 hover:border-zinc-500 px-7 py-4.5 rounded-full bg-zinc-900/50 hover:bg-zinc-900 transition-all duration-300 cursor-pointer"
            >
              <span>Let's Connect</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Overlapping metric cards at bottom */}
      <div className="max-w-7xl mx-auto w-full relative z-20 pb-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 metric-card-overlap">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: m.delay, duration: 0.6, ease: 'easeOut' }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white border border-zinc-150 rounded-2xl p-5 md:p-6 text-left flex flex-col justify-between h-36 md:h-40 shadow-xl shadow-black/[0.03] card-glow-violet group cursor-default"
            >
              <div className="flex justify-between items-start">
                <span className="text-3xl md:text-4xl font-black font-heading text-zinc-900 tracking-tight leading-none group-hover:text-violet-600 transition-colors">
                  {m.number}
                </span>
                <div className="p-2 bg-zinc-50 rounded-xl group-hover:bg-violet-50 transition-colors">
                  {m.icon}
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold tracking-widest text-zinc-950 font-heading">
                  {m.label}
                </span>
                <span className="text-[10px] font-medium text-zinc-400 mt-0.5">
                  {m.sub}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
