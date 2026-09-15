// Real client reviews, quoted verbatim from Honeycode Design Studio's
// on-record testimonials (honeycodedesign.com).

import hennieLogo from "@/assets/brands/hennies-logo.png";
import everluneLogo from "@/assets/brands/everlune-logo.png";

export type Testimonial = {
  name: string;
  company: string;
  role: string;
  quote: string;
  logo: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Hennie's",
    company: "Hennie's",
    role: "Owner, Hennie's",
    quote:
      "Elsie is a pleasure to work with! She's always keen to take on any challenge we throw her way and consistently goes above and beyond to deliver the best work possible. Her creativity and professionalism makes her an incredible addition to any creative team.",
    logo: hennieLogo,
    rating: 5,
  },
  {
    name: "Christelle",
    company: "Everlune Photography",
    role: "Owner, Everlune Photography",
    quote:
      "I just want to say a HUGE thank you for the amazing work you did! You are honestly so talented and absolutely amazing at what you do. I'm completely obsessed with how everything turned out, it's even better than I imagined!\n\nThank you for bringing my vision to life and putting so much care and detail into your work. I couldn't be happier with the final result! I would 100% recommend you to anyone looking for someone who is talented, professional, and truly amazing at what they do.\n\nThank you again, I'm absolutely in love!",
    logo: everluneLogo,
    rating: 5,
  },
];
