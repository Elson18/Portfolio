import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Award, Trophy, Code2, Flame, Terminal, Calendar, 
  Zap, GitBranch, ShieldCheck, Compass, Heart, Layers
} from 'lucide-react';
import { useCodolioStats } from '../hooks/useCodolioStats';

// Animated Count-Up component
const AnimatedCounter = ({ value, duration = 1000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const end = parseFloat(value);
    if (isNaN(end)) {
      setCount(value);
      return;
    }
    
    let startTime = null;
    const isFloat = value.toString().includes('.');
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = progress * end;
      
      if (progress < 1) {
        setCount(isFloat ? current.toFixed(2) : Math.floor(current));
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };
    
    requestAnimationFrame(animate);
  }, [value, duration, isInView]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// SVG Problem Distribution Chart (Easy, Medium, Hard)
const ProblemDistributionChart = ({ easy = 280, medium = 93, hard = 3 }) => {
  // Parse inputs as integers to avoid string concatenation issues
  const e = parseInt(easy, 10) || 0;
  const m = parseInt(medium, 10) || 0;
  const h = parseInt(hard, 10) || 0;
  
  const total = e + m + h;
  
  const data = [
    { 
      label: 'Easy', 
      count: e, 
      percentage: total > 0 ? ((e / total) * 100).toFixed(1) : 0, 
      color: 'url(#easy-grad)', 
      barColor: '#00B86B', 
      textColor: 'text-green-600', 
      difficulty: 'Beginner' 
    },
    { 
      label: 'Medium', 
      count: m, 
      percentage: total > 0 ? ((m / total) * 100).toFixed(1) : 0, 
      color: 'url(#medium-grad)', 
      barColor: '#FFA116', 
      textColor: 'text-amber-600', 
      difficulty: 'Intermediate' 
    },
    { 
      label: 'Hard', 
      count: h, 
      percentage: total > 0 ? ((h / total) * 100).toFixed(1) : 0, 
      color: 'url(#hard-grad)', 
      barColor: '#FF375F', 
      textColor: 'text-rose-600', 
      difficulty: 'Advanced' 
    }
  ];

  const [hoveredIdx, setHoveredIdx] = useState(null);

  const width = 300;
  const height = 200;
  const bottomAxis = 160;
  const maxVal = 300;
  const chartHeight = 120; // from y=40 to y=160
  
  const barWidth = 36;
  
  // Symmetrical centers at 77, 152, 227 (edges at 59-95, 134-170, 209-245)
  // Margins are exactly 59px on both sides, center gaps are exactly 75px
  const getX = (index) => 59 + index * 75;

  return (
    <div className="relative w-full select-none flex flex-col items-center">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto overflow-visible max-w-[280px]">
        <defs>
          <linearGradient id="easy-grad" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#00B86B" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#00B86B" />
          </linearGradient>
          <linearGradient id="medium-grad" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#FFA116" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#FFA116" />
          </linearGradient>
          <linearGradient id="hard-grad" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#FF375F" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#FF375F" />
          </linearGradient>

          {/* Glow Filters */}
          <filter id="glow-easy" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#00B86B" floodOpacity="0.45" />
          </filter>
          <filter id="glow-medium" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#FFA116" floodOpacity="0.45" />
          </filter>
          <filter id="glow-hard" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#FF375F" floodOpacity="0.45" />
          </filter>
        </defs>

        {/* Minimal grid lines */}
        {[300, 200, 100, 0].map((val) => {
          const y = bottomAxis - (val / maxVal) * chartHeight;
          return (
            <g key={val}>
              <line
                x1="35"
                y1={y}
                x2="265"
                y2={y}
                stroke="#f1f5f9"
                strokeWidth="1"
              />
              <text
                x="28"
                y={y + 3}
                fill="#94a3b8"
                fontSize="8"
                fontFamily="monospace"
                fontWeight="bold"
                textAnchor="end"
              >
                {val}
              </text>
            </g>
          );
        })}

        {/* Bars */}
        {data.map((d, i) => {
          const barHeight = (d.count / maxVal) * chartHeight;
          const x = getX(i);
          const y = bottomAxis - barHeight;
          const r = Math.min(8, barHeight / 2); // Dynamic corner radius to keep geometry perfect
          
          const isAnyHovered = hoveredIdx !== null;
          const isCurrentHovered = hoveredIdx === i;
          
          // Custom path for rounded top corners only
          const pathD = `
            M ${x} ${bottomAxis}
            L ${x} ${y + r}
            A ${r} ${r} 0 0 1 ${x + r} ${y}
            L ${x + barWidth - r} ${y}
            A ${r} ${r} 0 0 1 ${x + barWidth} ${y + r}
            L ${x + barWidth} ${bottomAxis}
            Z
          `;

          return (
            <g
              key={d.label}
              className="cursor-pointer"
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Invisible large hover hit target */}
              <rect
                x={x - 12}
                y="15"
                width={barWidth + 24}
                height={bottomAxis - 5}
                fill="transparent"
              />

              {/* Value Label above the bar */}
              <motion.text
                x={x + barWidth / 2}
                y={y - 8}
                textAnchor="middle"
                fill={d.barColor}
                fontSize="10"
                fontFamily="monospace"
                fontWeight="black"
                animate={{
                  opacity: isAnyHovered ? (isCurrentHovered ? 1 : 0.4) : 1,
                  scale: isCurrentHovered ? 1.1 : 1,
                  y: isCurrentHovered ? y - 11 : y - 8
                }}
                transition={{ duration: 0.2 }}
              >
                <AnimatedCounter value={d.count} duration={1000} />
              </motion.text>

              {/* Bar Path */}
              <motion.path
                d={pathD}
                fill={d.color}
                filter={isCurrentHovered ? `url(#glow-${d.label.toLowerCase()})` : 'none'}
                initial={{ scaleY: 0 }}
                animate={{ 
                  scaleY: 1,
                  opacity: isAnyHovered ? (isCurrentHovered ? 1 : 0.35) : 1,
                  scaleX: isCurrentHovered ? 1.06 : 1
                }}
                style={{ originY: 1, originX: x + barWidth / 2 }}
                transition={{
                  scaleY: { duration: 0.8, delay: i * 0.15, ease: 'easeOut' },
                  opacity: { duration: 0.2 },
                  scaleX: { duration: 0.2 }
                }}
              />

              {/* Category Axis Label */}
              <motion.text
                x={x + barWidth / 2}
                y={bottomAxis + 18}
                textAnchor="middle"
                fill={isCurrentHovered ? d.barColor : '#475569'}
                fontSize="9.5"
                fontFamily="sans-serif"
                fontWeight="bold"
                animate={{
                  scale: isCurrentHovered ? 1.05 : 1,
                  y: isCurrentHovered ? bottomAxis + 20 : bottomAxis + 18
                }}
                transition={{ duration: 0.2 }}
              >
                {d.label}
              </motion.text>
            </g>
          );
        })}
      </svg>

      {/* Elegant Tooltip overlay inside parent card */}
      {hoveredIdx !== null && (
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="absolute top-12 left-1/2 -translate-x-1/2 bg-white/95 border border-slate-200 text-slate-800 p-3 rounded-2xl shadow-xl text-xs z-20 flex flex-col gap-1 w-44 pointer-events-none backdrop-blur-md"
        >
          <div className="flex justify-between items-center border-b border-slate-100 pb-1.5 mb-1.5">
            <span className="font-black uppercase tracking-wider text-slate-800 font-heading">
              {data[hoveredIdx].label}
            </span>
            <span className={`text-[8px] font-mono font-black border px-1.5 py-0.5 rounded uppercase ${
              hoveredIdx === 0 ? 'bg-green-50 border-green-200 text-green-600' :
              hoveredIdx === 1 ? 'bg-amber-50 border-amber-200 text-amber-600' :
              'bg-rose-50 border-rose-200 text-rose-600'
            }`}>
              {data[hoveredIdx].difficulty}
            </span>
          </div>
          <div className="flex flex-col gap-1 text-left font-sans text-slate-600">
            <div className="flex justify-between">
              <span>Solved:</span>
              <span className="font-bold text-slate-800">{data[hoveredIdx].count}</span>
            </div>
            <div className="flex justify-between">
              <span>Ratio:</span>
              <span className="font-bold text-slate-800">{data[hoveredIdx].percentage}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

// Smooth Line Chart for Contest Rating Progress
const ContestRatingChart = ({ history = [] }) => {
  const [hoveredPt, setHoveredPt] = useState(null);
  
  const width = 380;
  const height = 160;
  const paddingX = 40;
  const paddingY = 25;
  
  const chartWidth = width - 2 * paddingX;
  const chartHeight = height - 2 * paddingY;
  
  const ratings = history.map(h => h.rating);
  const minRating = Math.min(...ratings, 1300) - 20;
  const maxRating = Math.max(...ratings, 1600) + 20;
  
  const getX = (index) => paddingX + (index * chartWidth) / (history.length - 1);
  const getY = (rating) => height - paddingY - ((rating - minRating) / (maxRating - minRating)) * chartHeight;
  
  // Construct paths
  let linePath = '';
  let areaPath = `M ${getX(0)} ${height - paddingY} `;
  
  history.forEach((pt, i) => {
    const x = getX(i);
    const y = getY(pt.rating);
    if (i === 0) {
      linePath += `M ${x} ${y} `;
    } else {
      linePath += `L ${x} ${y} `;
    }
    areaPath += `L ${x} ${y} `;
  });
  
  areaPath += `L ${getX(history.length - 1)} ${height - paddingY} Z`;

  // Find Peak Datapoint
  const peakIndex = ratings.indexOf(Math.max(...ratings));
  const peakPt = history[peakIndex];

  return (
    <div className="relative w-full h-full flex flex-col justify-between select-none">
      <div className="relative w-full flex-grow">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto overflow-visible">
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.00" />
            </linearGradient>
            <linearGradient id="lineColor" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          
          {/* Rating Guidelines */}
          {[1350, 1400, 1450, 1500, 1550].map((level) => {
            const y = getY(level);
            return (
              <g key={level}>
                <line
                  x1={paddingX}
                  y1={y}
                  x2={width - paddingX}
                  y2={y}
                  stroke="#f1f5f9"
                  strokeWidth="1"
                />
                <text
                  x={paddingX - 8}
                  y={y + 3}
                  textAnchor="end"
                  fill="#94a3b8"
                  fontSize="8"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  {level}
                </text>
              </g>
            );
          })}
          
          {/* Rating Area Gradient */}
          <motion.path
            d={areaPath}
            fill="url(#areaGrad)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          
          {/* Smooth Rating Path */}
          <motion.path
            d={linePath}
            fill="transparent"
            stroke="url(#lineColor)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: 500, strokeDashoffset: 500 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />

          {/* Peak Indicator Ring */}
          {peakPt && (
            <g>
              <circle
                cx={getX(peakIndex)}
                cy={getY(peakPt.rating)}
                r="7"
                fill="#8b5cf6"
                opacity="0.2"
                className="animate-ping"
              />
              <circle
                cx={getX(peakIndex)}
                cy={getY(peakPt.rating)}
                r="4"
                fill="#8b5cf6"
                stroke="#ffffff"
                strokeWidth="1.5"
              />
              <text
                x={getX(peakIndex)}
                y={getY(peakPt.rating) - 10}
                textAnchor="middle"
                fill="#8b5cf6"
                fontSize="7.5"
                fontFamily="monospace"
                fontWeight="black"
              >
                PEAK: {peakPt.rating}
              </text>
            </g>
          )}

          {/* Hover Vertical tracking guide line */}
          {hoveredPt && (
            <line
              x1={getX(history.findIndex(p => p.contest === hoveredPt.contest))}
              y1={paddingY}
              x2={getX(history.findIndex(p => p.contest === hoveredPt.contest))}
              y2={height - paddingY}
              stroke="#8b5cf6"
              strokeWidth="1"
              strokeDasharray="2,2"
            />
          )}
          
          {/* Interactive Circle Dots */}
          {history.map((pt, i) => {
            const x = getX(i);
            const y = getY(pt.rating);
            const isHovered = hoveredPt && hoveredPt.contest === pt.contest;
            
            return (
              <g key={pt.contest}>
                <circle
                  cx={x}
                  cy={y}
                  r={isHovered ? 5.5 : 3}
                  fill={isHovered ? '#8b5cf6' : '#3b82f6'}
                  stroke="white"
                  strokeWidth="1.5"
                  className="transition-all duration-150 cursor-pointer"
                />
                
                {/* Large transparent hit target */}
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
          {history.map((pt, i) => {
            if (i % 2 !== 0 && i !== history.length - 1) return null; // Avoid overlapping dates
            return (
              <text
                key={pt.contest}
                x={getX(i)}
                y={height - paddingY + 14}
                textAnchor="middle"
                fill="#94a3b8"
                fontSize="8"
                fontFamily="sans-serif"
                fontWeight="500"
              >
                {pt.date}
              </text>
            );
          })}
        </svg>
      </div>

      {/* Floating details banner */}
      <div className="h-10 mt-2 flex items-center justify-between border-t border-slate-100 pt-2 text-left">
        {hoveredPt ? (
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col">
              <span className="text-[9px] font-mono font-bold text-slate-400 uppercase leading-none">
                {hoveredPt.contest}
              </span>
              <span className="text-xs font-black text-slate-800 mt-0.5">
                Rating Progress: <span className="text-blue-600">{hoveredPt.rating}</span>
              </span>
            </div>
            <span className="text-[9px] font-mono font-bold text-purple-600 bg-purple-50 border border-purple-100 px-2 py-0.5 rounded-full uppercase shrink-0">
              Verified Log
            </span>
          </div>
        ) : (
          <div className="flex items-center justify-between w-full text-[9px] font-mono font-bold text-slate-400">
            <span>HOVER POINTS FOR DETAILS</span>
            <span className="text-blue-500 font-bold flex items-center gap-1">
              +191 POINTS CONTEST RATING GROWTH
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

// Platform Comparison (Horizontal Bar Chart)
const PlatformComparison = ({ platforms = {} }) => {
  const [activeTab, setActiveTab] = useState('solved'); // 'solved', 'rating', 'badges'
  
  const rawData = [
    { name: 'LeetCode', solved: platforms.LeetCode?.solved || 376, rating: platforms.LeetCode?.rating || 1551, max: 1584, badges: platforms.LeetCode?.badges || 2, color: 'bg-blue-500', barColor: '#3b82f6' },
    { name: 'CodeChef', solved: platforms.CodeChef?.solved || 621, rating: platforms.CodeChef?.rating || 1451, max: 1451, badges: platforms.CodeChef?.badges || 1, color: 'bg-purple-500', barColor: '#8b5cf6' },
    { name: 'HackerRank', solved: platforms.HackerRank?.solved || 35, rating: 1200, max: 1500, badges: platforms.HackerRank?.badges || 5, color: 'bg-teal-500', barColor: '#14b8a6' }
  ];

  const getMetricDetails = (plat) => {
    if (activeTab === 'solved') {
      return {
        value: plat.solved,
        maxVal: 700,
        label: `${plat.solved} Solved`,
        pct: (plat.solved / 700) * 100
      };
    } else if (activeTab === 'rating') {
      return {
        value: plat.rating,
        maxVal: 1800,
        label: plat.name === 'HackerRank' ? '5-Star Python' : `Rating: ${plat.rating} (Peak: ${plat.max})`,
        pct: (plat.rating / 1800) * 100
      };
    } else {
      return {
        value: plat.badges,
        maxVal: 8,
        label: `${plat.badges} Badges`,
        pct: (plat.badges / 8) * 100
      };
    }
  };

  return (
    <div className="flex flex-col gap-5 h-full justify-between select-none">
      <div>
        {/* Navigation Tabs */}
        <div className="flex bg-slate-100 p-1 rounded-xl w-fit mb-5 border border-slate-200/50">
          {[
            { id: 'solved', label: 'Solved' },
            { id: 'rating', label: 'Ratings' },
            { id: 'badges', label: 'Badges' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-sans font-bold tracking-wide transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-white text-slate-800 shadow-sm border border-slate-200/30'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Rows */}
        <div className="flex flex-col gap-4 text-left">
          {rawData.map((plat) => {
            const { label, pct } = getMetricDetails(plat);
            
            return (
              <div key={plat.name} className="flex flex-col gap-1.5 group">
                <div className="flex items-center justify-between text-xs font-sans">
                  <span className="font-bold text-slate-700">{plat.name}</span>
                  <span className="font-mono font-bold text-slate-900">{label}</span>
                </div>
                
                {/* Horizontal track */}
                <div className="h-4 bg-slate-50 rounded-lg overflow-hidden border border-slate-200/40 relative">
                  <motion.div
                    className={`h-full rounded-lg ${plat.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  />
                  <div className="absolute inset-0 flex items-center justify-end pr-2 pointer-events-none">
                    <span className="text-[8px] font-mono text-slate-400 font-bold">
                      {Math.round(pct)}%
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Footnote */}
      <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-[9px] font-mono font-bold text-slate-400">
        <span>VERIFIED API SYNC</span>
        <span>PEAK PERFORMANCE TIERS</span>
      </div>
    </div>
  );
};

// Topic-wise Problem Solving (Interactive Donut Chart)
const TopicDonutChart = ({ topics = [] }) => {
  const [hoveredTopic, setHoveredTopic] = useState(null);
  
  // Calculate total and take top 5 topics, group others
  const topTopics = topics.slice(0, 5);
  const othersCount = topics.slice(5).reduce((acc, curr) => acc + curr.value, 0);
  const chartData = [
    ...topTopics.map((t, i) => ({
      name: t.name,
      value: t.value,
      color: ['#3b82f6', '#6366f1', '#8b5cf6', '#a855f7', '#d946ef'][i],
      textColor: ['text-blue-500', 'text-indigo-500', 'text-purple-500', 'text-fuchsia-500', 'text-pink-500'][i]
    })),
    { name: 'Others', value: othersCount, color: '#94a3b8', textColor: 'text-slate-400' }
  ];

  const totalVal = chartData.reduce((acc, curr) => acc + curr.value, 0);
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const cx = 70;
  const cy = 70;

  let cumulativeValue = 0;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 w-full py-2 select-none">
      {/* Chart Canvas */}
      <div className="relative w-36 h-36 flex-shrink-0 flex items-center justify-center">
        <svg viewBox="0 0 140 140" className="w-full h-full transform -rotate-90">
          <circle
            cx={cx}
            cy={cy}
            r={radius}
            fill="transparent"
            stroke="#f8fafc"
            strokeWidth="10"
          />
          {chartData.map((t, idx) => {
            const strokeLength = (t.value / totalVal) * circumference;
            const dashOffset = -(cumulativeValue / totalVal) * circumference;
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
                strokeWidth={isHovered ? 13 : 9}
                strokeDasharray={`${strokeLength} ${circumference}`}
                strokeDashoffset={dashOffset}
                strokeLinecap="round"
                className="transition-all duration-200 cursor-pointer"
                style={{ transformOrigin: '70px 70px' }}
                onMouseEnter={() => setHoveredTopic(t)}
                onMouseLeave={() => setHoveredTopic(null)}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset: dashOffset }}
                transition={{ duration: 1, ease: 'easeOut', delay: idx * 0.05 }}
              />
            );
          })}
        </svg>

        {/* Central Display */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none p-4">
          {hoveredTopic ? (
            <>
              <span className="text-[8px] font-mono font-black uppercase tracking-wider text-slate-400 max-w-full truncate mb-0.5">
                {hoveredTopic.name}
              </span>
              <span className="text-base font-black text-slate-800 leading-tight">
                {hoveredTopic.value}
              </span>
              <span className="text-[7px] font-mono font-bold text-slate-400 tracking-wider leading-none">
                {((hoveredTopic.value / totalVal) * 100).toFixed(1)}% SPLIT
              </span>
            </>
          ) : (
            <>
              <span className="text-xl font-black text-slate-800 leading-none">{totalVal}</span>
              <span className="text-[7px] font-mono font-bold text-slate-400 mt-1 tracking-widest">TOPICS</span>
              <span className="text-[6px] font-mono text-blue-600 bg-blue-50 border border-blue-100 px-1 py-0.2 rounded mt-1.5 font-bold uppercase">
                DSA SPLIT
              </span>
            </>
          )}
        </div>
      </div>

      {/* Legend list */}
      <div className="flex-grow flex flex-col gap-1 w-full text-left">
        {chartData.map((t) => {
          const isHovered = hoveredTopic && hoveredTopic.name === t.name;
          return (
            <div
              key={t.name}
              className={`flex items-center justify-between text-xs py-0.5 px-2 rounded-lg transition-colors cursor-pointer ${
                isHovered ? 'bg-slate-50 font-semibold border border-slate-100' : 'hover:bg-slate-50 border border-transparent'
              }`}
              onMouseEnter={() => setHoveredTopic(t)}
              onMouseLeave={() => setHoveredTopic(null)}
            >
              <div className="flex items-center gap-2 text-slate-600 min-w-0">
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: t.color }} />
                <span className="truncate font-medium text-slate-600">{t.name}</span>
              </div>
              <div className="flex items-center gap-1.5 font-mono shrink-0 ml-1">
                <span className="font-bold text-slate-800">{t.value}</span>
                <span className="text-slate-400 text-[9px]">({((t.value / totalVal) * 100).toFixed(0)}%)</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// GitHub Style Contribution Heatmap (Mocked using user metrics)
const GithubHeatmap = ({ totalActive = 273, maxStreak = 60, submissions = 335 }) => {
  const [hoveredCell, setHoveredCell] = useState(null);
  
  // Create realistic contribution values for a 24-week grid (24 cols * 7 rows = 168 cells)
  const gridCells = [];
  const today = new Date();
  const startDate = new Date();
  startDate.setDate(today.getDate() - 168);

  for (let i = 0; i < 168; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);

    // Create realistic distribution based on streak and total submissions
    let count = 0;
    const dayOfWeek = date.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    
    // Seed logical patterns (sine wave + weekend skip + empty blocks)
    let patternFactor = Math.sin(i * 0.2) * Math.cos(i * 0.1);
    if (isWeekend) patternFactor -= 0.5;

    if (patternFactor > 0.45) count = Math.floor(patternFactor * 5) + 1;
    else if (patternFactor > 0.1) count = Math.floor(patternFactor * 3) + 1;
    else if (patternFactor > -0.2) count = 0;

    // Inject hot streak sections to match max streak
    if (i > 40 && i < 100 && i % 3 !== 0) count = Math.max(count, 2);

    gridCells.push({
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      count
    });
  }

  // Slice cells into 24 column weeks
  const weeks = [];
  for (let i = 0; i < 24; i++) {
    weeks.push(gridCells.slice(i * 7, (i + 1) * 7));
  }

  const getCellColor = (count) => {
    if (count === 0) return 'bg-slate-100 hover:bg-slate-200';
    if (count <= 2) return 'bg-blue-100 hover:bg-blue-200';
    if (count <= 4) return 'bg-blue-300 hover:bg-blue-400';
    if (count <= 6) return 'bg-purple-400 hover:bg-purple-500';
    return 'bg-purple-600 hover:bg-purple-700';
  };

  return (
    <div className="flex flex-col gap-4 h-full justify-between select-none">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-blue-500" />
            <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
              Contribution Velocity (24 Weeks)
            </span>
          </div>
          <div className="flex items-center gap-1.5 bg-blue-50 text-blue-600 border border-blue-100 px-2 py-0.5 rounded-full text-[8.5px] font-mono font-bold uppercase shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span>Live Tracker</span>
          </div>
        </div>

        {/* Heatmap Grid */}
        <div className="relative">
          <div className="flex gap-[4.5px] overflow-x-auto pb-2 scrollbar-none justify-between">
            {/* Weekdays */}
            <div className="flex flex-col justify-between text-[7px] font-mono font-bold text-slate-400 pr-1 py-1 h-[68px] shrink-0 text-left">
              <span>Mon</span>
              <span>Wed</span>
              <span>Fri</span>
            </div>

            {/* Weeks */}
            {weeks.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-[4.5px] shrink-0">
                {week.map((cell, cIdx) => (
                  <div
                    key={cIdx}
                    className={`w-[7.5px] h-[7.5px] rounded-[1.5px] cursor-pointer transition-all duration-100 ${getCellColor(cell.count)}`}
                    onMouseEnter={() => setHoveredCell(cell)}
                    onMouseLeave={() => setHoveredCell(null)}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Months label */}
          <div className="flex justify-between pl-6 text-[8px] font-mono font-bold text-slate-400 mt-1 uppercase">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
          </div>
        </div>
      </div>

      {/* Legend & Details */}
      <div className="border-t border-slate-100 pt-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-[9px] font-mono font-bold text-slate-400 text-left">
        {hoveredCell ? (
          <span className="text-slate-800">
            {hoveredCell.date} • <span className="text-blue-600 font-bold">{hoveredCell.count} submissions</span>
          </span>
        ) : (
          <span>{totalActive} ACTIVE DAYS • {maxStreak} DAY MAX STREAK</span>
        )}
        
        {/* Colors Legend */}
        <div className="flex items-center gap-1 self-end sm:self-auto">
          <span>Less</span>
          <span className="w-2 h-2 rounded-[1px] bg-slate-100" />
          <span className="w-2 h-2 rounded-[1px] bg-blue-100" />
          <span className="w-2 h-2 rounded-[1px] bg-blue-300" />
          <span className="w-2 h-2 rounded-[1px] bg-purple-400" />
          <span className="w-2 h-2 rounded-[1px] bg-purple-600" />
          <span>More</span>
        </div>
      </div>
    </div>
  );
};

// Engineering Performance Score Radial Gauge
const EngineeringScoreGauge = ({ score = 92 }) => {
  const radius = 56;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const breakdowns = [
    { name: 'Problem Solving', pct: 94, color: 'bg-blue-500' },
    { name: 'Competitive Prog.', pct: 88, color: 'bg-purple-500' },
    { name: 'Consistency', pct: 90, color: 'bg-indigo-500' },
    { name: 'Development', pct: 92, color: 'bg-fuchsia-500' },
    { name: 'Open Source', pct: 85, color: 'bg-pink-500' }
  ];

  return (
    <div className="flex flex-col items-center justify-between w-full h-full select-none gap-5">
      {/* Gauge Canvas */}
      <div className="relative w-36 h-36 flex items-center justify-center">
        <svg viewBox="0 0 140 140" className="w-full h-full transform -rotate-90">
          <defs>
            <linearGradient id="scoreGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          {/* Background circle track */}
          <circle
            cx="70"
            cy="70"
            r={radius}
            fill="transparent"
            stroke="#f1f5f9"
            strokeWidth="10"
          />
          {/* Highlight indicator track */}
          <motion.circle
            cx="70"
            cy="70"
            r={radius}
            fill="transparent"
            stroke="url(#scoreGrad)"
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: strokeDashoffset }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
        </svg>
        {/* Core Center label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-black text-slate-800 leading-none">
            <AnimatedCounter value={score} />
          </span>
          <span className="text-[9px] font-mono font-bold text-slate-400 mt-1 uppercase tracking-wider">
            / 100 Score
          </span>
        </div>
      </div>

      {/* Breakdown list */}
      <div className="w-full flex flex-col gap-2 text-left">
        {breakdowns.map((item) => (
          <div key={item.name} className="flex flex-col gap-0.5 w-full">
            <div className="flex justify-between items-center text-[10px] font-sans">
              <span className="font-bold text-slate-500">{item.name}</span>
              <span className="font-mono font-bold text-slate-700">{item.pct}%</span>
            </div>
            {/* Linear track */}
            <div className="h-1.5 w-full bg-slate-50 border border-slate-200/40 rounded-full overflow-hidden">
              <motion.div
                className={`h-full rounded-full ${item.color}`}
                initial={{ width: 0 }}
                animate={{ width: `${item.pct}%` }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Achievements Dashboard Component
const Achievements = () => {
  const { stats, loading, error } = useCodolioStats();

  const [verifyingId, setVerifyingId] = useState(null);

  const certifications = [
    {
      title: 'AWS Certified AI Practitioner',
      issuer: 'Amazon Web Services',
      date: 'May 2025',
      id: 'AWS-AIP-984712',
      featured: true
    },
    {
      title: 'AWS Cloud Foundations',
      issuer: 'Amazon Web Services',
      date: 'March 2025',
      id: 'AWS-ACF-451928',
      featured: false
    },
    {
      title: 'Machine Learning with Python',
      issuer: 'IBM / Coursera',
      date: 'October 2024',
      id: 'COUR-IBM-ML8942',
      featured: false
    }
  ];

  const triggerVerification = (certId) => {
    setVerifyingId(certId);
    setTimeout(() => {
      setVerifyingId(null);
      alert(`Credential ID: ${certId} verified successfully against the AWS/IBM database.`);
    }, 1500);
  };

  const kpis = [
    { title: 'Total Solved', value: stats.totalSolved, suffix: '', desc: 'LeetCode, CodeChef, HR', icon: Code2, color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-100' },
    { title: 'LeetCode Rating', value: stats.ratings.LeetCode.rating, suffix: '', desc: 'Peak contest rating: 1584', icon: Trophy, color: 'text-purple-500', bg: 'bg-purple-50', border: 'border-purple-100' },
    { title: 'Contest Rank', value: stats.ratings.LeetCode.rank, suffix: '', desc: 'Top 8% globally', icon: Layers, color: 'text-indigo-500', bg: 'bg-indigo-50', border: 'border-indigo-100' },
    { title: 'GitHub Repos', value: stats.githubRepos || 45, suffix: '+', desc: 'Active secure backend builds', icon: GitBranch, color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-100' },
    { title: 'Coding Streak', value: stats.maxStreak, suffix: ' Days', desc: 'Coding consistency target', icon: Flame, color: 'text-purple-500', bg: 'bg-purple-50', border: 'border-purple-100' },
    { title: 'Badges Earned', value: stats.badges.length, suffix: '', desc: 'Platform badges & skills', icon: Award, color: 'text-indigo-500', bg: 'bg-indigo-50', border: 'border-indigo-100' }
  ];

  return (
    <section id="achievements" className="bg-transparent px-6 md:px-12 py-24 relative select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="mb-16 text-left">
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-blue-600 block mb-3 uppercase">
            // 04 - QUANTIFIABLE ENGINEERING METRICS
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tighter text-slate-900 uppercase leading-none mb-6">
            Developer <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Analytics</span>
          </h2>
          <div className="h-[3px] bg-gradient-to-r from-blue-500 to-purple-500 w-24 my-6 rounded-full" />
          <p className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest leading-relaxed max-w-3xl">
            Quantified performance metrics, dynamic DSA stats, contest ratings, and verified credentials pulled from LeetCode, CodeChef, HackerRank, and GitHub.
          </p>
        </div>

        {/* 1. KPI Cards Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mb-10">
          {kpis.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-white/70 backdrop-blur-md border border-slate-200/60 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-40 text-left group"
              >
                <div className="flex justify-between items-start w-full">
                  <span className="text-[9px] font-mono font-extrabold text-slate-400 uppercase tracking-wider leading-none">
                    {card.title}
                  </span>
                  <div className={`p-1.5 rounded-lg ${card.bg} border ${card.border} ${card.color} flex items-center justify-center shrink-0`}>
                    <Icon size={13} />
                  </div>
                </div>

                <div className="flex flex-col mt-2">
                  <div className="text-2xl md:text-3xl font-black font-heading text-slate-800 tracking-tight leading-none">
                    <AnimatedCounter value={card.value} suffix={card.suffix} />
                  </div>
                  <span className="text-[9px] font-sans font-semibold text-slate-400 mt-1 uppercase tracking-wide">
                    {card.desc}
                  </span>
                </div>

                <div className="h-[2.5px] w-full bg-slate-100 rounded-full overflow-hidden mt-3">
                  <motion.div
                    className={`h-full bg-gradient-to-r from-blue-500 to-purple-500`}
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 2. Visualizations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6 items-stretch">
          
          {/* Card 1: Problem Distribution (Bar Chart) */}
          <div className="bg-white/70 backdrop-blur-md border border-slate-200/60 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col min-h-[300px]">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4 text-left">
              <div className="flex items-center gap-2">
                <div className="p-1 bg-blue-50 text-blue-500 border border-blue-100 rounded-full flex items-center justify-center shrink-0">
                  <Code2 size={11} />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 font-heading">
                  DSA Problem Distribution
                </h3>
              </div>
              <span className="text-[8px] font-mono font-bold text-slate-400 border border-slate-100 bg-slate-50 px-2 py-0.5 rounded-full uppercase">
                Categories
              </span>
            </div>
            
            <div className="flex-grow flex flex-col justify-between">
              <ProblemDistributionChart 
                key={`${stats.difficulty.easy}-${stats.difficulty.medium}-${stats.difficulty.hard}`} 
                easy={stats.difficulty.easy} 
                medium={stats.difficulty.medium} 
                hard={stats.difficulty.hard} 
              />
              <div className="mt-3 pt-3 border-t border-slate-100 text-[8.5px] font-mono font-bold text-slate-400 uppercase tracking-wider text-left">
                ↑ Click columns to inspect solved difficulties
              </div>
            </div>
          </div>

          {/* Card 2: Contest Rating Progress (Line Chart) */}
          <div className="bg-white/70 backdrop-blur-md border border-slate-200/60 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col min-h-[300px] lg:col-span-2">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4 text-left">
              <div className="flex items-center gap-2">
                <div className="p-1 bg-purple-50 text-purple-500 border border-purple-100 rounded-full flex items-center justify-center shrink-0">
                  <Trophy size={11} />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 font-heading">
                  LeetCode Contest Rating Progress
                </h3>
              </div>
              <span className="text-[8px] font-mono font-bold text-purple-500 border border-purple-100 bg-purple-50 px-2 py-0.5 rounded-full uppercase">
                Knight Tier
              </span>
            </div>
            
            <div className="flex-grow flex flex-col justify-between">
              <ContestRatingChart 
                key={stats.contestHistory.map(h => h.rating).join('-')} 
                history={stats.contestHistory} 
              />
            </div>
          </div>

        </div>

        {/* 3. Visualizations Grid Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10 items-stretch">
          
          {/* Card 3: Platform Comparison (Horizontal Bar Chart) */}
          <div className="bg-white/70 backdrop-blur-md border border-slate-200/60 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col min-h-[300px]">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4 text-left">
              <div className="flex items-center gap-2">
                <div className="p-1 bg-teal-50 text-teal-500 border border-teal-100 rounded-full flex items-center justify-center shrink-0">
                  <Layers size={11} />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 font-heading">
                  Competitive Platforms
                </h3>
              </div>
              <span className="text-[8px] font-mono font-bold text-slate-400 border border-slate-100 bg-slate-50 px-2 py-0.5 rounded-full uppercase">
                Comparison
              </span>
            </div>
            
            <div className="flex-grow flex flex-col justify-between">
              <PlatformComparison platforms={stats.platforms} />
            </div>
          </div>

          {/* Card 4: Topic-wise DSA Split (Donut Chart) */}
          <div className="bg-white/70 backdrop-blur-md border border-slate-200/60 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col min-h-[300px]">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4 text-left">
              <div className="flex items-center gap-2">
                <div className="p-1 bg-indigo-50 text-indigo-500 border border-indigo-100 rounded-full flex items-center justify-center shrink-0">
                  <Zap size={11} />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 font-heading">
                  Topic-wise Statistics
                </h3>
              </div>
              <span className="text-[8px] font-mono font-bold text-slate-400 border border-slate-100 bg-slate-50 px-2 py-0.5 rounded-full uppercase">
                DSA Categories
              </span>
            </div>
            
            <div className="flex-grow flex flex-col justify-between">
              <TopicDonutChart topics={stats.topics} />
              <div className="mt-3 pt-3 border-t border-slate-100 text-[8.5px] font-mono font-bold text-slate-400 uppercase tracking-wider text-left">
                Overview of core data structure concepts
              </div>
            </div>
          </div>

          {/* Card 5: GitHub Heatmap */}
          <div className="bg-white/70 backdrop-blur-md border border-slate-200/60 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between min-h-[300px]">
            <GithubHeatmap totalActive={stats.activeDays} maxStreak={stats.maxStreak} submissions={stats.submissions} />
          </div>

        </div>

        {/* 4. Engineering Performance Score & Credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 6: AI Engineering Performance Score Gauge (lg:col-span-4) */}
          <div className="lg:col-span-4 bg-white/70 backdrop-blur-md border border-slate-200/60 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all flex flex-col min-h-[460px]">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4 text-left">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-blue-50 text-blue-500 border border-blue-100 rounded-full flex items-center justify-center shrink-0">
                  <Compass size={13} />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 font-heading">
                  AI Engineering Score
                </h3>
              </div>
              <span className="text-[8px] font-mono font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full uppercase shadow-sm">
                System Generated
              </span>
            </div>
            
            <div className="flex-grow flex flex-col justify-around">
              <EngineeringScoreGauge key={stats.totalSolved} score={92} />
            </div>
          </div>

          {/* Card 7: Industry Credentials (lg:col-span-8) */}
          <div className="lg:col-span-8 bg-white/70 backdrop-blur-md border border-slate-200/60 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between min-h-[460px]">
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6 text-left">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-purple-50 text-purple-600 border border-purple-100 rounded-xl">
                    <Award size={15} />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 font-heading">
                    Verified Industry Credentials
                  </h3>
                </div>
                <span className="text-[8px] font-mono text-purple-600 bg-purple-50 border border-purple-100 px-2 py-0.5 rounded-full font-bold uppercase shadow-sm">
                  Active verification
                </span>
              </div>

              {/* Credentials list */}
              <div className="flex flex-col gap-3.5">
                {certifications.map((cert) => (
                  <motion.div
                    key={cert.id}
                    whileHover={{ scale: 1.01 }}
                    className={`border p-4 rounded-xl text-left flex items-center justify-between relative overflow-hidden transition-all group ${
                      cert.featured 
                        ? 'border-blue-300 bg-blue-50/20' 
                        : 'border-slate-200/60 bg-white/40 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex gap-3.5 items-center z-10 min-w-0">
                      <div className={`p-2 rounded-lg border flex-shrink-0 ${
                        cert.featured 
                          ? 'bg-blue-50 border-blue-100 text-blue-500' 
                          : 'bg-slate-50 border-slate-100 text-slate-400'
                      }`}>
                        <ShieldCheck size={14} className={cert.featured ? "animate-pulse" : ""} />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-xs font-black text-slate-800 tracking-tight truncate uppercase font-heading">
                          {cert.title}
                        </span>
                        <span className="text-[9px] font-mono text-slate-400 mt-0.5">
                          {cert.issuer} • Issued {cert.date}
                        </span>
                        <span className="text-[9px] font-mono text-slate-400 mt-0.5 font-bold tracking-widest">
                          ID: {cert.id}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => triggerVerification(cert.id)}
                      className={`text-[9px] font-mono font-black tracking-wider uppercase px-3 py-1.5 rounded-lg border transition-all shrink-0 cursor-pointer ${
                        verifyingId === cert.id
                          ? 'bg-teal-500 border-teal-500 text-white'
                          : 'bg-transparent border-slate-200 text-slate-700 hover:bg-slate-800 hover:text-white hover:border-slate-800'
                      }`}
                    >
                      {verifyingId === cert.id ? (
                        <div className="flex items-center gap-1">
                          <motion.span className="w-1 h-1 rounded-full bg-white animate-bounce" />
                          <span>Verifying</span>
                        </div>
                      ) : (
                        <span>Verify API</span>
                      )}
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Cryptographic check */}
            <div className="mt-6 pt-4 border-t border-slate-100 text-left flex items-center justify-between text-[9.5px] font-mono font-bold text-slate-400">
              <span className="flex items-center gap-1">
                <Heart size={10} className="text-rose-500" />
                VERIFIED CRYPTOGRAPHIC MATCH
              </span>
              <span>SECURE PROTOCOLS ACTIVE</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Achievements;
