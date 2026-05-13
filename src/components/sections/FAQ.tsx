"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is the website really free?",
    a: "Yes — 100%. The website design, build, domain, and hosting are all included in your monthly plan. You pay RM 1,499/mo (or higher for Growth/Scale) and we handle everything. No setup fee. No hidden costs.",
  },
  {
    q: "What is GEO optimisation?",
    a: "GEO stands for Generative Engine Optimisation. It means we structure and write your content so that AI tools like ChatGPT, Claude, Perplexity, and Google's AI Overview recommend your business when someone asks about what you offer. It's the new SEO — and most agencies don't offer it yet.",
  },
  {
    q: "How long until I see SEO results?",
    a: "SEO is a long game. You'll typically see early movement in 4–8 weeks, meaningful traffic in 3–4 months, and significant results in 6–12 months. We set expectations honestly upfront — no false promises. We send monthly reports so you always know what's happening.",
  },
  {
    q: "Is there a money-back guarantee?",
    a: "Yes — every plan comes with a 14-day money-back guarantee. If you're not satisfied within your first 14 days, we'll refund your first month, no questions asked. We're confident in what we deliver.",
  },
  {
    q: "What happens if I cancel my plan?",
    a: "Your website stays live until the contract period ends. We'll give you your files and help you migrate to another host if needed. We believe in earning your loyalty every month, not locking you in.",
  },
  {
    q: "Is the Google Ads budget included in the Scale plan?",
    a: "No — ad spend is paid directly to Google. You control your ad budget. We manage the campaigns, write the ads, optimise performance, and make sure every ringgit is spent wisely.",
  },
  {
    q: "Can I see examples of websites you've built?",
    a: "Absolutely. Chat with us on WhatsApp and we'll share our portfolio and case studies relevant to your industry. We build across F&B, professional services, retail, healthcare, and more.",
  },
  {
    q: "Do you only work with businesses in Malaysia?",
    a: "We work with businesses globally — our client base spans Malaysia, Singapore, Australia, and beyond. That said, we have deep expertise in the Malaysian market and understand local SEO, buyer behaviour, and the Bahasa Malaysia/English mix that converts here. Wherever you are, we can help.",
  },
  {
    q: "Do you manage Meta Ads or social media advertising?",
    a: "We focus on what drives long-term, compounding growth — website, SEO, GEO, AI chatbot, and Google Ads (Scale plan). We don't manage Meta Ads (Facebook/Instagram), TikTok Ads, or other social media advertising. If you need those, we're happy to refer you to a trusted partner.",
  },
  {
    q: "How do I get started?",
    a: "Just tap the WhatsApp button on this page. We'll set up a free 30-minute call to understand your business, and if we're a good fit, we start building within days. No commitment required to have that conversation.",
  },
];

export default function FAQ() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" ref={ref} className="py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-red-50 text-[#EE2234] border border-red-100 mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance text-[#212121]">
            Questions We Get{" "}
            <span className="gradient-text">All the Time</span>
          </h2>
          <p className="mt-4 text-lg text-[#787878]">
            Still not sure? Chat with us on WhatsApp — we reply within minutes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-[#e5e0da] rounded-xl bg-white px-2 overflow-hidden data-[state=open]:shadow-sm data-[state=open]:border-[#EE2234]/30 transition-all"
              >
                <AccordionTrigger className="px-4 py-4 text-left font-bold text-[#212121] hover:no-underline hover:text-[#EE2234] transition-colors text-sm sm:text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-[#787878] text-sm leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
