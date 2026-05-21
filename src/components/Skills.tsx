"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Database, Eye, Globe2, Terminal } from "lucide-react";
import CinematicReveal from "./CinematicReveal";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages & Web",
      icon: Code2,
      skills: ["Python", "C", "C++", "SQL", "JavaScript", "HTML", "CSS", "React"],
    },
    {
      title: "AI & Agentic Systems",
      icon: Terminal,
      skills: ["LLM APIs (Claude, OpenAI)", "AI Agent Frameworks", "Prompt Engineering", "Tool Use", "RAG Pipelines"],
    },
    {
      title: "ML / Deep Learning",
      icon: Cpu,
      skills: ["Scikit-learn", "TensorFlow", "PyTorch", "Keras", "HuggingFace Transformers", "PySpark ML", "MLflow"],
    },
    {
      title: "Computer Vision & NLP",
      icon: Eye,
      skills: ["OpenCV", "Mediapipe", "YOLOv5", "Object Detection", "Image Captioning", "VQA", "Sentiment Analysis"],
    },
    {
      title: "Data Science",
      icon: Database,
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Spark SQL", "EDA", "Model Evaluation"],
    },
    {
      title: "Tools & Ecosystem",
      icon: Globe2,
      skills: ["Databricks", "Docker", "GitHub", "Jupyter Notebook", "Google Colab", "Figma"],
    },
  ];

  return (
    <section id="skills" className="relative z-20 min-h-screen bg-[#080808] py-32 px-6 md:px-12 bg-grid-pattern overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] glow-accent pointer-events-none rounded-full blur-3xl opacity-15" />

      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <CinematicReveal className="text-center mb-20">
          <div className="text-primary font-mono text-xs tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(255,85,0,0.8)]" />
            My Arsenal
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Technical{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Proficiencies
            </span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
        </CinematicReveal>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="glass-card p-8 rounded-3xl relative overflow-hidden group cursor-pointer"
              >
                {/* Accent border highlight */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Title and Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="icon-box w-10 h-10">
                    <Icon className="w-5 h-5 text-[#ff8a3d]" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Badge list */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-badge"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
