import { DayTimeline } from "./_components/day-timeline";
import { FinalCta } from "./_components/final-cta";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { HowItWorks } from "./_components/how-it-works";
import { Nav } from "./_components/nav";
import { PlanCalculator } from "./_components/plan-calculator";
import { ScrollProgress } from "./_components/scroll-progress";
import { VelocityMarquee } from "./_components/velocity-marquee";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <VelocityMarquee />
        <HowItWorks />
        <DayTimeline />
        <PlanCalculator />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
