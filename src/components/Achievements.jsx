import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Award, Trophy, Code2, ShieldCheck, CheckCircle2, 
  Flame, Terminal, Check, TrendingUp, Activity, Calendar, Zap 
} from 'lucide-react';

// Live count-up animations component for recruiter stats
const AnimatedCounter = ({ value, duration = 1000, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const end = parseInt(value, 10);
    if (isNaN(end)) {
      setCount(value);
      return;
    }
    
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(animate);
  }, [value, duration]);

  return <span>{count}{suffix}</span>;
};

// Heatmap mock data generator representing coding consistency
const generateHeatmapData = () => {
  const data = [];
  const today = new Date();
  const startDate = new Date();
  startDate.setDate(today.getDate() - 7 * 24); // 24 weeks ago
  
  for (let i = 0; i < 7 * 24; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    const dayOfWeek = date.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    let factor = Math.sin(i * 0.15) * Math.cos(i * 0.08);
    if (isWeekend) factor -= 0.35;
    
    let level = 0;
    if (factor > 0.6) level = 4;
    else if (factor > 0.25) level = 3;
    else if (factor > -0.05) level = 2;
    else if (factor > -0.45) level = 1;
    
    // Ensure some days are empty/full to look realistic
    if (i === 120 || i === 85 || i === 45) level = 4;
    if (i % 17 === 0) level = 0;
    
    const solved = level === 0 ? 0 : level === 1 ? 1 : level === 2 ? 3 : level === 3 ? 5 : 8;
    
    data.push({
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      level,
      solved
    });
  }
  return data;
};

const heatmapData = generateHeatmapData();

const certifications = [
  {
    title: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services',
    date: 'May 2025',
    id: 'AWS-AIP-984712',
    link: 'https://aws.amazon.com/verification',
    featured: true
  },
  {
    title: 'AWS Cloud Foundations',
    issuer: 'Amazon Web Services',
    date: 'March 2025',
    id: 'AWS-ACF-451928',
    link: 'https://aws.amazon.com/verification',
    featured: false
  },
  {
    title: 'Machine Learning with Python',
    issuer: 'IBM / Coursera',
    date: 'October 2024',
    id: 'COUR-IBM-ML8942',
    link: 'https://coursera.org/verify',
    featured: false
  },
  {
    title: 'Neural Networks & Deep Learning',
    issuer: 'DeepLearning.AI',
    date: 'November 2024',
    id: 'COUR-DLAI-NN7314',
    link: 'https://coursera.org/verify',
    featured: false
  },
  {
    title: 'Math Foundations for ML',
    issuer: 'Imperial College London',
    date: 'July 2024',
    id: 'COUR-IMP-MATH12',
    link: 'https://coursera.org/verify',
    featured: false
  }
];

const hackathons = [
  {
    title: 'Hackzion V.2 National Hackathon',
    role: 'National Finalist',
    org: 'State Level AI Innovation',
    team: 'Team of 4',
    desc: 'Engineered raw spatial triangulation systems and localized RAG engines to resolve core patient-clinician triage loops.',
    award: 'National Top Finalist',
    highlighted: true
  },
  {
    title: 'VCET HackElite 2K25',
    role: 'Finalist',
    org: 'Velammal College of Engineering',
    team: 'Team of 3',
    desc: 'Created localized YOLO object detectors and companion software integrations running on NVIDIA Jetson boards for search & rescue telemetry.',
    award: 'Grand Finalist',
    highlighted: true
  },
  {
    title: 'IDEATHON ’25',
    role: 'Third Prize Winner',
    org: 'State Level Idea Challenge',
    team: 'Individual Entry',
    desc: 'Designed predictive ML models correlating soil variables and weather indices to automate crop yield metrics.',
    award: '3rd Place / Bronze Medal',
    highlighted: false
  },
  {
    title: 'Hack the Horizon',
    role: '5th Place Team',
    org: 'TechFest Competition',
    team: 'Team of 4',
    desc: 'Wired secure multi-agent scheduling routines optimizing appointments across clinical servers.',
    award: 'Top 5 Placement',
    highlighted: false
  }
];

// KPI Cards Data models
const kpiCards = [
  { id: 'solved', title: 'Problems Solved', value: 500, suffix: '+', desc: 'LeetCode, Chef, GFG', icon: Code2, trend: '+12% this month', color: 'text-blue-600', bg: 'bg-blue-50' },
  { id: 'ranking', title: 'Contest Percentile', value: 10, suffix: '%', desc: 'Top global ranking', icon: Trophy, trend: 'Knight / 3★ tier', color: 'text-purple-600', bg: 'bg-purple-50' },
  { id: 'streak', title: 'Consistency Streak', value: 82, suffix: ' Days', desc: 'Active daily velocity', icon: Flame, trend: '98.2% activity rate', color: 'text-orange-600', bg: 'bg-orange-50' },
  { id: 'contrib', title: 'Submissions Tracked', value: 1200, suffix: '+', desc: 'Commits & problem runs', icon: Activity, trend: 'Yearly aggregate metric', color: 'text-indigo-600', bg: 'bg-indigo-50' },
];

// DIFFICULTY DISTRIBUTION DATA
const difficultyData = [
  { label: 'Easy', count: 180, total: 200, color: 'url(#easy-grad)', textColor: 'text-emerald-600', bgLight: 'bg-emerald-50', barColor: '#10B981', percent: '90%', comment: 'Solid algorithmic foundations' },
  { label: 'Medium', count: 250, total: 300, color: 'url(#medium-grad)', textColor: 'text-amber-600', bgLight: 'bg-amber-50', barColor: '#F59E0B', percent: '83.3%', comment: 'Core interview prep focus' },
  { label: 'Hard', count: 70, total: 100, color: 'url(#hard-grad)', textColor: 'text-rose-600', bgLight: 'bg-rose-50', barColor: '#EF4444', percent: '70%', comment: 'Advanced math & data structures' },
];

// TOPIC ANALYSIS DATA
const topicsData = [
  { name: 'Arrays & Strings', value: 150, color: '#3B82F6', percentage: '30%', textClass: 'text-blue-600', bgClass: 'bg-blue-50' },
  { name: 'Dynamic Programming', value: 95, color: '#8B5CF6', percentage: '19%', textClass: 'text-purple-600', bgClass: 'bg-purple-50' },
  { name: 'Graphs', value: 75, color: '#4F46E5', percentage: '15%', textClass: 'text-indigo-600', bgClass: 'bg-indigo-50' },
  { name: 'Trees', value: 65, color: '#06B6D4', percentage: '13%', textClass: 'text-cyan-600', bgClass: 'bg-cyan-50' },
  { name: 'Greedy', value: 55, color: '#10B981', percentage: '11%', textClass: 'text-emerald-600', bgClass: 'bg-emerald-50' },
  { name: 'Other DSA', value: 60, color: '#EC4899', percentage: '12%', textClass: 'text-pink-600', bgClass: 'bg-pink-50' },
];

// PLATFORM COMPARISON DATA
const platformSolvedData = [
  { name: 'LeetCode', value: 320, max: 400, unit: 'Solved', rating: '1650 (Knight)', desc: 'Active solver, Top 8% Rank', color: 'bg-blue-600', text: 'text-blue-600', icon: Code2 },
  { name: 'CodeChef', value: 80, max: 400, unit: 'Solved', rating: '1680 (3-Star)', desc: 'Contest participant, Div 3', color: 'bg-purple-600', text: 'text-purple-600', icon: Trophy },
  { name: 'GeeksforGeeks', value: 110, max: 400, unit: 'Solved', rating: 'Score 450 (Top 15%)', desc: 'DSA topic practice', color: 'bg-indigo-600', text: 'text-indigo-600', icon: Terminal },
  { name: 'HackerRank', value: 50, max: 400, unit: 'Solved', rating: '5-Star Python', desc: 'Core language certifications', color: 'bg-cyan-600', text: 'text-cyan-600', icon: Award },
];

const platformRatingData = [
  { name: 'LeetCode', value: 1650, max: 2000, unit: 'Rating', desc: 'Knight rank, top 8% globally', color: 'bg-blue-600', text: 'text-blue-600', icon: Code2 },
  { name: 'CodeChef', value: 1680, max: 2000, unit: 'Rating', desc: '3-Star, competitive tier', color: 'bg-purple-600', text: 'text-purple-600', icon: Trophy },
  { name: 'GeeksforGeeks', value: 1350, max: 2000, unit: 'Score Equiv.', desc: 'Coding score 450, high accuracy', color: 'bg-indigo-600', text: 'text-indigo-600', icon: Terminal },
  { name: 'HackerRank', value: 1500, max: 2000, unit: 'Score Equiv.', desc: '5-Star Python & Problem Solving', color: 'bg-cyan-600', text: 'text-cyan-600', icon: Award },
];

// CONTEST PERFORMANCE TREND DATA
const contestHistory = [
  { id: 1, name: 'Weekly Contest 410', rating: 1400, rank: 'Top 25%', date: 'Dec 2024' },
  { id: 2, name: 'Biweekly Contest 148', rating: 1450, rank: 'Top 20%', date: 'Jan 2025' },
  { id: 3, name: 'Weekly Contest 425', rating: 1520, rank: 'Top 14%', date: 'Feb 2025' },
  { id: 4, name: 'Weekly Contest 432', rating: 1590, rank: 'Top 10%', date: 'Mar 2025' },
  { id: 5, name: 'Biweekly Contest 154', rating: 1610, rank: 'Top 9%', date: 'Apr 2025' },
  { id: 6, name: 'Weekly Contest 445', rating: 1680, rank: 'Top 8% (Knight)', date: 'May 2025' },
];

// Sub-components for analytics dashboard
const KpiCard = ({ card }) => {
  const Icon = card.icon;
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-start justify-between relative overflow-hidden"
    >
      <div className={`absolute top-0 right-0 w-16 h-16 rounded-bl-full ${card.bg} opacity-30 pointer-events-none`} />

      <div className="flex flex-col text-left">
        <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
          {card.title}
        </span>
        <div className="text-3xl font-black font-heading text-slate-800 mt-2 flex items-baseline">
          <AnimatedCounter value={card.value} suffix={card.suffix} />
        </div>
        <div className="flex items-center gap-1.5 mt-2">
          <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider">
            {card.desc}
          </span>
          <span className="text-slate-300 font-mono text-[9px]">•</span>
          <span className={`text-[9px] font-mono font-bold ${card.color} uppercase tracking-wider`}>
            {card.trend}
          </span>
        </div>
      </div>

      <div className={`p-2.5 rounded-xl border border-slate-100 text-slate-800 ${card.bg} ${card.color} shrink-0`}>
        <Icon size={16} />
      </div>
    </motion.div>
  );
};

const VerticalBarChart = () => {
  const [hoveredBar, setHoveredBar] = useState(null);
  
  return (
    <div className="relative w-full h-40 flex flex-col justify-between">
      <svg viewBox="0 0 240 180" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="easy-grad" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="100%" stopColor="#34D399" />
          </linearGradient>
          <linearGradient id="medium-grad" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#FBBF24" />
          </linearGradient>
          <linearGradient id="hard-grad" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#DC2626" />
            <stop offset="100%" stopColor="#F87171" />
          </linearGradient>
        </defs>
        
        {/* Horizontal reference dotted lines */}
        {[30, 75, 120].map((y) => (
          <line
            key={y}
            x1="20"
            y1={y}
            x2="220"
            y2={y}
            stroke="#F1F5F9"
            strokeWidth="1.2"
            strokeDasharray="3,3"
          />
        ))}
        
        {/* Render columns */}
        {difficultyData.map((d, i) => {
          const maxVal = 300;
          const barHeight = (d.count / maxVal) * 130;
          const barWidth = 36;
          const x = 32 + i * 66;
          const y = 145 - barHeight;
          
          return (
            <g 
              key={d.label} 
              className="cursor-pointer"
              onMouseEnter={() => setHoveredBar(d)}
              onMouseLeave={() => setHoveredBar(null)}
            >
              {/* Invisible interactive background block */}
              <rect
                x={x - 8}
                y="10"
                width={barWidth + 16}
                height="140"
                fill="transparent"
                rx="8"
                className="hover:fill-slate-50/50 transition-colors duration-150"
              />
              
              {/* Target / Total Reference Line */}
              <line
                x1={x}
                y1={145 - (d.total / maxVal) * 130}
                x2={x + barWidth}
                y2={145 - (d.total / maxVal) * 130}
                stroke={d.barColor}
                strokeWidth="1.5"
                strokeDasharray="2,2"
                opacity="0.5"
              />
              
              {/* Main Animated Column */}
              <motion.rect
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                rx="6"
                fill={d.color}
                initial={{ height: 0, y: 145 }}
                whileInView={{ height: barHeight, y: y }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }}
              />
              
              {/* Column labels */}
              <text
                x={x + barWidth / 2}
                y="165"
                textAnchor="middle"
                fill="#64748B"
                fontSize="9"
                fontFamily="monospace"
                fontWeight="bold"
              >
                {d.label}
              </text>
            </g>
          );
        })}
      </svg>
      
      {/* Absolute floating tooltip card */}
      {hoveredBar && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-slate-900 text-white p-2.5 rounded-xl shadow-lg border border-slate-800 text-[10px] z-20 flex flex-col gap-1 w-44 pointer-events-none transition-all duration-150">
          <div className="flex justify-between items-center">
            <span className="font-bold">{hoveredBar.label} Category</span>
            <span className={`px-1.5 py-0.2 rounded text-[8px] font-mono font-bold ${hoveredBar.textColor} ${hoveredBar.bgLight}`}>
              {hoveredBar.percent} Goal
            </span>
          </div>
          <div className="text-xs font-black text-slate-100">
            {hoveredBar.count} Solved <span className="text-slate-400 font-normal">/ {hoveredBar.total} Target</span>
          </div>
          <p className="text-[8px] text-slate-400 leading-tight font-medium mt-0.5">
            {hoveredBar.comment}
          </p>
        </div>
      )}
    </div>
  );
};

const DonutChart = () => {
  const [hoveredTopic, setHoveredTopic] = useState(null);
  const total = 500;
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const cx = 70;
  const cy = 70;

  let cumulativeValue = 0;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 w-full py-2">
      {/* Chart container */}
      <div className="relative w-36 h-36 flex-shrink-0 flex items-center justify-center">
        <svg viewBox="0 0 140 140" className="w-full h-full transform -rotate-90">
          <circle
            cx={cx}
            cy={cy}
            r={radius}
            fill="transparent"
            stroke="#f1f5f9"
            strokeWidth="12"
          />
          {topicsData.map((t, idx) => {
            const strokeLength = (t.value / total) * circumference;
            const dashOffset = -(cumulativeValue / total) * circumference;
            cumulativeValue += t.value;

            const isHovered = hoveredTopic && hoveredTopic.name === t.name;

            return (
              <motion.circle
                key={t.name}
                cx={cx}
                cy={cy}
                r={radius}
                fill="transparent"
                stroke={t.color}
                strokeWidth={isHovered ? 16 : 12}
                strokeDasharray={`${strokeLength} ${circumference}`}
                strokeDashoffset={dashOffset}
                strokeLinecap="round"
                className="transition-all duration-200 cursor-pointer"
                style={{ transformOrigin: '70px 70px' }}
                onMouseEnter={() => setHoveredTopic(t)}
                onMouseLeave={() => setHoveredTopic(null)}
                initial={{ strokeDashoffset: circumference }}
                whileInView={{ strokeDashoffset: dashOffset }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeOut', delay: idx * 0.05 }}
              />
            );
          })}
        </svg>

        {/* Central Display inside Donut */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none p-4">
          {hoveredTopic ? (
            <>
              <span className={`text-[8px] font-mono font-bold uppercase tracking-wider ${hoveredTopic.textClass} px-1.5 py-0.5 rounded ${hoveredTopic.bgClass} max-w-full truncate mb-0.5`}>
                {hoveredTopic.name}
              </span>
              <span className="text-base font-black text-slate-800 leading-tight">
                {hoveredTopic.value}
              </span>
              <span className="text-[7px] font-mono font-bold text-slate-400 tracking-widest leading-none">
                {hoveredTopic.percentage} SPLIT
              </span>
            </>
          ) : (
            <>
              <span className="text-xl font-black text-slate-800 leading-none">500</span>
              <span className="text-[7px] font-mono font-bold text-slate-400 mt-1 tracking-widest">SOLVED</span>
              <span className="text-[6px] font-mono text-emerald-600 bg-emerald-50 border border-emerald-200 px-1 py-0.2 rounded mt-1.5 font-bold uppercase">
                100% core
              </span>
            </>
          )}
        </div>
      </div>

      {/* Legend list */}
      <div className="flex-grow flex flex-col gap-1 w-full text-left">
        {topicsData.map((t) => {
          const isHovered = hoveredTopic && hoveredTopic.name === t.name;
          return (
            <div
              key={t.name}
              className={`flex items-center justify-between text-xs py-0.5 px-2 rounded-lg transition-colors cursor-pointer ${
                isHovered ? 'bg-slate-50 font-semibold shadow-sm border border-slate-100' : 'hover:bg-slate-50/50'
              }`}
              onMouseEnter={() => setHoveredTopic(t)}
              onMouseLeave={() => setHoveredTopic(null)}
            >
              <div className="flex items-center gap-2 text-slate-600 min-w-0">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: t.color }} />
                <span className="truncate font-medium text-slate-700">{t.name}</span>
              </div>
              <div className="flex items-center gap-1.5 font-mono shrink-0 ml-1">
                <span className="font-bold text-slate-800">{t.value}</span>
                <span className="text-slate-400 text-[9px]">({t.percentage})</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const PlatformComparison = () => {
  const [activeTab, setActiveTab] = useState('solved'); // 'solved' or 'rating'
  
  const currentData = activeTab === 'solved' ? platformSolvedData : platformRatingData;
  
  return (
    <div className="flex flex-col gap-6 h-full justify-between">
      <div>
        {/* Toggle Selector Tabs */}
        <div className="flex bg-slate-100 p-1 rounded-xl w-fit mb-6 border border-slate-200/60 select-none">
          <button
            onClick={() => setActiveTab('solved')}
            className={`px-4 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wider uppercase transition-all cursor-pointer ${
              activeTab === 'solved'
                ? 'bg-white text-blue-600 shadow-sm border border-slate-200/30'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Problems Solved
          </button>
          <button
            onClick={() => setActiveTab('rating')}
            className={`px-4 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wider uppercase transition-all cursor-pointer ${
              activeTab === 'rating'
                ? 'bg-white text-purple-600 shadow-sm border border-slate-200/30'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Platform Ratings
          </button>
        </div>

        {/* Rows */}
        <div className="flex flex-col gap-4 text-left">
          {currentData.map((plat) => {
            const pct = (plat.value / plat.max) * 100;
            
            return (
              <div key={plat.name} className="flex flex-col gap-1.5 group">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-800">{plat.name}</span>
                    <span className="text-[10px] text-slate-400 hidden sm:inline">• {plat.desc}</span>
                  </div>
                  <span className="font-mono font-bold text-slate-900">
                    {plat.value} {plat.unit === 'Solved' ? 'solved' : 'points'}
                  </span>
                </div>
                
                {/* Horizontal Bar */}
                <div className="h-4 bg-slate-50 rounded-lg overflow-hidden border border-slate-200/40 relative">
                  <motion.div
                    className={`h-full rounded-lg ${plat.color} opacity-85`}
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  />
                  <div className="absolute inset-0 flex items-center justify-end pr-2 pointer-events-none">
                    <span className="text-[8px] font-mono text-slate-500 font-bold uppercase tracking-wider">
                      {Math.round(pct)}%
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Verification tags */}
      <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between text-[9px] font-mono font-bold text-slate-400">
        <span>VERIFIED PLATFORM SCRAPES</span>
        <span>PEAK COMPILER VELOCITY</span>
      </div>
    </div>
  );
};

const LineChart = () => {
  const [hoveredPt, setHoveredPt] = useState(null);
  
  const width = 380;
  const height = 160;
  const paddingX = 40;
  const paddingY = 25;
  
  const chartWidth = width - 2 * paddingX;
  const chartHeight = height - 2 * paddingY;
  
  const minRating = 1300;
  const maxRating = 1800;
  
  const getX = (index) => paddingX + (index * chartWidth) / (contestHistory.length - 1);
  const getY = (rating) => height - paddingY - ((rating - minRating) / (maxRating - minRating)) * chartHeight;
  
  // Create line path string
  let linePath = '';
  let areaPath = `M ${getX(0)} ${height - paddingY} `;
  
  contestHistory.forEach((pt, i) => {
    const x = getX(i);
    const y = getY(pt.rating);
    if (i === 0) {
      linePath += `M ${x} ${y} `;
    } else {
      linePath += `L ${x} ${y} `;
    }
    areaPath += `L ${x} ${y} `;
  });
  
  areaPath += `L ${getX(contestHistory.length - 1)} ${height - paddingY} Z`;

  return (
    <div className="relative w-full h-full flex flex-col justify-between">
      <div className="relative w-full h-40">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.00" />
            </linearGradient>
            <linearGradient id="lineColor" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
          
          {/* Horizontal dotted gridlines */}
          {[1400, 1500, 1600, 1700].map((level) => {
            const y = getY(level);
            return (
              <g key={level}>
                <line
                  x1={paddingX}
                  y1={y}
                  x2={width - paddingX}
                  y2={y}
                  stroke="#E2E8F0"
                  strokeWidth="0.8"
                  strokeDasharray="3,3"
                />
                <text
                  x={paddingX - 8}
                  y={y + 3}
                  textAnchor="end"
                  fill="#94A3B8"
                  fontSize="8"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  {level}
                </text>
              </g>
            );
          })}
          
          {/* Area gradient under line */}
          <motion.path
            d={areaPath}
            fill="url(#areaGrad)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
          
          {/* Main Spline line path */}
          <motion.path
            d={linePath}
            fill="transparent"
            stroke="url(#lineColor)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: 400, strokeDashoffset: 400 }}
            whileInView={{ strokeDashoffset: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />

          {/* Guide-line on hover */}
          {hoveredPt && (
            <line
              x1={getX(contestHistory.findIndex(p => p.id === hoveredPt.id))}
              y1={paddingY}
              x2={getX(contestHistory.findIndex(p => p.id === hoveredPt.id))}
              y2={height - paddingY}
              stroke="#8B5CF6"
              strokeWidth="1"
              strokeDasharray="2,2"
              opacity="0.8"
            />
          )}
          
          {/* Interactive dots on spline line */}
          {contestHistory.map((pt, i) => {
            const x = getX(i);
            const y = getY(pt.rating);
            const isHovered = hoveredPt && hoveredPt.id === pt.id;
            
            return (
              <g key={pt.id}>
                {isHovered && (
                  <circle
                    cx={x}
                    cy={y}
                    r="8"
                    fill="#8B5CF6"
                    opacity="0.25"
                  />
                )}
                <circle
                  cx={x}
                  cy={y}
                  r={isHovered ? 5 : 3.5}
                  fill={isHovered ? '#8B5CF6' : '#3B82F6'}
                  stroke="white"
                  strokeWidth="1.5"
                  className="transition-all duration-150 cursor-pointer"
                />
                
                {/* Invisible larger hover intersection ring */}
                <circle
                  cx={x}
                  cy={y}
                  r="15"
                  fill="transparent"
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredPt(pt)}
                  onMouseLeave={() => setHoveredPt(null)}
                />
              </g>
            );
          })}
          
          {/* Dates labels on X axis */}
          {contestHistory.map((pt, i) => (
            <text
              key={pt.id}
              x={getX(i)}
              y={height - paddingY + 14}
              textAnchor="middle"
              fill="#64748B"
              fontSize="7"
              fontFamily="monospace"
              fontWeight="bold"
            >
              {pt.date}
            </text>
          ))}
        </svg>
      </div>

      {/* Hover tooltip card details block */}
      <div className="h-10 mt-2 flex items-center justify-between border-t border-slate-100 pt-2 text-left select-none">
        {hoveredPt ? (
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col">
              <span className="text-[9px] font-mono font-bold text-slate-400 uppercase leading-none">
                {hoveredPt.name}
              </span>
              <span className="text-xs font-black text-slate-800 mt-0.5">
                Rating: {hoveredPt.rating}
              </span>
            </div>
            <span className="text-[9px] font-mono font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-full uppercase shrink-0">
              {hoveredPt.rank}
            </span>
          </div>
        ) : (
          <div className="flex items-center justify-between w-full text-[9px] font-mono font-bold text-slate-400">
            <span>HOVER DATAPOINTS FOR DETAILS</span>
            <span className="text-indigo-500 font-bold flex items-center gap-1">
              <TrendingUp size={10} /> +280 POINTS RATING GROWTH
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

const CodingActivityHeatmap = () => {
  const [hoveredCell, setHoveredCell] = useState(null);
  
  // Slice pregenerated heatmap cells into 24 columns representing weeks
  const weeks = [];
  for (let i = 0; i < 24; i++) {
    weeks.push(heatmapData.slice(i * 7, (i + 1) * 7));
  }
  
  const getCellColor = (level) => {
    switch (level) {
      case 1: return 'bg-indigo-100 hover:bg-indigo-200';
      case 2: return 'bg-indigo-300 hover:bg-indigo-400';
      case 3: return 'bg-indigo-500 hover:bg-indigo-600';
      case 4: return 'bg-indigo-850 hover:bg-indigo-950';
      default: return 'bg-slate-100 hover:bg-slate-200';
    }
  };

  return (
    <div className="flex flex-col gap-4 h-full justify-between select-none">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-indigo-600" />
            <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
              Velocity Timeline (24 Weeks)
            </span>
          </div>
          <div className="flex items-center gap-1 bg-orange-50 text-orange-600 border border-orange-100 px-2 py-0.5 rounded text-[8px] font-mono font-bold uppercase animate-pulse">
            <Flame size={10} />
            <span>82 Day Streak</span>
          </div>
        </div>

        {/* Heatmap Grid */}
        <div className="relative">
          <div className="flex gap-[4px] overflow-x-auto pb-2 scrollbar-none justify-between">
            {/* Weekdays labels */}
            <div className="flex flex-col justify-between text-[7px] font-mono font-bold text-slate-400 pr-1 py-1 h-[68px] select-none shrink-0 text-left">
              <span>Mon</span>
              <span>Wed</span>
              <span>Fri</span>
            </div>

            {/* Weeks */}
            {weeks.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-[4px] shrink-0">
                {week.map((cell, cIdx) => (
                  <div
                    key={cIdx}
                    className={`w-[6.5px] h-[6.5px] rounded-[1.5px] cursor-pointer transition-all ${getCellColor(cell.level)}`}
                    onMouseEnter={() => setHoveredCell(cell)}
                    onMouseLeave={() => setHoveredCell(null)}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Month labels */}
          <div className="flex justify-between pl-6 text-[8px] font-mono font-bold text-slate-400 mt-1 uppercase">
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
          </div>
        </div>
      </div>

      {/* Legend & Tooltip Details */}
      <div className="border-t border-slate-100 pt-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-[9px] font-mono font-bold text-slate-400 text-left">
        {hoveredCell ? (
          <span className="text-slate-800">
            {hoveredCell.date} • <span className="text-indigo-600 font-bold">{hoveredCell.solved} solved</span>
          </span>
        ) : (
          <span>98.2% WEEKLY CONSISTENCY RATE</span>
        )}
        
        {/* Colors Legend */}
        <div className="flex items-center gap-1 self-end sm:self-auto">
          <span>Less</span>
          <span className="w-1.5 h-1.5 rounded-[1px] bg-slate-100" />
          <span className="w-1.5 h-1.5 rounded-[1px] bg-indigo-100" />
          <span className="w-1.5 h-1.5 rounded-[1px] bg-indigo-300" />
          <span className="w-1.5 h-1.5 rounded-[1px] bg-indigo-500" />
          <span className="w-1.5 h-1.5 rounded-[1px] bg-indigo-850" />
          <span>More</span>
        </div>
      </div>
    </div>
  );
};

const Achievements = () => {
  const [verifyingId, setVerifyingId] = useState(null);

  const triggerVerification = (certId) => {
    setVerifyingId(certId);
    setTimeout(() => {
      setVerifyingId(null);
      alert(`Credential ID: ${certId} successfully verified against issuer database.`);
    }, 1500);
  };

  return (
    <section id="achievements" className="bg-white px-6 md:px-12 py-32 border-b border-slate-200 relative select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* Recruiter performance analytics header */}
        <div className="mb-16 text-left">
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#2563EB] block mb-3 uppercase">
            // 04 / RECRUITER PERFORMANCE DASHBOARD
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tighter text-[#0F172A] uppercase leading-none mb-6">
            Engineering Performance Analytics
          </h2>
          <div className="h-[2px] bg-[#2563EB]/50 w-24 my-6" />
          <p className="text-xs font-mono font-semibold text-[#64748B] uppercase tracking-widest leading-relaxed max-w-3xl">
            A quantifiable analytics report of problem-solving velocity, algorithmic consistency, and verified technical credentials.
          </p>
        </div>

        {/* 1. KPI CARDS ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {kpiCards.map((card) => (
            <KpiCard key={card.id} card={card} />
          ))}
        </div>

        {/* 2. CHART VISUALIZATIONS GRID: ROW 1 (Difficulty, Topic split, Heatmap) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 items-stretch">
          
          {/* Card 1: Difficulty Distribution (Bar Chart) */}
          <div className="lg:col-span-3 border border-slate-200 rounded-3xl bg-white p-6 shadow-sm hover:shadow-md transition-all relative flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-4 text-left">
                <Zap size={14} className="text-emerald-500" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 font-heading">
                  Difficulty Distribution
                </h3>
              </div>
              <VerticalBarChart />
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[8px] font-mono font-bold text-slate-400 uppercase tracking-wider text-left">
              Difficulty complexity index
            </div>
          </div>

          {/* Card 2: Problem Solving Analytics (Donut Chart) */}
          <div className="lg:col-span-4 border border-slate-200 rounded-3xl bg-white p-6 shadow-sm hover:shadow-md transition-all relative flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-4 text-left">
                <Zap size={14} className="text-blue-500" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 font-heading">
                  Algorithmic Focus Area
                </h3>
              </div>
              <DonutChart />
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[8px] font-mono font-bold text-slate-400 uppercase tracking-wider text-left">
              Data structure categories distribution
            </div>
          </div>

          {/* Card 3: Coding Activity Heatmap */}
          <div className="lg:col-span-5 border border-slate-200 rounded-3xl bg-white p-6 shadow-sm hover:shadow-md transition-all relative flex flex-col justify-between min-h-[300px]">
            <CodingActivityHeatmap />
          </div>

        </div>

        {/* 3. CHART VISUALIZATIONS GRID: ROW 2 (Platform Comparison, Contest rating trend) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          
          {/* Card 4: Platform Comparison (Horizontal Bar Chart) */}
          <div className="lg:col-span-6 border border-slate-200 rounded-3xl bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-all relative flex flex-col justify-between min-h-[310px]">
            <div>
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-5 text-left">
                <Zap size={14} className="text-[#2563EB]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 font-heading">
                  Platform Comparison Matrix
                </h3>
              </div>
              <PlatformComparison />
            </div>
          </div>

          {/* Card 5: Contest Rating Trend (Line Chart) */}
          <div className="lg:col-span-6 border border-slate-200 rounded-3xl bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-all relative flex flex-col justify-between min-h-[310px]">
            <div>
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-5 text-left">
                <TrendingUp size={14} className="text-indigo-600" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 font-heading">
                  Contest Performance Trajectory
                </h3>
              </div>
              <LineChart />
            </div>
          </div>

        </div>

        {/* Section Divider */}
        <div className="h-[1px] bg-slate-200 w-full my-12" />

        {/* Credentials and Hackathons Secondary Header */}
        <div className="mb-12 text-left">
          <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#7C3AED] block mb-2 uppercase">
            // VERIFIED ACCOMPLISHMENTS & DEPLOYMENTS
          </span>
          <h3 className="text-2xl md:text-3xl font-black font-heading tracking-tight text-slate-800 uppercase">
            Verified Credentials & Showcases
          </h3>
        </div>

        {/* Showcase Grid: Credentials & Hackathons */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ZONE 2: CERTIFICATIONS & CREDENTIALS (lg:col-span-6) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="border border-slate-200 rounded-3xl bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between min-h-[500px]">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6 text-left">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 bg-indigo-50 text-[#7C3AED] rounded-lg border border-indigo-100">
                      <Award size={16} />
                    </div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 font-heading">
                      Industry Credentials
                    </h3>
                  </div>
                  <span className="text-[8px] font-mono text-indigo-600 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-full font-bold uppercase">
                    Security Verified
                  </span>
                </div>

                {/* Certifications Card Row */}
                <div className="flex flex-col gap-3">
                  {certifications.map((cert) => (
                    <motion.div
                      key={cert.id}
                      whileHover={{ scale: 1.01 }}
                      className={`border p-4 rounded-xl text-left flex items-start justify-between relative overflow-hidden transition-all group ${
                        cert.featured 
                          ? 'border-[#2563EB] bg-[#2563EB]/[0.02]' 
                          : 'border-slate-200 bg-white hover:border-slate-300 shadow-sm'
                      }`}
                    >
                      {/* Left Block */}
                      <div className="flex gap-3 items-start z-10 min-w-0">
                        <div className={`p-2 rounded-lg border flex-shrink-0 mt-0.5 ${
                          cert.featured 
                            ? 'bg-blue-50 border-blue-100 text-[#2563EB]' 
                            : 'bg-slate-50 border-slate-200 text-[#64748B]'
                        }`}>
                          <ShieldCheck size={14} className={cert.featured ? "animate-pulse" : ""} />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-xs font-black text-[#0F172A] tracking-tight truncate">
                            {cert.title}
                          </span>
                          <span className="text-[9px] font-mono text-[#64748B] mt-0.5">
                            {cert.issuer} • Issued {cert.date}
                          </span>
                          <span className="text-[9px] font-mono text-[#64748B] mt-0.5 font-bold tracking-widest uppercase">
                            ID: {cert.id}
                          </span>
                        </div>
                      </div>

                      {/* Right verify button */}
                      <button
                        onClick={() => triggerVerification(cert.id)}
                        className={`text-[9px] font-mono font-black tracking-wider uppercase px-2.5 py-1.5 rounded-lg border transition-all shrink-0 cursor-pointer ${
                          verifyingId === cert.id
                            ? 'bg-[#10b981] border-[#10b981] text-white'
                            : 'bg-white border-slate-200 text-[#0F172A] hover:bg-[#0F172A] hover:text-white hover:border-[#0F172A]'
                        }`}
                      >
                        {verifyingId === cert.id ? (
                          <div className="flex items-center gap-1">
                            <Check size={10} className="animate-bounce" />
                            <span>Verifying</span>
                          </div>
                        ) : (
                          <span>Verify</span>
                        )}
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Verified badge bottom block */}
              <div className="mt-6 pt-4 border-t border-slate-200 text-left flex items-center gap-2 select-none">
                <CheckCircle2 size={14} className="text-[#10b981]" />
                <span className="text-[9px] font-mono font-bold text-[#64748B] uppercase tracking-widest">
                  ALL CREDENTIALS MAP TO CRYPTOGRAPHIC SIGNATURE ENTRIES
                </span>
              </div>
            </div>
          </div>

          {/* ZONE 3: HACKATHONS & COMPETITIONS SHOWCASE (lg:col-span-6) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="border border-slate-200 rounded-3xl bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between min-h-[500px]">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6 text-left">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 bg-amber-50 text-[#F59E0B] rounded-lg border border-amber-100">
                      <Trophy size={16} />
                    </div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 font-heading">
                      Accomplishments Gallery
                    </h3>
                  </div>
                  <span className="text-[8px] font-mono text-[#F59E0B] bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full font-bold uppercase">
                    Trophy Cabinet
                  </span>
                </div>

                {/* Hackathons List */}
                <div className="flex flex-col gap-3">
                  {hackathons.map((h, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.01 }}
                      className={`border border-slate-200 rounded-xl p-4 text-left flex flex-col justify-between shadow-sm bg-white hover:border-[#F59E0B]/40 transition-all relative overflow-hidden group`}
                    >
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#F59E0B]/5 to-transparent rounded-bl-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />
                      
                      <div>
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <span 
                            className="text-[8px] font-mono font-black tracking-widest uppercase px-2 py-0.5 rounded border"
                            style={{
                              borderColor: h.highlighted ? '#F59E0B33' : '#e2e8f0',
                              color: h.highlighted ? '#F59E0B' : '#64748B',
                              backgroundColor: h.highlighted ? '#F59E0B0c' : '#f8fafc'
                            }}
                          >
                            {h.award}
                          </span>
                          <Trophy 
                            size={12} 
                            className={h.highlighted ? "text-[#F59E0B] group-hover:scale-110 transition-transform" : "text-[#64748B]"} 
                          />
                        </div>

                        <h4 className="text-sm font-black font-heading text-[#0F172A] uppercase tracking-wide group-hover:text-[#F59E0B] transition-colors leading-tight">
                          {h.title}
                        </h4>
                        
                        <div className="flex flex-wrap items-center gap-1.5 mt-1 mb-2.5 text-[8px] font-mono text-[#64748B] font-bold">
                          <span>{h.role}</span>
                          <span>•</span>
                          <span>{h.org}</span>
                          <span>•</span>
                          <span className="uppercase text-[7px] bg-slate-50 border border-slate-200/80 px-1.5 py-0.2 rounded font-black">
                            {h.team}
                          </span>
                        </div>

                        <p className="text-[10px] text-[#64748B] leading-relaxed border-t border-slate-100 pt-2 font-medium">
                          {h.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Verified submissions check */}
              <div className="mt-6 pt-4 border-t border-slate-200 text-left flex items-center justify-between text-[9px] font-mono font-bold text-slate-400 select-none">
                <span>PROJECT SUBMISSIONS DEPLOYED</span>
                <span className="text-[#10b981] flex items-center gap-1 uppercase">
                  <Check size={8} /> Verified Portfolio
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Achievements;
