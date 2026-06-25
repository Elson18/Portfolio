import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Cpu, Compass, Layout } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const cardsData = [
    {
      title: 'AI Engineer & Builder',
      desc: 'Active builder implementing multi-agent state graphs using LangGraph, fine-tuning reasoning structures, and deploying FastAPI backends on cloud infrastructures.',
      icon: <BrainCircuit size={18} className="text-violet-600" />
    },
    {
      title: 'AIML Specialist',
      desc: 'Academically grounded in neural networks, mathematical optimization, probabilistic models, and high-throughput dataset pipelines.',
      icon: <Cpu size={18} className="text-cyan-600" />
    },
    {
      title: 'Research Enthusiast',
      desc: 'Deeply interested in agent reasoning models, automated clinical receptionists, and low-latency computer vision for spatial feedback.',
      icon: <Compass size={18} className="text-amber-600" />
    },
    {
      title: 'Design-First Engineering',
      desc: 'Believer in structural simplicity. Engineering clean REST API contracts, intuitive user layouts, and efficient data structures.',
      icon: <Layout size={18} className="text-emerald-600" />
    }
  ];

  return (
    <section id="about" className="bg-zinc-50 px-6 md:px-12 py-32 md:py-48 relative border-b border-zinc-100 overflow-hidden bg-dot-grid">
      {/* Background soft blur orb */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-200/30 rounded-full glow-orb translate-y-[-50%] translate-x-[-50%]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Block - Minimal Section Label */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 text-left">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-violet-600 block mb-3 uppercase">
              // 01 / CORE PROFILE
            </span>
            <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tighter text-zinc-950 uppercase leading-none mb-6">
              THE STORY
            </h2>
            <div className="h-[2px] bg-zinc-950 w-24 my-6" />
            <p className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-widest leading-relaxed max-w-[240px]">
              Translating advanced research and models into production pipelines.
            </p>
          </div>

          {/* Right Block - Massive Statement & Sub-Details */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-8 flex flex-col gap-12 text-left"
          >
            {/* Core high-impact statement */}
            <motion.p 
              variants={itemVariants}
              className="text-2xl md:text-3xl text-zinc-900 font-bold leading-tight font-heading tracking-tight max-w-3xl"
            >
              I design and deploy agentic AI orchestrations and custom ML systems. My focus is on turning raw academic theory into robust, production-ready applications with zero unnecessary weight.
            </motion.p>

            {/* Grid layout matching Image 2 card style */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 border-t border-zinc-200/80">
              {cardsData.map((card, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white border border-zinc-150 rounded-2xl p-6 shadow-xl shadow-zinc-200/10 hover:shadow-xl hover:shadow-violet-500/[0.02] transition-all duration-300"
                >
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-zinc-50 rounded-xl">
                      {card.icon}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-950 font-heading">
                        {card.title}
                      </h3>
                      <p className="text-sm text-zinc-500 leading-relaxed font-sans">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
