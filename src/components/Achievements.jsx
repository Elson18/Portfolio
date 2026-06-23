import React from 'react';
import { motion } from 'framer-motion';

const hackathons = [
  { title: 'VCET HackElite 2K25', role: 'Finalist' },
  { title: 'Hackzion V.2', role: 'Finalist' },
  { title: 'Hack the Horizon', role: '5th Place' },
  { title: 'IDEATHON ’25', role: 'Third Prize' },
  { title: 'NPTEL Certifications', role: 'Elite Rankings' }
];

const certifications = [
  { title: 'AWS Certified AI Practitioner', issuer: 'AWS' },
  { title: 'AWS Cloud Foundations', issuer: 'AWS' },
  { title: 'Machine Learning with Python', issuer: 'IBM / Coursera' },
  { title: 'Neural Networks & Deep Learning', issuer: 'DeepLearning.AI' },
  { title: 'Math Foundations for ML', issuer: 'Coursera' }
];

const codingStats = [
  { platform: 'LeetCode', detail: '386+ Solved', rating: 'Rating: 1617' },
  { platform: 'CodeChef', detail: '634+ Solved', rating: '2-Star Coder' },
  { platform: 'Codeforces', detail: 'Active Coder', rating: 'Rating: 363' }
];

const Achievements = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="achievements" className="bg-white px-6 md:px-12 py-24 md:py-36 border-t border-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Block - Label */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
              05 / Milestones
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading tracking-tight text-slate-950">
              Achievements
            </h2>
          </div>

          {/* Right Block - Cards Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
          >
            {/* Hackathons Card */}
            <motion.div variants={itemVariants} className="border border-slate-200/80 rounded-2xl p-6 flex flex-col gap-6 bg-white shadow-sm hover:border-slate-400 transition-colors duration-300">
              <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
                Hackathons & Competitions
              </h3>
              <ul className="flex flex-col gap-4">
                {hackathons.map((h, i) => (
                  <li key={i} className="flex flex-col gap-0.5">
                    <span className="text-sm font-semibold text-slate-800">{h.title}</span>
                    <span className="text-xs font-medium text-brand-primary">{h.role}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Certifications Card */}
            <motion.div variants={itemVariants} className="border border-slate-200/80 rounded-2xl p-6 flex flex-col gap-6 bg-white shadow-sm hover:border-slate-400 transition-colors duration-300">
              <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
                Professional Credentials
              </h3>
              <ul className="flex flex-col gap-4">
                {certifications.map((c, i) => (
                  <li key={i} className="flex flex-col gap-0.5">
                    <span className="text-sm font-semibold text-slate-800">{c.title}</span>
                    <span className="text-xs font-medium text-slate-400">{c.issuer}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Coding Profiles Card */}
            <motion.div variants={itemVariants} className="border border-slate-200/80 rounded-2xl p-6 flex flex-col gap-6 bg-white shadow-sm hover:border-slate-400 transition-colors duration-300">
              <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
                Algorithmic Problem Solving
              </h3>
              <ul className="flex flex-col gap-4">
                {codingStats.map((cs, i) => (
                  <li key={i} className="flex flex-col gap-0.5">
                    <span className="text-sm font-semibold text-slate-800">{cs.platform}</span>
                    <div className="flex items-center justify-between text-xs font-medium">
                      <span className="text-slate-500">{cs.detail}</span>
                      <span className="text-brand-accent">{cs.rating}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;
