import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/data/work";
import { cn } from "@/lib/utils";

const statusStyles: Record<CaseStudy["status"], string> = {
  "Real client": "bg-honey/15 text-honey border-honey/40",
  "Speculative concept": "bg-muted text-muted-foreground border-border",
  "Personal project": "bg-muted text-muted-foreground border-border",
};

export function WorkCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <Link
      to={`/work/${study.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {study.thumb ? (
          <img
            src={study.thumb}
            alt={study.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-muted to-background p-6 text-center">
            <span className="font-display text-3xl font-bold">{study.title}</span>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {study.category}
            </span>
          </div>
        )}
        <span className="absolute left-4 top-4 font-mono text-xs text-muted-foreground">
          {String(index + 1).padStart(2, "0")}
        </span>
        <ArrowUpRight className="absolute right-4 top-4 h-5 w-5 -translate-y-1 translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display text-xl font-bold">{study.title}</h3>
          <span
            className={cn(
              "shrink-0 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-widest",
              statusStyles[study.status],
            )}
          >
            {study.status}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{study.oneLiner}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-muted px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
