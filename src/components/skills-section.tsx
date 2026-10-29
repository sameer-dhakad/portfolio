"use client";

import * as React from "react";
import { RESUME_DATA } from "@/data/portfolio";
import { motion } from "framer-motion";

export function SkillsSection() {
  return (
    <section id="skills" className="py-12 sm:py-16 px-4 border-t border-zinc-100">
      <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-900">
            Skills & Tools
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {RESUME_DATA.skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -3 }}
              className="p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-zinc-200/80 bg-white space-y-3 hover:border-zinc-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-all duration-200"
            >
              <h3 className="text-xs font-semibold text-zinc-900 border-b border-zinc-100 pb-2">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {skillGroup.items.map((item, itemIdx) => (
                  <span
                    key={itemIdx}
                    className="text-[11px] sm:text-xs font-mono px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-zinc-50 border border-zinc-200/80 text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
