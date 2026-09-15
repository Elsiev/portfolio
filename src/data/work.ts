// Case study data. Copy/process notes here are pulled and lightly adapted
// from Honeycode Design Studio's own case-study content (honeycodedesign.com),
// real work Elsie designed. Edit freely per project.

import everluneSiteHero from "@/assets/work/everlune/everlune-site-hero.jpg";
import everluneSitePortfolio from "@/assets/work/everlune/everlune-site-portfolio.jpg";
import everluneSiteSessions from "@/assets/work/everlune/everlune-site-sessions.jpg";
import everluneSiteReviews from "@/assets/work/everlune/everlune-site-reviews.jpg";
import everluneSiteContact from "@/assets/work/everlune/everlune-site-contact.jpg";
import everluneLockup from "@/assets/work/everlune/everlune-lockup.png";
import everluneBusinessCard from "@/assets/work/everlune/everlune-business-card.png";
import everluneWatermark from "@/assets/work/everlune/everlune-watermark-treatment.jpg";

import smudgeBeforeHero from "@/assets/work/smudge/before-hero.png";
import smudgeBeforeProof from "@/assets/work/smudge/before-proof.png";
import smudgeBeforeProcess from "@/assets/work/smudge/before-process.png";
import smudgeMockHero from "@/assets/work/smudge/mock-hero.png";
import smudgeMockProof from "@/assets/work/smudge/mock-proof.png";
import smudgeMockProcess from "@/assets/work/smudge/mock-process.png";
import smudgePost1 from "@/assets/work/smudge/post-1-stat.png";
import smudgePost2 from "@/assets/work/smudge/post-2-terminal.png";
import smudgePost3 from "@/assets/work/smudge/post-3-manifesto.png";
import smudgePost4 from "@/assets/work/smudge/post-4-stack.png";
import smudgePost5 from "@/assets/work/smudge/post-5-dualstat.png";

import krummelHomeBefore from "@/assets/work/krummel/krummel-home-before.jpg";
import krummelHomeAfter from "@/assets/work/krummel/krummel-home-after.jpg";
import krummelAboutAfter from "@/assets/work/krummel/krummel-about-after.jpg";
import krummelMenuAfter from "@/assets/work/krummel/krummel-menu-after.jpg";
import krummelEventsAfter from "@/assets/work/krummel/krummel-events-after.jpg";
import krummelGalleryAfter from "@/assets/work/krummel/krummel-gallery-after.jpg";
import krummelThumb from "@/assets/work/krummel/krummel-thumb.jpg";

import weddingHero from "@/assets/work/wedding/shot-hero.jpg";
import weddingVenue from "@/assets/work/wedding/shot-venue.jpg";
import weddingPalette from "@/assets/work/wedding/shot-palette.png";
import weddingBar from "@/assets/work/wedding/shot-bar.png";
import weddingStay from "@/assets/work/wedding/shot-stay.jpg";
import weddingOurStory from "@/assets/work/wedding/shot-our-story.png";
import weddingGallery from "@/assets/work/wedding/shot-gallery.png";
import weddingSongs from "@/assets/work/wedding/shot-songs.png";
import weddingPhotos from "@/assets/work/wedding/shot-photos.png";
import weddingRsvp from "@/assets/work/wedding/shot-rsvp.png";

import peplaBeforeHome from "@/assets/work/pepla/before-home.png";
import peplaBeforeServices from "@/assets/work/pepla/before-services.png";
import peplaBeforeTestimonials from "@/assets/work/pepla/before-testimonials.png";
import peplaAfterHome from "@/assets/work/pepla/page-home.png";
import peplaAfterServices from "@/assets/work/pepla/page-services.png";
import peplaAfterTestimonials from "@/assets/work/pepla/page-testimonials.png";

import corleonHero from "@/assets/work/corleon/corleon-hero.jpg";
import corleonAbout from "@/assets/work/corleon/corleon-about.jpg";
import corleonThumb from "@/assets/work/corleon/corleon-thumb.jpg";

import angorBeforeHome from "@/assets/work/angor/before-home.jpg";
import angorBeforeCerts from "@/assets/work/angor/before-certifications.jpg";
import angorBeforeNews from "@/assets/work/angor/before-news.jpg";
import angorAfterHome from "@/assets/work/angor/page-home.jpg";
import angorAfterCerts from "@/assets/work/angor/page-certifications.jpg";
import angorAfterNews from "@/assets/work/angor/page-news.jpg";
import angorPost1 from "@/assets/work/angor/post-1-brand.jpg";
import angorPost2 from "@/assets/work/angor/post-2-stat.jpg";
import angorPost3 from "@/assets/work/angor/post-3-team.jpg";
import angorPost4 from "@/assets/work/angor/post-4-education.jpg";
import angorPost5 from "@/assets/work/angor/post-5-cta.jpg";

import krummelPost1 from "@/assets/work/krummel/post-1-inside.jpg";
import krummelPost2 from "@/assets/work/krummel/post-2-menu.jpg";
import krummelPost3 from "@/assets/work/krummel/post-3-events.jpg";

import corleonPost1 from "@/assets/work/corleon/post-1-renting.jpg";
import corleonPost2 from "@/assets/work/corleon/post-2-home.jpg";
import corleonPost3 from "@/assets/work/corleon/post-3-team.jpg";

import peplaPost1 from "@/assets/work/pepla/post-1-brand.jpg";
import peplaPost2 from "@/assets/work/pepla/post-2-stat.jpg";
import peplaPost3 from "@/assets/work/pepla/post-3-review.jpg";

import weddingPrint1 from "@/assets/work/wedding/print-1-savedate.jpg";
import weddingPrint2 from "@/assets/work/wedding/print-2-menu.jpg";
import weddingPrint3 from "@/assets/work/wedding/print-3-table.jpg";

import honeycodePost1 from "@/assets/work/honeycode-studio/post-1-manifesto.jpg";
import honeycodePost2 from "@/assets/work/honeycode-studio/post-2-services.jpg";
import honeycodePost3 from "@/assets/work/honeycode-studio/post-3-cta.jpg";

export type CaseStudyStatus = "Real client" | "Speculative concept" | "Personal project";

export type CaseStudy = {
  slug: string;
  title: string;
  oneLiner: string;
  status: CaseStudyStatus;
  /** "website" case studies show on the homepage's Selected Work grid;
   * "graphic" case studies show on the dedicated /graphic-design page.
   * Both use the exact same case study page template. */
  kind: "website" | "graphic";
  category: string;
  tags: string[];
  thumb: string;
  brief: string;
  goal: string;
  approach: string[];
  images: { src: string; caption: string }[];
  beforeAfter?: { title: string; note: string; before: string; after: string }[];
  deliverables: string[];
  disclaimer?: string;
  external?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "everlune",
    title: "Everlune Photography",
    oneLiner: "Brand identity and full website for a real, launched photography business.",
    status: "Real client",
    kind: "website",
    category: "Brand Identity & Website",
    tags: ["UI Design", "Brand Identity", "Web Design"],
    thumb: everluneSiteHero,
    brief:
      "Christelle was shooting genuinely striking work, warm, golden-hour, unmistakably hers, but Everlune had no mark to put on it yet. No logo, no consistent type, no site to send a booking enquiry to. Just a name and a growing folder of photos that deserved a proper home.",
    goal:
      "Build a mark specific enough that it couldn't be any other photography brand, then carry it through a real site built to lead with the actual photography instead of describing it.",
    approach: [
      "The mark reads as a lens ring first, not a moon: two rings and a twelve-tick sunburst around a single aperture point, a symbol that means ‘photography’ without leaning on a camera icon or a cliché.",
      "Plum Noir became the signature ground, covers, socials, watermarks, with Amber reserved as the one accent that gets to speak: the mark itself, CTAs, and nothing else, so it never gets diluted into decoration.",
      "The website hero drops the usual photographer-site paragraph explaining the work and just shows it: one continuous corridor of real frames, angled like a contact sheet, with the headline doing the only talking a viewer needs before they start scrolling.",
    ],
    deliverables: [
      "Full website design: hero, portfolio, sessions, reviews and contact",
      "Booking enquiry flow",
    ],
    images: [
      { src: everluneSiteHero, caption: "Hero, “Every frame, in focus.”" },
      { src: everluneSitePortfolio, caption: "Portfolio grid, filterable by category" },
      { src: everluneSiteSessions, caption: "Sessions on offer" },
      { src: everluneSiteReviews, caption: "Client reviews" },
      { src: everluneSiteContact, caption: "Contact form and footer" },
    ],
  },
  {
    slug: "corleon",
    title: "Corleon Property",
    oneLiner: "A full rental-property website, designed and built pro bono for a client with no online presence at all.",
    status: "Real client",
    kind: "website",
    category: "Website Design",
    tags: ["UI Design", "Web Design", "Pro Bono"],
    thumb: corleonThumb,
    external: "https://corleonproperty.co.za",
    brief:
      "Corleon Property manages a handful of rental complexes and had no website at all, no way to show a prospective tenant what a unit actually looked like before they booked a viewing. Everything ran on word of mouth and printed flyers.",
    goal:
      "Design and build a full site from a blank page: a homepage that actually sells the lifestyle, an About section that builds trust in the management team, and a clear, browsable listing of every complex on their books.",
    approach: [
      "The homepage leads with a real, calm photo of the grounds rather than a stock property-listing hero, so the first impression is the actual place someone would move into, not a generic real-estate template.",
      "The About section is split into two plainly numbered points, who we are and how we support you, each paired with a real photo of the complexes rather than a wall of marketing copy.",
      "Wireframed and prototyped the full flow in Figma before building it out, then built and maintained a small design system so new complex listings stay visually consistent as the client adds more.",
      "Ran the whole thing as a real client engagement end to end: led the presentation meeting, took feedback, and iterated rather than shipping a single unreviewed draft.",
    ],
    deliverables: [
      "Full website: home, about, complexes listing, contact",
      "A small design system for adding future complex listings consistently",
      "Wireframes and high-fidelity prototypes built in Figma",
      "Live, published site, pro bono engagement",
    ],
    images: [
      { src: corleonHero, caption: "Home: a real photo of the grounds leads, not a stock hero" },
      { src: corleonAbout, caption: "About: two plainly numbered points, paired with real photos" },
    ],
  },
  {
    slug: "smudge",
    title: "Smudge Redesign",
    oneLiner: "A UX audit and redesign concept for a real enterprise software studio's site.",
    status: "Speculative concept",
    kind: "website",
    category: "UX Audit & Website Redesign",
    tags: ["UX Audit", "Web Design", "Design System"],
    thumb: smudgeMockHero,
    disclaimer:
      "Smudge (smudge.co.za) is a real, existing software development company. This is a self-initiated redesign concept built to demonstrate process and skill. It has not been commissioned, requested or endorsed by Smudge, and no client relationship exists. No real Smudge photography, logos or trademarks were used; every visual here is an original design built from scratch.",
    brief:
      "Smudge's actual copy already sounds confident: ‘no ego, no drama,’ ‘we're partners, not dictators,’ a 95% on-time delivery rate across 200-plus projects. The site just buries all of it. The proof of that confidence sits in a wall of client logos instead of an actual result, and a four-step methodology section that reads like every other dev studio's methodology section.",
    goal:
      "Make the site sound as sure of itself as the copy already claims to be. Lead with the number that actually matters, put outcomes ahead of logos, and give the real four-step process a look that doesn't feel borrowed from a template.",
    approach: [
      "The homepage hero now leads with the stat that used to live three scrolls down: 95% on-time, 200+ projects, 16 years. That's the whole pitch, it just needed to go first.",
      "The dark-mode-plus-mint palette every dev studio site defaults to got dropped for something with more spine: a system built on engineering-drawing conventions, title-block metadata, registration crosshairs, dimension lines that literally measure the claims being made, so confidence reads as precision instead of a mood board.",
      "The client-logo wall got replaced with a row of spec-sheet cards: a real metric and a one-line result per engagement, instead of a name badge that says nothing about what actually happened.",
      "The existing Listen, Question, Plan, Execute process is sound. It didn't need new steps, it needed to stop looking like a stock icon set: four bordered panels reading left to right like stations on a build line, instead of four generic icons floating in empty space.",
    ],
    beforeAfter: [
      {
        title: "Homepage Hero",
        note: "The 95% on-time stat used to live three scrolls down. Now it's the first thing you see.",
        before: smudgeBeforeHero,
        after: smudgeMockHero,
      },
      {
        title: "Proof Section",
        note: "The client-logo wall, replaced with outcome tiles: a real metric and a one-line result per engagement.",
        before: smudgeBeforeProof,
        after: smudgeMockProof,
      },
      {
        title: "Process Section",
        note: "Same four real steps, Listen, Question, Plan, Execute, no longer wearing a stock icon set.",
        before: smudgeBeforeProcess,
        after: smudgeMockProcess,
      },
    ],
    deliverables: [
      "Redesigned homepage hero",
      "Outcome-led proof section, replacing the client-logo wall",
      "Redesigned four-step process section",
    ],
    images: [],
  },
  {
    slug: "krummel",
    title: "Krummel Café Redesign",
    oneLiner: "Rebuilding every dead-end page on a real, live restaurant site.",
    status: "Speculative concept",
    kind: "website",
    category: "UX Audit & Website Redesign",
    tags: ["UX Audit", "Web Design", "Information Architecture"],
    thumb: krummelThumb,
    disclaimer:
      "Krummel Café is a real, existing restaurant and events venue. This is a self-initiated redesign concept built to demonstrate process and skill. It has not been commissioned, requested or endorsed by Krummel Café, and no client relationship exists. The real brand's own rust-and-ink palette, wordmark and Playfair Display headings are kept for accuracy; no real client photography beyond what already appears on their live site is used elsewhere.",
    brief:
      "Krummel Café's actual site had a real, specific failure: ‘Book Now’, the one button that appears on every single page, opened an empty events calendar. The About page had a heading and nothing under it. The Gallery was a broken Facebook embed captioned for an entirely different business. Seven pages existed in the nav; most of them led nowhere real.",
    goal:
      "Keep the brand exactly as it is, the rust-and-ink palette, the Playfair Display headings, the pill buttons, and rebuild every page behind it so nothing dead-ends. Not a rebrand. A site that finally does its one job.",
    approach: [
      "The homepage hero survives almost untouched in tone, ‘Where great food, good company & special moments come together’, it just gets real hierarchy, a working nav and an actual path to book, instead of one long dark wall of text over a photo.",
      "‘Book Now’ now leads to a real enquiry form on every page it appears on, not the same empty calendar the live site pointed to from Home, Events and Conferences alike.",
      "About, Café Menu, Events, Conferences and Gallery each get the content their nav item already promised: real prices, real packages, a working photo grid, so the site stops asking visitors to trust empty pages.",
    ],
    beforeAfter: [
      {
        title: "Home",
        note: "The real homepage, hero photo and copy kept, rebuilt with working hierarchy and an actual path to book instead of one dark wall of text.",
        before: krummelHomeBefore,
        after: krummelHomeAfter,
      },
    ],
    deliverables: [
      "Redesigned Home, About, Café Menu, Events, Conferences, Gallery and Contact pages",
      "A working ‘Book Now’ enquiry flow, replacing the dead calendar link",
      "Same real brand palette, wordmark and type system throughout",
      "Speculative concept, not a commissioned engagement",
    ],
    images: [
      { src: krummelHomeAfter, caption: "Home: real hierarchy, a working path to book" },
      { src: krummelAboutAfter, caption: "About: an actual story, instead of a bare heading" },
      { src: krummelMenuAfter, caption: "Café Menu: real dishes, real prices" },
      { src: krummelEventsAfter, caption: "Events & Functions: process, photography and packages" },
      { src: krummelGalleryAfter, caption: "Gallery: a working photo grid, not a broken embed" },
    ],
  },
  {
    slug: "pepla",
    title: "Pepla Redesign",
    oneLiner: "Cutting a real software studio's site from six clashing accent colours down to the three it already owns.",
    status: "Speculative concept",
    kind: "website",
    category: "UX Audit & Website Redesign",
    tags: ["UX Audit", "Web Design", "Design System"],
    thumb: peplaAfterHome,
    disclaimer:
      "Pepla (pepla.co.za) is a real, existing software development studio. This is a self-initiated redesign concept built to demonstrate process and skill. It has not been commissioned, requested or endorsed by Pepla, and no client relationship exists. Pepla's own logo and real client testimonials are shown for accuracy; the after mockups are original layouts built from scratch.",
    brief:
      "Eleven years of real client testimonials say Pepla's work is good. The live site buries that under a busy animated circuit-board background, a cookie banner sitting over the hero, and a services grid where nine cards fight each other with six or seven different accent colours, none of them the brand's own. The testimonials section sits behind a stalled third-party widget, one review even renders half-loaded and stuck at low opacity.",
    goal:
      "Keep everything that's actually true, eleven years in production, nine real services, real client praise, and stop the site from competing with itself. Pepla's own logo already has exactly three colours. Use those three, deliberately, and nothing else.",
    approach: [
      "The circuit-board background and cookie banner are gone. One headline, the real logo, and a single CTA carry the hero, with a small monospace ‘$> pepla --build’ chip standing in for the terminal detail the live site already reaches for.",
      "The nine services keep their real names and descriptions but drop the six-plus clashing accent colours for a fixed, calm rotation of the brand's own orange, green and blue, three colours doing the work seven used to.",
      "The stalled testimonial widget is replaced with three of Pepla's own real, named client reviews, Jackeline Sass, Stephan Ferreira and Hanno van Aarde of Briisk Insur Fintech, in plain matching cards instead of a rotating widget that gets stuck mid-load.",
    ],
    beforeAfter: [
      {
        title: "Home",
        note: "The circuit-board background and cookie banner, gone. One headline, the real logo, three brand colours used once each.",
        before: peplaBeforeHome,
        after: peplaAfterHome,
      },
      {
        title: "Services",
        note: "Nine real services, down from six-plus clashing accent colours to a fixed three-colour rotation.",
        before: peplaBeforeServices,
        after: peplaAfterServices,
      },
      {
        title: "Testimonials",
        note: "A stalled third-party widget, replaced with three of Pepla's own real, named client reviews.",
        before: peplaBeforeTestimonials,
        after: peplaAfterTestimonials,
      },
    ],
    deliverables: [
      "Redesigned homepage hero",
      "Restyled nine-card services grid on a fixed three-colour system",
      "Redesigned testimonials section using real, named client quotes",
      "Speculative concept, not a commissioned engagement",
    ],
    images: [],
  },
  {
    slug: "angor",
    title: "ANGOR Property Specialists",
    oneLiner: "A navy rebuild for the country's largest residential managing agent, plus a 5-post social system.",
    status: "Speculative concept",
    kind: "website",
    category: "UX Audit, Website Redesign & Social Media",
    tags: ["UX Audit", "Web Design", "Social Media", "Design System"],
    thumb: angorAfterHome,
    disclaimer:
      "ANGOR Property Specialists (angor.co.za) is a real company. Elsie works there in an administrative capacity (see the Portfolio Administrator role on her CV); this is a self-initiated redesign concept built to demonstrate design skill, not a commissioned design engagement, and not part of her actual role there. No design client relationship exists. The real logo, real brand navy and real, published article headlines are shown for accuracy; the after mockups and social posts are original layouts built from scratch.",
    brief:
      "ANGOR manages over 60,000 units and R40 billion in schemes, the largest residential managing agent in the country, and the real site undersells all of it. A cookie banner sits directly over the homepage copy on load. A whole 'Certifications' section renders as a large empty box around three tiny text links. The 'Latest Property News' cards are solid navy rectangles, no article images ever load. For a company whose entire pitch is competence and accountability, the site reads as unfinished.",
    goal:
      "Keep the real navy, it's a good, serious colour that fits a company handling other people's money, but stop it reading as corporate wallpaper. Fix the three sections that are actually broken, and add one confident accent colour used deliberately instead of never.",
    approach: [
      "The cookie banner and empty hero space are gone. The real headline gets rewritten to say what ANGOR actually does for a trustee, not just its job title, with the scale of the business (R40bn+ managed) surfaced as a stat instead of buried in a paragraph three scrolls down.",
      "One colour, a warm coral, gets added on top of the real navy and used exactly where it earns its place: certification marks, one CTA, one line of copy per screen, so restraint reads as confidence rather than caution.",
      "The empty 'Certifications' box becomes an actual trust section: three navy cards, each with its own mark and a one-line reason to believe it, replacing three tiny links in a field of white space.",
      "The broken 'Latest Property News' cards get real treatment: duotone photography and a colour-block card standing in for the third, so the grid reads as edited content instead of a template that never finished loading.",
      "The same navy-plus-coral system, Fraunces headlines and one deliberate accent, extends into a 5-post social set: a brand statement, a scale stat, a real-people culture post, a plain-English compliance post, and a closing CTA.",
    ],
    beforeAfter: [
      {
        title: "Home",
        note: "The cookie banner overlapping the copy, gone. One rewritten headline, the real scale of the business surfaced as a stat.",
        before: angorBeforeHome,
        after: angorAfterHome,
      },
      {
        title: "Certifications",
        note: "A large empty box around three text links, rebuilt as an actual trust section with three marked, reasoned cards.",
        before: angorBeforeCerts,
        after: angorAfterCerts,
      },
      {
        title: "Property News",
        note: "Solid navy rectangles where article images never loaded, replaced with real photo and colour-block treatment.",
        before: angorBeforeNews,
        after: angorAfterNews,
      },
    ],
    deliverables: [
      "Redesigned homepage hero",
      "Rebuilt Certifications trust section",
      "Rebuilt Latest Property News card grid",
      "Speculative concept, not a commissioned engagement",
    ],
    images: [],
  },
  {
    slug: "wedding",
    title: "Ivan & Elsie: Wedding Site",
    oneLiner: "A real, live, full-stack invitation site: RSVPs, song requests and guest uploads.",
    status: "Personal project",
    kind: "website",
    category: "Full-Stack Product Design",
    tags: ["UI Design", "UX Flows", "Front-End Build"],
    thumb: weddingHero,
    brief:
      "Every wedding site looks the same: one stock font, one photo carousel, an RSVP form nobody trusts. Ours had to actually get used, for a venue and a guest list with real, specific logistics, not placeholder ones. It's not a static brochure either: guests log real RSVPs, request their own songs for the DJ, and upload their own photos, all live on the actual site.",
    goal:
      "Design a site personal enough to feel handwritten, organised enough that nobody has to WhatsApp asking what time the ceremony starts, and functional enough that guests can actually do things on it, not just read it.",
    approach: [
      "A calligraphy display face carries our names over a real engagement photo, so the hero reads as an invitation, not a landing page.",
      "The venue section is built as an itinerary, arrival, ceremony, canapés, reception, closing time, next to the actual address and a real photo of the ceremony space, so ‘when’ and ‘where’ are answered in the same glance.",
      "The dress code ships as an actual five-swatch palette with hex codes, not a vague ‘wear neutrals’ line, because ‘smart casual’ means five different outfits across two families.",
      "Small personal touches earned their own section rather than getting buried in an FAQ, including a line-drawing of our dog Bobby presiding over the self-serve bar, because a wedding site with zero personality is worse than no wedding site.",
      "Beyond the static pages, guests can submit and upvote their own song requests for the dance floor, a live, database-backed request board rather than a suggestion box nobody checks.",
    ],
    deliverables: [
      "Multi-page wedding site: hero, venue and itinerary, dress code palette, bar, accommodation, our story",
      "Live guest features: multi-step RSVP flow, song request board with search and upvoting, guest photo uploads, and a browsable gallery",
      "Designed by Elsie, built in partnership with Stacktrace",
    ],
    images: [
      { src: weddingHero, caption: "Hero: the announcement and the date" },
      { src: weddingVenue, caption: "Venue: the day's itinerary, next to the ceremony space" },
      { src: weddingPalette, caption: "Dress code: an actual five-swatch palette, not a suggestion" },
      { src: weddingBar, caption: "Bobby's Bar: the self-serve bar, with Bobby on duty" },
      { src: weddingStay, caption: "Accommodation: real options near the venue, with real prices" },
      { src: weddingOurStory, caption: "Our Story: a real timeline, not a placeholder page" },
      { src: weddingGallery, caption: "Gallery: photos from the engagement shoot onward" },
      { src: weddingSongs, caption: "Song requests: guests search, request and upvote live (names blurred)" },
      { src: weddingPhotos, caption: "Guest photo uploads: a live drop for photos from the day" },
      { src: weddingRsvp, caption: "RSVP: a real multi-step flow, not a mailto link" },
    ],
  },
  {
    slug: "honeycode-studio",
    title: "Honeycode Design Studio",
    oneLiner: "Designing and shipping a real, live freelance studio brand and product from scratch.",
    status: "Personal project",
    kind: "website",
    category: "Brand, Product Design & Front-End Build",
    tags: ["Brand Identity", "Design System", "React / Tailwind"],
    thumb: "",
    external: "https://www.honeycodedesign.com",
    brief:
      "Honeycode Design Studio is my own freelance studio, live at honeycodedesign.com. It needed to do three jobs at once: sell design services convincingly, showcase a growing body of client and speculative work, and quote and onboard new clients without me manually chasing every enquiry by hand.",
    goal:
      "Design and build a bold, dark, honey-gold brand and site that reads as confident as the studio's own pitch, backed by a real content-managed React app rather than a page builder, so pricing, packages and portfolio stay easy to update.",
    approach: [
      "A true-black-and-honey-gold system carries the whole brand: one loud accent colour reserved for calls to action and the mark itself, everything else kept to black, bone and a single condensed display face for headlines.",
      "The whole site runs on a single typed content file, so copy, pricing and portfolio entries update without touching a single component, the same pattern used to build this portfolio.",
      "A multi-step quote flow and a contact form both post to a small Hono API on Cloudflare Workers, which emails a notification the moment someone submits, replacing a plain 'email me' link with an actual conversion path.",
      "Case studies use a dedicated modal/detail pattern with before/after comparisons for redesign work and full identity breakdowns for brand work, the same structure this very portfolio's case study pages are built on.",
    ],
    deliverables: [
      "Full brand identity: logo, colour system, type system",
      "Multi-page marketing site: home, services, pricing, portfolio, manifesto",
      "Quote request flow and contact form, wired to a live email-notification API",
      "Deployed as two Cloudflare Workers (frontend + API) with CI/CD via GitHub Actions",
    ],
    images: [],
  },

  // ---- Graphic design case studies: same template, listed on
  // /graphic-design instead of the homepage's Selected Work grid. ----
  {
    slug: "everlune-identity",
    title: "Everlune: Brand Identity",
    oneLiner: "A lens-ring mark and full identity system for a real, launched photography brand.",
    status: "Real client",
    kind: "graphic",
    category: "Brand Identity",
    tags: ["Logo Design", "Brand Identity", "Print"],
    thumb: everluneLockup,
    brief:
      "Christelle had a name and a growing folder of striking, golden-hour photography, but nothing to put on an invoice, a watermark or a business card. No mark, no consistent colour, nothing that said this was one brand rather than a folder of nice photos.",
    goal:
      "Build a mark specific enough that it couldn't be any other photography brand, then carry it through every real, physical touchpoint a client actually sees.",
    approach: [
      "The mark reads as a lens ring first, not a moon: two rings and a twelve-tick sunburst around a single aperture point, a symbol that means ‘photography’ without leaning on a camera icon or a cliché.",
      "Plum Noir became the signature ground, covers, socials, watermarks, with Amber reserved as the one accent that gets to speak: the mark itself and nothing else, so it never gets diluted into decoration.",
      "The watermark treatment reads as a signature, not a defacement: the mark sits bottom-right at 70% opacity, scaled to roughly 6% of image width, never centred and never stamped repeatedly.",
    ],
    deliverables: [
      "Primary mark and reversed lockup",
      "Full colour and type system",
      "Business card application",
      "Photo watermark treatment",
    ],
    images: [
      { src: everluneLockup, caption: "Primary lockup, on Bone" },
      { src: everluneBusinessCard, caption: "Business card, front" },
      { src: everluneWatermark, caption: "Photo treatment: watermark placement" },
    ],
  },
  {
    slug: "smudge-social",
    title: "Smudge: Social Media",
    oneLiner: "A 5-post Instagram system extending a UX redesign's visual language into social.",
    status: "Speculative concept",
    kind: "graphic",
    category: "Social Media",
    tags: ["Social Media", "Instagram", "Design System"],
    thumb: smudgePost1,
    disclaimer:
      "Smudge (smudge.co.za) is a real, existing software development company. This is a self-initiated concept extending the Smudge website redesign's visual system into social, built to demonstrate process and skill. It has not been commissioned, requested or endorsed by Smudge, and no client relationship exists. Every visual here is an original design built from scratch.",
    brief:
      "The Smudge website redesign built a whole visual system, engineering-drawing conventions, dimension lines, spec-sheet cards, that had nowhere to live once someone left the site. A redesign that only exists on one webpage doesn't prove it can carry a brand anywhere else.",
    goal:
      "Extend the exact same system into five Instagram posts, so the engineering-drawing language reads as a real, portable identity rather than a one-page mockup.",
    approach: [
      "Every post reuses the same title-block metadata, registration crosshairs and dimension-line motifs from the website redesign, so the feed and the site read as one brand, not two separate exercises.",
      "The real stats and quotes already sitting in Smudge's own copy, ‘95% on-time’, ‘200+ projects’, ‘we're partners, not dictators’, become the entire content of the feed instead of needing new copy invented for it.",
      "One post drops all imagery and runs on a tech-stack collage alone, because a studio confident in its own engineering shouldn't need a stock photo to prove it.",
    ],
    deliverables: [
      "5 Instagram posts (1080 × 1350) extending the website redesign's visual system",
      "Speculative concept, not a commissioned engagement",
    ],
    images: [
      { src: smudgePost1, caption: "Instagram: the stat, standalone" },
      { src: smudgePost2, caption: "Instagram: “We're partners, not dictators.”" },
      { src: smudgePost3, caption: "Instagram: the 200+ headline statement" },
      { src: smudgePost4, caption: "Instagram: tech-agnostic stack collage" },
      { src: smudgePost5, caption: "Instagram: dual stat card" },
    ],
  },
  {
    slug: "angor-social",
    title: "ANGOR: Social Media",
    oneLiner: "A 5-post Instagram system extending the ANGOR website redesign into social.",
    status: "Speculative concept",
    kind: "graphic",
    category: "Social Media",
    tags: ["Social Media", "Instagram", "Brand System"],
    thumb: angorPost1,
    disclaimer:
      "ANGOR Property Specialists (angor.co.za) is a real company. Elsie works there in an administrative capacity; this is a self-initiated concept extending the ANGOR website redesign into social, built to demonstrate design skill, not a commissioned design engagement and not part of her actual role there. No design client relationship exists.",
    brief:
      "The ANGOR website redesign built a navy-and-coral system confident enough to replace three broken sections of the site. None of that confidence existed anywhere ANGOR actually posts day to day.",
    goal:
      "Carry the same real navy, the same one deliberate coral accent, and the same real numbers (R40bn+, 60,000 units) into a five-post Instagram system that reads like the same brand, not a separate marketing exercise.",
    approach: [
      "Every post reuses the exact navy and coral from the website redesign, so a scrolling feed and a scheme's actual managing agent site read as the same confident brand.",
      "The real scale of the business, R40 billion managed, becomes its own standalone stat post instead of a line buried in an About paragraph.",
      "One post uses real, duotone-treated photography of people at work; the rest run on typography alone, so the account doesn't lean on stock imagery to say something it can say in its own voice.",
    ],
    deliverables: [
      "5 Instagram posts extending the same navy-and-coral system",
      "Speculative concept, not a commissioned engagement",
    ],
    images: [
      { src: angorPost1, caption: "Instagram: brand statement post" },
      { src: angorPost2, caption: "Instagram: R40bn+ scale stat" },
      { src: angorPost3, caption: "Instagram: the people behind the schemes" },
      { src: angorPost4, caption: "Instagram: POPIA and fiduciary duty, in plain English" },
      { src: angorPost5, caption: "Instagram: closing CTA" },
    ],
  },
  {
    slug: "krummel-social",
    title: "Krummel Café: Social Media",
    oneLiner: "A 3-post Instagram set extending the café's real rust-and-ink brand into social.",
    status: "Speculative concept",
    kind: "graphic",
    category: "Social Media",
    tags: ["Social Media", "Instagram", "Food & Beverage"],
    thumb: krummelPost1,
    disclaimer:
      "Krummel Café is a real, existing restaurant and events venue. This is a self-initiated concept extending the Krummel website redesign into social, built to demonstrate process and skill. It has not been commissioned, requested or endorsed by Krummel Café, and no client relationship exists. The real brand's own rust-and-ink palette and Playfair Display headings are kept for accuracy; photography is drawn from the same licensed imagery already used on their site.",
    brief:
      "The Krummel redesign fixed a site full of dead ends, but a café's actual regulars mostly find it through Instagram, not a website nav bar. The same warm, rust-and-ink identity had nowhere to live in a feed.",
    goal:
      "Carry the real palette, wordmark tone and Playfair Display headings into three posts built around what a café actually posts: the space, the menu, the events it hosts.",
    approach: [
      "Every post keeps the same dark, warm-lit photography and rust accent already established on the redesigned site, so the feed and the website read as the same café, not two different brands.",
      "Copy stays close to the real site's own voice, ‘good food, good company & special moments’, rather than inventing a separate, punchier social voice that wouldn't match a walk-in visit.",
      "One post is built specifically for private events and functions, the highest-value booking a café like this gets, rather than treating every post as generic brand awareness.",
    ],
    deliverables: [
      "3 Instagram posts extending the redesigned site's rust-and-ink system",
      "Speculative concept, not a commissioned engagement",
    ],
    images: [
      { src: krummelPost1, caption: "Instagram: “A look inside”" },
      { src: krummelPost2, caption: "Instagram: café menu spotlight" },
      { src: krummelPost3, caption: "Instagram: events & functions" },
    ],
  },
  {
    slug: "corleon-social",
    title: "Corleon Property: Social Media",
    oneLiner: "A 3-post social set promoting Corleon's real rental complexes.",
    status: "Real client",
    kind: "graphic",
    category: "Social Media",
    tags: ["Social Media", "Real Estate", "Print"],
    thumb: corleonPost1,
    brief:
      "Corleon's new site gave the complexes a proper home online, but a rental listing still needs to be actively promoted to actually fill units, not just sit on a website waiting to be found.",
    goal:
      "Extend the same elegant, minimal identity, Cormorant Garamond, black on cream, real property photography, into social posts built to promote specific complexes and the team behind them.",
    approach: [
      "The same restrained, editorial type treatment from the website carries into every post, so a listing photo and the actual site read as one consistent brand.",
      "One post runs on real aerial photography of the complexes, doing the same job the website's own imagery does: showing the place, not describing it.",
      "A brand-only post, no photo, exists specifically for feed variety, so the account doesn't rely on new property photography for every single post.",
    ],
    deliverables: [
      "3 social posts promoting real rental complexes",
      "Pro bono engagement, same as the website",
    ],
    images: [
      { src: corleonPost1, caption: "Now renting: real complexes" },
      { src: corleonPost2, caption: "Brand statement post" },
      { src: corleonPost3, caption: "“You are in good hands”" },
    ],
  },
  {
    slug: "pepla-social",
    title: "Pepla: Social Media",
    oneLiner: "A 3-post Instagram system extending the Pepla website redesign, using a real client review.",
    status: "Speculative concept",
    kind: "graphic",
    category: "Social Media",
    tags: ["Social Media", "Instagram", "Tech & Software"],
    thumb: peplaPost1,
    disclaimer:
      "Pepla (pepla.co.za) is a real, existing software development studio. This is a self-initiated concept extending the Pepla website redesign into social, built to demonstrate process and skill. It has not been commissioned, requested or endorsed by Pepla, and no client relationship exists. Pepla's own logo and a real, published client review are shown for accuracy.",
    brief:
      "The Pepla redesign proved the brand's own three colours could carry a whole homepage. The same real proof points, eleven years in production, 200-plus projects, real client praise, had nowhere to live outside that one page.",
    goal:
      "Carry the exact same navy, green, orange and blue system into three posts built entirely from things Pepla can already prove: its tenure, its delivery record and its own clients' words.",
    approach: [
      "The first post leads with the same headline logic as the redesigned homepage, so the feed and the site make the identical pitch.",
      "The scale of the business, eleven years, 200-plus projects, becomes its own standalone stat post instead of a line of body copy nobody stops to read.",
      "One of Pepla's own real, five-star client reviews runs as its own post, named and dated, because a studio with genuine praise on record shouldn't need to invent a testimonial graphic.",
    ],
    deliverables: [
      "3 Instagram posts extending the website redesign's navy-and-colour system",
      "Speculative concept, not a commissioned engagement",
    ],
    images: [
      { src: peplaPost1, caption: "Instagram: brand statement post" },
      { src: peplaPost2, caption: "Instagram: 11-year tenure stat" },
      { src: peplaPost3, caption: "Instagram: real client review" },
    ],
  },
  {
    slug: "wedding-print",
    title: "Ivan & Elsie: Wedding Print Suite",
    oneLiner: "A save-the-date, menu and table card extending a real, live wedding site into print.",
    status: "Personal project",
    kind: "graphic",
    category: "Print Design",
    tags: ["Print Design", "Typography", "Personal Project"],
    thumb: weddingPrint1,
    brief:
      "The wedding site covers the digital side, RSVPs, song requests, the venue itinerary, but a wedding day still runs on physical pieces: something on the table, something confirming the date in someone's hand.",
    goal:
      "Carry the site's real five-swatch palette, calligraphy display type and actual engagement photography into a small print suite that would sit on an actual table on the day.",
    approach: [
      "The save-the-date reuses the real engagement photograph and the same calligraphy treatment as the site's own hero, so the physical and digital invitations read as one occasion, not two separate design jobs.",
      "The menu and table cards drop the photography entirely and lean on the palette's rust and burgundy against warm cream, so the printed pieces feel considered rather than like a matching set of stickers.",
      "Every piece uses the real date, the real dress-code colours and, on the table card, an actual in-joke from the site (Bobby's Bar) instead of generic placeholder wedding copy.",
    ],
    deliverables: [
      "Save-the-date card",
      "Reception menu card",
      "Table seating card",
      "Personal project, not a commissioned engagement",
    ],
    images: [
      { src: weddingPrint1, caption: "Save the date" },
      { src: weddingPrint2, caption: "Reception menu card" },
      { src: weddingPrint3, caption: "Table seating card" },
    ],
  },
  {
    slug: "honeycode-social",
    title: "Honeycode Design Studio: Social Media",
    oneLiner: "A 3-post Instagram system carrying my own studio's brand voice into social.",
    status: "Personal project",
    kind: "graphic",
    category: "Social Media",
    tags: ["Social Media", "Brand Identity", "Personal Project"],
    thumb: honeycodePost1,
    brief:
      "Honeycode Design Studio's own site has a fully worked-out black-and-honey-gold system and a manifesto written entirely in its own unfiltered voice. None of that had a matching social presence built to carry it.",
    goal:
      "Turn the studio's own real copy, the manifesto, the service list, the closing line, into a three-post system using the exact same mark, colour and type system as the live site.",
    approach: [
      "The studio's own real mark, a honeycomb-hexagon logo, carries every post, so the feed and honeycodedesign.com read as the same account rather than a rebrand exercise.",
      "The manifesto's own lines, ‘No beige. No boring. No apologies.’, become the content directly, no softened, more ‘professional’ version invented for social.",
      "One post lists the actual four services on offer as plain tags rather than an illustrated icon set, keeping the same restraint the rest of the brand runs on.",
    ],
    deliverables: [
      "3 Instagram posts using the studio's real brand system",
      "Personal project, my own studio",
    ],
    images: [
      { src: honeycodePost1, caption: "Instagram: manifesto post" },
      { src: honeycodePost2, caption: "Instagram: services list" },
      { src: honeycodePost3, caption: "Instagram: closing CTA" },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((cs) => cs.slug === slug);
}
