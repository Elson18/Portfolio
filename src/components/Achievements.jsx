import { motion } from 'framer-motion';
import { Award, Trophy, Code2, ShieldCheck } from 'lucide-react';

const hackathons = [
  { title: 'VCET HackElite 2K25', role: 'Finalist' },
  { title: 'Hackzion V.2', role: 'Finalist' },
  { title: 'Hack the Horizon', role: '5th Place' },
  { title: 'IDEATHON ’25', role: 'Third Prize' },
  { title: 'NPTEL Certifications', role: 'Elite Rankings' }
];

const certifications = [
  { title: 'AWS Certified AI Practitioner', issuer: 'AWS Partner Network', highlight: true },
  { title: 'AWS Cloud Foundations', issuer: 'Amazon Web Services' },
  { title: 'Machine Learning with Python', issuer: 'IBM / Coursera' },
  { title: 'Neural Networks & Deep Learning', issuer: 'DeepLearning.AI' },
  { title: 'Math Foundations for ML', issuer: 'Imperial College / Coursera' }
];

const Achievements = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  // LeetCode calculations
  const totalSolved = 317;
  const easyCount = 130; // approx split out of 317 solved
  const medCount = 150;
  const hardCount = 37;

  // SVG ring math (radius = 34, circumference = 213.6)
  const easyPercent = (easyCount / totalSolved) * 213.6;
  const medPercent = (medCount / totalSolved) * 213.6;
  const hardPercent = (hardCount / totalSolved) * 213.6;

  const handleSpotlightMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
    card.style.setProperty('--mouse-active', '1');
  };

  const handleSpotlightMouseLeave = (e) => {
    e.currentTarget.style.setProperty('--mouse-active', '0');
  };  return (
    <section id="achievements" className="bg-white px-6 md:px-12 py-32 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-24 text-left max-w-2xl relative z-10">
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-brand-primary block mb-3 uppercase">
            // 04 / MILESTONES & CREDENTIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tighter text-text uppercase leading-none mb-6">
            ACHIEVEMENTS
          </h2>
          <div className="h-[2px] bg-brand-primary/50 w-24 my-6" />
          <p className="text-xs font-mono font-semibold text-text-muted uppercase tracking-widest leading-relaxed">
            A verified ledger of engineering accomplishments across hackathons, cloud systems, and algorithmic challenges.
          </p>
        </div>

        {/* Bento Grid layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch relative z-10"
        >
          {/* LeetCode & Coding Profiles Card */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            onMouseMove={handleSpotlightMouseMove}
            onMouseLeave={handleSpotlightMouseLeave}
            className="spotlight-card bg-white rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-md shadow-slate-100/50 border border-slate-200 group transition-all"
          >
            <div>
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4 mb-6 relative z-10">
                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl group-hover:border-brand-primary/30 transition-colors">
                  <Code2 size={18} className="text-brand-primary" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-text font-heading">
                  Algorithmic Problem Solving
                </h3>
              </div>

              {/* LeetCode Donut Row */}
              <div className="flex items-center gap-6 mb-6 relative z-10">
                <div className="relative w-24 h-24 flex items-center justify-center flex-shrink-0">
                  <svg width="96" height="96" viewBox="0 0 80 80" className="transform -rotate-90">
                    <circle cx="40" cy="40" r="34" stroke="#e2e8f0" strokeWidth="6" fill="none" opacity="0.4" />
                    
                    {/* Easy Progress Ring */}
                    <motion.circle
                      cx="40"
                      cy="40"
                      r="34"
                      stroke="#10b981" // emerald
                      strokeWidth="6"
                      strokeDasharray="213.6"
                      initial={{ strokeDashoffset: 213.6 }}
                      whileInView={{ strokeDashoffset: 213.6 - easyPercent }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                      strokeLinecap="round"
                      fill="none"
                    />

                    <circle cx="40" cy="40" r="28" stroke="#e2e8f0" strokeWidth="5" fill="none" opacity="0.4" />
                    {/* Medium Progress Ring */}
                    <motion.circle
                      cx="40"
                      cy="40"
                      r="28"
                      stroke="#f59e0b" // amber
                      strokeWidth="5"
                      strokeDasharray="175.8"
                      initial={{ strokeDashoffset: 175.8 }}
                      whileInView={{ strokeDashoffset: 175.8 - (medPercent * 175.8 / 213.6) }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
                      strokeLinecap="round"
                      fill="none"
                    />

                    <circle cx="40" cy="40" r="22" stroke="#e2e8f0" strokeWidth="4" fill="none" opacity="0.4" />
                    {/* Hard Progress Ring */}
                    <motion.circle
                      cx="40"
                      cy="40"
                      r="22"
                      stroke="#ef4444" // red
                      strokeWidth="4"
                      strokeDasharray="138.2"
                      initial={{ strokeDashoffset: 138.2 }}
                      whileInView={{ strokeDashoffset: 138.2 - (hardPercent * 138.2 / 213.6) }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                  
                  {/* Absolute Center Counter */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center font-heading text-center">
                    <span className="text-xl font-black text-text leading-none">{totalSolved}</span>
                    <span className="text-[7px] font-mono font-bold text-text-muted mt-1 uppercase tracking-widest">SOLVED</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 flex-grow">
                  {/* Easy */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 font-sans text-text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Easy</span>
                    </div>
                    <span className="font-mono font-bold text-text">{easyCount}</span>
                  </div>

                  {/* Medium */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 font-sans text-text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <span>Medium</span>
                    </div>
                    <span className="font-mono font-bold text-text">{medCount}</span>
                  </div>

                  {/* Hard */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 font-sans text-text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                      <span>Hard</span>
                    </div>
                    <span className="font-mono font-bold text-text">{hardCount}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Platform summary stats */}
            <div className="flex flex-col gap-2.5 pt-4 border-t border-slate-200 mt-6 text-left relative z-10">
              <div className="flex justify-between items-center bg-slate-50 border border-slate-200 p-3 rounded-xl">
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold tracking-widest text-text font-heading">LEETCODE PROFILE</span>
                  <span className="text-[9px] font-medium text-text-muted mt-0.5">Top 12% Contests</span>
                </div>
                <span className="text-xs font-mono font-black text-brand-primary">1451 Rating</span>
              </div>

              <div className="flex justify-between items-center bg-slate-50 border border-slate-200 p-3 rounded-xl">
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold tracking-widest text-text font-heading">CODECHEF RATING</span>
                  <span className="text-[9px] font-medium text-text-muted mt-0.5">584+ Problems Solved</span>
                </div>
                <span className="text-xs font-mono font-black text-brand-accent">1426 (2-Star)</span>
              </div>
            </div>
          </motion.div>

          {/* Credentials/Certifications Card */}
          <motion.div 
            variants={itemVariants} 
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            onMouseMove={handleSpotlightMouseMove}
            onMouseLeave={handleSpotlightMouseLeave}
            className="spotlight-card bg-white rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-md shadow-slate-100/50 border border-slate-200 group transition-all"
          >
            <div>
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4 mb-6 relative z-10">
                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl group-hover:border-brand-accent/30 transition-colors">
                  <Award size={18} className="text-brand-accent" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-text font-heading">
                  AWS & AIML Credentials
                </h3>
              </div>
              
              <ul className="flex flex-col gap-4 text-left relative z-10">
                {certifications.map((c, i) => (
                  <li key={i} className="flex gap-3 items-start border-b border-slate-200/60 last:border-0 pb-3 last:pb-0">
                    <div className="p-1.5 bg-slate-50 border border-slate-200 rounded-lg mt-0.5 flex-shrink-0">
                      <ShieldCheck size={13} className={c.highlight ? "text-brand-primary animate-pulse" : "text-text-muted"} />
                    </div>
                    <div className="flex flex-col">
                      <span className={`text-xs font-bold leading-tight ${c.highlight ? "text-text" : "text-text-muted"}`}>
                        {c.title}
                      </span>
                      <span className="text-[9px] font-mono text-text-muted mt-0.5">
                        {c.issuer}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Hackathons Card */}
          <motion.div 
            variants={itemVariants} 
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            onMouseMove={handleSpotlightMouseMove}
            onMouseLeave={handleSpotlightMouseLeave}
            className="spotlight-card bg-white rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-md shadow-slate-100/50 border border-slate-200 group transition-all"
          >
            <div>
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4 mb-6 relative z-10">
                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl group-hover:border-amber-500/30 transition-colors">
                  <Trophy size={18} className="text-amber-500" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-text font-heading">
                  Hackathons & Contests
                </h3>
              </div>
              
              <ul className="flex flex-col gap-4 text-left relative z-10">
                {hackathons.map((h, i) => (
                  <li key={i} className="flex items-center justify-between border-b border-slate-200/60 last:border-0 pb-3 last:pb-0">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs font-bold text-text-muted font-sans">{h.title}</span>
                      <span className="text-[8px] font-mono font-bold text-text-muted tracking-wider">COMPETITOR</span>
                    </div>
                    <span className="text-[9px] font-mono font-bold text-brand-primary bg-brand-primary/10 border border-brand-primary/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {h.role}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Achievements;
