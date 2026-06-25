import Navbar from './components/Navbar';
import CursorSpotlight from './components/CursorSpotlight';
import Background from './components/Background';

// Content Sections
import Hero from './components/Hero';
import About from './components/About';
import Chronology from './components/Chronology';
import SystemArchitecture from './components/SystemArchitecture';
import EngineeringPlayground from './components/EngineeringPlayground';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg text-text font-sans selection:bg-brand-primary/20 selection:text-brand-accent transition-colors duration-300 relative">
      {/* Permanent background canvas supporting particles/blurs under dark sections */}
      <Background />

      {/* Lag-eased cursor spotlight that activates dynamically on dark section hovers */}
      <CursorSpotlight />

      {/* Static header containing nav targets */}
      <Navbar />

      {/* Main Page Layout */}
      <main className="relative z-10">
        
        {/* HERO (Dark Theme) */}
        <div className="dark-section">
          <Hero />
        </div>

        {/* Transition: Dark to Light */}
        <div className="h-24 bg-gradient-to-b from-[#080b16] to-[#ffffff] relative z-10" />

        {/* ABOUT ME (Light Theme) */}
        <div className="light-section">
          <About />
        </div>

        {/* CHRONOLOGY TIMELINE (Light Theme) */}
        <div className="light-section">
          <Chronology />
        </div>

        {/* ACHIEVEMENTS (Light Theme) */}
        <div className="light-section">
          <Achievements />
        </div>

        {/* Transition: Light to Dark */}
        <div className="h-24 bg-gradient-to-b from-[#ffffff] to-[#080b16] relative z-10" />

        {/* INTERACTIVE SYSTEM ARCHITECTURE (Dark Theme) */}
        <div className="dark-section">
          <SystemArchitecture />
        </div>

        {/* ECOSYSTEM PLAYGROUND (Dark Theme) */}
        <div className="dark-section">
          <EngineeringPlayground />
        </div>

        {/* FEATURED PROJECTS (Dark Theme) */}
        <div className="dark-section">
          <Projects />
        </div>

        {/* TECHNICAL ARSENAL (Dark Theme) */}
        <div className="dark-section">
          <Skills />
        </div>

        {/* Transition: Dark to Light */}
        <div className="h-24 bg-gradient-to-b from-[#080b16] to-[#ffffff] relative z-10" />

        {/* CONTACT SECTION (Light Theme) */}
        <div className="light-section">
          <Contact />
        </div>

      </main>

      {/* FOOTER (Light Theme) */}
      <div className="light-section">
        <Footer />
      </div>
    </div>
  );
}

export default App;
