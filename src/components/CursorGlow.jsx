import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CursorGlow = () => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.matchMedia('(max-width: 1024px)').matches || 
           ('ontouchstart' in window) || 
           (navigator.maxTouchPoints > 0);
  });

  // Mouse position motion values
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Smooth springs for tracking physics
  const springConfig = { damping: 45, stiffness: 220, mass: 0.6 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkDevice = () => {
      const mobile = window.matchMedia('(max-width: 1024px)').matches || 
                     ('ontouchstart' in window) || 
                     (navigator.maxTouchPoints > 0);
      setIsMobile(mobile);
    };

    window.addEventListener('resize', checkDevice);

    if (isMobile) return;

    const handleMouseMove = (e) => {
      window.requestAnimationFrame(() => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile, mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Primary Violet radial glow */}
      <motion.div
        style={{
          x: glowX,
          y: glowY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="absolute w-[450px] h-[450px] rounded-full bg-violet-600/9 blur-[110px] mix-blend-screen"
      />
      {/* Secondary Cyan center core glow */}
      <motion.div
        style={{
          x: glowX,
          y: glowY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="absolute w-[200px] h-[200px] rounded-full bg-cyan-500/6 blur-[60px] mix-blend-screen"
      />
      {/* Small subtle cursor pointer ring */}
      <motion.div
        style={{
          x: glowX,
          y: glowY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="absolute w-5 h-5 rounded-full border border-violet-500/30 bg-violet-50/5 mix-blend-screen"
      />
    </div>
  );
};

export default CursorGlow;
