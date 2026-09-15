import { caseStudies } from "@/data/work";
import { WorkCard } from "@/components/WorkCard";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";

const websiteCaseStudies = caseStudies.filter((cs) => cs.kind === "website");

export function Home() {
  return (
    <>
      <Hero />
      <Marquee />

      <section id="work" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-24">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl sm:text-4xl font-bold">Selected work</h2>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {websiteCaseStudies.length} case studies
          </span>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {websiteCaseStudies.map((study, index) => (
            <WorkCard key={study.slug} study={study} index={index} />
          ))}
        </div>
      </section>

      <About />
      <Testimonials />
    </>
  );
}
