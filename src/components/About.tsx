"use client";

import { motion } from "framer-motion";
import { Award, Brain, Code, Cpu } from "lucide-react";
import CinematicReveal from "./CinematicReveal";

export default function About() {
  const stats = [
    {
      label: "B.Tech CGPA",
      value: "9.09 / 10",
      icon: Award,
      desc: "Top Academic Performance",
    },
    {
      label: "AI Projects",
      value: "7+",
      icon: Brain,
      desc: "End-to-end ML & CV Systems",
    },
    {
      label: "IIT Exchange Programs",
      value: "2",
      icon: Cpu,
      desc: "IIT Gandhinagar & IIT Jammu",
    },
    {
      label: "Key Proficiencies",
      value: "Python / AI Agents",
      icon: Code,
      desc: "Applied Tool Use & LLMs",
    },
  ];

  return (
    <section id="about" className="relative z-20 min-h-screen bg-[#080808] py-32 px-6 md:px-12 bg-grid-pattern overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 glow-accent pointer-events-none rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 glow-accent pointer-events-none rounded-full blur-3xl opacity-35" />

      <div className="max-w-7xl mx-auto relative z-10">
        <CinematicReveal className="text-center mb-20">
          <div className="text-primary font-mono text-xs tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(255,85,0,0.8)]" />
            Behind the Code
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Building AI Systems That <br />
            <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Solve Real Problems
            </span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
          
          <p className="mt-8 text-lg text-neutral-300 font-light leading-relaxed max-w-2xl mx-auto">
            Computer Science &amp; AI undergraduate specialising in Machine Learning, Computer Vision, LLM Applications, and Agentic AI Systems. I build production-oriented AI solutions — from intelligent chatbots and multimodal models to large-scale ML pipelines and autonomous AI agents.
          </p>
        </CinematicReveal>

        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Text/Intro Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-5/12"
          >
            <div className="space-y-6 text-neutral-300 text-lg leading-relaxed font-light">
              <p>
                I am a Computer Science &amp; AI undergraduate with hands-on experience building end-to-end ML pipelines,
                AI-powered tools, and multimodal systems across NLP, Computer Vision, and large-scale data engineering.
              </p>
              <p>
                My expertise spans Python, agentic AI workflows, prompt engineering, and deep learning across real-world datasets and production-grade tasks.
              </p>
              <p className="border-l-2 border-primary/40 pl-4 py-1 text-neutral-400 italic">
                Seeking opportunities in AI Engineering, Machine Learning, Agentic AI, and Applied Data Science.
              </p>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                My focus is not just training models, but deploying AI systems that interact with users, tools, and real-world workflows.
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="w-full md:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="glass-card p-8 rounded-3xl relative overflow-hidden group cursor-pointer"
                >
                  {/* Top edge gradient accent line */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,138,61,0.4)] to-transparent" />

                  {/* Icon */}
                  <div className="icon-box w-12 h-12 mb-6">
                    <Icon className="w-5 h-5 text-[#ff8a3d]" />
                  </div>

                  {/* Stat Value */}
                  <h3 className="text-3xl font-bold tracking-tight text-white mb-2">
                    {stat.value}
                  </h3>

                  {/* Label */}
                  <p className="text-sm font-semibold text-neutral-200 mb-1">
                    {stat.label}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {stat.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
