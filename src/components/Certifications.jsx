import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Sigma, Binary, Compass } from 'lucide-react';

const certsData = [
  {
    title: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    date: '2026',
    icon: <ShieldCheck size={20} style={{ color: 'var(--accent-cyan)' }} />,
    tag: 'Cloud AI'
  },
  {
    title: 'AWS Cloud Foundations',
    issuer: 'Amazon Web Services (AWS)',
    date: '2025',
    icon: <Award size={20} style={{ color: 'var(--secondary)' }} />,
    tag: 'Cloud'
  },
  {
    title: 'Machine Learning with Python',
    issuer: 'Coursera / IBM',
    date: '2025',
    icon: <Binary size={20} style={{ color: 'var(--primary)' }} />,
    tag: 'AI/ML'
  },
  {
    title: 'Neural Networks and Deep Learning',
    issuer: 'DeepLearning.AI / Coursera',
    date: '2025',
    icon: <Award size={20} style={{ color: 'var(--accent-purple)' }} />,
    tag: 'Deep Learning'
  },
  {
    title: 'Linear Algebra for Machine Learning',
    issuer: 'Imperial College London / Coursera',
    date: '2025',
    icon: <Sigma size={20} style={{ color: 'var(--accent-coral)' }} />,
    tag: 'Math for ML'
  },
  {
    title: 'Probability & Statistics for ML',
    issuer: 'Coursera',
    date: '2024',
    icon: <Compass size={20} style={{ color: 'var(--text-muted)' }} />,
    tag: 'Math for ML'
  },
  {
    title: 'Calculus for ML',
    issuer: 'Coursera',
    date: '2024',
    icon: <Sigma size={20} style={{ color: 'var(--accent-purple)' }} />,
    tag: 'Math for ML'
  }
];

const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 18 }
    }
  };

  return (
    <section id="certifications" className="section section-bg-secondary" style={{ zIndex: 2 }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Credentials</span>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Specialized certifications spanning machine learning theory, neural network foundations, and cloud practitioner credentials.
          </p>
        </div>

        {/* Certs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          style={certsGridStyle}
        >
          {certsData.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-glass-glow"
              style={certCardStyle}
            >
              <div style={certHeaderRowStyle}>
                <div style={certIconBoxStyle}>
                  {cert.icon}
                </div>
                <span style={certTagStyle(cert.tag)}>{cert.tag}</span>
              </div>
              
              <h3 style={certTitleStyle}>{cert.title}</h3>
              <p style={certIssuerStyle}>{cert.issuer}</p>
              <div style={certDateStyle}>{cert.date}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Styles
const certsGridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '1.5rem',
  '@media (min-width: 576px)': {
    gridTemplateColumns: 'repeat(2, 1fr)'
  },
  '@media (min-width: 992px)': {
    gridTemplateColumns: 'repeat(3, 1fr)'
  },
  '@media (min-width: 1200px)': {
    gridTemplateColumns: 'repeat(4, 1fr)'
  }
};

const certCardStyle = {
  padding: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  height: '100%'
};

const certHeaderRowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '1.25rem'
};

const certIconBoxStyle = {
  width: '38px',
  height: '38px',
  borderRadius: '8px',
  backgroundColor: 'var(--bg-primary)',
  border: '1px solid var(--border)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: 'var(--shadow-sm)'
};

const certTagStyle = (tag) => {
  let color = 'var(--text-muted)';
  let bg = 'rgba(100, 116, 139, 0.06)';
  if (tag === 'Cloud AI') {
    color = 'var(--accent-cyan)';
    bg = 'rgba(6, 182, 212, 0.08)';
  } else if (tag === 'Deep Learning') {
    color = 'var(--accent-purple)';
    bg = 'rgba(168, 85, 247, 0.08)';
  } else if (tag === 'AI/ML') {
    color = 'var(--primary)';
    bg = 'rgba(99, 102, 241, 0.08)';
  }

  return {
    fontSize: '0.725rem',
    fontWeight: 600,
    color: color,
    backgroundColor: bg,
    padding: '0.2rem 0.5rem',
    borderRadius: '4px',
    fontFamily: 'var(--font-heading)'
  };
};

const certTitleStyle = {
  fontSize: '1.05rem',
  fontWeight: 700,
  lineHeight: 1.4,
  marginBottom: '0.5rem',
  fontFamily: 'var(--font-heading)',
  color: 'var(--text-primary)',
  flexGrow: 1
};

const certIssuerStyle = {
  fontSize: '0.85rem',
  color: 'var(--text-secondary)',
  fontWeight: 500,
  marginBottom: '0.75rem'
};

const certDateStyle = {
  fontSize: '0.8rem',
  color: 'var(--text-light)',
  fontWeight: 500
};

// Add responsive media query support dynamically via stylesheet
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    @media (min-width: 1200px) {
      div[style*="certsGridStyle"] {
        grid-template-columns: repeat(4, 1fr) !important;
      }
    }
    @media (min-width: 992px) and (max-width: 1199px) {
      div[style*="certsGridStyle"] {
        grid-template-columns: repeat(3, 1fr) !important;
      }
    }
    @media (min-width: 576px) and (max-width: 991px) {
      div[style*="certsGridStyle"] {
        grid-template-columns: repeat(2, 1fr) !important;
      }
    }
    @media (max-width: 575px) {
      div[style*="certsGridStyle"] {
        grid-template-columns: 1fr !important;
      }
    }
  `;
  document.head.appendChild(style);
}

export default Certifications;
