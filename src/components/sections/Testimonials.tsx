"use client";

import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Zulaikha Mohamad",
    role: "Owner, Warung Mak Zul",
    location: "Kuala Lumpur",
    plan: "Growth Plan",
    avatar: "ZM",
    avatarBg: "bg-[#E9E0D3] text-[#912428]",
    quote:
      "Before MoFrame, I had no website and relied 100% on word of mouth. Within 2 months of launch, customers started finding me on Google. My weekend slots are fully booked now. Worth every ringgit.",
  },
  {
    name: "David Lim",
    role: "Director, Lim & Associates",
    location: "Penang",
    plan: "Growth Plan",
    avatar: "DL",
    avatarBg: "bg-[#212121] text-white",
    quote:
      "I'd been burned by agencies before — vague results, no transparency. MoFrame built my site in 4 days, explained exactly what SEO they were doing, and my firm appeared on Google's first page within 3 months. Genuinely impressed.",
  },
  {
    name: "Priya Krishnan",
    role: "Founder, Glow Aesthetics",
    location: "Johor Bahru",
    plan: "Starter Plan",
    avatar: "PK",
    avatarBg: "bg-[#E9E0D3] text-[#912428]",
    quote:
      "The AI chatbot alone saves me hours every week — it handles enquiries and bookings 24/7 while I sleep. I've tried other agencies but none bundled everything together like this. Best decision for my salon.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 bg-[#f9f6f3]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-amber-50 text-amber-700 border border-amber-200 mb-4">
            Client Stories
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance text-[#212121]">
            Real Businesses.{" "}
            <span className="gradient-text">Real Results.</span>
          </h2>
          <p className="mt-4 text-lg text-[#787878] max-w-xl mx-auto">
            From F&B to professional services — here&apos;s what our clients say after going live.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map(({ name, role, location, plan, avatar, avatarBg, quote }) => (
            <motion.div
              key={name}
              variants={cardVariants}
              className="relative bg-white rounded-2xl border border-[#e5e0da] p-6 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-[#e5e0da] shrink-0" />

              <p className="text-sm text-[#212121] leading-relaxed flex-1">&ldquo;{quote}&rdquo;</p>

              <div className="flex gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-[#f5f2ef]">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${avatarBg}`}>
                  {avatar}
                </div>
                <div>
                  <div className="font-bold text-sm text-[#212121]">{name}</div>
                  <div className="text-xs text-[#787878]">{role} · {location}</div>
                </div>
                <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-[#f5f2ef] text-[#787878] font-medium whitespace-nowrap">
                  {plan}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
