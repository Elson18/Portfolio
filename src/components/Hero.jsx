import { useEffect } from 'react';
import { ArrowRight, Sparkles, Cpu, Trophy, Layers, BookOpen, ChevronDown } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Hero = () => {
  // Parallax offsets
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax transforms for background glow positions and elements
  const bgTranslateX = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);
  const bgTranslateY = useTransform(smoothY, [-0.5, 0.5], [-15, 15]);
  const pillTranslateX = useTransform(smoothX, [-0.5, 0.5], [-35, 35]);
  const pillTranslateY = useTransform(smoothY, [-0.5, 0.5], [-35, 35]);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  // Spotlight coordinates handler (GPU)
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
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xPercent = (clientX / innerWidth) - 0.5;
      const yPercent = (clientY / innerHeight) - 0.5;
      mouseX.set(xPercent);
      mouseY.set(yPercent);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const metrics = [
    {
      number: '1,000+',
      label: 'SOLVED PROBLEMS',
      sub: 'LeetCode & CodeChef',
      icon: <Cpu size={20} className="text-brand-primary animate-pulse" />,
      delay: 0.3
    },
    {
      number: '5',
      label: 'HACKATHONS',
      sub: 'Finalist & Winner',
      icon: <Trophy size={20} className="text-amber-500" />,
      delay: 0.4
    },
    {
      number: '95%',
      label: 'RAG ACCURACY',
      sub: 'Semantic Retrieval',
      icon: <Layers size={20} className="text-brand-accent" />,
      delay: 0.5
    },
    {
      number: '45%',
      label: 'MATCHING SPEED',
      sub: 'Onboarding Reduction',
      icon: <BookOpen size={20} className="text-emerald-500" />,
      delay: 0.6
    }
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-between bg-transparent text-text pt-36 pb-20 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Dynamic Background Blur Orbs (Dark Mode Only) */}
      <motion.div
        style={{ x: bgTranslateX, y: bgTranslateY }}
        className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-brand-primary/5 rounded-full glow-orb hidden dark:block"
      />
      <motion.div
        style={{ x: bgTranslateX, y: bgTranslateY }}
        className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] bg-brand-accent/5 rounded-full glow-orb hidden dark:block"
      />

      <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col justify-center items-center text-center relative z-10 py-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center max-w-5xl"
        >
          {/* Badge indicator */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full mb-8 shadow-sm"
          >
            <Sparkles size={13} className="text-brand-primary animate-pulse" />
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-text-muted uppercase">
              AI Engineer Intern @ Cloud Destinations
            </span>
          </motion.div>

          {/* Title with Parallax Floating Pills */}
          <div className="relative mb-8">
            {/* Left Pill */}
            <motion.div
              style={{ x: pillTranslateX, y: pillTranslateY }}
              initial={{ opacity: 0, x: -30, rotate: -6 }}
              animate={{ opacity: 1, rotate: -6 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -top-12 -left-12 md:-left-24 bg-brand-primary border border-brand-primary/20 text-white text-[10px] font-mono tracking-widest py-1.5 px-4 rounded-full flex items-center gap-2 shadow-lg"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
              <span>AGENTIC_AI</span>
            </motion.div>

            {/* Right Pill */}
            <motion.div
              style={{ x: pillTranslateX, y: pillTranslateY }}
              initial={{ opacity: 0, x: 30, rotate: 6 }}
              animate={{ opacity: 1, rotate: 6 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute -bottom-6 -right-12 md:-right-20 bg-card border border-border text-brand-accent text-[10px] font-mono tracking-widest py-1.5 px-4 rounded-full flex items-center gap-2 shadow-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
              <span>STATEFUL_NODES</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-heading tracking-tighter leading-[0.9] text-gradient-purple uppercase"
            >
              ELSON BENANZAL A
            </motion.h1>
          </div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-text-muted max-w-2xl leading-relaxed mb-12 font-sans px-4"
          >
            I architect stateful agent networks, fine-tune neural model pipelines, and build production-ready machine learning infrastructures.
          </motion.p>

          {/* Action triggers */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center justify-center relative z-20">
            <a
              href="#playground"
              onClick={(e) => handleScrollTo(e, 'playground')}
              className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-bg bg-text hover:opacity-90 px-8 py-5 rounded-full transition-all duration-300 shadow-xl group cursor-pointer"
            >
              <span>Explore Ecosystem</span>
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-text border border-border bg-card/40 hover:bg-card px-8 py-5 rounded-full transition-all duration-300 shadow-lg cursor-pointer"
            >
              <span>Let's Connect</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="flex flex-col items-center justify-center mb-8 relative z-10">
        <a
          href="#about"
          onClick={(e) => handleScrollTo(e, 'about')}
          className="text-text-muted hover:text-text flex flex-col items-center gap-2 text-[10px] font-mono tracking-widest uppercase transition-colors"
        >
          <span>Scroll Down</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown size={14} className="text-brand-primary" />
          </motion.div>
        </a>
      </div>

      {/* Metrics container with glassmorphic spotlights */}
      <div className="max-w-7xl mx-auto w-full relative z-20 pb-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: m.delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onMouseMove={handleSpotlightMouseMove}
              onMouseLeave={handleSpotlightMouseLeave}
              className="spotlight-card glass-card rounded-2xl p-5 md:p-6 text-left flex flex-col justify-between h-36 md:h-40 shadow-sm transition-all duration-300 group cursor-default"
            >
              <div className="flex justify-between items-start relative z-10">
                <span className="text-3xl md:text-4xl font-black font-heading text-text tracking-tight leading-none group-hover:text-brand-primary transition-colors">
                  {m.number}
                </span>
                <div className="p-2.5 bg-bg/85 border border-border rounded-xl group-hover:border-brand-primary/30 transition-all duration-300">
                  {m.icon}
                </div>
              </div>

              <div className="flex flex-col relative z-10">
                <span className="text-[10px] font-bold tracking-widest text-text font-heading">
                  {m.label}
                </span>
                <span className="text-[10px] font-medium text-text-muted mt-1 font-sans">
                  {m.sub}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
