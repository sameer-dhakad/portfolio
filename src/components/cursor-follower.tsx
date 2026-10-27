"use client";

import * as React from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CursorFollower() {
  const [mounted, setMounted] = React.useState(false);

  const cursorX = useMotionValue(-300);
  const cursorY = useMotionValue(-300);

  // Ethereal smooth spring damping for ambient glow
  const glowConfig = { damping: 40, stiffness: 140, mass: 0.8 };
  const glowX = useSpring(cursorX, glowConfig);
  const glowY = useSpring(cursorY, glowConfig);

  React.useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  return (
    <motion.div
      style={{
        x: glowX,
        y: glowY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      className="pointer-events-none fixed top-0 left-0 z-0 h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-pink-300/22 via-rose-200/14 to-transparent blur-3xl opacity-90"
    />
  );
}
