import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'SQL']
  },
  {
    category: 'AI & Machine Learning',
    items: ['Machine Learning', 'Deep Learning', 'Natural Language Processing (NLP)', 'Computer Vision']
  },
  {
    category: 'Generative AI & LLMs',
    items: ['LangChain', 'LangGraph', 'RAG Pipelines', 'ChromaDB', 'FAISS', 'Large Language Models (LLMs)']
  },
  {
    category: 'Cloud Services & API',
    items: ['AWS', 'AWS Bedrock', 'Azure OpenAI', 'Azure Communication Services']
  },
  {
    category: 'Backend & APIs',
    items: ['Flask', 'FastAPI']
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'MySQL']
  }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="skills" className="bg-slate-50 px-6 md:px-12 py-24 md:py-36">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Block - Label */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
              04 / Competencies
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading tracking-tight text-slate-950">
              Technical Stack
            </h2>
          </div>

          {/* Right Block - Skills categories */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-8 flex flex-col gap-10 text-left"
          >
            {skillsData.map((cat, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="flex flex-col gap-3.5"
              >
                {/* Category label */}
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                  {cat.category}
                </h3>
                
                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.items.map((item, itemIdx) => (
                    <span 
                      key={itemIdx}
                      className="text-sm font-semibold text-slate-700 bg-white border border-slate-200/80 px-4 py-2 rounded-lg hover:border-slate-400 transition-colors duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
