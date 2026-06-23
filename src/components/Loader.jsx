import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const loaderPhrases = [
  'Initializing neural weights...',
  'Configuring RAG pipeline index...',
  'Synthesizing agent workflow graph...',
  'Fine-tuning responsive hyper-parameters...',
  'Loading professional highlights...',
  'Ready.'
];

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    // Dynamic progress bar speed
    const duration = 2400; // 2.4 seconds total loading
    const intervalTime = 30;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 350);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    // Sync phrase changes with progress
    if (progress < 20) setPhraseIndex(0);
    else if (progress < 40) setPhraseIndex(1);
    else if (progress < 60) setPhraseIndex(2);
    else if (progress < 80) setPhraseIndex(3);
    else if (progress < 95) setPhraseIndex(4);
    else setPhraseIndex(5);
  }, [progress]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        y: -100, 
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
      }}
      style={loaderContainerStyle}
    >
      <div style={contentWrapperStyle}>
        {/* Animated Tech Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={logoWrapperStyle}
        >
          <div style={logoCircleStyle}>
            <span style={logoTextStyle}>EB</span>
          </div>
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={titleStyle}
        >
          ELSON BENANZAL
        </motion.h1>
        
        <motion.p
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 0.6 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={subtitleStyle}
        >
          AI/ML ENGINEER & GENERATIVE AI DEVELOPER
        </motion.p>

        {/* Progress Bar & Text Container */}
        <div style={progressSectionStyle}>
          <div style={progressBarTrackStyle}>
            <motion.div
              style={progressBarFillStyle(progress)}
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>
          <div style={progressInfoStyle}>
            <AnimatePresence mode="wait">
              <motion.span
                key={phraseIndex}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={phraseStyle}
              >
                {loaderPhrases[phraseIndex]}
              </motion.span>
            </AnimatePresence>
            <span style={percentageStyle}>{Math.round(progress)}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Styling for preloader screen
const loaderContainerStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: '#0b0f19', // Sleek dark theme specifically for the loading screen
  color: '#ffffff',
  zIndex: 9999,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden'
};

const contentWrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '450px',
  padding: '2rem',
  textAlign: 'center'
};

const logoWrapperStyle = {
  marginBottom: '1.5rem',
  position: 'relative'
};

const logoCircleStyle = {
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #6366f1 0%, #3b82f6 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 0 30px rgba(99, 102, 241, 0.4)',
  position: 'relative'
};

const logoTextStyle = {
  fontFamily: 'var(--font-heading)',
  fontSize: '1.8rem',
  fontWeight: 800,
  color: '#ffffff',
  letterSpacing: '-0.02em'
};

const titleStyle = {
  fontFamily: 'var(--font-heading)',
  fontSize: '1.75rem',
  fontWeight: 800,
  letterSpacing: '0.05em',
  marginBottom: '0.5rem',
  background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
};

const subtitleStyle = {
  fontSize: '0.8rem',
  fontWeight: 600,
  letterSpacing: '0.15em',
  marginBottom: '3rem',
  color: '#94a3b8'
};

const progressSectionStyle = {
  width: '100%',
  marginTop: '1.5rem'
};

const progressBarTrackStyle = {
  width: '100%',
  height: '4px',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  borderRadius: '999px',
  overflow: 'hidden',
  marginBottom: '0.75rem',
  position: 'relative'
};

const progressBarFillStyle = (progress) => ({
  height: '100%',
  background: 'linear-gradient(90deg, #3b82f6, #6366f1, #a855f7)',
  boxShadow: '0 0 10px rgba(99, 102, 241, 0.5)',
  width: `${progress}%`
});

const progressInfoStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '0.8rem',
  color: '#64748b',
  fontFamily: 'var(--font-heading)',
  fontWeight: 500
};

const phraseStyle = {
  color: '#94a3b8',
  textAlign: 'left'
};

const percentageStyle = {
  color: '#6366f1',
  fontWeight: 'bold'
};

export default Loader;
