import { useEffect, useRef } from 'react';

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    const isDark = true;

    // Particle settings
    const particleCount = 35;
    const mouse = { x: null, y: null, radius: 150 };

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (isDark) initParticles();
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.25;
        this.vy = (Math.random() - 0.5) * 0.25;
        this.radius = Math.random() * 1.5 + 0.8;
        this.color = Math.random() > 0.5 
          ? 'rgba(99, 102, 241, 0.12)' // Indigo
          : 'rgba(6, 182, 212, 0.12)';  // Cyan
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

        // Interactive mouse push
        if (mouse.x !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x -= dx * force * 0.01;
            this.y -= dy * force * 0.01;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    // Slow moving background blobs
    let blobTime = 0;

    const drawBlobs = () => {
      if (!isDark) return;
      blobTime += 0.002;

      // Pulse and translate gradient center positions
      const x1 = canvas.width * 0.25 + Math.sin(blobTime) * 120;
      const y1 = canvas.height * 0.3 + Math.cos(blobTime * 0.8) * 80;
      const x2 = canvas.width * 0.75 + Math.cos(blobTime * 1.2) * 150;
      const y2 = canvas.height * 0.7 + Math.sin(blobTime * 0.9) * 100;

      // Blur blob 1 (Violet)
      const grad1 = ctx.createRadialGradient(x1, y1, 10, x1, y1, 350);
      grad1.addColorStop(0, 'rgba(124, 58, 237, 0.03)');
      grad1.addColorStop(1, 'rgba(124, 58, 237, 0)');
      ctx.fillStyle = grad1;
      ctx.beginPath();
      ctx.arc(x1, y1, 350, 0, Math.PI * 2);
      ctx.fill();

      // Blur blob 2 (Cyan)
      const grad2 = ctx.createRadialGradient(x2, y2, 10, x2, y2, 300);
      grad2.addColorStop(0, 'rgba(6, 182, 212, 0.02)');
      grad2.addColorStop(1, 'rgba(6, 182, 212, 0)');
      ctx.fillStyle = grad2;
      ctx.beginPath();
      ctx.arc(x2, y2, 300, 0, Math.PI * 2);
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw ambient orbs
      drawBlobs();

      // Draw active particles
      if (isDark) {
        particles.forEach(p => {
          p.update();
          p.draw();
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    handleResize();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {/* Background dot grid pattern */}
      <div className="absolute inset-0 bg-dot-grid-dark opacity-100 transition-opacity" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-80"
      />
    </div>
  );
};

export default Background;
