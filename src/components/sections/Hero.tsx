"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, CheckCircle, Star } from "lucide-react";

const WA_URL = "https://wa.me/message/OMRIJWN3SVAKM1";

const trust = ["No setup fee", "No hidden costs", "14-day money-back guarantee", "Cancel-friendly contracts"];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 pt-20 pb-16">
      {/* Warm cream background wash */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(238,34,52,0.07), transparent), radial-gradient(ellipse 60% 40% at 85% 85%, rgba(233,224,211,0.6), transparent)",
        }}
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#212121 1px, transparent 1px), linear-gradient(90deg, #212121 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
        {/* Social proof badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#e5e0da] shadow-sm text-sm text-[#787878]"
        >
          <div className="flex -space-x-1">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-6 h-6 rounded-full border-2 border-white gradient-brand" />
            ))}
          </div>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span>Helping SMEs grow across Malaysia & beyond</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance leading-[1.1] text-[#212121]"
        >
          Get a Professional Website{" "}
          <span className="gradient-text">+ Full Marketing Engine.</span>{" "}
          Zero Upfront Cost.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="text-lg sm:text-xl text-[#787878] max-w-2xl text-balance"
        >
          Free website. Free domain. Free hosting. Free AI chatbot. SEO & GEO included.{" "}
          <strong className="text-[#212121] font-bold">From RM&nbsp;1,499/mo.</strong>
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center"
        >
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-white text-base bg-[#912428] hover:bg-[#781F21] shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 w-full sm:w-auto justify-center"
          >
            Get Your Free Website Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <button
            onClick={() => document.querySelector("#how-it-works")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-[#212121] text-base bg-white border border-[#e5e0da] hover:border-[#EE2234] hover:bg-[#f9f6f3] transition-all duration-200 w-full sm:w-auto justify-center cursor-pointer"
          >
            See How It Works
          </button>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
        >
          {trust.map((t) => (
            <div key={t} className="flex items-center gap-1.5 text-sm text-[#787878]">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{t}</span>
            </div>
          ))}
        </motion.div>

        {/* Hero browser mockup */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={5}
          className="relative mt-8 w-full max-w-2xl"
        >
          <div className="relative bg-white rounded-2xl border border-[#e5e0da] shadow-2xl overflow-hidden">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#e5e0da] bg-[#f5f2ef]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 mx-4 bg-white rounded-md px-3 py-1 text-xs text-[#787878] border border-[#e5e0da] text-left truncate">
                yourbusiness.com.my
              </div>
            </div>
            {/* Mock content */}
            <div className="p-6 sm:p-8 space-y-4 bg-gradient-to-br from-[#f9f6f3] to-white">
              <div className="w-2/3 h-6 rounded-lg gradient-brand opacity-90" />
              <div className="space-y-2">
                <div className="w-full h-3 rounded bg-[#e5e0da]" />
                <div className="w-5/6 h-3 rounded bg-[#e5e0da]" />
                <div className="w-4/6 h-3 rounded bg-[#e5e0da]" />
              </div>
              <div className="flex gap-3">
                <div className="h-10 w-36 rounded-lg bg-[#912428]" />
                <div className="h-10 w-28 rounded-lg bg-white border border-[#e5e0da]" />
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {["SEO Ready", "AI Chatbot", "GEO Optimised", "Mobile First"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-white border border-[#e5e0da] text-[#787878]">
                    ✓ {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Floating stat cards */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 sm:-left-8 top-16 bg-white rounded-xl border border-[#e5e0da] shadow-lg px-4 py-3 text-left"
          >
            <div className="text-2xl font-bold text-[#212121]">3–5</div>
            <div className="text-xs text-[#787878]">Days to launch</div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -right-4 sm:-right-8 bottom-16 bg-white rounded-xl border border-[#e5e0da] shadow-lg px-4 py-3 text-left"
          >
            <div className="text-2xl font-bold text-[#EE2234]">RM&nbsp;0</div>
            <div className="text-xs text-[#787878]">Setup cost</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
