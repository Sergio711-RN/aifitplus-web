"use client";

import { ReactLenis } from "lenis/react";
import { MotionConfig, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/** Momentum scrolling for the whole page; off when the system asks for reduced motion */
export const SmoothScroll = ({ children }: { children: ReactNode }) => {
  const isReduced = useReducedMotion();

  return (
    <MotionConfig reducedMotion="user">
      {isReduced ? children : (
        <ReactLenis root options={{ lerp: 0.09, smoothWheel: true }}>
          {children}
        </ReactLenis>
      )}
    </MotionConfig>
  );
};
