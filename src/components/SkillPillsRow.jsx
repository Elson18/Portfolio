import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Cpu, Eye, Sparkles, MessageSquare, Search, BarChart2, 
  Terminal, Zap, Layers, Server, Database, GitBranch, Cloud, FileCode
} from 'lucide-react';

const iconMap = {
  'Machine Learning': Brain,
  'Deep Learning': Cpu,
  'Computer Vision': Eye,
  'Generative AI': Sparkles,
  'LLMs': MessageSquare,
  'RAG Systems': Search,
  'Data Science': BarChart2,
  'Python': Terminal,
  'FastAPI': Zap,
  'React.js': Layers,
  'Node.js': Server,
  'MongoDB': Database,
  'Docker': FileCode,
  'Git': GitBranch,
  'Cloud Platforms': Cloud
};

const SkillPillsRow = ({ skills, direction = 'left', speed = '30s' }) => {
  const [isPaused, setIsPaused] = useState(false);

  const marqueeClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';

  // Duplicate skills to support infinite scrolling loop smoothly
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <div className="w-full relative">
      
      {/* 
        1. Desktop Layout (lg breakpoint and above):
        Infinite scrolling marquee layout, pausing on hover.
      */}
      <div className="hidden lg:block overflow-hidden w-full relative py-4">
        <div 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            animationDuration: speed,
            animationPlayState: isPaused ? 'paused' : 'running'
          }}
          className={`flex gap-4 whitespace-nowrap min-w-full ${marqueeClass}`}
        >
          {duplicatedSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.name] || FileCode;
            return (
              <motion.div
                key={`${skill.name}-marquee-${index}`}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: 'var(--color-brand-primary)',
                  boxShadow: '0 0 15px var(--color-glow)'
                }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-border bg-zinc-900/80 backdrop-blur-md text-text cursor-pointer select-none transition-colors duration-300"
              >
                <IconComponent size={14} className="text-brand-primary" />
                <span className="text-xs font-mono font-bold tracking-wider">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 
        2. Mobile/Tablet Layout (under lg breakpoint):
        Swipeable horizontal container with snap alignment points, scrollbar-less.
      */}
      <div className="lg:hidden flex overflow-x-auto snap-x snap-mandatory gap-3 py-4 px-1 scrollbar-none scroll-smooth">
        {skills.map((skill, index) => {
          const IconComponent = iconMap[skill.name] || FileCode;
          return (
            <motion.div
              key={`${skill.name}-mobile-${index}`}
              whileTap={{ scale: 0.96 }}
              className="snap-start shrink-0 flex items-center gap-3 px-5 py-3 rounded-full border border-border bg-zinc-900/80 backdrop-blur-md text-text cursor-pointer select-none transition-colors duration-300 active:border-brand-primary"
            >
              <IconComponent size={14} className="text-brand-primary" />
              <span className="text-xs font-mono font-bold tracking-wider">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </div>

    </div>
  );
};

export default SkillPillsRow;
