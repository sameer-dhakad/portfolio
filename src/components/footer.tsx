"use client";

import * as React from "react";
import { RESUME_DATA } from "@/data/portfolio";
import { GithubIcon } from "@/components/icons";
import { Mail, MapPin, FileDown, ArrowUpRight, Copy, Check, Send } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const [copied, setCopied] = React.useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="py-16 sm:py-20 px-4 border-t border-zinc-100 bg-white/60">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.35 }}
        className="max-w-3xl mx-auto space-y-8 sm:space-y-10"
      >
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">
            Let&apos;s build something exceptional.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 max-w-lg leading-relaxed">
            Always open to conversations about engineering roles, projects, or interesting ideas.
          </p>
        </div>

        {/* Contact Links Box */}
        <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-zinc-200/80 bg-white space-y-4 shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs">
            {/* Copy Email Button */}
            <button
              onClick={copyEmail}
              className="flex items-center justify-between p-3 sm:p-3.5 rounded-xl border border-zinc-200/80 bg-zinc-50/50 hover:bg-white hover:border-zinc-300 hover:shadow-xs transition-all text-left min-w-0"
            >
              <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                <Mail className="h-4 w-4 text-zinc-500 shrink-0" />
                <span className="text-zinc-800 font-mono text-[11px] sm:text-xs truncate">
                  {RESUME_DATA.email}
                </span>
              </div>
              {copied ? (
                <span className="text-emerald-600 text-[11px] font-medium shrink-0 ml-2">
                  Copied!
                </span>
              ) : (
                <Copy className="h-3.5 w-3.5 text-zinc-400 shrink-0 ml-2" />
              )}
            </button>

            {/* Direct Send Email Button */}
            <a
              href={`mailto:${RESUME_DATA.email}`}
              className="flex items-center justify-between p-3 sm:p-3.5 rounded-xl border border-zinc-200/80 bg-zinc-900 text-white hover:bg-zinc-800 transition-all shadow-xs"
            >
              <div className="flex items-center gap-2">
                <Send className="h-3.5 w-3.5 text-zinc-300 shrink-0" />
                <span className="font-medium text-xs">Send an Email</span>
              </div>
              <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-zinc-100 text-xs">
            <div className="flex items-center gap-1.5 text-zinc-500">
              <MapPin className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
              <span>{RESUME_DATA.location}</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href={RESUME_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-zinc-600 hover:text-zinc-900 transition-colors font-medium"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href={RESUME_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-zinc-600 hover:text-zinc-900 transition-colors font-medium"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>

              <a
                href={RESUME_DATA.resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Sameer_Dhakad_Resume.pdf"
                className="flex items-center gap-1 text-zinc-900 hover:text-zinc-600 transition-colors font-medium"
              >
                <FileDown className="h-3.5 w-3.5 text-zinc-600" />
                <span>PDF Resume</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-zinc-400 pt-2">
          <p>© 2026 Sameer Dhakad</p>
          <a href="#" className="hover:text-zinc-600 transition-colors">
            Back to top ↑
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
