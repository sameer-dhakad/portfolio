"use client";

import * as React from "react";
import { RESUME_DATA } from "@/data/portfolio";
import { ArrowDown, FileDown, Check, Copy, Clock } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const [copied, setCopied] = React.useState(false);
  const [timeString, setTimeString] = React.useState("");

  React.useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const stackPills = [
    "React 19",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Python",
    "Tailwind CSS",
  ];

  return (
    <section className="pt-16 sm:pt-24 pb-12 sm:pb-16 px-4">
      <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
        {/* Top Location & Local Time Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs text-zinc-500 font-mono"
        >
          <span className="px-2.5 py-0.5 rounded-full border border-zinc-200/80 bg-white shadow-2xs">
            {RESUME_DATA.location}
          </span>
          <span className="text-zinc-300">/</span>
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-zinc-200/80 bg-white shadow-2xs">
            <Clock className="h-3 w-3 text-zinc-400" />
            <span>{timeString ? `${timeString} IST` : "IST (UTC+5:30)"}</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05, ease: "easeOut" }}
          className="space-y-2"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
            {RESUME_DATA.name}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-zinc-600 font-normal">
            {RESUME_DATA.title}
          </p>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
          className="text-xs sm:text-sm md:text-base leading-relaxed text-zinc-600 max-w-2xl font-normal"
        >
          {RESUME_DATA.about}
        </motion.p>

        {/* Stack Badges */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.15, ease: "easeOut" }}
          className="flex flex-wrap gap-1.5 pt-1"
        >
          {stackPills.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded-md border border-zinc-200/70 bg-white/70 text-zinc-600 shadow-2xs"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Primary Milestone Cards (Strictly 3 important ones) */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1"
        >
          {RESUME_DATA.stats.map((s, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -3, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="p-3.5 sm:p-4 rounded-xl border border-zinc-200/80 bg-white shadow-2xs hover:border-zinc-300 hover:shadow-xs transition-all space-y-1"
            >
              <span className="text-[10px] sm:text-[11px] text-zinc-400 font-mono block">
                {s.label}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-zinc-900 block">
                {s.value}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.25, ease: "easeOut" }}
          className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3 pt-2"
        >
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-2 h-9 px-4 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium transition-colors shadow-xs"
          >
            <span>Explore Work</span>
            <ArrowDown className="h-3.5 w-3.5" />
          </a>

          <a
            href={RESUME_DATA.resumePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Sameer_Dhakad_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 h-9 px-4 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-800 text-xs font-medium transition-colors shadow-xs"
          >
            <FileDown className="h-3.5 w-3.5 text-zinc-500" />
            <span>Download Resume</span>
          </a>

          <button
            onClick={copyEmail}
            className="inline-flex items-center justify-center gap-2 h-9 px-4 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700 text-xs font-medium transition-colors shadow-xs"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-600" />
                <span className="text-emerald-700">Copied Email</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5 text-zinc-400" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
