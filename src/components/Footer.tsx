import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-display font-bold text-4xl sm:text-5xl leading-tight max-w-2xl">
          Have a screen worth fighting for?{" "}
          <span className="text-honey">Let's talk.</span>
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-honey text-honey-foreground px-6 py-3 font-medium hover:opacity-90 transition-opacity"
          >
            {profile.email}
          </a>
          {profile.linkedinUrl ? (
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-6 py-3 font-medium hover:border-foreground transition-colors"
            >
              LinkedIn
            </a>
          ) : null}
          {profile.hasResume ? (
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-6 py-3 font-medium hover:border-foreground transition-colors"
            >
              Download CV
            </a>
          ) : null}
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <span>{profile.name}, {profile.location}</span>
          <span>Built with React, Vite & Tailwind</span>
        </div>
      </div>
    </footer>
  );
}
