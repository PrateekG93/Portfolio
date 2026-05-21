"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap, MapPin } from "lucide-react";
import CinematicReveal from "./CinematicReveal";

export default function Education() {
  const educationPath = [
    {
      institution: "JK Lakshmipat University",
      location: "Jaipur, Rajasthan",
      degree: "B.Tech in Computer Science & Artificial Intelligence",
      period: "2023 – Present",
      badge: "Host University",
      badgeStyle: "bg-primary/10 border-primary/20 text-primary",
      highlight: "CGPA: 9.09 / 10",
      courses: ["Data Structures & Algorithms", "Foundations of Machine Learning", "Database Management Systems", "Object-Oriented Programming"],
    },
    {
      institution: "IIT Gandhinagar",
      location: "Gandhinagar, Gujarat",
      degree: "Selected for Academic Exchange Program",
      period: "Jul 2024 – Dec 2024",
      badge: "Exchange Program",
      badgeStyle: "bg-orange-500/10 border-orange-500/20 text-accent",
      highlight: "Selected by Academic Merit",
      courses: ["Computer Networks & Security", "Foundations of AI", "Applied Optimization"],
    },
    {
      institution: "IIT Jammu",
      location: "Jammu, Jammu & Kashmir",
      degree: "Selected for Academic Exchange Program",
      period: "Jul 2025 – Dec 2025",
      badge: "Exchange Program",
      badgeStyle: "bg-orange-500/10 border-orange-500/20 text-accent",
      highlight: "Selected by Academic Merit",
      courses: ["Deep Learning", "Computer Vision", "Artificial Intelligence", "Advanced DBMS"],
    },
  ];

  return (
    <section id="education" className="relative z-20 min-h-screen bg-[#080808] py-32 px-6 md:px-12 bg-orange-grid-pattern overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 glow-accent pointer-events-none rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 glow-accent pointer-events-none rounded-full blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <CinematicReveal className="text-center mb-20">
          <div className="text-primary font-mono text-xs tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(255,85,0,0.8)]" />
            My Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Education &{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Academic Paths
            </span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
        </CinematicReveal>

        {/* Pathway Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {educationPath.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="glass-card rounded-3xl p-8 flex flex-col justify-between group relative cursor-pointer"
            >
              {/* Top orange gradient bar */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="skill-badge text-[10px] tracking-widest uppercase">
                    {edu.badge}
                  </span>
                  <div className="icon-box w-10 h-10">
                    <GraduationCap className="w-5 h-5 text-[#ff8a3d]" />
                  </div>
                </div>

                {/* Degree and Institution */}
                <h3 className="text-2xl font-extrabold text-white tracking-tight mb-2 group-hover:text-primary transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-lg font-medium text-neutral-300 mb-4 flex items-center gap-2">
                  {edu.institution}
                </p>

                {/* Location & Period */}
                <div className="flex flex-wrap gap-4 text-xs font-mono text-neutral-400 mb-6">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    {edu.location}
                  </span>
                  <span>|</span>
                  <span>{edu.period}</span>
                </div>

                {/* Highlight box */}
                <div
                  className="p-4 rounded-2xl mb-6 flex items-center gap-3"
                  style={{
                    background: "radial-gradient(ellipse 80% 80% at 100% 100%, rgba(255,106,26,0.12) 0%, transparent 65%), linear-gradient(135deg, rgba(9,11,18,0.9) 0%, rgba(11,15,24,0.75) 100%)",
                    boxShadow: "-2px -2px 10px 0 rgba(7,26,46,0.4), 2px 2px 14px 0 rgba(255,106,26,0.14), inset 0 0 0 1.5px rgba(255,138,61,0.28), inset 0 1px 0 rgba(255,200,140,0.12)"
                  }}
                >
                  <Award className="w-5 h-5 text-[#ff8a3d] shrink-0" />
                  <span className="text-sm font-mono font-bold text-white">
                    {edu.highlight}
                  </span>
                </div>

                {/* Selected Coursework */}
                <div className="space-y-3 pt-4 border-t border-white/5">
                  <span className="text-xs font-mono tracking-wider text-neutral-400 uppercase flex items-center gap-1.5 mb-3">
                    <BookOpen className="w-3.5 h-3.5 text-primary" />
                    Coursework Focus:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.courses.map((course) => (
                      <span
                        key={course}
                        className="skill-badge"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
