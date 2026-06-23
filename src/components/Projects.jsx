import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Github } from './BrandIcons';

const projects = [
  {
    title: 'AI Wearable for Smart Mobility',
    shortDesc: 'Assistive computer vision system leveraging real-time triangulation and LLM captioning to guide visually impaired users.',
    tech: ['Python', 'PyTorch', 'OpenCV', 'YOLO v8', 'OpenAI GPT-4o', 'AWS Bedrock'],
    highlights: [
      'Real-time object detection and relative depth/distance triangulation.',
      'Conversational ambient environment description (describing complex scenes, signs, or hazards).',
      'Text-to-speech voice guidance synthesizer with low-latency responsiveness.'
    ],
    github: 'https://github.com/elsonbenanzal/smart-wearable',
    demo: 'https://github.com/elsonbenanzal/smart-wearable',
    visual: 'wearable'
  },
  {
    title: 'Healthcare Appointment Assistant',
    shortDesc: 'Automated medical receptionist coordinating clinician slots, symptom triage, and HIPAA-compliant patient intake.',
    tech: ['FastAPI', 'MongoDB', 'AWS Bedrock', 'AWS Lambda', 'Azure ACS'],
    highlights: [
      'FastAPI-based backend with MongoDB object data storage.',
      'AWS Lambda serverless workers handling cron jobs and slot validation.',
      'Automated dispatch alerts (WhatsApp/SMS reminders) using Azure Communication Services.'
    ],
    github: 'https://github.com/elsonbenanzal/healthcare-assistant',
    demo: 'https://github.com/elsonbenanzal/healthcare-assistant',
    visual: 'healthcare'
  },
  {
    title: 'Multilingual Cybercrime Chatbot',
    shortDesc: 'Agentic assistant answering legal and report-filing queries regarding cybercrime in multiple local dialects.',
    tech: ['Python', 'LangChain', 'LangGraph', 'Azure OpenAI', 'Flask', 'ChromaDB'],
    highlights: [
      'Multi-agent orchestration with specialized sub-graphs for specific cyber laws.',
      'Semantic Search and RAG leveraging ChromaDB to fetch relevant legal clauses.',
      'Multilingual support incorporating dialect-specific translations for enhanced accessibility.'
    ],
    github: 'https://github.com/elsonbenanzal/cybercrime-chatbot',
    demo: 'https://github.com/elsonbenanzal/cybercrime-chatbot',
    visual: 'cybercrime'
  },
  {
    title: 'Caregiver Matching System',
    shortDesc: 'Autonomous workflow matcher scoring client care needs and pairing them to optimal caregivers.',
    tech: ['Python', 'LangGraph', 'LangChain', 'MongoDB', 'FastAPI', 'Faiss'],
    highlights: [
      'State-graph workflow resolving client needs assessment and caregiver scoring loops.',
      'Geographical radius calculation and availability overlapping validators.',
      'Conflict-resolution workflows (triggers alternate matching loops if primary caregiver declines).'
    ],
    github: 'https://github.com/elsonbenanzal/caregiver-matcher',
    demo: 'https://github.com/elsonbenanzal/caregiver-matcher',
    visual: 'caregiver'
  },
  {
    title: 'Doctor Appointment Booking Assistant',
    shortDesc: 'Full stack conversational appointment scheduler, clinician calendar manager, and admin board.',
    tech: ['React.js', 'Flask', 'SQLite', 'OpenAI API', 'Bootstrap-CSS'],
    highlights: [
      'Interactive conversational slot reservation chat widget.',
      'Dynamic admin management board for doctors and hospital administrators.',
      'Automated calendar slot sync with cancellation tracking.'
    ],
    github: 'https://github.com/elsonbenanzal/doctor-booking',
    demo: 'https://github.com/elsonbenanzal/doctor-booking',
    visual: 'booking'
  }
];

// Helper to render high-contrast minimalist SVGs for each case study
const ProjectVisual = ({ type }) => {
  switch (type) {
    case 'wearable':
      return (
        <svg width="100%" height="100%" viewBox="0 0 400 240" fill="none" className="bg-slate-50">
          <circle cx="200" cy="120" r="60" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="200" cy="120" r="10" fill="#2563EB" />
          <rect x="50" y="40" width="100" height="60" stroke="#64748b" strokeWidth="1" rx="4" />
          <text x="58" y="55" fill="#64748b" fontSize="8" fontFamily="monospace" fontWeight="bold">OBJ: PEDESTRIAN</text>
          <rect x="250" y="140" width="100" height="60" stroke="#64748b" strokeWidth="1" rx="4" />
          <text x="258" y="155" fill="#64748b" fontSize="8" fontFamily="monospace" fontWeight="bold">OBJ: SIGN [STOP]</text>
          <line x1="200" y1="120" x2="150" y2="100" stroke="#cbd5e1" strokeWidth="1" />
          <line x1="200" y1="120" x2="250" y2="140" stroke="#cbd5e1" strokeWidth="1" />
        </svg>
      );
    case 'healthcare':
      return (
        <svg width="100%" height="100%" viewBox="0 0 400 240" fill="none" className="bg-slate-50">
          <rect x="60" y="40" width="280" height="160" rx="8" stroke="#cbd5e1" strokeWidth="1" />
          <rect x="60" y="40" width="280" height="30" rx="8" fill="#f1f5f9" />
          <circle cx="80" cy="55" r="4" fill="#64748b" />
          <circle cx="92" cy="55" r="4" fill="#cbd5e1" />
          <text x="110" y="59" fill="#64748b" fontSize="9" fontFamily="sans-serif">Clinical Calendar</text>
          
          <line x1="130" y1="70" x2="130" y2="200" stroke="#f1f5f9" strokeWidth="1" />
          <line x1="200" y1="70" x2="200" y2="200" stroke="#f1f5f9" strokeWidth="1" />
          
          <rect x="140" y="90" width="50" height="30" rx="4" fill="#eff6ff" stroke="#2563EB" strokeWidth="1" />
          <text x="145" y="108" fill="#2563EB" fontSize="8" fontFamily="sans-serif" fontWeight="bold">BOOKED</text>
        </svg>
      );
    case 'cybercrime':
      return (
        <svg width="100%" height="100%" viewBox="0 0 400 240" fill="none" className="bg-slate-50">
          <circle cx="120" cy="120" r="30" fill="#2563EB" opacity="0.1" />
          <text x="114" y="125" fill="#2563EB" fontSize="16" fontFamily="sans-serif" fontWeight="bold">A</text>
          
          <circle cx="280" cy="120" r="30" fill="#7C3AED" opacity="0.1" />
          <text x="273" y="125" fill="#7C3AED" fontSize="16" fontFamily="sans-serif" fontWeight="bold">क</text>
          
          <path d="M 160 120 L 240 120" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M 235 115 L 240 120 L 235 125" stroke="#cbd5e1" strokeWidth="1" />
          
          <rect x="60" y="180" width="280" height="30" rx="6" stroke="#cbd5e1" strokeWidth="1" />
          <text x="75" y="198" fill="#64748b" fontSize="8" fontFamily="monospace">INCIDENT_FILE: CLASS_3_FINANCIAL_FRAUD</text>
        </svg>
      );
    case 'caregiver':
      return (
        <svg width="100%" height="100%" viewBox="0 0 400 240" fill="none" className="bg-slate-50">
          <circle cx="100" cy="80" r="16" stroke="#2563EB" strokeWidth="1.5" />
          <text x="96" y="84" fill="#2563EB" fontSize="10" fontFamily="sans-serif" fontWeight="bold">IN</text>
          
          <circle cx="200" cy="60" r="20" stroke="#cbd5e1" strokeWidth="1" />
          <text x="187" y="63" fill="#64748b" fontSize="8" fontFamily="sans-serif">ASSESS</text>
          
          <circle cx="200" cy="140" r="20" stroke="#cbd5e1" strokeWidth="1" />
          <text x="189" y="143" fill="#64748b" fontSize="8" fontFamily="sans-serif">MATCH</text>
          
          <circle cx="300" cy="100" r="16" stroke="#10b981" strokeWidth="1.5" />
          <text x="292" y="104" fill="#10b981" fontSize="10" fontFamily="sans-serif" fontWeight="bold">OUT</text>
          
          <line x1="116" y1="80" x2="180" y2="60" stroke="#cbd5e1" strokeWidth="1" />
          <line x1="116" y1="80" x2="180" y2="140" stroke="#cbd5e1" strokeWidth="1" />
          <line x1="220" y1="60" x2="284" y2="100" stroke="#cbd5e1" strokeWidth="1" />
          <line x1="220" y1="140" x2="284" y2="100" stroke="#cbd5e1" strokeWidth="1" />
        </svg>
      );
    case 'booking':
      return (
        <svg width="100%" height="100%" viewBox="0 0 400 240" fill="none" className="bg-slate-50">
          <rect x="80" y="50" width="240" height="140" rx="8" stroke="#cbd5e1" strokeWidth="1" />
          <line x1="80" y1="90" x2="320" y2="90" stroke="#cbd5e1" strokeWidth="1" />
          <text x="95" y="75" fill="#0f172a" fontSize="10" fontFamily="sans-serif" fontWeight="bold">Clinician Console</text>
          
          <circle cx="100" cy="120" r="8" fill="#10b981" />
          <text x="115" y="123" fill="#64748b" fontSize="9" fontFamily="sans-serif">Dr. R. Benanzal</text>
          
          <circle cx="100" cy="155" r="8" fill="#3b82f6" />
          <text x="115" y="158" fill="#64748b" fontSize="9" fontFamily="sans-serif">9:30 AM Slot Available</text>
        </svg>
      );
    default:
      return null;
  }
};

const Projects = () => {
  return (
    <section id="projects" className="bg-white px-6 md:px-12 py-24 md:py-36 border-t border-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 text-left max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
            03 / Works
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading tracking-tight text-slate-950 mb-4">
            Featured Projects
          </h2>
          <p className="text-base md:text-lg text-slate-500 leading-relaxed">
            Advanced multi-agent coordinations, assistives, and clinical backends, developed with design simplicity and strict impact constraints.
          </p>
        </div>

        {/* Case Studies List */}
        <div className="flex flex-col gap-24 md:gap-36">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={index}
                className={`flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-16 items-center`}
              >
                {/* Visual Block (alternates grid layout) */}
                <div className={`w-full lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="aspect-[4/3.2] border border-slate-100 rounded-2xl overflow-hidden hover:border-slate-200/80 transition-all duration-300 shadow-sm"
                  >
                    <ProjectVisual type={project.visual} />
                  </motion.div>
                </div>

                {/* Text Block */}
                <div className={`w-full lg:col-span-6 text-left flex flex-col gap-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <span className="text-xs font-bold text-brand-primary uppercase tracking-wider">
                    Case Study
                  </span>
                  
                  <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-slate-500 leading-relaxed">
                    {project.shortDesc}
                  </p>

                  {/* Highlights */}
                  <ul className="list-none flex flex-col gap-2.5 text-xs md:text-sm text-slate-600">
                    {project.highlights.map((bullet, bIdx) => (
                      <li key={bIdx} className="relative pl-4 leading-relaxed">
                        <span className="absolute left-0 top-[0.6em] w-1.5 h-1.5 rounded-full bg-slate-300" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="text-xs font-semibold text-slate-500 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4 border-t border-slate-100 mt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-950 transition-colors"
                    >
                      <Github size={16} />
                      <span>Codebase</span>
                    </a>
                    
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary hover:text-blue-700 transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={14} />
                    </a>
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
