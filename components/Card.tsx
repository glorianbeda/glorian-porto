import React, { useRef, useLayoutEffect, useState } from 'react';
import { useTransform, motion, MotionValue } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  i: number;
  progress: MotionValue<number>;
  range: [number, number];
}

const Card: React.FC<CardProps> = ({
  children,
  title,
  description,
  i,
  progress,
  range
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [scrollableDistance, setScrollableDistance] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const start = range[0];
  const end = range[1];

  // --- TRANSFORMATION LOGIC ---

  // Z Position: Coming from depth (-1000) to viewport (0) and flying past (1000)
  const z = useTransform(
    progress,
    [start - 0.15, start, end, end + 0.15],
    [-1200, 0, 0, 1500]
  );

  // Opacity: Sharp entry/exit to avoid overlapping cards looking messy
  const opacity = useTransform(
    progress,
    [start - 0.1, start, end, end + 0.1],
    [0, 1, 1, 0]
  );

  // Scale: Visual amplification of the fly-past effect
  const scale = useTransform(
    progress,
    [start - 0.15, start, end, end + 0.15],
    [0.5, 1, 1, 2]
  );

  // Rotate: Dynamic tilting
  const rotateX = useTransform(
    progress,
    [start - 0.15, start, end, end + 0.15],
    [30, 0, 0, -30]
  );

  // Internal Scrolling: Only active when card is at Z=0
  const contentY = useTransform(
    progress,
    [start + 0.02, end - 0.02],
    [0, -scrollableDistance]
  );

  // Dynamic Background Light
  const shadowOpacity = useTransform(progress, [start, end], [0.3, 0.5]);

  useLayoutEffect(() => {
    const calculateScroll = () => {
      if (contentRef.current && viewportRef.current) {
        const contentHeight = contentRef.current.offsetHeight;
        const viewportHeight = viewportRef.current.clientHeight;
        const computedStyle = window.getComputedStyle(viewportRef.current);
        const paddingTop = parseFloat(computedStyle.paddingTop) || 0;

        // visibleHeight is the available vertical space for content
        const visibleHeight = viewportHeight - paddingTop;

        let distance = contentHeight > visibleHeight ? contentHeight - visibleHeight : 0;
        if (distance > 0) distance += 100; // Add breathing room
        setScrollableDistance(distance);
      }
    };
    calculateScroll();

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();

    window.addEventListener('resize', calculateScroll);
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', calculateScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, [children]);

  // Dynamic pointer events based on progress
  const pointerEventsTransform = useTransform(progress, p => (p >= start && p <= end ? 'auto' : 'none'));

  return (
    <motion.div

      style={{
        z: z,
        opacity: opacity,
        scale: scale,
        rotateX: rotateX,
        zIndex: i + 10,
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
        pointerEvents: pointerEventsTransform,
      }}
      className="absolute inset-0 w-full h-auto flex items-center justify-center p-4 md:p-12 will-change-transform"
    >
      <div className="relative w-full max-w-5xl h-full md:h-[75vh] bg-white/95 dark:bg-slate-900/95 backdrop-blur-none rounded-[2rem] md:rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">

        {/* Glowing Edge */}
        <div className="absolute inset-0 rounded-[2rem] md:rounded-[3rem] border border-white/20 dark:border-primary-500/20 pointer-events-none z-40" />

        {/* Header Section - Adjusted padding for mobile */}
        <div className="absolute top-0 left-0 w-full px-6 md:px-10 py-6 md:py-8 flex justify-between items-center z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-none border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
            <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center text-white font-black text-lg md:text-xl shadow-lg shadow-primary-500/20">
              {i + 1}
            </div>
            <div className="min-w-0">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tight truncate">{title}</h2>
              <p className="text-[8px] md:text-[10px] uppercase tracking-[0.15em] md:tracking-[0.2em] text-primary-500 font-bold truncate">{description}</p>
            </div>
          </div>

          <div className="flex flex-col items-end shrink-0 ml-4">
            <div className="text-[7px] md:text-[10px] font-black text-slate-400 mb-1">PROG.</div>
            <div className="w-16 md:w-32 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary-500"
                style={{ scaleX: useTransform(progress, [start, end], [0, 1]), transformOrigin: 'left' }}
              />
            </div>
          </div>
        </div>

        {/* Content Portal */}
        <div ref={viewportRef} className="h-full pt-24 md:pt-28 overflow-hidden relative">
          <motion.div
            style={{ y: contentY }}
            className="px-6 md:px-16 pb-64"
          >
            <div ref={contentRef} className="will-change-transform">
              {children}
            </div>
          </motion.div>

          {/* Bottom Mask */}
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white dark:from-slate-900 to-transparent z-10 pointer-events-none" />
        </div>
      </div>

      {/* Background shadow for depth */}
      <motion.div
        style={{ opacity: shadowOpacity }}
        className="absolute -inset-10 bg-black/40 blur-[60px] -z-10 rounded-full scale-75"
      />
    </motion.div>
  );
};

export default Card;