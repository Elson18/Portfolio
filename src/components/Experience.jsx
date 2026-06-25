import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Calendar, Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Product Engineer Intern',
    company: 'Cloud Destinations',
    duration: 'August 2026 - Present',
    tech: ['Python', 'LangChain', 'LangGraph', 'Azure OpenAI', 'AWS Bedrock', 'FastAPI', 'ChromaDB', 'WhatsApp API'],
    bullets: [
      'Worked on building real-time AI-driven healthcare appointment systems using voice and WhatsApp platforms.',
      'Developed conversational assistants with Azure and AWS to handle patient verification, symptom assessment, insurance checks, and appointment scheduling.'
    ]
  },
  {
    role: 'AIML Intern',
    company: 'Codebind Technologies',
    duration: 'December 2024',
    tech: ['Python', 'NLP Chatbots', 'NLP Frameworks', 'Automated Conversations'],
    bullets: [
      'Developed an AI-driven chatbot using NLP techniques for automated conversations.'
    ]
  },
  {
    role: 'Full Stack Development Intern',
    company: 'Learnlogicify Technologies',
    duration: 'June 2025',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'HTML/CSS'],
    bullets: [
      'Created a fully functional website as a key internship task, integrating both frontend and backend.'
    ]
  }
];

const Experience = () => {
  const containerRef = useRef(null);
  
  // Track scroll position of the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 70%"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001
  });

  // Spotlight coordinate calculation (GPU)
  const handleSpotlightMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
    card.style.setProperty('--mouse-active', '1');
  };

  const handleSpotlightMouseLeave = (e) => {
    e.currentTarget.style.setProperty('--mouse-active', '0');
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="experience" className="bg-transparent px-6 md:px-12 py-32 md:py-48 border-b border-border relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Sticky Heading */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 text-left">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-brand-primary block mb-3 uppercase">
              // 02 / PROFESSIONAL TIMELINE
            </span>
            <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tighter text-text uppercase leading-none mb-6">
              CHRONOLOGY
            </h2>
            <div className="h-[2px] bg-brand-primary/50 w-24 my-6" />
            <p className="text-xs font-mono font-semibold text-text-muted uppercase tracking-widest leading-relaxed">
              A timeline of system deployments, software engineering, and computational models.
            </p>
          </div>

          {/* Right Column - Scroll progress timeline */}
          <div 
            ref={containerRef}
            className="lg:col-span-8 flex flex-col gap-16 relative pl-6 md:pl-10 text-left"
          >
            {/* Background trace line */}
            <div className="absolute left-[3px] md:left-[11px] top-4 bottom-4 w-[1px] bg-border" />
            
            {/* Scroll-drawing progress path */}
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="absolute left-[3px] md:left-[11px] top-4 bottom-4 w-[1.5px] bg-gradient-to-b from-brand-primary to-brand-accent"
            />

            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={cardVariants}
                className="relative group"
              >
                {/* Custom timeline tracking head */}
                <span className="absolute -left-[30px] md:-left-[46px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-bg border-2 border-border group-hover:border-brand-primary transition-colors duration-300 z-10">
                  <span className="h-1.5 w-1.5 rounded-full bg-border group-hover:bg-brand-primary transition-colors duration-300" />
                </span>

                {/* Glassmorphic company card */}
                <div 
                  onMouseMove={handleSpotlightMouseMove}
                  onMouseLeave={handleSpotlightMouseLeave}
                  className="spotlight-card glass-card rounded-2xl p-6 md:p-8 border border-border shadow-sm"
                >
                  {/* Top header grid */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 relative z-10">
                    <div>
                      <h3 className="text-xl font-black font-heading text-text tracking-tight uppercase leading-tight">
                        {exp.role}
                      </h3>
                      <h4 className="text-xs font-mono font-bold text-brand-primary mt-1 uppercase tracking-wider flex items-center gap-1.5">
                        <Briefcase size={12} />
                        {exp.company}
                      </h4>
                    </div>
                    
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-text-muted bg-card border border-border py-1 px-3 rounded-full w-fit">
                      <Calendar size={11} />
                      {exp.duration}
                    </span>
                  </div>

                  {/* Bullet points description */}
                  <ul className="flex flex-col gap-3 text-xs md:text-sm text-text-muted font-sans mb-6 relative z-10">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="relative pl-5 leading-relaxed">
                        <span className="absolute left-0 top-[0.65em] w-1.5 h-1.5 rounded-full bg-brand-primary/30" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills tags footer */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/60 relative z-10">
                    {exp.tech.map((t, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="text-[9px] font-mono font-bold text-text-muted bg-bg border border-border px-2.5 py-1.5 rounded-md hover:border-text-muted transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
