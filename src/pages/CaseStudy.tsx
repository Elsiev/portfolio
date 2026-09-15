import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { caseStudies, getCaseStudy } from "@/data/work";
import { cn } from "@/lib/utils";

export function CaseStudy() {
  const { slug } = useParams();
  const study = slug ? getCaseStudy(slug) : undefined;

  if (!study) return <Navigate to="/" replace />;

  const sameKind = caseStudies.filter((cs) => cs.kind === study.kind);
  const index = sameKind.findIndex((cs) => cs.slug === study.slug);
  const next = sameKind[(index + 1) % sameKind.length];

  return (
    <article>
      <div className="mx-auto max-w-4xl px-6 pt-32 pb-16">
        <Link
          to={study.kind === "graphic" ? "/graphic-design" : "/"}
          className="mb-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> {study.kind === "graphic" ? "Back to graphic design" : "Back to work"}
        </Link>

        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-honey/40 bg-honey/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-honey">
            {study.status}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            {study.category}
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[0.95]">
          {study.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{study.oneLiner}</p>

        {study.external ? (
          <a
            href={study.external}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-mono text-xs uppercase tracking-widest hover:border-foreground transition-colors"
          >
            View live site <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        ) : null}

        {study.disclaimer ? (
          <p className="mt-8 rounded-xl border border-border bg-muted/50 p-4 text-sm text-muted-foreground">
            {study.disclaimer}
          </p>
        ) : null}
      </div>

      {study.thumb ? (
        <div className="mx-auto max-w-6xl px-6">
          <img src={study.thumb} alt={study.title} className="w-full rounded-2xl border border-border" />
        </div>
      ) : null}

      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
          <div>
            <h2 className="mb-3 font-mono text-xs uppercase tracking-widest text-honey">Brief</h2>
            <p className="text-base leading-relaxed text-muted-foreground">{study.brief}</p>
          </div>
          <div>
            <h2 className="mb-3 font-mono text-xs uppercase tracking-widest text-honey">Goal</h2>
            <p className="text-base leading-relaxed text-muted-foreground">{study.goal}</p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="mb-6 font-mono text-xs uppercase tracking-widest text-honey">Approach</h2>
          <ul className="flex flex-col gap-6">
            {study.approach.map((point, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-display text-2xl font-bold text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base sm:text-lg leading-relaxed">{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {study.beforeAfter && study.beforeAfter.length > 0 ? (
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="mb-8 font-mono text-xs uppercase tracking-widest text-honey">Before / After</h2>
          <div className="flex flex-col gap-16">
            {study.beforeAfter.map((ba) => (
              <div key={ba.title}>
                <h3 className="mb-2 font-display text-xl font-bold">{ba.title}</h3>
                <p className="mb-5 max-w-2xl text-sm text-muted-foreground">{ba.note}</p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Before
                    </span>
                    <img src={ba.before} alt={`${ba.title} before`} className="w-full rounded-xl border border-border" />
                  </div>
                  <div>
                    <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-honey">
                      After
                    </span>
                    <img src={ba.after} alt={`${ba.title} after`} className="w-full rounded-xl border border-honey/40" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {study.images.length > 0 ? (
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="mb-8 font-mono text-xs uppercase tracking-widest text-honey">Gallery</h2>
          <div
            className={cn(
              "grid grid-cols-1 gap-8",
              study.kind === "graphic" ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2",
            )}
          >
            {study.images.map((img) => (
              <figure key={img.src}>
                <img src={img.src} alt={img.caption} className="w-full rounded-xl border border-border" />
                <figcaption className="mt-3 text-sm text-muted-foreground">{img.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      ) : null}

      <div className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="mb-6 font-mono text-xs uppercase tracking-widest text-honey">Deliverables</h2>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {study.deliverables.map((d) => (
            <li key={d} className="rounded-xl border border-border bg-card px-4 py-3 text-sm">
              {d}
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-border">
        <Link
          to={`/work/${next.slug}`}
          className="group mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-16"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Next case study
            </span>
            <h3 className="mt-2 font-display text-3xl sm:text-4xl font-bold">{next.title}</h3>
          </div>
          <ArrowUpRight className="h-8 w-8 shrink-0 -translate-y-1 translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100" />
        </Link>
      </div>
    </article>
  );
}
