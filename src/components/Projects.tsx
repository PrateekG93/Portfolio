"use client";

import { motion } from "framer-motion";
import { Bot, Cpu, Database, Eye, Image as ImageIcon, MessageSquare, Music } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);
import CinematicReveal from "./CinematicReveal";

export default function Projects() {
  const projects = [
    {
      title: "AI Workflow Automation Agents",
      category: "Agentic AI & Productivity",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
      icon: Bot,
      tech: ["Python", "Claude API", "OpenAI API", "Tool Use", "Prompt Engineering"],
      description: "Designed and deployed AI agents leveraging Claude/OpenAI function-calling to automate multi-step enterprise workflows with CoT reasoning and few-shot strategies.",
      // ✏️  Paste the full GitHub URL for this project below:
      github: "",
      bullets: [
        "Built internal tooling integrating LLMs with external APIs and data sources using CoT and few-shot strategies.",
        "Developed agent evaluation loops to monitor output quality, detect hallucinations, and optimize prompt performance."
      ]
    },
    {
      title: "Real-Time Anti-Cheat Proctoring",
      category: "Computer Vision & Edge Inference",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000",
      icon: Eye,
      tech: ["Python", "YOLOv5", "Mediapipe", "TensorFlow", "OpenCV"],
      description: "A real-time multi-model inference system detecting gaze deviation, head pose, hand gestures, and unauthorized devices.",
      // ✏️  Paste the full GitHub URL for this project below:
      github: "https://github.com/PrateekG93/Anti-Cheating-System.git",
      bullets: [
        "Logged behavior events with timestamped alerts for fully automated exam monitoring constraints.",
        "Orchestrated multiple CV models in a highly efficient single pipeline showcasing applied agentic design."
      ]
    },
    {
      title: "Customer Churn Prediction Pipeline",
      category: "Data Science & Large-Scale Processing",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      icon: Database,
      tech: ["PySpark", "Databricks", "MLflow", "Scikit-learn", "Spark SQL"],
      description: "An end-to-end binary classification pipeline engineered to process large-scale customer records.",
      // ✏️  Paste the full GitHub URL for this project below:
      github: "",
      bullets: [
        "Analyzed 7,000+ customer records and engineered features via StringIndexer and VectorAssembler.",
        "Trained Logistic Regression/Random Forest models; tracked experiments with MLflow, achieving 0.83 AUC-ROC."
      ]
    },
    {
      title: "Visual Question Answering (VQA)",
      category: "Multimodal Deep Learning",
      image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=1000",
      icon: Cpu,
      tech: ["PyTorch", "ResNet / ViT", "BERT", "Transformers", "NLP"],
      description: "A multimodal neural network generating natural language answers based on images and corresponding questions.",
      // ✏️  Paste the full GitHub URL for this project below:
      github: "",
      bullets: [
        "Combined ResNet/ViT feature extraction with BERT question encoding structures.",
        "Evaluated on VQA v2 benchmark covering open-ended and binary question types."
      ]
    },
    {
      title: "Sentiment Analysis Pipeline",
      category: "Natural Language Processing",
      image: "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=1000",
      icon: MessageSquare,
      tech: ["Python", "HuggingFace", "Transformers", "Scikit-learn", "TF-IDF"],
      description: "An end-to-end NLP pipeline classifying sentiments across massive textual datasets.",
      // ✏️  Paste the full GitHub URL for this project below:
      github: "",
      bullets: [
        "Compared TF-IDF + classical ML baselines with fine-tuned transformer models.",
        "Reported metrics through F1-score and confusion matrix visualizations for clear business insights."
      ]
    },
    {
      title: "Attention Image Captioning",
      category: "Deep Learning & Vision-Language",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
      icon: ImageIcon,
      tech: ["TensorFlow", "CNN-LSTM", "Bahdanau Attention", "Flickr30k"],
      description: "Developed an attention-based encoder-decoder model to automatically generate descriptive text captions for images.",
      // ✏️  Paste the full GitHub URL for this project below:
      github: "",
      bullets: [
        "Trained on Flickr30k dataset using a custom CNN-LSTM pipeline.",
        "Significantly improved BLEU-4 scores through systematic attention integration."
      ]
    },
    {
      title: "Lip Sync Generation Pipeline",
      category: "Audio-Visual Deep Learning",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1000",
      icon: Music,
      tech: ["Python", "Wav2Lip", "FFmpeg", "Face Detection", "Mouth ROI"],
      description: "Fine-tuned Wav2Lip-based deep neural networks to synthesize realistic lip movements in video matching arbitrary audio.",
      // ✏️  Paste the full GitHub URL for this project below:
      github: "",
      bullets: [
        "Engineered preprocessing steps covering facial land-marking, mouth region-of-interest extraction.",
        "Synchronized high-fidelity audio alignment streams with video frames dynamically."
      ]
    }
  ];

  return (
    <section id="projects" className="relative z-20 min-h-screen bg-[#080808] py-32 px-6 md:px-12 bg-grid-pattern overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-96 h-96 glow-accent pointer-events-none rounded-full blur-3xl opacity-35" />
      <div className="absolute bottom-1/3 left-1/4 translate-y-1/2 w-96 h-96 glow-accent pointer-events-none rounded-full blur-3xl opacity-35" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <CinematicReveal className="text-center mb-20">
          <div className="text-primary font-mono text-xs tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(255,85,0,0.8)]" />
            Selected Work
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Featured{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
        </CinematicReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: (index % 3) * 0.1 }}
                className="glass-card flex flex-col justify-between overflow-hidden rounded-3xl group relative"
              >
                {/* Visual Header Image with gradient overlay */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  {/* Glowing orange overlay filter on hover */}
                  <div className="absolute inset-0 bg-[#080808]/70 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent z-15 opacity-80" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 z-15 transition-opacity duration-500" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-60"
                  />
                  {/* floating project icon */}
                  <div className="absolute top-6 left-6 z-25 icon-box w-12 h-12 backdrop-blur-md">
                    <Icon className="w-5 h-5 text-[#ff8a3d]" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-grow flex flex-col justify-between z-20">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-primary mb-2 uppercase tracking-widest block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-extrabold text-white mb-4 group-hover:text-primary transition-colors duration-300 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-300 font-light leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="space-y-2 mb-6">
                      {project.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="text-xs text-neutral-400 font-light flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack & Action link */}
                  <div className="pt-6 border-t border-white/5 flex flex-col gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span key={t} className="skill-badge">{t}</span>
                      ))}
                    </div>

                    {/* GitHub link button — only shown when github field is filled in */}
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center justify-between text-xs font-mono font-bold text-neutral-300 hover:text-primary transition-colors mt-2 group/link"
                      >
                        <span className="uppercase tracking-wider group-hover/link:text-primary transition-colors">
                          View on GitHub
                        </span>
                        <div className="icon-box w-8 h-8 !rounded-full">
                          <GithubIcon className="w-4 h-4 text-[#ff8a3d] group-hover/link:text-white transition-colors" />
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center justify-between text-xs font-mono font-bold text-neutral-300/40 mt-2 cursor-default">
                        <span className="uppercase tracking-wider">GitHub Coming Soon</span>
                        <div className="icon-box w-8 h-8 !rounded-full opacity-40">
                          <GithubIcon className="w-4 h-4 text-[#ff8a3d]" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
