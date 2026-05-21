"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeVariants = {
  hidden: { opacity: 0, y: 35, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    y: -35,
    filter: "blur(12px)",
    transition: { duration: 0.4, ease: "easeIn" as const },
  },
};

export default function Overlay() {
  // 0 = blank gap between sections, 1/2/3 = active section
  const [section, setSection] = useState<0 | 1 | 2 | 3>(1);
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handler = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const p = maxScroll > 0 ? window.scrollY / maxScroll : 0;

      // Scroll indicator hides quickly
      setShowScroll(p < 0.05);

      // Hard boundaries — only ONE section is ever active at a time
      // Gap zones between sections ensure zero overlap
      if (p < 0.12) {
        setSection(1);
      } else if (p < 0.22) {
        setSection(0); // gap: nothing shown
      } else if (p < 0.47) {
        setSection(2);
      } else if (p < 0.55) {
        setSection(0); // gap
      } else if (p < 0.82) {
        setSection(3);
      } else {
        setSection(0);
      }
    };

    window.addEventListener("scroll", handler, { passive: true });
    handler(); // run once on mount so section 1 is correct immediately
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 select-none">
      {/* Text column — always left-aligned, never over the face */}
      <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-20 lg:px-28">

        {/* AnimatePresence ensures only ONE section exists in the DOM at a time */}
        <AnimatePresence mode="wait">

          {section === 1 && (
            <motion.div
              key="s1"
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="max-w-[40%] min-w-[280px]"
            >
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-xs text-primary font-mono tracking-widest uppercase mb-6 shadow-[0_0_18px_rgba(255,85,0,0.12)]">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_6px_rgba(255,85,0,0.9)] animate-pulse" />
                AI Engineer &bull; Machine Learning &bull; Agentic Systems
              </div>

              {/* Name */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white leading-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
                Prateek{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Goswami
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base md:text-xl mt-5 text-neutral-400 font-light tracking-wide max-w-sm">
                Building Intelligent Systems,<br />
                LLM Applications &amp; AI Agents
              </p>

              {/* Credibility line */}
              <p className="text-xs md:text-sm mt-4 font-mono text-neutral-500 tracking-wide">
                B.Tech CSE (AI) &nbsp;&bull;&nbsp; 9.09 CGPA &nbsp;&bull;&nbsp; IIT Gandhinagar &amp; IIT Jammu Exchange Scholar
              </p>

              {/* Orange divider */}
              <div className="w-16 h-[3px] bg-gradient-to-r from-primary to-accent mt-7 rounded-full shadow-[0_0_12px_rgba(255,85,0,0.6)]" />
            </motion.div>
          )}

          {section === 2 && (
            <motion.div
              key="s2"
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="max-w-[40%] min-w-[280px]"
            >
              <div className="text-primary font-mono text-xs tracking-widest uppercase mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(255,85,0,0.9)]" />
                Core Mission
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight drop-shadow-2xl">
                I build{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  AI agents,
                </span>
                <br />
                ML pipelines,
                <br />
                <span className="text-neutral-300">and production-ready tools.</span>
              </h2>
              <div className="w-20 h-[3px] bg-gradient-to-r from-primary to-accent mt-8 rounded-full shadow-[0_0_12px_rgba(255,85,0,0.5)]" />
            </motion.div>
          )}

          {section === 3 && (
            <motion.div
              key="s3"
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="max-w-[40%] min-w-[280px]"
            >
              <div className="text-primary font-mono text-xs tracking-widest uppercase mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(255,85,0,0.9)]" />
                Engineering Edge
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight drop-shadow-2xl">
                Turning{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  AI research
                </span>
                <br />
                into scalable
                <br />
                <span className="text-neutral-300">products.</span>
              </h2>
              <div className="w-20 h-[3px] bg-gradient-to-r from-primary to-accent mt-8 rounded-full shadow-[0_0_12px_rgba(255,85,0,0.5)]" />
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Scroll indicator — independent, fades on its own */}
      <AnimatePresence>
        {showScroll && (
          <motion.div
            key="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            className="absolute bottom-10 left-8 md:left-20 lg:left-28 flex flex-col items-start gap-2"
          >
            <span className="text-neutral-500 text-xs font-mono tracking-widest uppercase">
              Scroll to explore
            </span>
            <div className="w-6 h-10 rounded-full border-2 border-neutral-600/60 flex justify-center p-1.5">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 bg-primary rounded-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
