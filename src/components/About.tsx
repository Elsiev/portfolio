import { Download, Mail } from "lucide-react";
import portrait from "@/assets/about-portrait.jpg";
import { about, hero, profile, skills } from "@/data/profile";
import { HexField } from "@/components/HexField";

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24 scroll-mt-24">
      <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="mx-auto w-full max-w-sm">
          {/* Dots and hex accents are scoped to this inner wrapper, sized
              just past the portrait's own edges, so none of it ever sits
              under the quick facts or body copy below. */}
          <div className="relative">
            <div aria-hidden className="honeycomb-dots absolute -inset-10 -z-10 opacity-60" />
            <HexField className="-top-10 -left-10 h-40 w-40 -z-10" />
            <HexField className="-bottom-10 -right-10 h-40 w-40 -z-10 rotate-12" />
            <div
              aria-hidden
              className="absolute inset-0 rounded-[2rem] bg-honey opacity-20 blur-2xl"
            />
            <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-border bg-card">
              <img
                src={portrait}
                alt={profile.name}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <span className="absolute right-4 top-4 -rotate-6 rounded-full bg-honey px-3.5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wide text-honey-foreground shadow-[0_8px_20px_-6px_rgba(255,177,0,0.6)]">
                {about.badge}
              </span>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/80 to-transparent p-6 pt-16">
                <p className="font-display text-lg font-bold text-foreground">{profile.name}</p>
                <p className="text-sm text-muted-foreground">{profile.role}</p>
              </div>
            </div>
          </div>

          {/* Quick facts: the scannable, three-second version of this
              section, for a reviewer who won't read the paragraphs below. */}
          <dl className="mt-8 grid grid-cols-1 gap-3 border-t border-border pt-6">
            {about.quickFacts.map((fact) => (
              <div key={fact.label} className="flex items-baseline justify-between gap-4 text-sm">
                <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {fact.label}
                </dt>
                <dd className="text-right font-medium">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-honey px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-honey-foreground transition-opacity hover:opacity-90"
            >
              <Mail className="h-3.5 w-3.5" /> Contact
            </a>
            {profile.hasResume ? (
              <a
                href={hero.ctaSecondary.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-mono text-xs uppercase tracking-widest transition-colors hover:border-foreground"
              >
                <Download className="h-3.5 w-3.5" /> CV
              </a>
            ) : null}
          </div>
        </div>

        <div>
          <p className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-honey">
            <span className="h-1.5 w-1.5 rounded-full bg-honey" />
            {about.eyebrow}
          </p>
          <h2 className="font-display text-4xl font-bold leading-[0.98] sm:text-5xl">
            {about.heading}
          </h2>

          <div className="mt-5 flex flex-wrap gap-2.5">
            {about.tags.map((tag, i) => (
              <span
                key={tag}
                className={
                  "rounded-full border border-honey/40 bg-honey/10 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-widest text-honey-soft " +
                  (i % 2 === 0 ? "-rotate-2" : "rotate-1")
                }
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-4">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>

          {/* Proof strip: three numbers a reviewer can check against the
              case studies above, instead of taking the bio's word for it. */}
          <div className="mt-10 grid grid-cols-3 gap-4 border-y border-border py-6">
            {about.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-bold text-honey sm:text-4xl">{stat.value}</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border px-4 py-2 font-mono text-xs uppercase tracking-widest"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
