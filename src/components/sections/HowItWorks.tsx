"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Laptop, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Tell us about your business",
    body: "Chat with us on WhatsApp or fill our quick form. We'll learn about your business, goals, and target audience in a free 30-minute call.",
    time: "Day 1",
  },
  {
    num: "02",
    icon: Laptop,
    title: "We build your website in 3–5 days",
    body: "Our team designs and develops your professional, mobile-first website. You review it, we refine it until it's perfect.",
    time: "Day 3–5",
  },
  {
    num: "03",
    icon: Rocket,
    title: "SEO & GEO optimisation begins immediately",
    body: "The moment your site goes live, we start building your search presence — on Google and in AI tools like ChatGPT.",
    time: "From Day 6",
  },
  {
    num: "04",
    icon: BarChart3,
    title: "Watch your traffic and leads grow monthly",
    body: "Every month you get a clear report showing your rankings, visitors, and leads. We continuously improve based on real data.",
    time: "Month 1+",
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" ref={ref} className="py-24 px-4 sm:px-6 bg-[#E9E0D3]/40">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-red-50 text-[#EE2234] border border-red-100 mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance text-[#212121]">
            From Zero to{" "}
            <span className="gradient-text">Ranking Online</span>
            <br />in Under a Week
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connector line desktop */}
          <div className="hidden lg:block absolute top-14 left-[calc(12.5%-1px)] right-[calc(12.5%-1px)] h-px bg-gradient-to-r from-transparent via-[#e5e0da] to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(({ num, icon: Icon, title, body, time }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-6">
                  <div className="w-28 h-28 rounded-2xl bg-white border border-[#e5e0da] shadow-sm flex items-center justify-center">
                    <div className="w-14 h-14 rounded-xl gradient-brand flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#212121] text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                </div>

                <div className="px-2 py-1 rounded-md bg-red-50 text-[#EE2234] text-xs font-bold mb-3">
                  {time}
                </div>
                <h3 className="font-bold text-[#212121] mb-2 text-balance">{title}</h3>
                <p className="text-sm text-[#787878] leading-relaxed text-balance">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
