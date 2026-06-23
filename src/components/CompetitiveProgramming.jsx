import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Award, ChevronRight, BarChart3, TrendingUp, HelpCircle } from 'lucide-react';

const CompetitiveProgramming = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 18 }
    }
  };

  // LeetCode SVG Donut properties
  // Radius = 40, Circumference = 2 * PI * 40 ≈ 251.2
  // We can simulate an Easy/Medium/Hard split
  const totalSolved = 386;
  const easyCount = 160;
  const medCount = 190;
  const hardCount = 36;

  const easyOffset = 251.2 * (1 - easyCount / totalSolved);
  const medOffset = 251.2 * (1 - medCount / totalSolved);
  const hardOffset = 251.2 * (1 - hardCount / totalSolved);

  return (
    <section id="programming" className="section section-bg-secondary" style={{ zIndex: 2 }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Problem Solving</span>
          <h2 className="section-title">Competitive Programming</h2>
          <p className="section-subtitle">
            Algorithmic problem-solving statistics and ratings across leading competitive coding platforms.
          </p>
        </div>

        {/* Platforms Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          style={platformsGridStyle}
        >
          {/* LeetCode Card */}
          <motion.div variants={itemVariants} className="card-glass-glow" style={platformCardStyle}>
            <div style={cardHeaderStyle}>
              <h3 style={platformTitleStyle}>LeetCode</h3>
              <a
                href="https://leetcode.com/elsonbenanzal"
                target="_blank"
                rel="noopener noreferrer"
                style={platformLinkStyle}
                className="clickable"
              >
                <span>Profile</span>
                <ChevronRight size={14} />
              </a>
            </div>

            <div style={lcLayoutGridStyle}>
              {/* Left Circular Visual */}
              <div style={donutContainerStyle}>
                <svg width="120" height="120" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
                  <circle cx="50" cy="50" r="40" stroke="#f1f5f9" strokeWidth="6" fill="none" />
                  {/* Easy - Green */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#10b981"
                    strokeWidth="7"
                    strokeDasharray="251.2"
                    initial={{ strokeDashoffset: 251.2 }}
                    whileInView={{ strokeDashoffset: easyOffset }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    strokeLinecap="round"
                    fill="none"
                  />
                  {/* Medium - Yellow */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#f59e0b"
                    strokeWidth="7"
                    strokeDasharray="251.2"
                    initial={{ strokeDashoffset: 251.2 }}
                    whileInView={{ strokeDashoffset: medOffset }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
                    strokeLinecap="round"
                    fill="none"
                    style={{ transform: `rotate(${(easyCount / totalSolved) * 360}deg)`, transformOrigin: '50px 50px' }}
                  />
                  {/* Hard - Red */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#ef4444"
                    strokeWidth="7"
                    strokeDasharray="251.2"
                    initial={{ strokeDashoffset: 251.2 }}
                    whileInView={{ strokeDashoffset: hardOffset }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay: 0.4 }}
                    strokeLinecap="round"
                    fill="none"
                    style={{ transform: `rotate(${((easyCount + medCount) / totalSolved) * 360}deg)`, transformOrigin: '50px 50px' }}
                  />
                </svg>
                {/* Center text */}
                <div style={donutCenterTextStyle}>
                  <span style={donutNumStyle}>{totalSolved}</span>
                  <span style={donutLabelStyle}>Solved</span>
                </div>
              </div>

              {/* Right Details */}
              <div style={lcDetailsStyle}>
                <div style={ratingWrapperStyle}>
                  <TrendingUp size={16} style={{ color: 'var(--primary)' }} />
                  <span style={ratingLabelStyle}>Rating:</span>
                  <span style={ratingValStyle}>1617</span>
                </div>
                
                <div style={lcBreakdownStyle}>
                  <div style={breakdownRowStyle}>
                    <div style={{ ...dotStyle, backgroundColor: '#10b981' }} />
                    <span style={breakdownLabelStyle}>Easy</span>
                    <span style={breakdownCountStyle}>{easyCount}</span>
                  </div>
                  <div style={breakdownRowStyle}>
                    <div style={{ ...dotStyle, backgroundColor: '#f59e0b' }} />
                    <span style={breakdownLabelStyle}>Medium</span>
                    <span style={breakdownCountStyle}>{medCount}</span>
                  </div>
                  <div style={breakdownRowStyle}>
                    <div style={{ ...dotStyle, backgroundColor: '#ef4444' }} />
                    <span style={breakdownLabelStyle}>Hard</span>
                    <span style={breakdownCountStyle}>{hardCount}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CodeChef Card */}
          <motion.div variants={itemVariants} className="card-glass-glow" style={platformCardStyle}>
            <div style={cardHeaderStyle}>
              <h3 style={platformTitleStyle}>CodeChef</h3>
              <a
                href="https://codechef.com/users/elsonbenanzal"
                target="_blank"
                rel="noopener noreferrer"
                style={platformLinkStyle}
                className="clickable"
              >
                <span>Profile</span>
                <ChevronRight size={14} />
              </a>
            </div>

            <div style={chefBodyStyle}>
              <div style={chefStatsGridStyle}>
                <div style={chefStatBoxStyle}>
                  <span style={chefStatValStyle}>634+</span>
                  <span style={chefStatLabelStyle}>Problems Solved</span>
                </div>
                
                <div style={chefStatBoxStyle}>
                  <span style={chefStatValStyle}>2-Star</span>
                  <span style={chefStatLabelStyle}>Coder Grade</span>
                </div>
              </div>

              {/* Custom SVG Star Badging */}
              <div style={chefVisualContainerStyle}>
                <svg width="100" height="40" viewBox="0 0 100 40">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="#f59e0b" />
                  <path d="M36 17.27L42.18 21l-1.64-7.03L46 9.24l-7.19-.61L36 2l-2.81 6.63-7.19.61 5.46 4.73L29.82 21z" fill="#f59e0b" />
                  <path d="M60 17.27L66.18 21l-1.64-7.03L70 9.24l-7.19-.61L60 2l-2.81 6.63-7.19.61 5.46 4.73L53.82 21z" fill="#e2e8f0" />
                  <path d="M84 17.27L90.18 21l-1.64-7.03L94 9.24l-7.19-.61L84 2l-2.81 6.63-7.19.61 5.46 4.73L77.82 21z" fill="#e2e8f0" />
                </svg>
                <div style={chefTaglineStyle}>Working towards 3-Star Level</div>
              </div>
            </div>
          </motion.div>

          {/* Codeforces Card */}
          <motion.div variants={itemVariants} className="card-glass-glow" style={platformCardStyle}>
            <div style={cardHeaderStyle}>
              <h3 style={platformTitleStyle}>Codeforces</h3>
              <a
                href="https://codeforces.com/profile/elsonbenanzal"
                target="_blank"
                rel="noopener noreferrer"
                style={platformLinkStyle}
                className="clickable"
              >
                <span>Profile</span>
                <ChevronRight size={14} />
              </a>
            </div>

            <div style={cfBodyStyle}>
              <div style={cfStatsRowStyle}>
                <div style={cfStatBoxStyle}>
                  <BarChart3 size={20} style={{ color: 'var(--accent-purple)' }} />
                  <div>
                    <div style={cfStatValStyle}>363</div>
                    <div style={cfStatLabelStyle}>Active Rating</div>
                  </div>
                </div>
                <div style={cfStatBoxStyle}>
                  <Award size={20} style={{ color: 'var(--accent-coral)' }} />
                  <div>
                    <div style={cfStatValStyle}>Newbie</div>
                    <div style={cfStatLabelStyle}>Rank Tier</div>
                  </div>
                </div>
              </div>

              {/* Graphic line chart representation */}
              <div style={cfChartContainerStyle}>
                <svg width="100%" height="60" viewBox="0 0 200 60" preserveAspectRatio="none">
                  {/* Grid lines */}
                  <line x1="0" y1="50" x2="200" y2="50" stroke="#f1f5f9" strokeWidth="1" />
                  <line x1="0" y1="25" x2="200" y2="25" stroke="#f1f5f9" strokeWidth="1" />
                  
                  {/* Rating line */}
                  <motion.path
                    d="M0 55 Q 50 48, 100 38 T 200 20"
                    fill="none"
                    stroke="var(--accent-purple)"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                  />
                  {/* Nodes */}
                  <circle cx="200" cy="20" r="4" fill="var(--accent-purple)" />
                  <circle cx="100" cy="38" r="3" fill="var(--accent-purple)" opacity="0.6" />
                </svg>
                <div style={cfChartLabelStyle}>Historical Rating Trend</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Styles
const platformsGridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '2rem',
  '@media (min-width: 992px)': {
    gridTemplateColumns: 'repeat(3, 1fr)'
  }
};

const platformCardStyle = {
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  textAlign: 'left'
};

const cardHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '2rem',
  borderBottom: '1px solid rgba(226, 232, 240, 0.5)',
  paddingBottom: '1rem'
};

const platformTitleStyle = {
  fontSize: '1.25rem',
  fontWeight: 750,
  fontFamily: 'var(--font-heading)'
};

const platformLinkStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.2rem',
  fontSize: '0.85rem',
  fontWeight: 600,
  color: 'var(--primary)',
  fontFamily: 'var(--font-heading)'
};

const lcLayoutGridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '1.5rem',
  alignItems: 'center',
  '@media (min-width: 576px)': {
    gridTemplateColumns: 'auto 1fr'
  }
};

const donutContainerStyle = {
  position: 'relative',
  width: '120px',
  height: '120px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto'
};

const donutCenterTextStyle = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center'
};

const donutNumStyle = {
  fontSize: '1.4rem',
  fontWeight: 800,
  color: 'var(--text-primary)',
  lineHeight: 1
};

const donutLabelStyle = {
  fontSize: '0.7rem',
  color: 'var(--text-muted)',
  fontWeight: 500,
  marginTop: '0.15rem'
};

const lcDetailsStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  width: '100%'
};

const ratingWrapperStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
  fontSize: '0.9rem',
  fontWeight: 600
};

const ratingLabelStyle = {
  color: 'var(--text-muted)'
};

const ratingValStyle = {
  color: 'var(--text-primary)',
  fontSize: '0.95rem'
};

const lcBreakdownStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem'
};

const breakdownRowStyle = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '0.825rem',
  fontWeight: 550
};

const dotStyle = {
  width: '7px',
  height: '7px',
  borderRadius: '50%',
  marginRight: '0.5rem',
  flexShrink: 0
};

const breakdownLabelStyle = {
  color: 'var(--text-secondary)',
  flexGrow: 1
};

const breakdownCountStyle = {
  color: 'var(--text-primary)',
  fontWeight: 700
};

const chefBodyStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  flexGrow: 1,
  justifyContent: 'center'
};

const chefStatsGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '1rem'
};

const chefStatBoxStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
  backgroundColor: 'var(--bg-secondary)',
  padding: '0.75rem 1rem',
  borderRadius: '10px',
  border: '1px solid var(--border)'
};

const chefStatValStyle = {
  fontSize: '1.25rem',
  fontWeight: 800,
  color: 'var(--text-primary)',
  fontFamily: 'var(--font-heading)'
};

const chefStatLabelStyle = {
  fontSize: '0.75rem',
  color: 'var(--text-muted)',
  fontWeight: 500
};

const chefVisualContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.5rem'
};

const chefTaglineStyle = {
  fontSize: '0.75rem',
  color: 'var(--text-light)',
  fontWeight: 500
};

const cfBodyStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  flexGrow: 1,
  justifyContent: 'center'
};

const cfStatsRowStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  '@media (min-width: 576px)': {
    flexDirection: 'row',
    alignItems: 'center'
  }
};

const cfStatBoxStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  backgroundColor: 'var(--bg-secondary)',
  padding: '0.75rem 1rem',
  borderRadius: '10px',
  border: '1px solid var(--border)',
  flexGrow: 1
};

const cfStatValStyle = {
  fontSize: '1.2rem',
  fontWeight: 800,
  color: 'var(--text-primary)',
  lineHeight: 1.1,
  fontFamily: 'var(--font-heading)'
};

const cfStatLabelStyle = {
  fontSize: '0.7rem',
  color: 'var(--text-muted)',
  fontWeight: 500
};

const cfChartContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  width: '100%'
};

const cfChartLabelStyle = {
  fontSize: '0.75rem',
  color: 'var(--text-light)',
  fontWeight: 500,
  textAlign: 'center'
};

// Add responsive media query support dynamically via stylesheet
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    @media (max-width: 991px) {
      div[style*="platformsGridStyle"] {
        grid-template-columns: 1fr !important;
        gap: 2.5rem !important;
      }
    }
    @media (max-width: 575px) {
      div[style*="lcLayoutGridStyle"] {
        grid-template-columns: 1fr !important;
        gap: 1.5rem !important;
        text-align: center !important;
      }
      div[style*="lcDetailsStyle"] {
        align-items: center !important;
      }
      div[style*="cfStatsRowStyle"] {
        flex-direction: column !important;
      }
    }
  `;
  document.head.appendChild(style);
}

export default CompetitiveProgramming;
