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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const pillars = [
    {
      title: 'AI Engineer & Builder',
      desc: 'Active builder implementing multi-agent state graphs using LangGraph, fine-tuning reasoning structures, and deploying FastAPI backends on cloud infrastructures.',
      icon: <BrainCircuit size={18} className="text-brand-primary" />
    },
    {
      title: 'AIML Specialist',
      desc: 'Academically grounded in neural networks, mathematical optimization, probabilistic models, and high-throughput dataset pipelines.',
      icon: <Cpu size={18} className="text-brand-accent" />
    },
    {
      title: 'Research Enthusiast',
      desc: 'Deeply interested in agent reasoning models, automated clinical receptionists, and low-latency computer vision for spatial feedback.',
      icon: <Compass size={18} className="text-amber-500" />
    },
    {
      title: 'Design-First Engineering',
      desc: 'Believer in structural simplicity. Engineering clean REST API contracts, intuitive user layouts, and efficient data structures.',
      icon: <Layout size={18} className="text-emerald-500" />
    }
  ];

  return (
    <section id="about" className="bg-transparent px-6 md:px-12 py-32 md:py-48 border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Block - Title & Description */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 text-left">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-brand-primary block mb-3 uppercase">
              // 01 / CORE STORY
            </span>
            <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tighter text-text uppercase leading-none mb-6">
              THE PROFILE
            </h2>
            <div className="h-[2px] bg-brand-primary/50 w-24 my-6" />
            <p className="text-xs font-mono font-semibold text-text-muted uppercase tracking-widest leading-relaxed">
              Translating advanced neural reasoning and models into production-ready pipelines.
            </p>
          </div>

          {/* Right Block - Journey pillars and milestones timeline */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-8 flex flex-col gap-16 text-left"
          >
            {/* Mission statement */}
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-text font-bold leading-relaxed font-heading tracking-tight max-w-3xl"
            >
              I design and deploy agentic AI orchestrations and custom ML systems. My focus is on turning raw mathematical optimization and academic theory into robust, production-ready systems with zero unnecessary complexity.
            </motion.p>

            {/* Journey Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pillars.map((p, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="glass-card rounded-2xl p-6 border border-border shadow-sm flex gap-4 items-start"
                >
                  <div className="p-3 bg-slate-50 border border-border rounded-xl flex-shrink-0">
                    {p.icon}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-text font-heading">
                      {p.title}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed font-sans">
                      {p.desc}
                    </p>
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
