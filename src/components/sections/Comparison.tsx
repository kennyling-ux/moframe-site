"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";

const rows = [
  { label: "Website Design", them: "RM 3,000–8,000 upfront", us: "FREE — included" },
  { label: "Domain Registration", them: "RM 50–100/yr extra", us: "FREE — included" },
  { label: "Web Hosting", them: "RM 300–800/yr extra", us: "FREE — included" },
  { label: "SEO Optimisation", them: "RM 1,500–6,000/mo extra", us: "INCLUDED" },
  { label: "GEO (AI Search)", them: "Not offered", us: "INCLUDED" },
  { label: "AI Chatbot", them: "RM 500–2,000/mo extra", us: "FREE — included" },
  { label: "Mobile-First Design", them: "Sometimes, add-on cost", us: "Always, by default" },
  { label: "WhatsApp Integration", them: "Rarely offered", us: "Every plan" },
  { label: "Monthly SEO Report", them: "Extra charge", us: "Included" },
  { label: "Transparent Pricing", them: "Rarely", us: "Always" },
];

export default function Comparison() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="comparison" ref={ref} className="py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-red-50 text-[#EE2234] border border-red-100 mb-4">
            Side by Side
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance text-[#212121]">
            Us vs. The{" "}
            <span className="text-[#BEBEBE] line-through decoration-[#EE2234]">Typical Agency</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-[#e5e0da] overflow-hidden shadow-lg"
        >
          {/* Header */}
          <div className="grid grid-cols-3 bg-[#212121] text-white">
            <div className="px-4 sm:px-6 py-4 text-sm font-semibold text-white/60">What you get</div>
            <div className="px-4 sm:px-6 py-4 text-sm font-bold text-red-400 border-l border-white/10">
              Typical Agency
            </div>
            <div className="px-4 sm:px-6 py-4 text-sm font-bold text-emerald-400 border-l border-white/10">
              MoFrame ✓
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.04, duration: 0.4 }}
              className={`grid grid-cols-3 border-b border-[#e5e0da] last:border-0 transition-colors hover:bg-[#f9f6f3] ${
                i % 2 === 0 ? "bg-white" : "bg-[#faf8f5]"
              }`}
            >
              <div className="px-4 sm:px-6 py-4 text-sm font-medium text-[#212121]">{row.label}</div>
              <div className="px-4 sm:px-6 py-4 text-sm text-red-500 border-l border-[#e5e0da] flex items-start gap-2">
                <X className="w-4 h-4 mt-0.5 shrink-0 text-red-400" />
                <span>{row.them}</span>
              </div>
              <div className="px-4 sm:px-6 py-4 text-sm text-emerald-700 border-l border-[#e5e0da] flex items-start gap-2 font-medium">
                <Check className="w-4 h-4 mt-0.5 shrink-0 text-emerald-500" />
                <span>{row.us}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
