import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Info, Network, RefreshCw, Cpu, Database, Eye } from 'lucide-react';

const architectures = {
  clean: {
    id: 'clean',
    title: 'Clean Architecture',
    tagline: 'Strict separation of concerns with dependency rules pointing inwards.',
    nodes: [
      { id: 'p', label: 'Presentation UI', type: 'P', x: 18, y: 55, color: '#3b82f6', icon: Eye, description: 'React elements and state hooks representing the client interface.' },
      { id: 'd_domain', label: 'Domain Core', type: 'D', x: 50, y: 25, color: '#8b5cf6', icon: Cpu, description: 'Enterprise business logic, schema interfaces, and use-case handlers.' },
      { id: 'd_data', label: 'Data Repository', type: 'D', x: 50, y: 75, color: '#10b981', icon: Database, description: 'Local caching caches, remote data endpoints, and database adapters.' },
      { id: 'e', label: 'External Drivers', type: 'E', x: 82, y: 55, color: '#ec4899', icon: Network, description: 'Axios clients, AWS resources, raw sensor feeds, and native APIs.' },
    ],
    connections: [
      { from: 'p', to: 'd_domain', type: 'solid' },
      { from: 'p', to: 'd_data', type: 'solid' },
      { from: 'd_domain', to: 'e', type: 'solid' },
      { from: 'd_data', to: 'e', type: 'solid' },
      { from: 'd_domain', to: 'd_data', type: 'dashed' },
    ]
  },
  mvvm: {
    id: 'mvvm',
    title: 'MVVM Pattern',
    tagline: 'Event-driven UI updates with clean observable bindings.',
    nodes: [
      { id: 'v', label: 'View Screen', type: 'V', x: 18, y: 50, color: '#06b6d4', icon: Eye, description: 'Declarative UI templates binding to observable ViewModel states.' },
      { id: 'vm', label: 'ViewModel', type: 'VM', x: 45, y: 30, color: '#7c3aed', icon: RefreshCw, description: 'Transforms model outputs into view states, capturing UI user events.' },
      { id: 'm', label: 'Data Model', type: 'M', x: 45, y: 70, color: '#10b981', icon: Cpu, description: 'Local entity representations and business computations.' },
      { id: 'r', label: 'Data Store', type: 'R', x: 82, y: 50, color: '#f43f5e', icon: Database, description: 'Fetches records from storage arrays or remote API pipelines.' },
    ],
    connections: [
      { from: 'v', to: 'vm', type: 'solid' },
      { from: 'vm', to: 'm', type: 'dashed' },
      { from: 'vm', to: 'r', type: 'solid' },
      { from: 'm', to: 'r', type: 'solid' },
    ]
  },
  state: {
    id: 'state',
    title: 'State Redirection',
    tagline: 'Predictable, unidirectional loop ensuring immutable state changes.',
    nodes: [
      { id: 'v', label: 'UI View Components', type: 'V', x: 18, y: 50, color: '#3b82f6', icon: Eye, description: 'Subscribes to store states and triggers action dispatch payloads.' },
      { id: 'a', label: 'Action Intent', type: 'A', x: 50, y: 22, color: '#f59e0b', icon: RefreshCw, description: 'Formatted instruction payload specifying changes to execute.' },
      { id: 'r', label: 'Reducer Core', type: 'R', x: 82, y: 50, color: '#e11d48', icon: Cpu, description: 'Computes next immutable state based on current data and action fields.' },
      { id: 's', label: 'Global Store', type: 'S', x: 50, y: 78, color: '#8b5cf6', icon: Database, description: 'Central record store of all application configurations and components.' },
    ],
    connections: [
      { from: 'v', to: 'a', type: 'solid' },
      { from: 'a', to: 'r', type: 'solid' },
      { from: 'r', to: 's', type: 'solid' },
      { from: 's', to: 'v', type: 'solid' },
    ]
  },
  voice: {
    id: 'voice',
    title: 'Voice AI Engine Flow',
    tagline: 'Low-latency conversational pipeline routing audio arrays to LLMs.',
    nodes: [
      { id: 'mic', label: 'Mic Intake', type: 'IN', x: 15, y: 50, color: '#06b6d4', icon: Eye, description: 'Records voice signals via PCM buffer.' },
      { id: 'stt', label: 'Whisper STT', type: 'STT', x: 32, y: 32, color: '#8b5cf6', icon: Cpu, description: 'Transcribes voice signals into raw query context.' },
      { id: 'llm', label: 'AI Reasoning', type: 'LLM', x: 50, y: 50, color: '#e11d48', icon: Network, description: 'Formulates responses using state-graphs and tool routers.' },
      { id: 'tts', label: 'Speech Synth', type: 'TTS', x: 68, y: 68, color: '#10b981', icon: RefreshCw, description: 'Transforms response text into natural voice audio waves.' },
      { id: 'spk', label: 'Audio Out', type: 'OUT', x: 85, y: 50, color: '#f59e0b', icon: Database, description: 'Plays generated conversational streams to user speakers.' },
    ],
    connections: [
      { from: 'mic', to: 'stt', type: 'solid' },
      { from: 'stt', to: 'llm', type: 'solid' },
      { from: 'llm', to: 'tts', type: 'solid' },
      { from: 'tts', to: 'spk', type: 'solid' },
      { from: 'stt', to: 'tts', type: 'dashed' }
    ]
  },
  pipelines: {
    id: 'pipelines',
    title: 'Edge ML Pipeline',
    tagline: 'Local compute edge arrays syncing back to web telemetry consoles.',
    nodes: [
      { id: 'cam', label: 'Camera Stream', type: 'IoT', x: 18, y: 35, color: '#06b6d4', icon: Eye, description: 'Captures high-frequency frames from edge drone/sensor matrices.' },
      { id: 'edge', label: 'Edge Inference', type: 'Edge', x: 48, y: 35, color: '#ec4899', icon: Cpu, description: 'Performs quantized spatial detection (YOLOv8) in 15ms.' },
      { id: 'mqtt', label: 'MQTT Broker', type: 'Broker', x: 48, y: 70, color: '#8b5cf6', icon: RefreshCw, description: 'Publishes metadata parameters across connection protocols.' },
      { id: 'dash', label: 'Web Console', type: 'Dash', x: 82, y: 50, color: '#10b981', icon: Database, description: 'Aggregates state parameters, warning alerts, and metric overlays.' },
    ],
    connections: [
      { from: 'cam', to: 'edge', type: 'solid' },
      { from: 'edge', to: 'mqtt', type: 'solid' },
      { from: 'mqtt', to: 'dash', type: 'solid' },
      { from: 'edge', to: 'dash', type: 'dashed' },
    ]
  }
};

const SystemArchitecture = () => {
  const [activeTab, setActiveTab] = useState('clean');
  const [selectedNode, setSelectedNode] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);

  const activeArch = architectures[activeTab];

  // Helper to resolve coordinates
  const findNodeCoords = (nodeId) => {
    const node = activeArch.nodes.find(n => n.id === nodeId);
    return node ? { x: node.x, y: node.y } : { x: 50, y: 50 };
  };

  return (
    <section id="architecture" className="bg-transparent px-6 md:px-12 py-24 border-b border-border relative select-none">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-16 text-left max-w-2xl">
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-brand-primary block mb-3 uppercase">
            // 03 / SYSTEM DESIGNS & INFRASTRUCTURE
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tighter text-text uppercase leading-none mb-6">
            Decoupled System Architecture
          </h2>
          <div className="h-[2px] bg-brand-primary/50 w-24 my-6" />
          <p className="text-xs font-mono font-semibold text-text-muted uppercase tracking-widest leading-relaxed">
            Click selection tabs below to toggle dynamic application paradigms. Hover or tap structural nodes to inspect component layers, decoupling parameters, and communications paths.
          </p>
        </div>

        {/* Tab Selection Row */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-10 pb-2 border-b border-border/40 overflow-x-auto whitespace-nowrap scrollbar-thin">
          {Object.keys(architectures).map((key) => {
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => {
                  setActiveTab(key);
                  setSelectedNode(null);
                }}
                className={`px-5 py-2.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-brand-primary text-white border-brand-primary shadow-lg shadow-brand-primary/20'
                    : 'bg-card/40 border-border text-text-muted hover:text-text hover:border-brand-primary/50'
                }`}
              >
                <Layers size={11} className={isActive ? 'animate-pulse' : ''} />
                {architectures[key].title}
              </button>
            );
          })}
        </div>

        {/* Dynamic Sandbox Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Interactive Graph Box (Col Span 2) */}
          <div className="lg:col-span-2 min-h-[420px] md:min-h-[500px] border border-border rounded-3xl bg-card/10 backdrop-blur-sm relative overflow-hidden flex items-center justify-center p-4">
            
            {/* Background Canvas Dot Grid */}
            <div className="absolute inset-0 bg-dot-grid-dark opacity-40 pointer-events-none" />

            {/* SVG Interactive Connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
              <AnimatePresence mode="popLayout">
                {activeArch.connections.map((conn, idx) => {
                  const start = findNodeCoords(conn.from);
                  const end = findNodeCoords(conn.to);
                  const isHoveredLine = hoveredNode === conn.from || hoveredNode === conn.to;

                  return (
                    <g key={`${activeTab}-conn-${idx}`}>
                      {/* Base Path line */}
                      <motion.line
                        x1={`${start.x}%`}
                        y1={`${start.y}%`}
                        x2={`${end.x}%`}
                        y2={`${end.y}%`}
                        stroke={isHoveredLine ? 'var(--color-brand-primary)' : 'var(--color-border)'}
                        strokeOpacity={isHoveredLine ? 0.9 : 0.45}
                        strokeWidth={isHoveredLine ? 2.5 : 1.5}
                        strokeDasharray={conn.type === 'dashed' ? '5 5' : 'none'}
                        className="transition-all duration-300"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                      />

                      {/* Floating Pulse Animation dots */}
                      {conn.type !== 'dashed' && (
                        <motion.circle
                          r="3"
                          fill="var(--color-brand-accent)"
                          filter="drop-shadow(0 0 4px var(--color-brand-accent))"
                          initial={{ offset: 0 }}
                          animate={{
                            cx: [`${start.x}%`, `${end.x}%`],
                            cy: [`${start.y}%`, `${end.y}%`]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'linear',
                            delay: idx * 0.4
                          }}
                        />
                      )}
                    </g>
                  );
                })}
              </AnimatePresence>
            </svg>

            {/* Render Nodes */}
            <div className="absolute inset-0 w-full h-full">
              <AnimatePresence mode="popLayout">
                {activeArch.nodes.map((node) => {
                  const isHovered = hoveredNode === node.id;
                  const isSelected = selectedNode?.id === node.id;

                  return (
                    <motion.div
                      key={`${activeTab}-node-${node.id}`}
                      style={{
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                      }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 25 }}
                    >
                      <button
                        onMouseEnter={() => setHoveredNode(node.id)}
                        onMouseLeave={() => setHoveredNode(null)}
                        onClick={() => setSelectedNode(node)}
                        className={`w-14 h-14 rounded-full flex items-center justify-center font-black font-heading text-lg cursor-pointer border transition-all duration-300 relative ${
                          isHovered || isSelected
                            ? 'scale-110 shadow-lg'
                            : 'shadow-sm'
                        }`}
                        style={{
                          backgroundColor: 'var(--color-bg)',
                          borderColor: isHovered || isSelected ? node.color : 'var(--color-border)',
                          color: node.color,
                          boxShadow: isHovered || isSelected ? `0 0 20px ${node.color}33` : 'none'
                        }}
                      >
                        {/* Circular outline ring */}
                        <span 
                          className="absolute inset-0 rounded-full border opacity-20 animate-ping"
                          style={{ borderColor: node.color, animationDuration: isHovered ? '1.5s' : '3s' }}
                        />
                        {node.type}
                      </button>

                      {/* Mobile friendly node name badge underneath */}
                      <span className="absolute top-[110%] left-1/2 -translate-x-1/2 text-[9px] font-mono text-text-muted whitespace-nowrap bg-bg/90 border border-border px-1.5 py-0.5 rounded shadow">
                        {node.label}
                      </span>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

          </div>

          {/* Details Sidebar Pane */}
          <div className="flex flex-col justify-between border border-border rounded-3xl bg-card/25 backdrop-blur-sm p-6 md:p-8 relative">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
                  <Network size={15} />
                </div>
                <div>
                  <h3 className="text-xs font-mono font-bold tracking-widest text-text-muted uppercase">
                    Architecture Spec
                  </h3>
                  <h4 className="text-sm font-black font-heading uppercase text-text tracking-tight">
                    {activeArch.title}
                  </h4>
                </div>
              </div>

              <p className="text-xs text-text-muted font-mono leading-relaxed mb-6">
                {activeArch.tagline}
              </p>

              <hr className="border-border/40 my-6" />

              {/* Dynamic node detail renderer */}
              <AnimatePresence mode="wait">
                {selectedNode ? (
                  <motion.div
                    key={selectedNode.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex flex-col gap-4 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span 
                        className="w-8 h-8 rounded-full border flex items-center justify-center font-heading font-black text-xs"
                        style={{ color: selectedNode.color, borderColor: selectedNode.color }}
                      >
                        {selectedNode.type}
                      </span>
                      <div>
                        <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-brand-accent">
                          Active Component
                        </span>
                        <h4 className="text-sm font-black font-heading uppercase text-text">
                          {selectedNode.label}
                        </h4>
                      </div>
                    </div>
                    <p className="text-xs text-text-muted font-mono leading-relaxed bg-bg/40 border border-border/50 p-4 rounded-xl">
                      {selectedNode.description}
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="no-selection"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-10 flex flex-col items-center justify-center gap-3 border border-dashed border-border rounded-xl"
                  >
                    <Info size={20} className="text-text-muted/60 animate-bounce" />
                    <p className="text-[10px] font-mono text-text-muted uppercase tracking-wider max-w-[200px]">
                      Select any node on the graph to display architecture blueprints and system interface descriptions
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Explanatory footer */}
            <div className="mt-8 pt-4 border-t border-border/40 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-ping" />
              <span className="text-[8px] font-mono text-text-muted uppercase tracking-widest">
                System telemetry online // 60FPS
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default SystemArchitecture;
