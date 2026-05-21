"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import CinematicReveal from "./CinematicReveal";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [emailCopied, setEmailCopied] = useState(false);


  const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

  const copyEmail = () => {
    navigator.clipboard.writeText("prateekgoswami93@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const contactChannels = [
    {
      name: "Direct Email",
      value: "prateekgoswami93@gmail.com",
      href: "mailto:prateekgoswami93@gmail.com",
      icon: Mail,
      desc: "Click to copy email",
      copyEmail: true,
    },
    {
      name: "Mobile Phone",
      value: "+91 79767 24248",
      href: "tel:+917976724248",
      icon: Phone,
      desc: "Call or WhatsApp",
    },
    {
      name: "LinkedIn Network",
      value: "prateek-goswami",
      href: "https://www.linkedin.com/in/prateek-goswami93/",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
        </svg>
      ),
      desc: "Professional connection",
    },
    {
      name: "GitHub Profile",
      value: "PrateekG93",
      href: "https://github.com/PrateekG93",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
      desc: "Open-source work",
    },
  ];


  return (
    <section id="contact" className="relative z-20 min-h-screen bg-[#080808] pt-32 pb-16 px-6 md:px-12 bg-grid-pattern overflow-hidden">
      {/* Background soft glowing lights */}
      <div className="absolute bottom-0 inset-x-0 h-96 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-12 right-12 w-[600px] h-[600px] glow-accent pointer-events-none rounded-full blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: Info & Action Cards */}
          <div className="lg:col-span-5 space-y-12">
            <CinematicReveal>
              <div className="text-primary font-mono text-xs tracking-widest uppercase mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(255,85,0,0.8)]" />
                Get In Touch
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
                Let's Build <br />
                Something{" "}
                <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Great
                </span>
              </h2>
              <p className="text-neutral-400 font-light leading-relaxed max-w-sm">
                Have an opening for an AI Engineer role, a collaborative pipeline proposal, or just want to say hi? Connect with me directly!
              </p>
            </CinematicReveal>

            {/* Direct Channel Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactChannels.map((channel, i) => {
                const Icon = channel.icon;
                const isEmail = (channel as any).copyEmail;
                const CardTag = isEmail ? motion.button : motion.a;
                return (
                  <CardTag
                    key={channel.name}
                    {...(isEmail
                      ? { onClick: copyEmail, type: "button" as const }
                      : { href: channel.href, target: channel.href.startsWith("http") ? "_blank" : undefined, rel: channel.href.startsWith("http") ? "noreferrer" : undefined }
                    )}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="glass-card p-6 rounded-2xl block relative group cursor-pointer text-left w-full"
                  >
                    <div className="icon-box w-10 h-10 mb-4">
                      <Icon className="w-4 h-4 text-[#ff8a3d]" />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-0.5">
                      {channel.name}
                    </h4>
                    <p className="text-[10px] text-neutral-400 mb-2 font-mono uppercase tracking-wider">{channel.desc}</p>
                    <p className="text-xs text-neutral-300 font-mono break-all font-light">{channel.value}</p>
                    {isEmail && emailCopied && (
                      <span className="absolute top-3 right-3 text-[10px] font-mono bg-primary text-white px-2 py-0.5 rounded-full shadow-lg">
                        Copied!
                      </span>
                    )}
                  </CardTag>
                );
              })}
            </div>
          </div>

          {/* Right Column: Contact Form Card */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary to-accent" />

              <h3 className="text-2xl font-extrabold text-white mb-8">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all placeholder:text-neutral-600"
                      style={{
                        background: "radial-gradient(ellipse 60% 60% at 100% 100%, rgba(255,106,26,0.08) 0%, transparent 65%), linear-gradient(135deg, rgba(9,11,18,0.95) 0%, rgba(11,15,24,0.9) 100%)",
                        boxShadow: "-2px -2px 10px 0 rgba(7,26,46,0.4), 2px 2px 12px 0 rgba(255,106,26,0.08), inset 0 0 0 1.5px rgba(255,138,61,0.18), inset 0 1px 0 rgba(255,200,140,0.08)"
                      }}
                    />
                  </div>
                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all placeholder:text-neutral-600"
                      style={{
                        background: "radial-gradient(ellipse 60% 60% at 100% 100%, rgba(255,106,26,0.08) 0%, transparent 65%), linear-gradient(135deg, rgba(9,11,18,0.95) 0%, rgba(11,15,24,0.9) 100%)",
                        boxShadow: "-2px -2px 10px 0 rgba(7,26,46,0.4), 2px 2px 12px 0 rgba(255,106,26,0.08), inset 0 0 0 1.5px rgba(255,138,61,0.18), inset 0 1px 0 rgba(255,200,140,0.08)"
                      }}
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Your Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your role or project here..."
                    className="w-full rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all placeholder:text-neutral-600 resize-none"
                    style={{
                      background: "radial-gradient(ellipse 60% 60% at 100% 100%, rgba(255,106,26,0.08) 0%, transparent 65%), linear-gradient(135deg, rgba(9,11,18,0.95) 0%, rgba(11,15,24,0.9) 100%)",
                      boxShadow: "-2px -2px 10px 0 rgba(7,26,46,0.4), 2px 2px 12px 0 rgba(255,106,26,0.08), inset 0 0 0 1.5px rgba(255,138,61,0.18), inset 0 1px 0 rgba(255,200,140,0.08)"
                    }}
                  />
                </div>

                {error && (
                  <p className="text-xs text-red-400 font-mono text-center">{error}</p>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={submitted || loading}
                  className="w-full py-4 rounded-xl bg-primary text-white font-mono font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 hover:bg-primary/95 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,85,0,0.3)] disabled:opacity-50 cursor-pointer"
                >
                  {submitted ? (
                    <span>✓ Message Sent!</span>
                  ) : loading ? (
                    <span>Sending…</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Footer Base */}
        <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-neutral-500 text-xs font-mono select-none">
          <p>© {new Date().getFullYear()} Prateek Goswami. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Home</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </section>
  );
}
