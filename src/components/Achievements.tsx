"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Medal, Star, Trophy, Users } from "lucide-react";
import CinematicReveal from "./CinematicReveal";

export default function Achievements() {
  const honors = [
    {
      title: "Organising Head, HackJKLU 2026",
      organization: "JK Lakshmipat University",
      period: "2026",
      icon: Trophy,
      badge: "National Hackathon",
      bullets: [
        "Led operations for a national-level hackathon hosting 400+ participants, coordinating 200+ volunteers, sponsors, mentors, judges, logistics, and venue management.",
        "Oversaw sponsor outreach, participant onboarding, and real-time problem resolution across all hackathon tracks to deliver a seamless event experience."
      ]
    },
    {
      title: "Teaching Assistant - C Programming",
      organization: "JK Lakshmipat University",
      period: "2025",
      icon: Users,
      badge: "Academic Mentorship",
      bullets: [
        "Selected based on academic performance and programming expertise to support 60+ students.",
        "Conducted structured doubt sessions, graded code assignments, and taught debugging/core C topics."
      ]
    },
    {
      title: "Dean’s Honour List Recipient",
      organization: "JK Lakshmipat University",
      period: "Consecutive Semesters",
      icon: Medal,
      badge: "Academic Excellence",
      bullets: [
        "Recognised for outstanding academic performance across consecutive semesters.",
        "Maintained top-tier marks with a consistent focus on computational fundamentals and applied AI."
      ]
    }
  ];

  return (
    <section id="achievements" className="relative z-20 min-h-screen bg-[#080808] py-32 px-6 md:px-12 bg-grid-pattern overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 glow-accent pointer-events-none rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-1/3 left-1/3 translate-y-1/2 w-[500px] h-[500px] glow-accent pointer-events-none rounded-full blur-3xl opacity-15" />

      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <CinematicReveal className="text-center mb-20">
          <div className="text-primary font-mono text-xs tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(255,85,0,0.8)]" />
            Milestones & Honors
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Key{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
        </CinematicReveal>

        {/* Honors Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {honors.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 rounded-3xl relative overflow-hidden group flex flex-col justify-between cursor-pointer"
              >
                {/* Accent Hover Line */}
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="skill-badge text-[10px] tracking-widest uppercase">
                      {item.badge}
                    </span>
                    <div className="icon-box w-10 h-10">
                      <Icon className="w-5 h-5 text-[#ff8a3d]" />
                    </div>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="text-xl font-extrabold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <div className="flex justify-between items-center text-xs font-mono text-neutral-400 mb-6">
                    <span>{item.organization}</span>
                    <span className="text-primary font-bold">{item.period}</span>
                  </div>

                  {/* Bullet highlights */}
                  <ul className="space-y-3">
                    {item.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="text-sm text-neutral-300 font-light leading-relaxed flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0 shadow-[0_0_5px_var(--primary)]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
