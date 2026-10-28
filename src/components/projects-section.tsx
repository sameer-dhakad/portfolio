"use client";

import * as React from "react";
import { RESUME_DATA } from "@/data/portfolio";
import { GithubIcon } from "@/components/icons";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function ProjectsSection() {
  return (
    <section id="work" className="py-12 sm:py-16 px-4 border-t border-zinc-100">
      <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35 }}
          className="flex items-center justify-between"
        >
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-900">
            Selected Work
          </h2>
          <span className="text-xs font-mono text-zinc-400">
            {RESUME_DATA.projects.length} Projects
          </span>
        </motion.div>

        <div className="space-y-3.5 sm:space-y-4">
          {RESUME_DATA.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              whileHover={{ y: -3 }}
              className="group relative p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-zinc-200/80 bg-white hover:border-zinc-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-200 space-y-3"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-zinc-400 shrink-0">
                    0{idx + 1}
                  </span>
                  <h3 className="text-sm sm:text-base font-semibold text-zinc-900 group-hover:text-zinc-700 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-600">
                    {project.role}
                  </span>
                </div>
                <span className="text-[11px] sm:text-xs text-zinc-400 font-mono">
                  {project.period}
                </span>
              </div>

              {/* Tagline & Summary */}
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                {project.summary}
              </p>

              {/* Bottom: Tech & Links */}
              <div className="flex flex-wrap items-center justify-between gap-2.5 pt-2 border-t border-zinc-100/80">
                <div className="flex flex-wrap gap-1 sm:gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] sm:text-[11px] font-mono px-2 sm:px-2.5 py-0.5 rounded-md bg-zinc-50 border border-zinc-200/60 text-zinc-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600 hover:text-zinc-900 transition-colors px-2.5 py-1 rounded-md hover:bg-zinc-100 shrink-0"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  <span>Source</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
