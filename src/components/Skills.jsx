import SkillPillsRow from './SkillPillsRow';

const marqueeRows = [
  {
    category: 'AI, Machine Learning & Vision',
    speed: '28s',
    direction: 'left',
    accentColor: 'border-brand-primary/20 text-brand-primary bg-brand-primary/5',
    skills: [
      { name: 'Machine Learning', desc: 'Predictive modeling, classification, and statistical classifiers' },
      { name: 'Deep Learning', desc: 'Neural network architectures, weights training, and convolution layers' },
      { name: 'Computer Vision', desc: 'YOLOv8 real-time object tracking, localization, and pose estimation' },
      { name: 'Generative AI', desc: 'LangGraph stateful graphs, autonomous agents, and OpenAI endpoints' },
      { name: 'LLMs', desc: 'Model configurations, quantized GPT-4o pipelines, and prompt parameters' },
      { name: 'RAG Systems', desc: 'Advanced search indexing, vector databases, and document chunking' },
      { name: 'Data Science', desc: 'Exploratory data baselines and high-dimensional features analysis' }
    ]
  },
  {
    category: 'Languages, Databases & Tools',
    speed: '32s',
    direction: 'right',
    accentColor: 'border-brand-accent/20 text-brand-accent bg-brand-accent/5',
    skills: [
      { name: 'Python', desc: 'Core language for backend automation, vision pipelines, and deep models' },
      { name: 'FastAPI', desc: 'Asynchronous microservice endpoints and secure API routing' },
      { name: 'React.js', desc: 'Modular layouts, custom interactive components, and state flows' },
      { name: 'Node.js', desc: 'Scalable service endpoints and server layers' },
      { name: 'MongoDB', desc: 'NoSQL document storage and flexible database queries' },
      { name: 'Docker', desc: 'Containerized deployment packages and reproducible execution steps' },
      { name: 'Git', desc: 'Collaborative code repository tracking and branch integrations' },
      { name: 'Cloud Platforms', desc: 'Azure Realtime API, AWS Bedrock, and serverless compute functions' }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="bg-transparent px-6 md:px-12 py-32 md:py-48 border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-24 text-left max-w-2xl">
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-brand-primary block mb-3 uppercase">
            // 06 / SPECIALIZED TECHNICAL ARSENAL
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tighter text-text uppercase leading-none mb-6">
            CAPABILITIES
          </h2>
          <div className="h-[2px] bg-brand-primary/50 w-24 my-6" />
          <p className="text-xs font-mono font-semibold text-text-muted uppercase tracking-widest leading-relaxed">
            Multi-layered marquee of technologies spanning predictive architectures, stateful agent orchestrations, endpoints, and storage.
          </p>
        </div>

        {/* Marquee Rows Container */}
        <div className="flex flex-col gap-10 marquee-container relative py-4">
          {marqueeRows.map((row, rowIdx) => (
            <div key={rowIdx} className="flex flex-col gap-3 relative">
              {/* Row Label */}
              <div className="flex items-center gap-2 px-1">
                <span className="text-[9px] font-mono font-bold tracking-widest text-text-muted uppercase">
                  {row.category}
                </span>
                <div className="h-[1px] bg-border flex-grow opacity-45" />
              </div>

              {/* Skill Marquee Pills Row */}
              <SkillPillsRow 
                skills={row.skills} 
                direction={row.direction} 
                speed={row.speed} 
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
