"use client";

import * as React from "react";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import { AchievementsSection } from "@/components/achievements-section";
import { SkillsSection } from "@/components/skills-section";
import { Footer } from "@/components/footer";
import { CursorFollower } from "@/components/cursor-follower";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-zinc-900 overflow-x-hidden selection:bg-pink-100 selection:text-pink-900 bg-[radial-gradient(#f0f0f2_1px,transparent_1px)] [background-size:24px_24px]">
      {/* Top subtle blush ambient light */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_70%_50%_at_50%_-15%,rgba(244,114,182,0.18),transparent_70%)] z-0" />

      {/* 20% Ambient Pinkish Gradient Glow following cursor */}
      <CursorFollower />

      {/* Floating Modern Pill Header */}
      <Header />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <ProjectsSection />
        <ExperienceSection />
        <AchievementsSection />
        <SkillsSection />
      </main>

      {/* Minimal Modern Footer */}
      <Footer />
    </div>
  );
}
