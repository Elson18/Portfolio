import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CursorSpotlight = () => {
  const [isMobile, setIsMobile] = useState(true);
  const [isOverDarkSection, setIsOverDarkSection] = useState(false);

  // Motion values to track actual raw mouse positions
  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);

  // Springs configuration to add a smooth lagging/easing follow effect
  const springConfig = { damping: 40, stiffness: 180, mass: 0.8 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect mobile touch support or narrow layout
    const checkDevice = () => {
      const mobile = 
        window.matchMedia('(max-width: 1024px)').matches || 
        ('ontouchstart' in window) || 
        (navigator.maxTouchPoints > 0);
      setIsMobile(mobile);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    if (isMobile) return;

    // Track mouse positioning and target containers
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Check if mouse is over a container with the class .dark-section
      const target = e.target;
      if (target && typeof target.closest === 'function') {
        const hasDarkParent = target.closest('.dark-section') !== null;
        setIsOverDarkSection(hasDarkParent);
      } else {
        setIsOverDarkSection(false);
      }
    };

    const handleMouseLeaveWindow = () => {
      setIsOverDarkSection(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
    };
  }, [isMobile, mouseX, mouseY]);

  // Disable completely on mobile touch screens
  if (isMobile) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* 
        Spotlight Glow:
        - Absolute position mapped to spring motion values.
        - Fades in/out smoothly depending on active `.dark-section` hover state.
        - Radial gradient matching the violet-to-cyan accent brand colors.
      */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, rgba(6,182,212,0.12) 50%, rgba(0,0,0,0) 100%)',
        }}
        animate={{
          opacity: isOverDarkSection ? 1 : 0,
          scale: isOverDarkSection ? 1 : 0.8,
        }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="absolute w-[400px] h-[400px] rounded-full blur-[100px] mix-blend-screen pointer-events-none"
      />

      {/* Tiny light core pointer */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isOverDarkSection ? 0.35 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute w-6 h-6 rounded-full border border-violet-500/25 bg-violet-50/5 pointer-events-none mix-blend-screen"
      />
    </div>
  );
};

export default CursorSpotlight;
