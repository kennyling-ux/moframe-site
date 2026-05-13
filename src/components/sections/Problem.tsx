"use client";

import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import { TrendingDown, DollarSign, Frown } from "lucide-react";

const pains = [
  {
    icon: DollarSign,
    stat: "RM 3,000–8,000",
    title: "Website costs upfront",
    body: "Before a single visitor even lands on your site, you've already paid thousands. And that's just the beginning.",
  },
  {
    icon: TrendingDown,
    stat: "RM 1,500–6,000/mo",
    title: "SEO on top of that",
    body: "Every month, agencies charge separately for SEO — often with vague results and no guarantees.",
  },
  {
    icon: Frown,
    stat: "Most agencies",
    title: "Don't include GEO, chatbot, or hosting",
    body: "AI-powered search is here. If your business isn't optimised for ChatGPT and Google AI, you're invisible.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Problem() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 bg-[#E9E0D3]/40">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-red-50 text-[#EE2234] border border-red-100 mb-4">
            The Problem
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance text-[#212121]">
            Most SMEs Pay RM&nbsp;5,000–10,000{" "}
            <span className="text-[#EE2234]">Before Marketing Even Starts</span>
          </h2>
          <p className="mt-4 text-lg text-[#787878] max-w-2xl mx-auto text-balance">
            The traditional agency model was built to extract, not to grow your business.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {pains.map(({ icon: Icon, stat, title, body }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              className="group relative bg-white rounded-2xl border border-red-100 p-6 hover:border-[#EE2234]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-6 h-6 text-[#EE2234]" />
              </div>
              <div className="text-2xl font-bold text-[#EE2234] mb-1">{stat}</div>
              <h3 className="font-bold text-[#212121] mb-2">{title}</h3>
              <p className="text-sm text-[#787878] leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="mt-14 text-center"
        >
          <div className="inline-block bg-white border border-[#e5e0da] rounded-2xl px-8 py-6 shadow-sm">
            <p className="text-xl sm:text-2xl font-bold text-[#212121]">
              We thought that was ridiculous.{" "}
              <span className="gradient-text">So we fixed it.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
