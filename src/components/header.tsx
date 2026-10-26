"use client";

import * as React from "react";
import { RESUME_DATA } from "@/data/portfolio";
import { GithubIcon } from "@/components/icons";
import { FileDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="sticky top-3 sm:top-4 z-40 w-full max-w-3xl mx-auto px-3 sm:px-4"
    >
      <div className="flex items-center justify-between h-11 sm:h-12 px-3 sm:px-4 rounded-full border border-zinc-200/80 bg-white/90 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
        {/* Brand */}
        <a
          href="#"
          className="flex items-center gap-1.5 sm:gap-2 text-xs font-semibold tracking-tight text-zinc-900 hover:text-zinc-600 transition-colors shrink-0"
        >
          <span className="h-6 w-6 rounded-lg bg-zinc-900 text-white flex items-center justify-center font-mono text-[11px] font-medium shadow-2xs">
            SD
          </span>
          <span className="hidden xs:inline sm:inline">{RESUME_DATA.name}</span>
        </a>

        {/* Nav Items */}
        <nav className="flex items-center gap-1 sm:gap-3 text-[11px] sm:text-xs text-zinc-600 font-medium">
          <a
            href="#work"
            className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full hover:text-zinc-900 hover:bg-zinc-100/70 transition-all"
          >
            Work
          </a>
          <a
            href="#experience"
            className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full hover:text-zinc-900 hover:bg-zinc-100/70 transition-all"
          >
            Experience
          </a>
          <a
            href="#achievements"
            className="hidden sm:inline px-2.5 py-1 rounded-full hover:text-zinc-900 hover:bg-zinc-100/70 transition-all"
          >
            Honors
          </a>
          <a
            href="#skills"
            className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full hover:text-zinc-900 hover:bg-zinc-100/70 transition-all"
          >
            Skills
          </a>
        </nav>

        {/* Action icons */}
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          <a
            href={RESUME_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 sm:p-1.5 rounded-full text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
            title="GitHub"
          >
            <GithubIcon className="h-3.5 w-3.5" />
          </a>

          <a
            href={RESUME_DATA.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex p-1.5 rounded-full text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
            title="LinkedIn"
          >
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          <a
            href={RESUME_DATA.resumePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Sameer_Dhakad_Resume.pdf"
            className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-medium px-2.5 sm:px-3 py-1 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white transition-all shadow-xs"
          >
            <FileDown className="h-3 w-3" />
            <span>CV</span>
          </a>
        </div>
      </div>
    </motion.header>
  );
}
