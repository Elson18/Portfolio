import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Cpu, Heart, Database, Eye, Accessibility } from 'lucide-react';

const interests = [
  {
    title: 'Generative AI',
    desc: 'Investigating latent space representations, controllable generation constraints, and parameter-efficient model alignment architectures (PEFT).',
    icon: <Sparkles size={22} style={{ color: 'var(--accent-coral)' }} />
  },
  {
    title: 'Agentic AI',
    desc: 'Designing stateful multi-agent systems with self-correcting graphs, memory structures, and planning models capable of complex decision loops.',
    icon: <Cpu size={22} style={{ color: 'var(--primary)' }} />
  },
  {
    title: 'Healthcare AI',
    desc: 'Applying clinical NLP models, clinical knowledge retrievers (RAG), and assistive diagnostic vision tools to augment clinical triage workflows.',
    icon: <Heart size={22} style={{ color: 'var(--accent-purple)' }} />
  },
  {
    title: 'Large Language Models',
    desc: 'Researching reasoning mechanisms, multi-step inference optimizations, model quantization techniques, and reliable alignment benchmarks.',
    icon: <Database size={22} style={{ color: 'var(--secondary)' }} />
  },
  {
    title: 'Computer Vision',
    desc: 'Exploring real-time object tracking, depth estimation, and 3D semantic segmentation to facilitate navigation and situational awareness.',
    icon: <Eye size={22} style={{ color: 'var(--accent-cyan)' }} />
  },
  {
    title: 'AI for Accessibility',
    desc: 'Synthesizing computer vision, scene descriptors, and localized text-to-speech feedback mechanisms to build smart assistive utilities for impaired communities.',
    icon: <Accessibility size={22} style={{ color: 'var(--primary)' }} />
  }
];

const ResearchInterests = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    }
  };

  return (
    <section id="research" className="section" style={{ zIndex: 2 }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Academic Focus</span>
          <h2 className="section-title">Research Interests</h2>
          <p className="section-subtitle">
            Exploring the theoretical boundaries and practical applications of machine intelligence to solve societal bottlenecks.
          </p>
        </div>

        {/* Grid List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          style={gridStyle}
        >
          {interests.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="card-glass-glow"
              style={interestCardStyle}
            >
              <div style={iconBoxStyle}>
                {item.icon}
              </div>
              <h3 style={interestTitleStyle}>{item.title}</h3>
              <p style={interestDescStyle}>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Styles
const gridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '2rem',
  '@media (min-width: 768px)': {
    gridTemplateColumns: 'repeat(2, 1fr)'
  },
  '@media (min-width: 1200px)': {
    gridTemplateColumns: 'repeat(3, 1fr)'
  }
};

const interestCardStyle = {
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  textAlign: 'left',
  height: '100%'
};

const iconBoxStyle = {
  width: '42px',
  height: '42px',
  borderRadius: '10px',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  border: '1px solid var(--border)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: 'var(--shadow-sm)',
  marginBottom: '1.25rem'
};

const interestTitleStyle = {
  fontSize: '1.2rem',
  fontWeight: 750,
  marginBottom: '0.75rem',
  fontFamily: 'var(--font-heading)',
  color: 'var(--text-primary)'
};

const interestDescStyle = {
  fontSize: '0.925rem',
  color: 'var(--text-muted)',
  lineHeight: 1.6
};

// Add responsive media query support dynamically via stylesheet
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    @media (min-width: 1200px) {
      div[style*="gridStyle"] {
        grid-template-columns: repeat(3, 1fr) !important;
      }
    }
    @media (min-width: 768px) and (max-width: 1199px) {
      div[style*="gridStyle"] {
        grid-template-columns: repeat(2, 1fr) !important;
      }
    }
    @media (max-width: 767px) {
      div[style*="gridStyle"] {
        grid-template-columns: 1fr !important;
      }
    }
  `;
  document.head.appendChild(style);
}

export default ResearchInterests;
