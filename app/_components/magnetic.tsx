"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import type { PointerEvent, ReactNode } from "react";

/** Pulls its child towards the cursor while hovered and springs back on leave */
export const Magnetic = ({ children, strength = 0.35, className }: { children: ReactNode; strength?: number; className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 15, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 15, mass: 0.4 });

  const onMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * strength);
    y.set((event.clientY - rect.top - rect.height / 2) * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div className={`inline-block ${className ?? ""}`} style={{ x: springX, y: springY }} onPointerMove={onMove} onPointerLeave={onLeave}>
      {children}
    </motion.div>
  );
};
