"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2, MapPin } from "lucide-react";
import CinematicReveal from "./CinematicReveal";

export default function Experience() {
  const experiences = [
    {
      company: "Patidar Agriculture",
      industry: "AgriTech — Agricultural Machinery",
      role: "AI / ML Engineer Intern",
      period: "Jun 2024 – Jul 2024",
      location: "Remote",
      tags: ["AI Agents", "Computer Vision", "Full-Lifecycle ML", "Conversational AI"],
      bullets: [
        "Built and deployed an AI-powered chatbot for the company website to handle product queries, machinery recommendations, and customer support — integrating an LLM backend with a conversational interface.",
        "Developed computer vision models for disease detection using image processing and predictive models for data-driven decision support using Python, OpenCV, and Scikit-learn.",
        "Worked across the full ML lifecycle — data collection, preprocessing, model training, evaluation, and deployment — delivering end-to-end solutions for a production website used by real customers.",
      ],
      tech: ["Python", "OpenCV", "Scikit-learn", "LLM APIs", "Image Processing"],
    },
  ];

  return (
    <section id="experience" className="relative z-20 min-h-screen bg-[#080808] py-32 px-6 md:px-12 bg-orange-grid-pattern overflow-hidden">
      {/* Background glow shadow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] glow-accent pointer-events-none rounded-full blur-3xl opacity-20" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Title */}
        <CinematicReveal className="text-center mb-20">
          <div className="text-primary font-mono text-xs tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(255,85,0,0.8)]" />
            My Career Path
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Professional{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
        </CinematicReveal>

        {/* Timeline Container */}
        <div className="relative pl-6 md:pl-10 border-l border-primary/20 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative"
            >
              {/* Glowing timeline node */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#080808] border-2 border-primary flex items-center justify-center shadow-[0_0_10px_rgba(255,85,0,0.6)]">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full animate-ping" />
              </div>

              {/* Main Card */}
              <div className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden group">
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none group-hover:bg-primary/10 transition-colors duration-500" />

                {/* Meta details */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                  <div>
                    <span className="skill-badge text-[10px] tracking-widest uppercase mb-3 inline-flex">
                      {exp.industry}
                    </span>
                    <h3 className="text-3xl font-extrabold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-lg font-medium text-neutral-300 mt-1 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-primary" />
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row md:flex-col gap-2 items-start md:items-end text-neutral-400 font-mono text-xs">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <div className="space-y-4 mb-8">
                  {exp.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <p className="text-neutral-300 font-light leading-relaxed">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="pt-6 border-t border-white/5 flex flex-wrap gap-2.5 items-center">
                  <span className="text-neutral-400 text-xs font-mono tracking-widest uppercase mr-2">
                    Core Stack:
                  </span>
                  {exp.tech.map((t) => (
                    <span key={t} className="skill-badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
