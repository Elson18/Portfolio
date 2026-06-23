import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'AI Engineer Intern',
    company: 'Cloud Destinations',
    duration: 'Jan 2026 - Present',
    tech: ['Python', 'LangChain', 'LangGraph', 'Azure OpenAI', 'AWS Bedrock', 'FastAPI', 'ChromaDB'],
    bullets: [
      'Architected and implemented multi-agent workflow coordinators using LangGraph, facilitating autonomous collaboration between domain-specific bots.',
      'Designed and deployed RAG pipelines leveraging ChromaDB vector indexes to parse and extract contextual answers from complex corporate policies with >92% accuracy.',
      'Engineered scalable REST endpoints using FastAPI for secure connection between internal services and OpenAI/Bedrock models.'
    ]
  },
  {
    role: 'AIML Intern',
    company: 'Codebind Technologies',
    duration: 'June 2025 - Dec 2025',
    tech: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'SQL', 'NLP', 'Computer Vision'],
    bullets: [
      'Preprocessed high-dimensional datasets and implemented text classification architectures using supervised NLP frameworks.',
      'Optimized computer vision preprocessing scripts for edge detection and image alignment, decreasing pipeline execution duration by 15%.',
      'Created custom SQL pipelines to construct dataset baselines and automate periodic training inputs.'
    ]
  },
  {
    role: 'Full Stack Development Intern',
    company: 'Learnlogicify Technologies',
    duration: 'Jan 2025 - May 2025',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'HTML/CSS'],
    bullets: [
      'Developed responsive single-page interfaces, optimizing web performance metrics and achieving a 20% faster load time.',
      'Constructed modular CRUD API routes using Express.js and managed document schemas in MongoDB.',
      'Integrated authentication layers and customized layout grids to match premium mockups.'
    ]
  }
];

const Experience = () => {
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
    <section id="experience" className="bg-slate-50 px-6 md:px-12 py-24 md:py-36">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Block - Heading */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
              02 / Timeline
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading tracking-tight text-slate-950">
              Work Experience
            </h2>
          </div>

          {/* Right Block - Experience List */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-8 flex flex-col gap-12 text-left"
          >
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="pb-12 border-b border-slate-200/60 last:border-0 last:pb-0 flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-8"
              >
                {/* Date */}
                <div className="md:col-span-3">
                  <span className="text-sm font-semibold text-slate-400 block">
                    {exp.duration}
                  </span>
                </div>

                {/* Details */}
                <div className="md:col-span-9 flex flex-col gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {exp.role}
                    </h3>
                    <h4 className="text-sm font-semibold text-brand-primary">
                      {exp.company}
                    </h4>
                  </div>

                  {/* Bullets */}
                  <ul className="list-none flex flex-col gap-2.5 text-sm text-slate-600">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="relative pl-4 leading-relaxed">
                        <span className="absolute left-0 top-[0.6em] w-1.5 h-1.5 rounded-full bg-slate-300" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tech.map((t, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="text-xs font-semibold text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
