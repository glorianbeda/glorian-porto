import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import About from './components/About';
import Card from './components/Card';
import { PERSONAL_INFO } from './constants';
import { Mail, MapPin } from 'lucide-react';
import { useScroll, useSpring, motion, useTransform } from 'framer-motion';

const Footer = () => (
  <footer className="bg-slate-900 text-slate-300 py-16 md:py-24 px-6 relative z-50">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-8">
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold text-white mb-4">{PERSONAL_INFO.name}</h2>
        <p className="max-w-md text-slate-400 mb-8 text-lg leading-relaxed">{PERSONAL_INFO.summary}</p>
        <div className="flex flex-col gap-4 items-center md:items-start">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="p-2 bg-primary-500/10 rounded-full group-hover:bg-primary-500/20 transition-colors">
              <Mail size={18} className="text-primary-500" />
            </div>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-base md:text-lg hover:text-white transition-colors">{PERSONAL_INFO.email}</a>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary-500/10 rounded-full">
              <MapPin size={18} className="text-primary-500" />
            </div>
            <span className="text-base md:text-lg">{PERSONAL_INFO.location}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center md:items-end w-full md:w-auto">
        <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest text-primary-500">Menu</h3>
        <ul className="flex flex-col gap-4 text-center md:text-right">
          <li><a href="#about" className="text-lg font-medium hover:text-primary-400 transition-colors">About</a></li>
          <li><a href="#skills" className="text-lg font-medium hover:text-primary-400 transition-colors">Skills</a></li>
          <li><a href="#experience" className="text-lg font-medium hover:text-primary-400 transition-colors">Experience</a></li>
          <li><a href="#projects" className="text-lg font-medium hover:text-primary-400 transition-colors">Projects</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
      © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
    </div>
  </footer>
);

function App() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 70,
    damping: 25
  });

  // Background Tunnel Effect
  const tunnelScale = useTransform(smoothProgress, [0, 1], [1, 2.5]);
  const tunnelOpacity = useTransform(smoothProgress, [0, 0.05, 0.95, 1], [0, 0.4, 0.4, 0]);

  return (
    <div className="bg-slate-50 dark:bg-[#050810] text-slate-900 dark:text-white transition-colors duration-300 selection:bg-primary-500/30">
      <Navbar />

      <main className="relative">
        <section className="relative z-30">
          <Hero />
        </section>

        {/* 3D Content Section */}
        <div ref={container} className="relative h-[700vh] z-20">
          <motion.div
            style={{ scale: tunnelScale, opacity: tunnelOpacity }}
            className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden will-change-transform transform-gpu"
          >
            <div className="w-[200vw] h-[200vh] border-[20px] md:border-[40px] border-primary-500/5 dark:border-primary-500/10 rounded-full blur-xl" />
            <div className="absolute w-[150vw] h-[150vh] border-[10px] md:border-[20px] border-purple-500/5 dark:border-purple-500/10 rounded-full blur-lg" />
            <div className="absolute inset-0 bg-dots opacity-20" />
          </motion.div>

          <div className="sticky top-16 h-[calc(100vh-4rem)] w-full flex items-center justify-center perspective-[2000px] overflow-hidden">

            <Card
              i={0}
              title="About Me"
              description="The Human behind the code"
              progress={smoothProgress}
              range={[0, 0.08]}
            >
              <About />
            </Card>

            <Card
              i={1}
              title="Technical Skills"
              description="My Development Stack"
              progress={smoothProgress}
              range={[0.15, 0.4]}
            >
              <Skills />
            </Card>

            <Card
              i={2}
              title="Experience"
              description="Professional Journey"
              progress={smoothProgress}
              range={[0.45, 0.7]}
            >
              <Experience />
            </Card>

            <Card
              i={3}
              title="Featured Projects"
              description="Crafted with Passion"
              progress={smoothProgress}
              range={[0.75, 0.95]}
            >
              <Projects />
            </Card>

          </div>
        </div>
      </main>

      <div className="relative z-40 bg-slate-900">
        <Footer />
      </div>
    </div>
  );
}

export default App;