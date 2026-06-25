import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, ArrowRight, Network, Sparkles, Database, ShieldCheck, Award } from 'lucide-react';

const nodes = [
  { 
    id: 'ml', 
    label: 'Machine Learning', 
    category: 'Theory & Core',
    desc: 'Mathematical optimizations, classification classifiers, and supervised pipelines.',
    projects: ['Vegetable Disease Detection', 'Resume Screening System'],
    tech: ['Scikit-Learn', 'Pandas', 'NumPy', 'Supervised Classifier'],
    credentials: ['Coursera - Machine Learning with Python', 'Calculus & Linear Algebra for ML'],
    experience: 'Preprocessed high-dimensional datasets and implemented text classification models.'
  },
  { 
    id: 'dl', 
    label: 'Deep Learning', 
    category: 'Neural Networks',
    desc: 'Deep neural models, ResNet architectures, and backpropagation optimization.',
    projects: ['Vegetable Disease Detection', 'Retinal Disease Detection', 'Drone-based Search & Rescue System'],
    tech: ['PyTorch', 'TensorFlow Lite', 'U-Net', 'ResNet50'],
    credentials: ['DeepLearning.AI - Neural Networks & Deep Learning', 'IBM ML Certificate'],
    experience: 'Academically grounded in deep neural layers, training weights, and forward-pass convolutions.'
  },
  { 
    id: 'cv', 
    label: 'Computer Vision', 
    category: 'Image & Video',
    desc: 'Real-time object localization, image triangulation, and pose estimations.',
    projects: ['Assistive Technology for Visually Impaired', 'Vegetable Disease Detection', 'Retinal Disease Detection', 'Drone-based Search & Rescue System'],
    tech: ['OpenCV', 'YOLO v8', 'Image Preprocessing', 'YOLOv8-Pose'],
    credentials: ['Foundation of Cloud IoT Edge ML - (ELITE)', 'VCET HackElite Finalist'],
    experience: 'Optimized computer vision preprocessing scripts, decreasing pipeline execution duration.'
  },
  { 
    id: 'genai', 
    label: 'Generative AI', 
    category: 'Language Models',
    desc: 'Autonomous multi-agent architectures, LLMs, and state-graph coordinators.',
    projects: ['GraphRAG Resume Analyzer', 'Agriculture AI Platform', 'Cloud Healthcare Intelligent Appointment Assistant'],
    tech: ['LangGraph', 'LangChain', 'OpenAI GPT-4o', 'AWS Bedrock', 'Mistral AI'],
    credentials: ['AWS Certified AI Practitioner', 'IDEATHON ’25 Third Prize'],
    experience: 'Developed conversational assistants with Azure and AWS to handle patient verification and symptom triage.'
  },
  { 
    id: 'rag', 
    label: 'RAG Systems', 
    category: 'Vector Search',
    desc: 'Semantic retrieval-augmented generation pipelines, vector embeddings, and indexing.',
    projects: ['GraphRAG Resume Analyzer', 'Agriculture AI Platform'],
    tech: ['ChromaDB', 'FAISS', 'LangChain', 'Neo4j GraphRAG'],
    credentials: ['AWS Cloud Foundations', 'NPTEL Elite certifications'],
    experience: 'Designed and deployed RAG pipelines leveraging vector indexes to extract contextual answers.'
  },
  { 
    id: 'ds', 
    label: 'Data Science', 
    category: 'Data Analysis',
    desc: 'Statistical analysis, feature distributions, and dimensional baselines.',
    projects: ['Resume Screening System'],
    tech: ['Pandas', 'NumPy', 'Matplotlib', 'SQL Pipelines'],
    credentials: ['Probability & Statistics for Machine Learning'],
    experience: 'Created custom SQL pipelines to construct dataset baselines and automate periodic training inputs.'
  },
  { 
    id: 'py', 
    label: 'Python', 
    category: 'Languages',
    desc: 'Core language for AI modelling, mathematical analytics, and backend microservices.',
    projects: ['Vegetable Disease Detection', 'Retinal Disease Detection', 'Drone-based Search & Rescue System', 'GraphRAG Resume Analyzer'],
    tech: ['Python 3.11', 'FastAPI', 'Flask', 'Pydantic'],
    credentials: ['IBM / Coursera Python Programmer'],
    experience: 'Engineered backend script endpoints and computational automation routines.'
  },
  { 
    id: 'fastapi', 
    label: 'FastAPI', 
    category: 'Backends',
    desc: 'High-throughput async server endpoints and service connections.',
    projects: ['Agriculture AI Platform', 'GraphRAG Resume Analyzer'],
    tech: ['FastAPI', 'Flask', 'REST APIs', 'WebSockets'],
    credentials: ['AWS Cloud Foundations'],
    experience: 'Engineered scalable REST endpoints for secure connection between internal services and OpenAI/Bedrock models.'
  },
  { 
    id: 'react', 
    label: 'React', 
    category: 'Frontends',
    desc: 'Responsive component states, interactive layouts, and user panels.',
    projects: ['Doctor Appointment Booking', 'Agriculture AI Platform'],
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    credentials: ['Full Stack Development Internship Certificate'],
    experience: 'Developed responsive interfaces, optimizing web performance and layout grids.'
  },
  { 
    id: 'cloud', 
    label: 'Cloud Platforms', 
    category: 'AWS & Azure',
    desc: 'Serverless architecture, hosted endpoints, and model routing.',
    projects: ['Cloud Healthcare Intelligent Appointment Assistant'],
    tech: ['AWS Bedrock', 'AWS Lambda', 'Azure OpenAI', 'Azure Realtime API'],
    credentials: ['AWS Certified AI Practitioner', 'AWS Cloud Foundations'],
    experience: 'Configured cloud models and serverless triggers to run clinical appointment pipelines.'
  },
  { 
    id: 'research', 
    label: 'Research', 
    category: 'Algorithms',
    desc: 'Investigating multi-agent dependencies and low-latency vision heuristics.',
    projects: ['Assistive Technology for Visually Impaired', 'Retinal Disease Detection'],
    tech: ['Triangulation Algorithms', 'Grad-CAM Explainability', 'State Graphs'],
    credentials: ['KIT B.E. AI & Machine Learning - Pre-Final year', 'NPTEL Elite certifications'],
    experience: 'Translating advanced mathematical theory and research papers into functional software.'
  },
  { 
    id: 'deploy', 
    label: 'Deployment', 
    category: 'Edge & Docker',
    desc: 'Quantized edge inference and containerized services.',
    projects: ['Drone-based Search & Rescue System', 'Vegetable Disease Detection'],
    tech: ['NVIDIA Jetson Nano', 'TensorT Lite', 'Docker Containers', 'ROS'],
    credentials: ['Foundation of Cloud IoT Edge ML - Elite Rank'],
    experience: 'Deployed quantized models on edge companion boards for real-time localized video telemetry.'
  }
];

// Inner-node dependencies representing concept intersections
const interNodeConnections = [
  { from: 'ml', to: 'ds' },
  { from: 'dl', to: 'cv' },
  { from: 'genai', to: 'rag' },
  { from: 'py', to: 'fastapi' },
  { from: 'fastapi', to: 'react' },
  { from: 'cloud', to: 'deploy' },
  { from: 'dl', to: 'research' }
];

const Playground = () => {
  const [hoveredNode, setHoveredNode] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);

  const radius = 38; // const percentage radius

  // Calculate coordinates on a circle dynamically (percentage based)
  const getNodeCoordinates = (index) => {
    const angle = (index * 2 * Math.PI) / nodes.length - Math.PI / 2; // offset -90 deg so first is top
    const x = 50 + radius * Math.cos(angle);
    const y = 50 + radius * Math.sin(angle);
    return { x, y };
  };

  const isNodeConnected = (nodeId) => {
    if (!hoveredNode) return true; // Default: no dimming
    if (hoveredNode === 'center') return true;
    if (hoveredNode === nodeId) return true;
    
    // Connected if sharing an inter-node line or connected to center
    return interNodeConnections.some(
      (c) => (c.from === hoveredNode && c.to === nodeId) || (c.to === hoveredNode && c.from === nodeId)
    ) || nodeId === 'center';
  };

  const isLineActive = (fromId, toId) => {
    if (!hoveredNode) return false;
    if (hoveredNode === 'center') return true;
    return (hoveredNode === fromId && toId === 'center') || (hoveredNode === toId && fromId === 'center') ||
           (fromId === hoveredNode && interNodeConnections.some(c => (c.from === fromId && c.to === toId) || (c.to === fromId && c.from === toId))) ||
           (toId === hoveredNode && interNodeConnections.some(c => (c.from === fromId && c.to === toId) || (c.to === fromId && c.from === toId)));
  };

  return (
    <section id="playground" className="bg-transparent px-6 md:px-12 py-32 border-b border-border relative select-none">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-left max-w-2xl">
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-brand-primary block mb-3 uppercase">
            // 04 / AI ENGINEERING PLAYGROUND
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tighter text-text uppercase leading-none mb-6">
            ECOSYSTEM GRAPH
          </h2>
          <div className="h-[2px] bg-brand-primary/50 w-24 my-6" />
          <p className="text-xs font-mono font-semibold text-text-muted uppercase tracking-widest leading-relaxed">
            Interact with my AI technical ecosystem. Hover nodes to trace functional dependencies. Click any node to inspect my related projects, certifications, and experience.
          </p>
        </div>

        {/* Graph Display - Desktop (1024px+) */}
        <div className="hidden lg:block relative h-[650px] w-full border border-border rounded-3xl bg-card/10 backdrop-blur-sm overflow-hidden shadow-2xl">
          
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {/* 1. Center to Node Lines */}
            {nodes.map((node, idx) => {
              const coords = getNodeCoordinates(idx);
              const isActive = isLineActive(node.id, 'center');
              
              return (
                <g key={`center-line-${node.id}`}>
                  <line
                    x1="50%"
                    y1="50%"
                    x2={`${coords.x}%`}
                    y2={`${coords.y}%`}
                    stroke={isActive ? 'var(--color-primary)' : 'var(--color-border)'}
                    strokeOpacity={isActive ? 0.8 : (hoveredNode ? 0.15 : 0.45)}
                    strokeWidth={isActive ? 2.5 : 1}
                    className="transition-all duration-300"
                  />
                  {isActive && (
                    <motion.line
                      x1="50%"
                      y1="50%"
                      x2={`${coords.x}%`}
                      y2={`${coords.y}%`}
                      stroke="url(#line-glow)"
                      strokeWidth={4}
                      strokeOpacity={0.6}
                      initial={{ strokeDasharray: '8 8', strokeDashoffset: 100 }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                    />
                  )}
                </g>
              );
            })}

            {/* 2. Inter-Node Lines */}
            {interNodeConnections.map((c, idx) => {
              const fromIdx = nodes.findIndex(n => n.id === c.from);
              const toIdx = nodes.findIndex(n => n.id === c.to);
              if (fromIdx === -1 || toIdx === -1) return null;
              
              const start = getNodeCoordinates(fromIdx);
              const end = getNodeCoordinates(toIdx);
              const isActive = isLineActive(c.from, c.to);
              
              return (
                <g key={`inter-line-${idx}`}>
                  <line
                    x1={`${start.x}%`}
                    y1={`${start.y}%`}
                    x2={`${end.x}%`}
                    y2={`${end.y}%`}
                    stroke={isActive ? 'var(--color-accent)' : 'var(--color-border)'}
                    strokeOpacity={isActive ? 0.8 : (hoveredNode ? 0.15 : 0.35)}
                    strokeWidth={isActive ? 2.5 : 1}
                    className="transition-all duration-300"
                    strokeDasharray="4 4"
                  />
                </g>
              );
            })}

            {/* Definitions for gradients */}
            <defs>
              <linearGradient id="line-glow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--color-primary)" />
                <stop offset="100%" stopColor="var(--color-accent)" />
              </linearGradient>
            </defs>
          </svg>

          {/* 3. Center Node (AI ENGINEER) */}
          <motion.div
            style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
            onMouseEnter={() => setHoveredNode('center')}
            onMouseLeave={() => setHoveredNode(null)}
            className="absolute z-20"
          >
            <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-brand-primary via-indigo-600 to-brand-accent p-0.5 shadow-2xl flex items-center justify-center cursor-pointer hover:scale-105 transition-all">
              <div className="w-full h-full rounded-full bg-bg flex flex-col justify-center items-center">
                <Network size={16} className="text-brand-primary animate-pulse mb-1" />
                <span className="text-[10px] font-black font-heading text-text tracking-tighter uppercase leading-none">
                  AI ENGINEER
                </span>
                <span className="text-[7px] font-mono text-brand-accent font-bold mt-1 tracking-widest uppercase">
                  CORE_HUB
                </span>
              </div>
            </div>
          </motion.div>

          {/* 4. Connected Outer Nodes */}
          {nodes.map((node, idx) => {
            const coords = getNodeCoordinates(idx);
            const isNodeActive = isNodeConnected(node.id);
            const isHovered = hoveredNode === node.id;
            
            return (
              <motion.div
                key={node.id}
                style={{
                  left: `${coords.x}%`,
                  top: `${coords.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                className="absolute z-10"
                animate={{
                  opacity: isNodeActive ? 1 : 0.2,
                  scale: isHovered ? 1.05 : 1,
                }}
                transition={{ duration: 0.25 }}
              >
                <div 
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  onClick={() => setSelectedNode(node)}
                  className={`w-36 p-3 rounded-xl border bg-card/90 text-left transition-all duration-300 cursor-pointer ${
                    isHovered 
                      ? 'border-brand-primary shadow-lg shadow-brand-primary/5' 
                      : 'border-border'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[8px] font-mono font-bold text-brand-primary">
                      NODE_{node.id.toUpperCase()}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/40" />
                  </div>
                  <h3 className="text-[10px] font-black font-heading text-text tracking-tight uppercase leading-tight line-clamp-1">
                    {node.label}
                  </h3>
                  <span className="text-[7px] font-mono text-text-muted mt-1 uppercase block tracking-wider">
                    {node.category}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Graph Display - Mobile/Tablet list view (under 1024px) */}
        <div className="lg:hidden flex flex-col gap-4">
          {nodes.map((node) => (
            <div
              key={node.id}
              onClick={() => setSelectedNode(node)}
              className="border border-border rounded-xl p-4 bg-card/40 backdrop-blur-sm hover:border-brand-primary transition-all duration-300 text-left flex items-center justify-between group cursor-pointer"
            >
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-[8px] font-mono font-bold text-brand-primary bg-brand-primary/10 border border-brand-primary/20 px-2 py-0.5 rounded">
                    NODE_{node.id.toUpperCase()}
                  </span>
                  <span className="text-[8px] font-mono text-text-muted uppercase tracking-wider">
                    {node.category}
                  </span>
                </div>
                <h3 className="text-sm font-black font-heading text-text tracking-tight uppercase mt-1">
                  {node.label}
                </h3>
              </div>
              <ArrowRight size={13} className="text-text-muted group-hover:text-brand-primary transform group-hover:translate-x-1 transition-all" />
            </div>
          ))}
        </div>

      </div>

      {/* Slide-over Detail Sheet for Ecosystem Nodes */}
      <AnimatePresence>
        {selectedNode && (
          <>
            {/* Backdrop filter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNode(null)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm pointer-events-auto"
            />

            {/* Slide-over details card */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-xl bg-bg border-l border-border p-6 md:p-10 flex flex-col justify-between overflow-y-auto pointer-events-auto shadow-2xl"
            >
              <div>
                {/* Header */}
                <div className="flex justify-between items-center pb-6 border-b border-border mb-8">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-brand-primary bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 rounded-md">
                      NODE_{selectedNode.id.toUpperCase()}
                    </span>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-text-muted uppercase">
                      ECOSYSTEM COMPONENT
                    </span>
                  </div>
                  
                  <button 
                    onClick={() => setSelectedNode(null)}
                    className="p-2 bg-card hover:bg-border text-text-muted hover:text-text rounded-full transition-all border border-border cursor-pointer flex items-center justify-center"
                  >
                    <X size={15} />
                  </button>
                </div>

                {/* Content */}
                <div className="text-left flex flex-col gap-6">
                  <div>
                    <span className="text-[9px] font-mono font-bold text-brand-accent uppercase tracking-widest">
                      {selectedNode.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black font-heading text-text tracking-tight uppercase leading-tight mt-1">
                      {selectedNode.label}
                    </h3>
                  </div>

                  <p className="text-sm text-text-muted font-sans leading-relaxed">
                    {selectedNode.desc}
                  </p>

                  {/* Summary experience paragraph */}
                  <div className="border border-brand-primary/10 bg-brand-primary/[0.02] rounded-2xl p-5 flex flex-col gap-2">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-brand-primary flex items-center gap-1">
                      <Sparkles size={10} className="text-brand-primary animate-pulse" />
                      // CORE EXPERTISE FOCUS
                    </span>
                    <p className="text-xs text-text font-sans leading-relaxed">
                      {selectedNode.experience}
                    </p>
                  </div>

                  {/* Associated Projects */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[9px] font-mono font-bold text-text-muted uppercase tracking-wider flex items-center gap-1.5">
                      <Database size={11} className="text-brand-accent" />
                      Related Project Implementation
                    </span>
                    <ul className="flex flex-col gap-2 pl-1">
                      {selectedNode.projects.map((proj, idx) => (
                        <li key={idx} className="text-xs text-text font-sans font-bold flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                          {proj}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Credentials / Certs */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[9px] font-mono font-bold text-text-muted uppercase tracking-wider flex items-center gap-1.5">
                      <Award size={11} className="text-brand-accent" />
                      Verified Credentials & Courses
                    </span>
                    <ul className="flex flex-col gap-2.5 pl-1">
                      {selectedNode.credentials.map((cred, idx) => (
                        <li key={idx} className="text-xs text-text-muted font-sans flex items-start gap-2.5">
                          <span className="p-1 bg-card rounded border border-border mt-0.5">
                            <ShieldCheck size={10} className="text-emerald-500" />
                          </span>
                          <span>{cred}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Related tech chips */}
                  <div className="flex flex-col gap-2 pt-2 border-t border-border/60">
                    <span className="text-[9px] font-mono font-bold text-text-muted uppercase tracking-wider">
                      Technical Arsenal Involved
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedNode.tech.map((t, idx) => (
                        <span 
                          key={idx} 
                          className="text-[9px] font-mono font-bold text-text bg-card border border-border px-3 py-1.5 rounded-lg"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-4 pt-6 border-t border-border mt-12">
                <a
                  href="#projects"
                  onClick={(e) => {
                    setSelectedNode(null);
                    const el = document.getElementById('projects');
                    if (el) {
                      e.preventDefault();
                      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
                    }
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-text bg-card border border-border py-4 px-6 rounded-full hover:bg-border transition-colors cursor-pointer"
                >
                  <span>Case Studies</span>
                  <ExternalLink size={12} />
                </a>

                <a
                  href="#contact"
                  onClick={(e) => {
                    setSelectedNode(null);
                    const el = document.getElementById('contact');
                    if (el) {
                      e.preventDefault();
                      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
                    }
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-bg bg-text py-4 px-6 rounded-full hover:opacity-90 transition-opacity cursor-pointer"
                >
                  <span>Hire Me</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Playground;
