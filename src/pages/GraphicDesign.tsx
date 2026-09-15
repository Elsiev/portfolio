import { caseStudies } from "@/data/work";
import { WorkCard } from "@/components/WorkCard";

const graphicCaseStudies = caseStudies.filter((cs) => cs.kind === "graphic");

export function GraphicDesign() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-40 pb-24">
      <p className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-honey">
        <span className="h-1.5 w-1.5 rounded-full bg-honey" />
        Not websites
      </p>
      <h1 className="font-display text-5xl font-bold leading-[0.98] sm:text-6xl">Graphic Design</h1>
      <p className="mt-6 max-w-xl text-lg text-muted-foreground">
        Brand identities and social systems built alongside the website work, each one its own case
        study rather than a footnote on the site it extends.
      </p>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {graphicCaseStudies.map((study, index) => (
          <WorkCard key={study.slug} study={study} index={index} />
        ))}
      </div>
    </div>
  );
}
