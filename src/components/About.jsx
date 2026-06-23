import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="about" className="bg-white px-6 md:px-12 py-24 md:py-36 border-t border-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Block - Label */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
              01 / Core Profile
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading tracking-tight text-slate-950">
              The Story
            </h2>
          </div>

          {/* Right Block - Description & Highlights */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-8 flex flex-col gap-10 text-left"
          >
            {/* Core statement */}
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-slate-900 font-medium leading-relaxed font-heading"
            >
              I design and deploy agentic AI pipelines and custom machine learning pipelines. My focus is on turning raw academic theories into robust, production-ready systems.
            </motion.p>

            {/* List coordinates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-slate-100">
              <motion.div variants={itemVariants} className="flex flex-col gap-2">
                <h3 className="text-base font-bold text-slate-900">AI Engineer & Builder</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Active builder implementing RAG architectures, orchestrating multi-agent state graphs using LangGraph, and deploying FastAPI backends on AWS.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col gap-2">
                <h3 className="text-base font-bold text-slate-900">AIML Student</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Academically grounded in deep learning models, mathematical logic, and dataset pipeline optimization.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col gap-2">
                <h3 className="text-base font-bold text-slate-900">Research Enthusiast</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Deeply interested in agent reasoning models, medical appointment automation, and real-time computer vision for accessibility.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col gap-2">
                <h3 className="text-base font-bold text-slate-900">Design-First Engineering</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Believer in visual and code simplicity. Creating clean API schemas and clean frontends with zero unnecessary weight.
                </p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
