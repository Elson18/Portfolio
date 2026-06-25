import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Cloud, Database, Code } from 'lucide-react';

const skillsData = [
  {
    category: 'AI & Machine Learning',
    items: ['Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Computer Vision', 'PyTorch', 'Scikit-Learn', 'Feature Engineering'],
    gridSpan: 'md:col-span-3',
    accent: 'bg-violet-600',
    icon: <Brain size={18} className="text-violet-600" />
  },
  {
    category: 'Generative AI',
    items: ['LangChain', 'LangGraph', 'RAG Pipelines', 'ChromaDB', 'FAISS', 'LLM Fine-Tuning', 'Prompt Engineering', 'AWS Bedrock'],
    gridSpan: 'md:col-span-3',
    accent: 'bg-cyan-500',
    icon: <Cpu size={18} className="text-cyan-500" />
  },
  {
    category: 'Cloud Platforms',
    items: ['AWS', 'AWS Bedrock', 'Azure OpenAI', 'AWS Lambda', 'Serverless Architecture'],
    gridSpan: 'md:col-span-2',
    accent: 'bg-indigo-500',
    icon: <Cloud size={18} className="text-indigo-500" />
  },
  {
    category: 'Backend Development',
    items: ['Python', 'Flask', 'FastAPI', 'REST APIs', 'Node.js', 'Express.js'],
    gridSpan: 'md:col-span-2',
    accent: 'bg-emerald-500',
    icon: <Code size={18} className="text-emerald-500" />
  },
  {
    category: 'Databases & Storage',
    items: ['MongoDB', 'MySQL', 'SQLite', 'Vector DBs', 'SQL Pipelines'],
    gridSpan: 'md:col-span-2',
    accent: 'bg-amber-500',
    icon: <Database size={18} className="text-amber-500" />
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="skills" className="bg-zinc-50 px-6 md:px-12 py-32 md:py-48 border-b border-zinc-100 relative overflow-hidden bg-dot-grid">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-24 text-left max-w-2xl">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-violet-600 block mb-3 uppercase">
            // 03 / COMPETENCIES
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tighter text-zinc-950 uppercase leading-none mb-6">
            TECHNICAL STACK
          </h2>
          <div className="h-[2px] bg-zinc-950 w-24 my-6" />
          <p className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-widest leading-relaxed">
            A premium bento grid of specialized capabilities spanning predictive architectures, generative modeling, serverless endpoints, and storage.
          </p>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-6 gap-6 items-stretch"
        >
          {skillsData.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`border border-zinc-150 rounded-2xl p-6 md:p-8 bg-white flex flex-col justify-between transition-all duration-300 shadow-xl shadow-zinc-200/5 hover:shadow-xl hover:shadow-violet-500/[0.02] ${cat.gridSpan} group`}
            >
              <div>
                {/* Header with Icon */}
                <div className="flex justify-between items-center mb-6">
                  <div className="p-3 bg-zinc-50 rounded-xl group-hover:bg-zinc-100 transition-colors">
                    {cat.icon}
                  </div>
                  {/* Visual Accent Pill */}
                  <div className={`w-8 h-1 rounded-full ${cat.accent} opacity-80`} />
                </div>
                
                {/* Category Title */}
                <h3 className="text-base font-bold font-heading text-zinc-950 uppercase tracking-tight mb-4">
                  {cat.category}
                </h3>
              </div>

              {/* Elegant Tech Chips */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {cat.items.map((item, itemIdx) => (
                  <span
                    key={itemIdx}
                    className="text-[11px] font-semibold text-zinc-600 bg-zinc-50 border border-zinc-200/60 px-3 py-2 rounded-md hover:border-zinc-400 hover:text-zinc-950 transition-all duration-250 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
