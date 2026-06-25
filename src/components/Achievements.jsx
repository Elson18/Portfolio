import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Code2, Cpu, ExternalLink, ShieldCheck } from 'lucide-react';

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

  // LeetCode SVG Donut properties
  // Radius = 34, Circumference = 2 * PI * 34 ≈ 213.6
  const totalSolved = 386;
  const easyCount = 160;
  const medCount = 190;
  const hardCount = 36;

  // Percentage calculations
  const easyPercent = (easyCount / totalSolved) * 213.6;
  const medPercent = (medCount / totalSolved) * 213.6;
  const hardPercent = (hardCount / totalSolved) * 213.6;

  return (
    <section id="achievements" className="bg-zinc-50 px-6 md:px-12 py-32 md:py-48 border-b border-zinc-100 relative overflow-hidden bg-dot-grid">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-24 text-left max-w-2xl">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-violet-600 block mb-3 uppercase">
            // 05 / MILESTONES
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tighter text-zinc-950 uppercase leading-none mb-6">
            ACHIEVEMENTS
          </h2>
          <div className="h-[2px] bg-zinc-950 w-24 my-6" />
          <p className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-widest leading-relaxed">
            A verified ledger of engineering accomplishments across hackathons, cloud systems, and algorithmic challenges.
          </p>
        </div>

        {/* Bento Grid layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch"
        >
          {/* LeetCode & Coding Profiles Card (Double Column on Large Screens) */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="lg:col-span-1 border border-zinc-150 rounded-2xl p-6 md:p-8 bg-white flex flex-col justify-between shadow-xl shadow-zinc-200/5 hover:shadow-xl hover:shadow-violet-500/[0.02]"
          >
            <div>
              <div className="flex items-center gap-3 border-b border-zinc-150 pb-4 mb-6">
                <div className="p-2.5 bg-violet-50 rounded-xl">
                  <Code2 size={18} className="text-violet-600" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-950 font-heading">
                  Algorithmic Problem Solving
                </h3>
              </div>

              {/* LeetCode Donut Row */}
              <div className="flex items-center gap-6 mb-6">
                <div className="relative w-24 h-24 flex items-center justify-center flex-shrink-0">
                  <svg width="96" height="96" viewBox="0 0 80 80" className="transform -rotate-90">
                    {/* Background Ring */}
                    <circle cx="40" cy="40" r="34" stroke="#f4f4f5" strokeWidth="6" fill="none" />
                    
                    {/* Easy Progress Ring */}
                    <motion.circle
                      cx="40"
                      cy="40"
                      r="34"
                      stroke="#10b981"
                      strokeWidth="6"
                      strokeDasharray="213.6"
                      initial={{ strokeDashoffset: 213.6 }}
                      whileInView={{ strokeDashoffset: 213.6 - easyPercent }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                      strokeLinecap="round"
                      fill="none"
                    />

                    {/* Medium Progress Ring (nested simulation) */}
                    <motion.circle
                      cx="40"
                      cy="40"
                      r="28"
                      stroke="#f59e0b"
                      strokeWidth="5"
                      strokeDasharray="175.8"
                      initial={{ strokeDashoffset: 175.8 }}
                      whileInView={{ strokeDashoffset: 175.8 - (medPercent * 175.8 / 213.6) }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
                      strokeLinecap="round"
                      fill="none"
                    />

                    {/* Hard Progress Ring (nested simulation) */}
                    <motion.circle
                      cx="40"
                      cy="40"
                      r="22"
                      stroke="#ef4444"
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
                    <span className="text-lg font-black text-zinc-950 leading-none">386</span>
                    <span className="text-[8px] font-mono font-bold text-zinc-400 mt-0.5">LC SOLVED</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 flex-grow">
                  {/* Easy */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 font-sans text-zinc-500">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span>Easy</span>
                    </div>
                    <span className="font-mono font-bold text-zinc-900">{easyCount}</span>
                  </div>

                  {/* Medium */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 font-sans text-zinc-500">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      <span>Medium</span>
                    </div>
                    <span className="font-mono font-bold text-zinc-900">{medCount}</span>
                  </div>

                  {/* Hard */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 font-sans text-zinc-500">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      <span>Hard</span>
                    </div>
                    <span className="font-mono font-bold text-zinc-900">{hardCount}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ratings and Platform summaries */}
            <div className="flex flex-col gap-3 pt-4 border-t border-zinc-100 mt-6 text-left">
              <div className="flex justify-between items-center bg-zinc-50 border border-zinc-200/80 p-3 rounded-xl">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold tracking-wider text-zinc-950 font-heading">LEETCODE RATING</span>
                  <span className="text-[10px] font-medium text-zinc-400 mt-0.5">Top 15% Contestant</span>
                </div>
                <span className="text-sm font-black font-heading text-violet-600">1617 Rating</span>
              </div>

              <div className="flex justify-between items-center bg-zinc-50 border border-zinc-200/80 p-3 rounded-xl">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold tracking-wider text-zinc-950 font-heading">CODECHEF ACCOUNT</span>
                  <span className="text-[10px] font-medium text-zinc-400 mt-0.5">634+ Solved Tasks</span>
                </div>
                <span className="text-sm font-black font-heading text-cyan-600">2-Star Coder</span>
              </div>
            </div>
          </motion.div>

          {/* Credentials/Certifications Card */}
          <motion.div 
            variants={itemVariants} 
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="border border-zinc-150 rounded-2xl p-6 md:p-8 bg-white flex flex-col justify-between shadow-xl shadow-zinc-200/5 hover:shadow-xl hover:shadow-violet-500/[0.02]"
          >
            <div>
              <div className="flex items-center gap-3 border-b border-zinc-150 pb-4 mb-6">
                <div className="p-2.5 bg-cyan-50 rounded-xl">
                  <Award size={18} className="text-cyan-600" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-950 font-heading">
                  AWS & AIML Credentials
                </h3>
              </div>
              
              <ul className="flex flex-col gap-4 text-left">
                {certifications.map((c, i) => (
                  <li key={i} className="flex gap-3 items-start border-b border-zinc-100 last:border-0 pb-3 last:pb-0">
                    <div className="p-1.5 bg-zinc-50 rounded-lg mt-0.5">
                      <ShieldCheck size={14} className={c.highlight ? "text-violet-500" : "text-zinc-400"} />
                    </div>
                    <div className="flex flex-col">
                      <span className={`text-xs font-bold leading-tight ${c.highlight ? "text-zinc-950" : "text-zinc-700"}`}>
                        {c.title}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-400 mt-0.5">
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
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="border border-zinc-150 rounded-2xl p-6 md:p-8 bg-white flex flex-col justify-between shadow-xl shadow-zinc-200/5 hover:shadow-xl hover:shadow-violet-500/[0.02]"
          >
            <div>
              <div className="flex items-center gap-3 border-b border-zinc-150 pb-4 mb-6">
                <div className="p-2.5 bg-amber-50 rounded-xl">
                  <Trophy size={18} className="text-amber-500" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-950 font-heading">
                  Hackathons & Contests
                </h3>
              </div>
              
              <ul className="flex flex-col gap-4 text-left">
                {hackathons.map((h, i) => (
                  <li key={i} className="flex items-center justify-between border-b border-zinc-100 last:border-0 pb-3.5 last:pb-0">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs font-bold text-zinc-800 font-sans">{h.title}</span>
                      <span className="text-[9px] font-mono font-bold text-zinc-400 tracking-wider">COMPETITOR</span>
                    </div>
                    <span className="text-[10px] font-mono font-black text-violet-600 bg-violet-50 px-2.5 py-1 rounded-full uppercase tracking-wider border border-violet-100">
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
