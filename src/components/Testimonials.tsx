import { Quote, Star } from "lucide-react";
import { testimonials, type Testimonial } from "@/data/testimonials";
import { HexField } from "@/components/HexField";
import { cn } from "@/lib/utils";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn("h-3.5 w-3.5", i < rating ? "fill-honey text-honey" : "text-border")}
        />
      ))}
    </div>
  );
}

function ReviewBlock({ review, reversed }: { review: Testimonial; reversed: boolean }) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-5 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.3fr)] sm:gap-0",
        reversed && "sm:grid-cols-[minmax(0,1.3fr)_minmax(0,0.8fr)]",
      )}
    >
      <div
        className={cn(
          "relative order-1 flex items-center justify-center overflow-hidden rounded-3xl border border-border bg-muted/60 p-10 sm:p-14",
          reversed ? "order-2 sm:rounded-l-none" : "sm:rounded-r-none",
        )}
      >
        <HexField className="left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 -z-0 opacity-60" />
        <img
          src={review.logo}
          alt={review.company}
          loading="lazy"
          draggable={false}
          className="relative h-auto max-h-32 w-auto select-none drop-shadow-[0_12px_30px_rgba(0,0,0,0.5)] sm:max-h-40"
        />
      </div>

      <div
        className={cn(
          "relative z-10 order-2 flex -rotate-1 flex-col justify-center rounded-3xl border border-honey/30 bg-card p-8 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.7)] sm:p-10",
          reversed ? "order-1 rotate-1 sm:-mr-16 sm:my-8" : "sm:-ml-16 sm:my-8",
        )}
      >
        <span className="absolute -top-3 right-6 rotate-3 rounded-full bg-honey px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-honey-foreground shadow-[0_8px_20px_-6px_rgba(255,177,0,0.6)]">
          Verified client
        </span>
        <Quote aria-hidden className="h-8 w-8 text-honey/70" />
        {review.quote.split("\n\n").map((paragraph, i) => (
          <p key={i} className="mt-4 text-base font-medium leading-snug text-foreground first:mt-4 sm:text-lg">
            &ldquo;{paragraph}&rdquo;
          </p>
        ))}
        <div className="mt-6 flex items-center justify-between gap-3">
          <div>
            <p className="font-display text-sm font-bold">{review.name}</p>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{review.role}</p>
          </div>
          <Stars rating={review.rating} />
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="reviews" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-16 text-center">
        <p className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-honey">
          <span className="h-1.5 w-1.5 rounded-full bg-honey" />
          Trusted by real clients
        </p>
        <h2 className="font-display text-3xl font-bold sm:text-4xl">What it's like to work with me</h2>
      </div>
      <div className="flex flex-col gap-20">
        {testimonials.map((review, i) => (
          <ReviewBlock key={review.name} review={review} reversed={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
