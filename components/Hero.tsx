import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { Figma, Smartphone, Globe, ChevronDown } from 'lucide-react';
import myProfilePhoto from '../image.JPG';

// Custom Linux Outline Icon to match Lucide style
const LinuxIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 2c-2.5 0-4.5 2-4.5 4.5 0 1.2.5 2.3 1.3 3.1C7.6 10.5 7 12.2 7 14c0 3.3 2.2 6 5 6s5-2.7 5-6c0-1.8-.6-3.5-1.8-4.4.8-.8 1.3-1.9 1.3-3.1 0-2.5-2-4.5-4.5-4.5z" />
    <path d="M10 19c-1.5.5-3 1-4.5 1-1.5 0-2.5-.5-2.5-1.5S4.5 17 6 17c1 0 2 .5 3 1" />
    <path d="M14 19c1.5.5 3 1 4.5 1 1.5 0 2.5-.5 2.5-1.5s-1.5-1.5-3-1.5c-1 0-2 .5-3 1" />
    <path d="M9 7h.01" />
    <path d="M15 7h.01" />
    <path d="M11 9s.5.5 1 .5 1-.5 1-.5" />
  </svg>
);

const FloatingBadge = ({ icon: Icon, label, delay, positionClasses, className, isLinux }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: 1,
      scale: 1,
      y: [0, -10, 0],
    }}
    transition={{
      opacity: { duration: 0.5, delay },
      scale: { duration: 0.5, delay },
      y: { repeat: Infinity, duration: 3 + Math.random() * 2, ease: "easeInOut", delay: delay }
    }}
    className={`absolute flex items-center gap-2 px-3 py-1.5 md:px-5 md:py-2.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 md:bg-white/30 md:dark:bg-slate-900/30 backdrop-blur-none md:backdrop-blur-xl border border-white/30 dark:border-slate-700/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] z-30 transition-colors hover:bg-white/50 dark:hover:bg-slate-800/50 cursor-default ${className} ${positionClasses}`}
  >
    <div className="flex items-center justify-center shrink-0">
      {isLinux ? (
        <LinuxIcon className="w-4 h-4 md:w-5 md:h-5 text-primary-500" />
      ) : (
        <Icon size={16} className="md:w-5 md:h-5 text-primary-500" />
      )}
    </div>
    <span className="font-bold text-xs md:text-sm whitespace-nowrap tracking-tight text-slate-800 dark:text-slate-100">{label}</span>
  </motion.div>
);

const Hero = () => {
  const { scrollY } = useScroll();

  const xText = useTransform(scrollY, [0, 500], [0, -400]);
  const xImage = useTransform(scrollY, [0, 500], [0, 400]);
  const opacityText = useTransform(scrollY, [0, 350], [1, 0]);

  const handleStartExploring = (e: React.MouseEvent) => {
    e.preventDefault();
    const heroHeight = window.innerHeight;
    window.scrollTo({
      top: heroHeight,
      behavior: 'smooth'
    });
  };

  // URL of the provided photo (Assuming the environment uses the uploaded file)
  const PROFILE_PHOTO = myProfilePhoto; // You can replace this with your actual hosted link

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-[#050810]">

      <div className="absolute inset-0 bg-dots opacity-[0.4] dark:opacity-[0.15] pointer-events-none" />

      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -80, 40, 0],
          scale: [1, 1.2, 0.9, 1],
          opacity: [0.1, 0.2, 0.15, 0.1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-500 rounded-full blur-[80px] md:blur-[140px] pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 100, -50, 0],
          scale: [1, 1.1, 1.2, 1],
          opacity: [0.05, 0.15, 0.1, 0.05]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-purple-500 rounded-full blur-[80px] md:blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 py-20 lg:py-0">

        <motion.div
          style={{ x: xText, opacity: opacityText }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-[10px] font-black tracking-[0.2em] text-primary-600 dark:text-primary-400 uppercase bg-primary-500/10 rounded-full border border-primary-500/20 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Available for New Opportunities
          </motion.div>

          <h1 className="text-6xl md:text-8xl lg:text-[100px] font-black tracking-tighter mb-8 text-slate-900 dark:text-white leading-[0.85]">
            GLORIAN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-primary-400 to-purple-500">
              HILARIUS
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
            Bridging the gap between <span className="text-slate-900 dark:text-slate-100 font-bold underline decoration-primary-500/30 decoration-4">robust engineering</span> and <span className="text-slate-900 dark:text-slate-100 font-bold underline decoration-purple-500/30 decoration-4">intuitive UI/UX design</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
            <button
              onClick={handleStartExploring}
              className="group relative px-12 py-5 rounded-2xl bg-slate-900 dark:bg-primary-600 text-white font-black transition-all shadow-2xl shadow-primary-500/20 hover:-translate-y-1 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10 font-bold">START EXPLORING</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <div className="flex items-center gap-4 text-slate-400 font-black text-xs tracking-widest uppercase">
              <span className="w-12 h-px bg-slate-300 dark:bg-slate-800"></span>
              SCROLL DOWN
            </div>
          </div>
        </motion.div>

        <motion.div
          style={{ x: xImage, opacity: opacityText }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center order-1 lg:order-2"
        >
          <div className="relative w-72 h-72 md:w-[480px] md:h-[480px] flex items-center justify-center">

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 -m-20 border-[1.5px] border-dashed border-primary-500/30 dark:border-primary-500/20 rounded-full pointer-events-none"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 -m-10 border-[1px] border-slate-300 dark:border-slate-800 rounded-full pointer-events-none"
            />

            <motion.div
              animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-primary-500/20 dark:bg-primary-500/10 rounded-[4rem] blur-2xl pointer-events-none"
            />

            {/* Avatar with Smart Cropping */}
            <div className="w-full h-full rounded-[4rem] overflow-hidden border-[12px] border-white dark:border-slate-800 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] relative z-20 bg-slate-100 dark:bg-slate-950">
              <img
                src={PROFILE_PHOTO}
                alt="Glorian Hilarius"
                className="w-full h-full object-cover object-[center_20%] transition-all duration-700 scale-[1.15]"
                onError={(e) => {
                  // Fallback to avatar from constants if URL is broken
                  (e.target as HTMLImageElement).src = PERSONAL_INFO.avatar;
                }}
              />
            </div>

            <FloatingBadge
              icon={Figma} label="UI/UX DESIGN" delay={0.2}
              positionClasses="-top-4 -left-16" className="bg-white/80 dark:bg-slate-900/80"
            />
            <FloatingBadge
              isLinux label="LINUX SYSTEM" delay={0.4}
              positionClasses="top-24 -right-24" className="bg-white/80 dark:bg-slate-900/80"
            />
            <FloatingBadge
              icon={Globe} label="WEB DEVELOPMENT" delay={0.6}
              positionClasses="bottom-20 -left-28" className="bg-white/80 dark:bg-slate-900/80"
            />
            <FloatingBadge
              icon={Smartphone} label="MOBILE" delay={0.8}
              positionClasses="-bottom-8 right-0" className="bg-white/80 dark:bg-slate-900/80"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary-500 z-30 pointer-events-none"
      >
        <ChevronDown size={32} strokeWidth={3} />
      </motion.div>
    </section>
  );
};

export default Hero;
