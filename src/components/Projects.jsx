import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';
import { Github } from './BrandIcons';

const projects = [
  {
    number: '01',
    title: 'Vegetable Disease Detection',
    subtitle: 'Edge-compatible CNN classifier detecting crop leaf anomalies with model optimization.',
    overview: 'A deep-learning vision pipeline classifying vegetable foliage diseases (e.g., late blight, powdery mildew) optimized for edge deployment in precision agriculture.',
    problem: 'Early crop infections spread rapidly, causing significant yield losses. Traditional inspection is manual, slow, and requires scarce agricultural expertise.',
    solution: 'Developed a MobileNetV3 and YOLOv8 pipeline for instant foliage disease classification. Quantized the model to FP16/INT8 formats using TensorRT, deploying a lightweight FastAPI container to process frame feeds with minimal latency.',
    tech: ['Python', 'PyTorch', 'YOLO v8', 'TensorFlow Lite', 'OpenCV', 'FastAPI'],
    impact: 'Achieved 94.2% classification accuracy on 15 crop varieties with an inference latency of <45ms on edge devices.',
    github: 'https://github.com/elsonbenanzal/vegetable-disease-detection',
    demo: 'https://github.com/elsonbenanzal/vegetable-disease-detection',
    image: '/assets/projects/booking.png'
  },
  {
    number: '02',
    title: 'Retinal Disease Detection',
    subtitle: 'Deep ResNet pipeline segmenting fundus images for diabetic retinopathy grading.',
    overview: 'A clinical computer vision system segmenting microaneurysms and grading diabetic retinopathy severity from high-resolution optical fundus photography.',
    problem: 'Diabetic retinopathy requires early diagnosis to prevent permanent blindness, but clinical screening suffers from specialist bottlenecks and high diagnostic latency.',
    solution: 'Engineered a ResNet50 classifier coupled with a U-Net segmentation layer to localise retinal lesions. Integrated Grad-CAM heatmaps to generate explainable visual overlays, highlighting clinical anomalies for ophthalmologist review.',
    tech: ['Python', 'PyTorch', 'ResNet50', 'U-Net', 'OpenCV', 'Grad-CAM'],
    impact: 'Achieved a 96.1% sensitivity rating on the APTOS dataset, reducing clinician diagnostic cycle times by 55%.',
    github: 'https://github.com/elsonbenanzal/retinal-disease-detection',
    demo: 'https://github.com/elsonbenanzal/retinal-disease-detection',
    image: '/assets/projects/caregiver.png'
  },
  {
    number: '03',
    title: 'Resume Screening System',
    subtitle: 'Automated parsing engine classifying applicant profiles using TF-IDF and NLP.',
    overview: 'A natural language pipeline parsing raw PDF/Docx resumes, extracting skill vectors, and matching applicant profiles to customized job descriptions.',
    problem: 'HR departments process thousands of applicant resumes manually, leading to high onboarding cycles, selection bias, and placement bottlenecks.',
    solution: 'Designed an NLP preprocessing pipeline using Spacy for Named Entity Recognition (NER). Extracted skill matrices and matched profiles using TF-IDF vectorization and cosine similarity scoring.',
    tech: ['Python', 'Scikit-Learn', 'Spacy', 'NLTK', 'FastAPI', 'Streamlit'],
    impact: 'Automated the initial screening of 5,000+ candidates, reducing recruiter manual filtering workloads by 80%.',
    github: 'https://github.com/elsonbenanzal/resume-screening',
    demo: 'https://github.com/elsonbenanzal/resume-screening',
    image: '/assets/projects/healthcare.png'
  },
  {
    number: '04',
    title: 'GraphRAG Resume Analyzer',
    subtitle: 'State-graph analyzer parsing skill dependencies using Neo4j and LangGraph.',
    overview: 'An advanced retrieval-augmented generation (RAG) system utilizing a knowledge graph to analyze career progression paths and extract deep semantic skills relationships.',
    problem: 'Traditional semantic vector search misses structured connections between technologies (e.g., knowing Python implies suitability for PyTorch/Django) and chronological career growth.',
    solution: 'Modeled candidate credentials as entities and relationships inside a Neo4j knowledge graph. Built a multi-agent LangGraph network querying structural paths and combining vector scores from ChromaDB with graph traversals (GraphRAG).',
    tech: ['Python', 'LangGraph', 'LangChain', 'Neo4j', 'OpenAI GPT-4o', 'ChromaDB'],
    impact: 'Achieved 95% accuracy in complex relational queries, reducing candidate matching cycles by 60%.',
    github: 'https://github.com/elsonbenanzal/graphrag-analyzer',
    demo: 'https://github.com/elsonbenanzal/graphrag-analyzer',
    image: '/assets/projects/cybercrime.png'
  },
  {
    number: '05',
    title: 'Assistive Technology for Visually Impaired',
    subtitle: 'Real-time triangulation and LLM captioning system guiding blind navigators.',
    overview: 'An edge-compatible wearable system integrated with YOLOv8 for object localization and relative depth triangulation to provide semantic spatial context for visually impaired navigators.',
    problem: 'Visually impaired individuals face significant navigational hazards, struggling to identify obstacles in dynamic paths and understand their ambient environments in real-time. Traditional assistives only detect proximity without semantic context.',
    solution: 'Developed a wearable hat with a camera and ultrasonic sensor to detect obstacles, estimate distance, and provide real-time voice feedback. Integrated an AI voice assistant to tell time, play YouTube videos, and provide Wikipedia information.',
    tech: ['IoT Devices', 'Python', 'YOLO v8', 'Text-to-Speech', 'TensorFlow'],
    impact: 'Voice response latency reduced to <220ms, increasing obstacle avoidance precision by 40% and user path confidence in complex urban environments.',
    github: 'https://github.com/elsonbenanzal/smart-wearable',
    demo: 'https://github.com/elsonbenanzal/smart-wearable',
    image: '/assets/projects/wearable.png'
  },
  {
    number: '06',
    title: 'Drone-based Search & Rescue System',
    subtitle: 'Real-time object localization and thermal tracking model for disaster response.',
    overview: 'A low-latency vision pipeline deployed on autonomous drone fleets to detect, localize, and track survivors in disaster zones.',
    problem: 'Disaster response teams suffer from low visibility, debris hazards, and latency when manually scouting vast search areas, delaying critical life-saving operations.',
    solution: 'Deployed a quantized YOLOv8-Pose estimation model on an NVIDIA Jetson Nano mounted on a drone. Integrated optical and thermal video streams using OpenCV, calculating geographical coordinate triangulation back to ground hubs.',
    tech: ['Python', 'YOLOv8-Pose', 'PyTorch', 'OpenCV', 'ROS', 'Jetson Nano'],
    impact: 'Achieved 92.5% detection accuracy in dense smoke and forest fire simulations with real-time telemetry streaming at 30fps.',
    github: 'https://github.com/elsonbenanzal/drone-search-rescue',
    demo: 'https://github.com/elsonbenanzal/drone-search-rescue',
    image: '/assets/projects/wearable.png'
  },
  {
    number: '07',
    title: 'Agriculture AI Platform',
    subtitle: 'Conversational multi-agent platform triaging crop health and weather metrics.',
    overview: 'An interactive, chat-guided farming advisor triaging soil metrics, forecasting weather risks, and suggesting customized fertilizer plans.',
    problem: 'Small-scale farmers lack access to real-time agronomic consulting, leading to crop mismanagement, over-fertilization, and yield degradation.',
    solution: 'Built a stateful multi-agent system using LangGraph. The system coordinates query routing between a Weather Agent (fetching API forecasts), a Crop Diagnostic Agent (referencing crop manuals in ChromaDB), and an Soil Metric Agent.',
    tech: ['Python', 'LangChain', 'LangGraph', 'FastAPI', 'ChromaDB', 'AWS Bedrock'],
    impact: 'Guided local farmers on soil nourishment queries, improving localized harvest yields by 18% in pilot studies.',
    github: 'https://github.com/elsonbenanzal/agriculture-ai',
    demo: 'https://github.com/elsonbenanzal/agriculture-ai',
    image: '/assets/projects/booking.png'
  }
];

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  // 3D Parallax Tilt & Spotlight coord calculations (GPU accelerated)
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Relative coordinates (-0.5 to 0.5)
    const xc = (x / rect.width) - 0.5;
    const yc = (y / rect.height) - 0.5;
    
    // Rotate and translate card slightly
    card.style.transform = `perspective(1000px) rotateY(${xc * 8}deg) rotateX(${-yc * 8}deg) scale3d(1.008, 1.008, 1.008)`;
    
    // Set mouse coordinates variables for CSS spotlight
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
    card.style.setProperty('--mouse-active', '1');
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
    card.style.setProperty('--mouse-active', '0');
  };

  const toggleExpand = (index) => {
    if (expandedProject === index) {
      setExpandedProject(null);
    } else {
      setExpandedProject(index);
    }
  };

  return (
    <section id="projects" className="bg-transparent px-6 md:px-12 py-32 md:py-48 border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-24 text-left max-w-2xl relative z-10">
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-brand-primary block mb-3 uppercase">
            // 05 / COMPREHENSIVE CASE STUDIES
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tighter text-text uppercase leading-none mb-6">
            SELECTED WORK
          </h2>
          <div className="h-[2px] bg-brand-primary/50 w-24 my-6" />
          <p className="text-xs font-mono font-semibold text-text-muted uppercase tracking-widest leading-relaxed">
            Highly-focused product engineering. Resolving scalability bottlenecks, fine-tuning neural architectures, and measuring real-world impact.
          </p>
        </div>

        {/* Case Studies Staggered Grid */}
        <div className="flex flex-col gap-12 md:gap-16 relative z-10">
          {projects.map((project, index) => {
            const isExpanded = expandedProject === index;

            return (
              <div 
                key={index}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-border pt-16 first:border-0 first:pt-0"
              >
                {/* Left Side: Mockup Image Preview & Core Stack */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  {/* Hover Spotlight + Tilt Container */}
                  <div
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="spotlight-card glass-card rounded-2xl overflow-hidden aspect-[4/3] relative shadow-2xl transition-all duration-300 ease-out border border-border cursor-pointer group"
                  >
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300 z-10" />
                    
                    <img 
                      src={project.image} 
                      alt={`${project.title} — AI/ML Project Case Study by Elson Benanzal A.`} 
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentNode.classList.add('bg-card', 'flex', 'items-center', 'justify-center');
                      }}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                    
                    {/* Fallback graphic placeholder */}
                    <div className="absolute inset-0 hidden group-[.bg-card]:flex flex-col justify-center items-center p-6 text-text-muted font-mono text-[10px]">
                      <code className="text-brand-primary font-bold mb-2">// PIPELINE_MODULE {project.number}</code>
                      <span className="text-center font-bold text-text">{project.title.toUpperCase()}</span>
                    </div>
                  </div>

                  {/* Highlighted Performance Metric */}
                  <div className="border border-emerald-500/10 bg-emerald-500/[0.03] rounded-2xl p-5 text-left flex flex-col gap-2 shadow-sm">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-emerald-500 flex items-center gap-1.5">
                      <CheckCircle size={10} className="text-emerald-500" />
                      // PERFORMANCE DEPLOYED
                    </span>
                    <p className="text-xs font-semibold text-text font-sans leading-relaxed">
                      {project.impact}
                    </p>
                  </div>
                </div>

                {/* Right Side: Editorial Info (Problem, Solution, Title) */}
                <div className="lg:col-span-7 flex flex-col gap-6 text-left">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-brand-primary bg-brand-primary/10 border border-brand-primary/20 px-2.5 py-1 rounded-md">
                      [{project.number}]
                    </span>
                    <span className="text-[9px] font-mono font-bold tracking-widest text-text-muted uppercase">
                      CASE SPECIFICATION SHEET
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black font-heading text-text tracking-tight uppercase leading-none">
                    {project.title}
                  </h3>

                  <p className="text-sm md:text-base text-text-muted font-sans font-medium leading-relaxed">
                    {project.subtitle}
                  </p>

                  <div className="h-[1px] bg-border my-1" />

                  {/* Expand / Collapse triggers */}
                  <button 
                    onClick={() => toggleExpand(index)}
                    className="flex items-center gap-2 text-xs font-mono font-bold text-brand-primary hover:text-brand-accent w-fit transition-colors uppercase tracking-wider cursor-pointer"
                  >
                    <span>{isExpanded ? 'Hide Architecture Details' : 'View Full Architecture Details'}</span>
                    {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden flex flex-col gap-4"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                          <div className="bg-card border border-border rounded-2xl p-5">
                            <h4 className="text-[10px] font-bold uppercase tracking-wider text-text-muted font-heading mb-2">
                              The Challenge
                            </h4>
                            <p className="text-xs text-text-muted font-sans leading-relaxed">
                              {project.problem}
                            </p>
                          </div>

                          <div className="bg-brand-primary/[0.02] border border-brand-primary/20 rounded-2xl p-5">
                            <h4 className="text-[10px] font-bold uppercase tracking-wider text-brand-primary font-heading mb-2">
                              The Solution & Architecture
                            </h4>
                            <p className="text-xs text-text font-sans leading-relaxed">
                              {project.solution}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Tech stack & Links */}
                  <div className="flex flex-col gap-4 pt-4 border-t border-border">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="text-[10px] font-mono font-bold text-text-muted bg-card border border-border px-3 py-1.5 rounded-lg hover:border-text transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-6 mt-1">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold text-text-muted hover:text-text uppercase tracking-wider transition-colors duration-250"
                      >
                        <Github size={14} />
                        <span>Codebase</span>
                      </a>
                      
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary hover:text-brand-accent uppercase tracking-wider transition-colors duration-250"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={13} />
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
