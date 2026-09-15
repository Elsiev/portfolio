import { Link } from "react-router-dom";
import { profile } from "@/data/profile";

const navLink =
  "transition-[color,text-shadow] duration-300 hover:text-honey hover:[text-shadow:0_0_14px_rgba(255,177,0,0.85)]";

export function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-display font-bold text-lg tracking-tight">
          Elsie<span className="text-honey">.</span>
        </Link>
        <nav className="flex items-center gap-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <a href="/#work" className={navLink}>
            UI/UX
          </a>
          <Link to="/graphic-design" className={navLink}>
            Graphic Design
          </Link>
          <a href="/#about" className={navLink}>
            About
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-honey px-4 py-2 text-honey transition-shadow duration-300 hover:bg-honey hover:text-honey-foreground hover:shadow-[0_0_20px_rgba(255,177,0,0.55)]"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
