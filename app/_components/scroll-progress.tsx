"use client";

import { motion, useScroll, useSpring } from "motion/react";

/** Thin bar at the very top, in the three macro colours, showing how far down the page you are */
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-apricot via-lilac to-mint"
      style={{ scaleX }}
    />
  );
};
