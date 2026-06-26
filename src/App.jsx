import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <html lang="en" />
        <title>Elson Benanzal A. | AI Engineer & Agentic AI Developer</title>
        <meta name="description" content="Elson Benanzal A. is an AI/ML Engineer specializing in agentic systems, LangGraph, LLM pipelines, RAG, and computer vision. Explore portfolio and case studies." />
        <link rel="canonical" href="https://elson.in/" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Elson Benanzal A." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://elson.in/" />
        <meta property="og:title" content="Elson Benanzal A. | AI Engineer & Agentic AI Developer" />
        <meta property="og:description" content="Elson Benanzal A. is an AI/ML Engineer specializing in agentic systems, LangGraph, LLM pipelines, RAG, and computer vision. Explore portfolio and case studies." />
        <meta property="og:image" content="https://elson.in/assets/og-image.png" />
        <meta property="og:site_name" content="Elson Benanzal A. Portfolio" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://elson.in/" />
        <meta property="twitter:title" content="Elson Benanzal A. | AI Engineer & Agentic AI Developer" />
        <meta property="twitter:description" content="Elson Benanzal A. is an AI/ML Engineer specializing in agentic systems, LangGraph, LLM pipelines, RAG, and computer vision. Explore portfolio and case studies." />
        <meta property="twitter:image" content="https://elson.in/assets/og-image.png" />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "name": "Elson Benanzal A.",
                "alternateName": ["Elson", "Elson Benanzal"],
                "url": "https://elson.in",
                "image": "https://elson.in/assets/og-image.png",
                "jobTitle": "AI Engineer Intern",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Cloud Destinations"
                },
                "alumniOf": {
                  "@type": "CollegeOrUniversity",
                  "name": "KIT-Kalaignarkarunanidhi Institute of Technology"
                },
                "sameAs": [
                  "https://www.linkedin.com/in/elson-benanzal-7451b129a",
                  "https://github.com/Elson18",
                  "https://leetcode.com/Elson18/",
                  "https://codechef.com/users/elson18",
                  "https://x.com/elson_aa"
                ],
                "knowsAbout": [
                  "Artificial Intelligence",
                  "Agentic AI",
                  "LangGraph",
                  "Large Language Models",
                  "Retrieval-Augmented Generation",
                  "Computer Vision",
                  "Machine Learning",
                  "Deep Learning",
                  "FastAPI",
                  "Python"
                ]
              },
              {
                "@type": "WebSite",
                "name": "Elson Benanzal A. Portfolio",
                "url": "https://elson.in"
              }
            ]
          })}
        </script>
      </Helmet>
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
