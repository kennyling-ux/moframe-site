"use client";

import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import { Globe, MapPin, Server, Bot, TrendingUp, Sparkles } from "lucide-react";

const features = [
  {
    icon: Globe,
    label: "FREE",
    title: "Professional Website",
    desc: "Custom-designed, mobile-first website that loads in under 2 seconds. Your 24/7 salesperson.",
    color: "blue",
  },
  {
    icon: MapPin,
    label: "FREE",
    title: "Custom Domain",
    desc: "Your own .com.my or .com domain — the digital address that builds trust with Malaysian customers.",
    color: "teal",
  },
  {
    icon: Server,
    label: "FREE",
    title: "Fast Web Hosting",
    desc: "Enterprise-grade hosting with 99.9% uptime. No shared servers, no slow load times.",
    color: "indigo",
  },
  {
    icon: Bot,
    label: "FREE",
    title: "AI Chatbot",
    desc: "Captures leads 24/7, answers FAQs, and books appointments — even when you're asleep.",
    color: "violet",
  },
  {
    icon: TrendingUp,
    label: "INCLUDED",
    title: "SEO Optimisation",
    desc: "On-page SEO, keyword strategy, and monthly content to rank your business on Google.",
    color: "emerald",
  },
  {
    icon: Sparkles,
    label: "INCLUDED",
    title: "GEO Optimisation",
    desc: "We optimise your content so ChatGPT, Claude, and Perplexity recommend your business when AI is asked.",
    color: "amber",
  },
];

const colorMap: Record<string, { bg: string; icon: string; badge: string }> = {
  blue: {
    bg: "bg-blue-50 border-blue-100 group-hover:border-blue-200",
    icon: "bg-blue-100 text-blue-600",
    badge: "bg-blue-600 text-white",
  },
  teal: {
    bg: "bg-teal-50 border-teal-100 group-hover:border-teal-200",
    icon: "bg-teal-100 text-teal-600",
    badge: "bg-teal-600 text-white",
  },
  indigo: {
    bg: "bg-indigo-50 border-indigo-100 group-hover:border-indigo-200",
    icon: "bg-indigo-100 text-indigo-600",
    badge: "bg-indigo-600 text-white",
  },
  violet: {
    bg: "bg-violet-50 border-violet-100 group-hover:border-violet-200",
    icon: "bg-violet-100 text-violet-600",
    badge: "bg-violet-600 text-white",
  },
  emerald: {
    bg: "bg-emerald-50 border-emerald-100 group-hover:border-emerald-200",
    icon: "bg-emerald-100 text-emerald-600",
    badge: "bg-emerald-600 text-white",
  },
  amber: {
    bg: "bg-amber-50 border-amber-100 group-hover:border-amber-200",
    icon: "bg-amber-100 text-amber-600",
    badge: "bg-amber-600 text-white",
  },
};

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function WhatYouGet() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="what-you-get" ref={ref} className="py-24 px-4 sm:px-6 bg-[oklch(0.97_0.005_264)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-emerald-50 text-emerald-700 border border-emerald-200 mb-4">
            Everything Included
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance">
            Your Complete Digital{" "}
            <span className="gradient-text">Growth Stack</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Six tools that used to cost RM 10,000+ upfront — bundled into one monthly plan.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map(({ icon: Icon, label, title, desc, color }) => {
            const c = colorMap[color];
            return (
              <motion.div
                key={title}
                variants={cardVariants}
                className={`group relative rounded-2xl border p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${c.bg}`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${c.icon} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`px-2.5 py-1 rounded-md text-xs font-bold tracking-wide ${c.badge}`}>
                    {label}
                  </span>
                </div>
                <h3 className="font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
