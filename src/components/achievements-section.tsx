"use client";

import * as React from "react";
import { RESUME_DATA } from "@/data/portfolio";
import { Trophy } from "lucide-react";
import { motion } from "framer-motion";

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-12 sm:py-16 px-4 border-t border-zinc-100">
      <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-900">
            Achievements & Education
          </h2>
        </motion.div>

        {/* Competitions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {RESUME_DATA.achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -3 }}
              className="p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-zinc-200/80 bg-white hover:border-zinc-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-all duration-200 space-y-2"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-800 bg-zinc-100 px-2.5 py-0.5 rounded-full">
                  <Trophy className="h-3 w-3 text-zinc-600 shrink-0" />
                  <span>{item.award}</span>
                </span>
                <span className="text-[11px] sm:text-xs text-zinc-400 font-mono">
                  {item.period}
                </span>
              </div>
              <h3 className="text-xs sm:text-sm font-semibold text-zinc-900">
                {item.title}
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Education Row */}
        <div className="space-y-2.5 sm:space-y-3 pt-2">
          {RESUME_DATA.education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: 0.08 + idx * 0.06 }}
              whileHover={{ y: -2 }}
              className="p-4 sm:p-5 rounded-xl border border-zinc-200/80 bg-white hover:border-zinc-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2"
            >
              <div className="space-y-0.5">
                <h3 className="text-xs sm:text-sm font-semibold text-zinc-900">
                  {edu.institution}
                </h3>
                <p className="text-xs text-zinc-600">{edu.degree}</p>
              </div>

              <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-1">
                <span className="inline-block text-[11px] sm:text-xs font-semibold text-zinc-900 px-2.5 py-0.5 rounded-md bg-zinc-50 border border-zinc-200/60 font-mono">
                  {edu.score}
                </span>
                <span className="text-[11px] text-zinc-400 font-mono">
                  {edu.period}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
