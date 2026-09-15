import { cn } from "@/lib/utils";

/** Scattered hexagon outlines, echoing the honeycomb motif from the
 * portrait artwork and honeycodedesign.com's own brand mark. Purely
 * decorative, absolutely positioned behind whatever it's dropped into. */
export function HexField({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 400 400"
      className={cn("pointer-events-none absolute", className)}
    >
      <g fill="none" stroke="var(--honey)" strokeWidth="2">
        <polygon points="40,10 75,30 75,70 40,90 5,70 5,30" opacity="0.5" />
        <polygon points="340,20 375,40 375,80 340,100 305,80 305,40" opacity="0.3" />
        <polygon points="360,220 395,240 395,280 360,300 325,280 325,240" opacity="0.4" />
        <polygon points="30,300 65,320 65,360 30,380 -5,360 -5,320" opacity="0.35" />
      </g>
    </svg>
  );
}
