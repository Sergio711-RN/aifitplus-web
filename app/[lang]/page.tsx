import { Suspense } from "react";
import { DayTimeline } from "../_components/day-timeline";
import { FinalCta } from "../_components/final-cta";
import { Footer } from "../_components/footer";
import { Hero } from "../_components/hero";
import { HowItWorks } from "../_components/how-it-works";
import { Nav } from "../_components/nav";
import { PlanCalculator } from "../_components/plan-calculator";
import { ScrollProgress } from "../_components/scroll-progress";
import { VelocityMarquee } from "../_components/velocity-marquee";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        {/* Nothing suspends here: each boundary lets React hydrate its section as a separate task, so the first screen
            becomes interactive first and the browser can paint between the sections instead of one long block */}
        <Suspense>
          <VelocityMarquee />
        </Suspense>
        <Suspense>
          <HowItWorks />
        </Suspense>
        <Suspense>
          <DayTimeline />
        </Suspense>
        <Suspense>
          <PlanCalculator />
        </Suspense>
        <Suspense>
          <FinalCta />
        </Suspense>
      </main>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
