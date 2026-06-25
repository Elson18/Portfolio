import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Github } from './BrandIcons';

const projects = [
  {
    number: '01',
    title: 'AI Wearable for Smart Mobility',
    subtitle: 'Assistive computer vision system leveraging real-time triangulation and LLM captioning to guide visually impaired users.',
    overview: 'An edge-compatible wearable system integrated with YOLOv8 for object localization and relative depth triangulation to provide semantic spatial context for visually impaired navigators.',
    problem: 'Visually impaired individuals face significant navigational hazards, struggling to identify obstacles in dynamic paths and understand their ambient environments in real-time. Traditional assistives only detect proximity without semantic context.',
    solution: 'Designed and deployed a dual-pipeline system on edge hardware. Implemented YOLOv8 for real-time object classification and depth triangulation mapping, alongside a quantized GPT-4o pipeline that translates scene structures into localized, low-latency text-to-speech audio feedback.',
    tech: ['Python', 'PyTorch', 'OpenCV', 'YOLO v8', 'OpenAI GPT-4o', 'AWS Bedrock'],
    impact: 'Voice response latency reduced to <220ms, increasing obstacle avoidance precision by 40% and user path confidence in complex urban environments.',
    github: 'https://github.com/elsonbenanzal/smart-wearable',
    demo: 'https://github.com/elsonbenanzal/smart-wearable',
    image: '/assets/projects/wearable.png'
  },
  {
    number: '02',
    title: 'Healthcare Appointment Assistant',
    subtitle: 'Automated medical receptionist coordinating clinician slots, symptom triage, and HIPAA-compliant patient intake.',
    overview: 'A serverless, HIPAA-compliant receptionist agent leveraging FastAPI and AWS Bedrock to coordinate clinical slots and streamline patient triage workflows.',
    problem: 'Clinical administrative workflows suffer from high booking friction, manual scheduling bottlenecks, and patient intake delays, leading to slot vacancy and administrative burnout.',
    solution: 'Built an autonomous healthcare coordinator agent using FastAPI and AWS Bedrock. The system automatically coordinates patient symptoms, triages severity according to clinical rules, validates practitioner calendar slots, and dispatches automated SMS reminders.',
    tech: ['FastAPI', 'MongoDB', 'AWS Bedrock', 'AWS Lambda', 'Azure ACS'],
    impact: 'Reduced scheduling booking friction by 60%, automated patient queue triage, and eliminated receptionist scheduling bottlenecks.',
    github: 'https://github.com/elsonbenanzal/healthcare-assistant',
    demo: 'https://github.com/elsonbenanzal/healthcare-assistant',
    image: '/assets/projects/healthcare.png'
  },
  {
    number: '03',
    title: 'Multilingual Cybercrime Chatbot',
    subtitle: 'Agentic assistant answering legal and report-filing queries regarding cybercrime in multiple local dialects.',
    overview: 'An agentic legal assistant using LangGraph and LangChain to retrieve cyber laws and generate filing drafts in localized dialects.',
    problem: 'Cybercrime victims struggle to report incidents due to complex legal jargon and lack of support in localized dialects, resulting in delayed filing and unresolved offenses.',
    solution: 'Engineered a state-graph multi-agent network using LangGraph. The system integrates ChromaDB for semantic search over cyber regulations, retrieves relevant legal code citations, and utilizes translation models to deliver counsel in local dialects.',
    tech: ['Python', 'LangChain', 'LangGraph', 'Azure OpenAI', 'Flask', 'ChromaDB'],
    impact: '95% semantic retrieval accuracy on legal clauses, allowing non-technical victims to draft incident sheets in native dialects.',
    github: 'https://github.com/elsonbenanzal/cybercrime-chatbot',
    demo: 'https://github.com/elsonbenanzal/cybercrime-chatbot',
    image: '/assets/projects/cybercrime.png'
  },
  {
    number: '04',
    title: 'Caregiver Matching System',
    subtitle: 'Autonomous workflow matcher scoring client care needs and pairing them to optimal caregivers.',
    overview: 'An autonomous pairing engine built with LangGraph state charts and Faiss vector similarity matching to score and coordinate caregiver assignments.',
    problem: 'Matching complex patient medical needs with caregiver certifications, availability, and geographical constraints is highly error-prone and causes significant administrative delays.',
    solution: 'Created an autonomous matching workflow using LangGraph state-charts. The system ranks caregiver capabilities against patient medical logs via Faiss vector embeddings, calculates transit radii, and manages conflict-resolution loops.',
    tech: ['Python', 'LangGraph', 'LangChain', 'MongoDB', 'FastAPI', 'Faiss'],
    impact: 'Onboarding matching cycle reduced by 45%, while satisfying 98% of specialized client health constraints.',
    github: 'https://github.com/elsonbenanzal/caregiver-matcher',
    demo: 'https://github.com/elsonbenanzal/caregiver-matcher',
    image: '/assets/projects/caregiver.png'
  },
  {
    number: '05',
    title: 'Doctor Appointment Booking',
    subtitle: 'Full stack conversational appointment scheduler, clinician calendar manager, and admin board.',
    overview: 'A full-stack conversational platform featuring a booking chat widget, clinician schedule tracking, and analytics dashboards.',
    problem: 'Patients experience friction when reserving clinician slots, while clinic administrators struggle with double-bookings and schedule opacity.',
    solution: 'Developed a React and Flask booking platform with a custom conversational chatbot widget. Designed an administrative dashboard containing calendar synchronization, cancellation tracking, and dynamic clinician schedule allocation.',
    tech: ['React.js', 'Flask', 'SQLite', 'OpenAI API', 'Tailwind CSS'],
    impact: '100% elimination of scheduling conflicts, and improved daily clinic scheduling density by 25%.',
    github: 'https://github.com/elsonbenanzal/doctor-booking',
    demo: 'https://github.com/elsonbenanzal/doctor-booking',
    image: '/assets/projects/booking.png'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white px-6 md:px-12 py-32 md:py-48 border-b border-zinc-100 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-24 text-left max-w-2xl">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-violet-600 block mb-3 uppercase">
            // 04 / SELECTED WORK
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tighter text-zinc-950 uppercase leading-none mb-6">
            CASE STUDIES
          </h2>
          <div className="h-[2px] bg-zinc-950 w-24 my-6" />
          <p className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-widest leading-relaxed">
            Highly-focused product engineering. Resolving scalability bottlenecks, fine-tuning neural architectures, and measuring real-world impact.
          </p>
        </div>

        {/* Case Studies Staggered List */}
        <div className="flex flex-col gap-24 md:gap-36">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={index}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center border-t border-zinc-150 pt-16 first:border-0 first:pt-0"
              >
                {/* Left Side: Editorial Info (Problem, Solution, Title) */}
                <div className={`lg:col-span-7 flex flex-col gap-6 text-left ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  {/* Number & Headline */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-violet-600 bg-violet-50 px-2.5 py-1 rounded-md">
                      [{project.number}]
                    </span>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-450 uppercase">
                      CASE STUDY SPECIFICATION
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black font-heading text-zinc-950 tracking-tight leading-tight uppercase">
                    {project.title}
                  </h3>

                  <p className="text-base text-zinc-700 font-sans font-medium leading-relaxed">
                    {project.subtitle}
                  </p>

                  <div className="h-[1px] bg-zinc-200/60 my-2" />

                  {/* Problem & Solution block */}
                  <div className="flex flex-col gap-5">
                    <div className="bg-zinc-50 border border-zinc-150/80 rounded-2xl p-5 md:p-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-heading mb-2">
                        The Challenge
                      </h4>
                      <p className="text-sm text-zinc-650 font-sans leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div className="bg-violet-500/[0.02] border border-violet-500/10 rounded-2xl p-5 md:p-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-violet-600 font-heading mb-2">
                        The Architecture
                      </h4>
                      <p className="text-sm text-zinc-700 font-sans leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Side: Mockup Preview, Impact, Tech */}
                <div className={`lg:col-span-5 flex flex-col gap-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  {/* Image Container with thin crisp outline */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="aspect-[4/3] w-full border border-zinc-200 rounded-2xl overflow-hidden bg-zinc-50 relative group shadow-lg shadow-zinc-200/10 cursor-pointer"
                  >
                    {/* Dark gradient mask on hover */}
                    <div className="absolute inset-0 bg-zinc-950/0 group-hover:bg-zinc-950/20 transition-all duration-300 z-10" />
                    {/* In production this will show images, let's build styled svg templates if images are missing */}
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      onError={(e) => {
                        // If local images are not found, render a premium pattern
                        e.target.style.display = 'none';
                        e.target.parentNode.classList.add('bg-zinc-900', 'flex', 'items-center', 'justify-center');
                      }}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                    {/* Placeholder fallback visual */}
                    <div className="absolute inset-0 hidden group-[.bg-zinc-900]:flex flex-col justify-center items-center p-6 text-zinc-500 font-mono text-[10px]">
                      <code className="text-violet-400 font-bold mb-2">DEPLOYED_MODULE // {project.number}</code>
                      <span className="text-center">{project.title.toUpperCase()}</span>
                    </div>
                  </motion.div>

                  {/* Impact Panel */}
                  <div className="border border-emerald-500/10 bg-emerald-500/[0.02] rounded-2xl p-5 md:p-6 text-left flex flex-col gap-2.5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 font-heading">
                      // PERFORMANCE METRIC DELIVERED
                    </span>
                    <p className="text-sm font-semibold text-zinc-800 font-sans leading-relaxed">
                      {project.impact}
                    </p>
                  </div>

                  {/* Tech stack & Links */}
                  <div className="flex flex-col gap-5 pt-4 border-t border-zinc-150">
                    {/* Tech list */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="text-[10px] font-mono font-bold text-zinc-500 bg-zinc-50 border border-zinc-200 px-2.5 py-1.5 rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Resources */}
                    <div className="flex items-center gap-6">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-650 hover:text-zinc-950 uppercase tracking-wider transition-colors duration-200"
                      >
                        <Github size={13} />
                        <span>Codebase</span>
                      </a>
                      
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-violet-600 hover:text-violet-700 uppercase tracking-wider transition-colors duration-200"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;
