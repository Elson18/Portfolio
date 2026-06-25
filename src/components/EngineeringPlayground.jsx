import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Cpu, Eye, Sparkles, Search, Terminal, Cloud, 
  ExternalLink, X, ArrowRight, Network
} from 'lucide-react';

const satellites = [
  {
    id: 'ml',
    label: 'Machine Learning',
    icon: Brain,
    category: 'Core AI Modeling',
    desc: 'Mathematical classifiers, statistical modeling, and data engineering.',
    projects: ['Vegetable Disease Detection', 'Resume Screening System'],
    tech: ['Scikit-Learn', 'Pandas', 'NumPy', 'Supervised Classifiers'],
    credentials: ['Coursera - Machine Learning with Python', 'Calculus & Linear Algebra for ML'],
    experience: 'Preprocessed high-dimensional datasets and implemented text classification models.'
  },
  {
    id: 'dl',
    label: 'Deep Learning',
    icon: Cpu,
    category: 'Neural Networks',
    desc: 'Deep convolutional networks, ResNet, and backpropagation models.',
    projects: ['Vegetable Disease Detection', 'Retinal Disease Detection', 'Drone-based Search & Rescue System'],
    tech: ['PyTorch', 'TensorFlow Lite', 'U-Net', 'ResNet50'],
    credentials: ['DeepLearning.AI - Neural Networks & Deep Learning', 'IBM ML Certificate'],
    experience: 'Academically grounded in deep neural layers, training weights, and forward-pass convolutions.'
  },
  {
    id: 'cv',
    label: 'Computer Vision',
    icon: Eye,
    category: 'Spatial Analytics',
    desc: 'Real-time object localization, image triangulation, and pose estimation.',
    projects: ['Assistive Technology for Visually Impaired', 'Vegetable Disease Detection', 'Retinal Disease Detection', 'Drone-based Search & Rescue System'],
    tech: ['OpenCV', 'YOLO v8', 'Image Preprocessing', 'YOLOv8-Pose'],
    credentials: ['Foundation of Cloud IoT Edge ML - (ELITE)', 'VCET HackElite Finalist'],
    experience: 'Optimized computer vision preprocessing scripts, decreasing pipeline execution duration.'
  },
  {
    id: 'genai',
    label: 'Generative AI',
    icon: Sparkles,
    category: 'Language Models',
    desc: 'Autonomous multi-agent architectures, LLMs, and state-graph flows.',
    projects: ['GraphRAG Resume Analyzer', 'Agriculture AI Platform', 'Cloud Healthcare Intelligent Appointment Assistant'],
    tech: ['LangGraph', 'LangChain', 'OpenAI GPT-4o', 'AWS Bedrock', 'Mistral AI'],
    credentials: ['AWS Certified AI Practitioner', 'IDEATHON ’25 Third Prize'],
    experience: 'Developed conversational assistants with Azure and AWS to handle patient verification and symptom triage.'
  },
  {
    id: 'rag',
    label: 'RAG Systems',
    icon: Search,
    category: 'Vector Search',
    desc: 'Semantic retrieval-augmented generation pipelines and vector indexing.',
    projects: ['GraphRAG Resume Analyzer', 'Agriculture AI Platform'],
    tech: ['ChromaDB', 'FAISS', 'LangChain', 'Neo4j GraphRAG'],
    credentials: ['AWS Cloud Foundations', 'NPTEL Elite certifications'],
    experience: 'Designed and deployed RAG pipelines leveraging vector indexes to extract contextual answers.'
  },
  {
    id: 'py',
    label: 'Python Backend',
    icon: Terminal,
    category: 'Service Layer',
    desc: 'Core language for AI modeling, mathematical analytics, and REST API microservices.',
    projects: ['Vegetable Disease Detection', 'Retinal Disease Detection', 'Drone-based Search & Rescue System', 'GraphRAG Resume Analyzer'],
    tech: ['Python 3.11', 'FastAPI', 'Flask', 'Pydantic'],
    credentials: ['IBM / Coursera Python Programmer'],
    experience: 'Engineered backend script endpoints and computational automation routines.'
  },
  {
    id: 'cloud',
    label: 'Cloud Platforms',
    icon: Cloud,
    category: 'Scalability',
    desc: 'Serverless architecture, hosted endpoints, and model routing.',
    projects: ['Cloud Healthcare Intelligent Appointment Assistant'],
    tech: ['AWS Bedrock', 'AWS Lambda', 'Azure OpenAI', 'Azure Realtime API'],
    credentials: ['AWS Certified AI Practitioner', 'AWS Cloud Foundations'],
    experience: 'Configured cloud models and serverless triggers to run clinical appointment pipelines.'
  },
  {
    id: 'deploy',
    label: 'Edge & Deploy',
    icon: Network,
    category: 'Inference',
    desc: 'Quantized edge inference and containerized services.',
    projects: ['Drone-based Search & Rescue System', 'Vegetable Disease Detection'],
    tech: ['NVIDIA Jetson Nano', 'TensorRT Lite', 'Docker Containers', 'ROS'],
    credentials: ['Foundation of Cloud IoT Edge ML - Elite Rank'],
    experience: 'Deployed quantized models on edge companion boards for real-time localized video telemetry.'
  }
];

const EngineeringPlayground = () => {
  const [hoveredNode, setHoveredNode] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);

  const radius = 34; // percent radius of satellite circles

  // Calculate coordinates on a circle dynamically (percentage based)
  const getSatelliteCoords = (index) => {
    const angle = (index * 2 * Math.PI) / satellites.length - Math.PI / 2; // Offset by -90 deg so first is top
    const x = 50 + radius * Math.cos(angle);
    const y = 50 + radius * Math.sin(angle);
    return { x, y };
  };

  return (
    <section id="playground" className="dark-section bg-transparent px-6 md:px-12 py-32 border-b border-border relative select-none overflow-hidden">
      
      {/* 
        Background Visual Elements:
        - Dot grid background
        - Glowing blurs for visual depth
      */}
      <div className="absolute inset-0 bg-dot-grid-dark opacity-35 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-primary/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-brand-accent/8 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-left max-w-2xl">
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-brand-primary block mb-3 uppercase">
            // 04 / AI ENGINEERING PLAYGROUND
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tighter text-text uppercase leading-none mb-6">
            Ecosystem Playground
          </h2>
          <div className="h-[2px] bg-brand-primary/50 w-24 my-6" />
          <p className="text-xs font-mono font-semibold text-text-muted uppercase tracking-widest leading-relaxed">
            Interact with my AI technical ecosystem. Hover nodes to trace functional dependencies. Click any node to inspect my related projects, certifications, and experience.
          </p>
        </div>

        {/* 
          1. Desktop Layout (md breakpoint and above):
          Trigonometric radial node diagram with SVG connections.
        */}
        <div className="hidden md:block relative h-[650px] w-full border border-border rounded-3xl bg-card/10 backdrop-blur-sm overflow-hidden shadow-2xl">
          
          {/* Connecting SVG Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {satellites.map((node, idx) => {
              const coords = getSatelliteCoords(idx);
              const isNodeHovered = hoveredNode === node.id;
              const isCenterHovered = hoveredNode === 'center';
              const isActive = isNodeHovered || isCenterHovered;

              return (
                <g key={`connection-${node.id}`}>
                  {/* Outer line shadow */}
                  <motion.line
                    x1="50%"
                    y1="50%"
                    x2={`${coords.x}%`}
                    y2={`${coords.y}%`}
                    stroke={isActive ? 'var(--color-brand-primary)' : 'var(--color-border)'}
                    strokeOpacity={isActive ? 0.9 : 0.4}
                    strokeWidth={isActive ? 2.5 : 1}
                    className="transition-all duration-300"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: idx * 0.05 }}
                  />

                  {/* Laser core flow path */}
                  {isActive && (
                    <motion.line
                      x1="50%"
                      y1="50%"
                      x2={`${coords.x}%`}
                      y2={`${coords.y}%`}
                      stroke="url(#laser-gradient)"
                      strokeWidth={isActive ? 3.5 : 1.5}
                      strokeOpacity={0.65}
                      className="transition-all duration-300"
                      initial={{ strokeDasharray: '6 6', strokeDashoffset: 100 }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    />
                  )}
                </g>
              );
            })}

            {/* Laser Gradient definitions */}
            <defs>
              <linearGradient id="laser-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--color-brand-primary)" />
                <stop offset="100%" stopColor="var(--color-brand-accent)" />
              </linearGradient>
            </defs>
          </svg>

          {/* Central Hub Node */}
          <motion.div
            style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
            onMouseEnter={() => setHoveredNode('center')}
            onMouseLeave={() => setHoveredNode(null)}
            className="absolute z-20"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 20, delay: 0.1 }}
          >
            <div 
              style={{
                boxShadow: hoveredNode === 'center' 
                  ? '0 0 25px rgba(124, 58, 237, 0.45), inset 0 0 15px rgba(6, 182, 212, 0.25)' 
                  : '0 0 15px rgba(124, 58, 237, 0.15)'
              }}
              className="w-28 h-28 rounded-full bg-gradient-to-tr from-brand-primary via-indigo-600 to-brand-accent p-0.5 shadow-2xl flex items-center justify-center cursor-pointer transition-all duration-300 select-none animate-pulse hover:scale-105"
            >
              <div className="w-full h-full rounded-full bg-bg flex flex-col justify-center items-center">
                <Network size={16} className="text-brand-primary mb-1 animate-pulse" />
                <span className="text-[9px] font-black font-heading text-text tracking-tighter uppercase leading-none text-center px-2">
                  ENGINEERING
                </span>
                <span className="text-[9px] font-black font-heading text-text tracking-tighter uppercase leading-none text-center px-2">
                  ECOSYSTEM
                </span>
              </div>
            </div>
          </motion.div>

          {/* Satellite Orbit Nodes */}
          {satellites.map((node, idx) => {
            const coords = getSatelliteCoords(idx);
            const isHovered = hoveredNode === node.id;
            const SatelliteIcon = node.icon;

            return (
              <motion.div
                key={node.id}
                style={{
                  left: `${coords.x}%`,
                  top: `${coords.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                className="absolute z-10"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', damping: 20, delay: 0.2 + idx * 0.05 }}
              >
                <div 
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  onClick={() => setSelectedNode(node)}
                  className={`w-36 p-3 rounded-xl border bg-card/90 text-left transition-all duration-300 cursor-pointer ${
                    isHovered 
                      ? 'border-brand-primary shadow-lg shadow-brand-primary/10 scale-105' 
                      : 'border-border'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[7px] font-mono font-bold text-brand-primary uppercase">
                      {node.category}
                    </span>
                    <SatelliteIcon size={12} className={isHovered ? 'text-brand-accent animate-spin-slow' : 'text-text-muted'} />
                  </div>
                  <h3 className="text-[10px] font-black font-heading text-text tracking-tight uppercase leading-tight line-clamp-1">
                    {node.label}
                  </h3>
                  <span className="text-[7px] font-mono text-text-muted mt-1 uppercase block tracking-wider truncate">
                    {node.desc}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 
          2. Mobile/Tablet Layout (under md breakpoint):
          Vertical scroll list of interactive card tiles.
        */}
        <div className="md:hidden flex flex-col gap-4">
          {satellites.map((node, idx) => {
            const SatelliteIcon = node.icon;
            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                onClick={() => setSelectedNode(node)}
                className="border border-border rounded-xl p-4 bg-card/45 backdrop-blur-sm hover:border-brand-primary active:scale-[0.98] transition-all duration-300 text-left flex items-center justify-between group cursor-pointer"
              >
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[8px] font-mono font-bold text-brand-primary bg-brand-primary/10 border border-brand-primary/20 px-2 py-0.5 rounded">
                      {node.category}
                    </span>
                  </div>
                  <h3 className="text-sm font-black font-heading text-text tracking-tight uppercase mt-1 flex items-center gap-2">
                    <SatelliteIcon size={14} className="text-brand-accent" />
                    {node.label}
                  </h3>
                </div>
                <ArrowRight size={13} className="text-text-muted group-hover:text-brand-primary transform group-hover:translate-x-1 transition-all" />
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Slide-over Detail Sheet for Ecosystem Nodes */}
      <AnimatePresence>
        {selectedNode && (
          <>
            {/* Backdrop Filter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNode(null)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm pointer-events-auto"
            />

            {/* Details overlay wrapper */}
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
                    <span className="text-xs font-mono font-bold text-brand-primary bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 rounded-md uppercase">
                      {selectedNode.id}
                    </span>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-text-muted uppercase">
                      Ecosystem Component
                    </span>
                  </div>
                  
                  <button 
                    onClick={() => setSelectedNode(null)}
                    className="p-2 bg-card hover:bg-border text-text-muted hover:text-text rounded-full transition-all border border-border cursor-pointer flex items-center justify-center"
                  >
                    <X size={15} />
                  </button>
                </div>

                {/* Satellite Detail */}
                <div className="flex flex-col gap-6 text-left">
                  <div>
                    <h3 className="text-xs font-mono font-bold text-brand-accent tracking-widest uppercase mb-1">
                      {selectedNode.category}
                    </h3>
                    <h2 className="text-3xl font-black font-heading text-text uppercase tracking-tight">
                      {selectedNode.label}
                    </h2>
                    <p className="text-xs font-mono text-text-muted mt-3 leading-relaxed">
                      {selectedNode.desc}
                    </p>
                  </div>

                  <hr className="border-border/45" />

                  {/* Bullet Bulletins */}
                  <div>
                    <h4 className="text-xs font-mono font-bold text-text uppercase tracking-wider mb-3">
                      Overview & Experience
                    </h4>
                    <p className="text-xs font-mono text-text-muted leading-relaxed bg-card border border-border/80 p-4 rounded-xl">
                      {selectedNode.experience}
                    </p>
                  </div>

                  {/* Technology parameters */}
                  <div>
                    <h4 className="text-xs font-mono font-bold text-text uppercase tracking-wider mb-2.5">
                      Tooling Arsenal
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedNode.tech.map((t) => (
                        <span 
                          key={t}
                          className="text-[9px] font-mono font-bold tracking-wider text-brand-accent border border-brand-accent/20 bg-brand-accent/5 px-2.5 py-1 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Related Projects */}
                  <div>
                    <h4 className="text-xs font-mono font-bold text-text uppercase tracking-wider mb-3">
                      Case Studies
                    </h4>
                    <div className="flex flex-col gap-2">
                      {selectedNode.projects.map((proj) => (
                        <a 
                          href="#projects"
                          key={proj}
                          onClick={() => setSelectedNode(null)}
                          className="flex items-center justify-between border border-border bg-card/30 hover:border-brand-primary p-3.5 rounded-xl text-xs font-bold text-text transition-all group"
                        >
                          <span className="font-mono">{proj}</span>
                          <ExternalLink size={12} className="text-text-muted group-hover:text-brand-primary" />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Verified Credentials */}
                  <div>
                    <h4 className="text-xs font-mono font-bold text-text uppercase tracking-wider mb-3">
                      Certificates
                    </h4>
                    <div className="flex flex-col gap-2">
                      {selectedNode.credentials.map((cred) => (
                        <div 
                          key={cred}
                          className="flex items-center gap-2.5 border border-border/50 bg-card/10 p-3.5 rounded-xl text-[10px] text-text-muted font-mono leading-snug"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                          <span>{cred}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Action trigger bottom */}
              <div className="border-t border-border pt-6 mt-8">
                <button
                  onClick={() => setSelectedNode(null)}
                  className="w-full text-center bg-text text-bg hover:opacity-90 font-mono font-bold text-xs uppercase py-3.5 rounded-xl transition-all cursor-pointer"
                >
                  Close Blueprint Specification
                </button>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
};

export default EngineeringPlayground;
