import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  GraduationCap, Briefcase, Award, Trophy, Compass 
} from 'lucide-react';

const milestones = [
  {
    type: 'education',
    year: '2023 - 2027',
    title: 'B.E. Artificial Intelligence & ML',
    org: 'Karpagam Institute of Technology, Coimbatore',
    desc: 'Academically focusing on machine learning foundations, probability analytics, calculus, linear algebra, and neural models. Maintained CGPA 8.24.',
    icon: GraduationCap,
    color: '#2563EB'
  },
  {
    type: 'internship',
    year: 'December 2024',
    title: 'AIML Intern',
    org: 'Codebind Technologies',
    desc: 'Designed and implemented an AI NLP chatbot to automate conversational dialogues and client triage flows.',
    icon: Briefcase,
    color: '#7C3AED'
  },
  {
    type: 'research',
    year: '2024',
    title: 'Assistive Tech Wearable for Blind',
    org: 'KIT Research Initiative',
    desc: 'Developed an IoT wearable integrated with Computer Vision scripts running localized pose-estimation schemas to alert visually impaired users of hazards.',
    icon: Compass,
    color: '#06B6D4'
  },
  {
    type: 'internship',
    year: 'June 2025',
    title: 'Full Stack Development Intern',
    org: 'Learnlogicify Technologies',
    desc: 'Configured robust backend database schemas and modular React.js view states to construct full stack platform tasks.',
    icon: Briefcase,
    color: '#7C3AED'
  },
  {
    type: 'hackathon',
    year: 'December 2025',
    title: 'Drone-based Search & Rescue',
    org: 'VCET HackElite Finalist',
    desc: 'Built spatial image triangulation algorithms and deployed quantized YOLOv8 models on NVIDIA Jetson companion boards for localized real-time edge computing.',
    icon: Trophy,
    color: '#F59E0B'
  },
  {
    type: 'hackathon',
    year: '2025',
    title: 'IDEATHON ’25 Third Prize',
    org: 'National Pitch Challenge',
    desc: 'Conceptualized agricultural agent platforms parsing soil parameter metrics to generate predictive crop yield forecasts.',
    icon: Award,
    color: '#10B981'
  },
  {
    type: 'internship',
    year: 'August 2026 - Present',
    title: 'Product Engineer Intern',
    org: 'Cloud Destinations',
    desc: 'Currently engineering conversational voice companion systems and WhatsApp API integrations using LangChain, LangGraph state-graphs, and AWS Bedrock/Azure OpenAI.',
    icon: Briefcase,
    color: '#2563EB'
  }
];

const Chronology = () => {
  const containerRef = useRef(null);

  // Track scroll position of the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 75%"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  const cardVariants = {
    hidden: (isEven) => ({
      opacity: 0,
      x: isEven ? -40 : 40,
      y: 15
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="chronology" className="bg-white px-6 md:px-12 py-32 border-b border-slate-200 relative select-none">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-24 text-left md:text-center max-w-2xl md:mx-auto">
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#2563EB] block mb-3 uppercase">
            // 03 / CHRONOLOGY & TIMELINE
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tighter text-[#0F172A] uppercase leading-none mb-6">
            Journey Timeline
          </h2>
          <div className="h-[2px] bg-[#2563EB]/50 w-24 my-6 md:mx-auto" />
          <p className="text-xs font-mono font-semibold text-[#64748B] uppercase tracking-widest leading-relaxed">
            A comprehensive sequential ledger of education, professional internships, hackathons, and research projects.
          </p>
        </div>

        {/* Timeline Path Container */}
        <div ref={containerRef} className="relative w-full overflow-hidden mt-12 pl-6 md:pl-0">
          
          {/* 
            Desktop Center Vertical Line:
            - Hidden on mobile/small screens.
            - Left centered on desktop.
          */}
          <div className="absolute left-[7px] md:left-1/2 top-4 bottom-4 w-[2px] bg-[#E5E7EB] md:-translate-x-1/2 z-0" />
          
          {/* 
            Scroll-Progress Drawing Vertical Line:
            - Map height progress to scroll state.
          */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-[7px] md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#2563EB] to-[#7C3AED] md:-translate-x-1/2 z-0"
          />

          <div className="flex flex-col gap-12 relative z-10">
            {milestones.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const IconComponent = item.icon;

              return (
                <div 
                  key={idx}
                  className={`flex flex-col md:flex-row items-start md:items-center w-full justify-between gap-6 md:gap-0 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Left Side (Desktop: 45% width, Mobile: 100%) */}
                  <div className="w-full md:w-[44%] text-left">
                    <motion.div
                      custom={isEven}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '-80px' }}
                      variants={cardVariants}
                      whileHover={{ y: -3 }}
                      className="glass-card bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-md shadow-slate-100/50 relative overflow-hidden group hover:border-[#2563EB]/40 hover:shadow-lg transition-all"
                    >
                      {/* Sub-tag indicator */}
                      <div className="flex items-center justify-between mb-4">
                        <span 
                          className="text-[9px] font-mono font-bold tracking-wider px-2.5 py-1 rounded border uppercase"
                          style={{
                            borderColor: `${item.color}33`,
                            color: item.color,
                            backgroundColor: `${item.color}0c`
                          }}
                        >
                          {item.type}
                        </span>
                        <div className="flex items-center gap-2">
                          <IconComponent size={12} style={{ color: item.color }} />
                          <span className="text-[10px] font-mono font-bold text-[#64748B] tracking-wider">
                            {item.year}
                          </span>
                        </div>
                      </div>

                      {/* Header Title */}
                      <h3 className="text-base font-black font-heading text-[#0F172A] uppercase tracking-wide group-hover:text-[#2563EB] transition-colors leading-tight">
                        {item.title}
                      </h3>
                      
                      <span className="text-[10px] font-mono text-[#64748B] block mt-1">
                        {item.org}
                      </span>

                      <p className="text-xs text-[#64748B] font-mono mt-3.5 leading-relaxed leading-relaxed font-sans">
                        {item.desc}
                      </p>
                    </motion.div>
                  </div>

                  {/* 
                    Middle Path Node Circle Indicator:
                    - Anchors on the central timeline line.
                  */}
                  <div className="absolute left-[1px] md:left-1/2 top-4 md:top-auto flex items-center justify-center md:-translate-x-1/2 md:translate-y-0 w-4 h-4 rounded-full bg-white border-2 border-[#E5E7EB] group-hover:border-[#2563EB] z-20">
                    <span 
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>

                  {/* Right Side Spacer (Desktop: 44% width, Mobile: 0%) */}
                  <div className="hidden md:block w-[44%]" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Chronology;
