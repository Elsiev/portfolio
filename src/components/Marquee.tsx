import { marqueeWords } from "@/data/profile";

export function Marquee() {
  return (
    <div aria-hidden className="overflow-hidden border-y border-border bg-card py-4">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((rep) => (
          <div key={rep} className="flex shrink-0 items-center gap-10 pr-10">
            {marqueeWords.map((word, i) => (
              <span
                key={i}
                className="flex items-center gap-10 font-mono text-sm uppercase tracking-widest text-muted-foreground"
              >
                {word}
                <span className="text-honey">&#x2726;</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
