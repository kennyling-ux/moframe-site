"use client";

import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import { Check, Zap, ArrowRight, Star } from "lucide-react";

const WA_URL = (plan: string) =>
  `https://wa.me/60123548676?text=${encodeURIComponent(`Hi, I'm interested in the MoFrame ${plan} plan. Can you tell me more?`)}`;

const plans = [
  {
    name: "Starter",
    price: "1,499",
    tagline: "Perfect to establish your online presence",
    highlight: false,
    badge: null,
    features: [
      { label: "Professional Website", free: true },
      { label: "Custom Domain (.com.my)", free: true },
      { label: "Fast Web Hosting", free: true },
      { label: "AI Chatbot (basic)", free: true },
      { label: "SEO Foundation Setup", free: true },
      { label: "GEO Optimisation", free: true },
      { label: "Mobile-First Design", free: true },
      { label: "WhatsApp Integration", free: true },
      { label: "Up to 5 Pages", free: false },
      { label: "Monthly SEO Report", free: false },
    ],
  },
  {
    name: "Growth",
    price: "2,499",
    tagline: "For SMEs ready to dominate search",
    highlight: true,
    badge: "Most Popular",
    features: [
      { label: "Professional Website", free: true },
      { label: "Custom Domain (.com.my)", free: true },
      { label: "Fast Web Hosting", free: true },
      { label: "AI Chatbot (advanced)", free: true },
      { label: "Advanced SEO + Content", free: true },
      { label: "GEO Optimisation", free: true },
      { label: "Mobile-First Design", free: true },
      { label: "WhatsApp Integration", free: true },
      { label: "Up to 10 Pages", free: false },
      { label: "Monthly SEO Report + Strategy Call", free: false },
    ],
  },
  {
    name: "Scale",
    price: "4,499",
    tagline: "Full-stack growth with Google Ads",
    highlight: false,
    badge: null,
    features: [
      { label: "Professional Website", free: true },
      { label: "Custom Domain (.com.my)", free: true },
      { label: "Fast Web Hosting", free: true },
      { label: "AI Chatbot (custom flows)", free: true },
      { label: "Full SEO + Content Calendar", free: true },
      { label: "GEO Optimisation", free: true },
      { label: "Mobile-First Design", free: true },
      { label: "WhatsApp Integration", free: true },
      { label: "Unlimited Pages", free: false },
      { label: "Google Ads Management*", free: false },
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Pricing() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="plans" ref={ref} className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-red-50 text-[#EE2234] border border-red-100 mb-4">
            Simple Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance text-[#212121]">
            Start Today. Pay Monthly.{" "}
            <span className="gradient-text">Cancel Anytime.</span>
          </h2>
          <p className="mt-4 text-lg text-[#787878] max-w-xl mx-auto">
            Everything you need to get found online — bundled into one transparent monthly price.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-semibold">
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            14-day money-back guarantee — no questions asked
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              className={`relative flex flex-col rounded-2xl border p-7 transition-all duration-300 ${
                plan.highlight
                  ? "border-[#912428] shadow-2xl shadow-[#912428]/10 scale-[1.02] bg-gradient-to-b from-white to-red-50/30"
                  : "border-[#e5e0da] bg-white hover:shadow-lg hover:border-[#912428]/40"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-bold text-white gradient-brand shadow-sm">
                    <Star className="w-3 h-3 fill-white" />
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-[#212121]">{plan.name}</h3>
                <p className="text-sm text-[#787878] mt-1">{plan.tagline}</p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-sm font-medium text-[#787878]">RM</span>
                  <span className="text-4xl font-bold tracking-tight text-[#212121]">{plan.price}</span>
                  <span className="text-sm text-[#787878]">/mo</span>
                </div>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map(({ label, free }) => (
                  <li key={label} className="flex items-start gap-3">
                    {free ? (
                      <span className="shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 mt-0.5">
                        <Check className="w-3 h-3 text-emerald-600" />
                      </span>
                    ) : (
                      <span className="shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-50 mt-0.5">
                        <Zap className="w-3 h-3 text-[#EE2234]" />
                      </span>
                    )}
                    <span className="text-sm text-[#212121]">
                      {free && <strong className="text-emerald-600 font-semibold">FREE</strong>}{" "}
                      {label}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={WA_URL(plan.name)}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                  plan.highlight
                    ? "bg-[#912428] text-white hover:bg-[#781F21] shadow-lg"
                    : "border border-[#e5e0da] bg-white text-[#212121] hover:border-[#912428] hover:bg-red-50"
                }`}
              >
                Start Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-xs text-[#787878] mt-8"
        >
          *Google Ads plan: ad spend is paid directly to Google. We manage the campaigns.
          All plans include a free onboarding call.
        </motion.p>
      </div>
    </section>
  );
}
