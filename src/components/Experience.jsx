import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase } from 'lucide-react';

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
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="experience" className="bg-white px-6 md:px-12 py-32 md:py-48 border-b border-zinc-100 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Block - Heading */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 text-left">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-violet-600 block mb-3 uppercase">
              // 02 / CHRONOLOGY
            </span>
            <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tighter text-zinc-950 uppercase leading-none mb-6">
              EXPERIENCE
            </h2>
            <div className="h-[2px] bg-zinc-950 w-24 my-6" />
            <p className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-widest leading-relaxed max-w-[240px]">
              A timeline of system deployments, software engineering, and computational models.
            </p>
          </div>

          {/* Right Block - Timeline List */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-8 flex flex-col gap-12 text-left relative pl-4 md:pl-8 border-l border-zinc-150"
          >
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="relative pb-12 last:pb-0 group"
              >
                {/* Timeline Dot Indicator */}
                <span className="absolute -left-[21px] md:-left-[37px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-white border-2 border-zinc-300 group-hover:border-violet-600 transition-colors duration-300 z-10">
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-200 group-hover:bg-violet-600 transition-colors duration-300" />
                </span>

                <div className="bg-zinc-50 border border-zinc-150 rounded-2xl p-6 md:p-8 hover:shadow-xl hover:shadow-violet-500/[0.02] hover:border-zinc-300 transition-all duration-300">
                  {/* Top Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-zinc-950 font-heading tracking-tight uppercase">
                        {exp.role}
                      </h3>
                      <h4 className="text-xs font-mono font-bold text-violet-600 mt-1 uppercase tracking-wider flex items-center gap-1.5">
                        <Briefcase size={12} />
                        {exp.company}
                      </h4>
                    </div>
                    
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-zinc-400 bg-white border border-zinc-200/80 py-1 px-3 rounded-full w-fit">
                      <Calendar size={11} />
                      {exp.duration}
                    </span>
                  </div>

                  {/* Bullet points */}
                  <ul className="flex flex-col gap-3 text-sm text-zinc-600 font-sans mb-6">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="relative pl-5 leading-relaxed">
                        <span className="absolute left-0 top-[0.65em] w-1.5 h-1.5 rounded-full bg-violet-600/30" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-200/50">
                    {exp.tech.map((t, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="text-[10px] font-mono font-bold text-zinc-500 bg-white border border-zinc-200 px-2.5 py-1.5 rounded-md hover:border-zinc-400 hover:text-zinc-800 transition-colors"
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
