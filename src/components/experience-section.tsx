"use client";

import * as React from "react";
import { RESUME_DATA } from "@/data/portfolio";
import { motion } from "framer-motion";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-12 sm:py-16 px-4 border-t border-zinc-100">
      <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-900">
            Experience
          </h2>
        </motion.div>

        <div className="space-y-3.5 sm:space-y-4">
          {RESUME_DATA.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -3 }}
              className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-zinc-200/80 bg-white hover:border-zinc-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-all duration-200 space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-zinc-900">
                    {exp.role}
                  </h3>
                  <p className="text-xs font-medium text-zinc-500">
                    {exp.company}
                  </p>
                </div>
                <span className="text-[11px] sm:text-xs text-zinc-400 font-mono">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-1.5 pt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed list-disc list-inside">
                {exp.highlights.map((point, pIdx) => (
                  <li key={pIdx} className="text-zinc-600">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
