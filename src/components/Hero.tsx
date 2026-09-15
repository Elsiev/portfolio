import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { hero, profile } from "@/data/profile";
import { HexField } from "@/components/HexField";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <HexField className="-top-16 right-[-4rem] h-72 w-72 opacity-40 sm:right-0" />
      <HexField className="top-1/2 -left-20 h-56 w-56 opacity-20" />

      <div className="relative mx-auto max-w-6xl px-6 pt-40 pb-16">
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-honey/40 bg-honey/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-honey"
        >
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold leading-[0.95] text-6xl sm:text-7xl md:text-8xl"
        >
          {hero.headline.map((line, i) => (
            <span key={i} className="block">
              {i === hero.headline.length - 1 ? <span className="text-honey">{line}</span> : line}
            </span>
          ))}
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-7 flex flex-wrap gap-2.5"
        >
          {hero.traits.map((trait, i) => (
            <span
              key={trait}
              className={
                "rounded-full border border-border px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground " +
                (i % 2 === 0 ? "-rotate-2" : "rotate-1")
              }
            >
              {trait}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 max-w-xl text-lg text-muted-foreground"
        >
          {hero.sub}
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href={hero.ctaPrimary.href}
            className="inline-flex items-center gap-2 rounded-full bg-honey px-6 py-3 font-medium text-honey-foreground transition-opacity hover:opacity-90"
          >
            {hero.ctaPrimary.label}
            <ArrowDown className="h-4 w-4" />
          </a>
          {profile.hasResume ? (
            <a
              href={hero.ctaSecondary.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium transition-colors hover:border-foreground"
            >
              {hero.ctaSecondary.label}
              <Download className="h-4 w-4" />
            </a>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
