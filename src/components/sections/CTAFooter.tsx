"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, CheckCircle, Send, Loader2 } from "lucide-react";

const WA_URL =
  "https://wa.me/60123456789?text=Hi%20MoFrame%2C%20I%27d%20like%20to%20get%20started%20with%20a%20free%20website%20for%20my%20business.";

export default function CTAFooter() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", business: "", phone: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate form submission — replace with real endpoint (Tally/Formspree/API)
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
  };

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 bg-[oklch(0.13_0.02_264)] text-white overflow-hidden relative">
      {/* Background glow */}
      <div
        className="absolute inset-0 -z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, oklch(0.48 0.22 264 / 0.3), transparent)",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance">
            Ready to Get{" "}
            <span style={{
              background: "linear-gradient(135deg, oklch(0.75 0.15 264), oklch(0.78 0.14 196))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Found Online?
            </span>
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
            No commitment to start the conversation. We&apos;ll show you exactly how we&apos;d grow your business online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-7 py-5 rounded-2xl font-bold text-white text-lg shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              style={{ background: "#25D366" }}
            >
              <svg viewBox="0 0 32 32" className="w-6 h-6 fill-white shrink-0" aria-hidden>
                <path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.64 4.64 1.84 6.64L2.667 29.333l6.907-1.813A13.26 13.26 0 0 0 16.004 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.004 2.667zm0 24c-2.12 0-4.187-.573-5.987-1.653l-.427-.253-4.093 1.08 1.093-4-.28-.44A10.653 10.653 0 0 1 5.333 16c0-5.893 4.773-10.667 10.667-10.667S26.667 10.107 26.667 16 21.893 26.667 16 26.667zm5.84-7.973c-.32-.16-1.893-.933-2.187-1.04-.293-.107-.507-.16-.72.16-.213.32-.827 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.347-.493-2.56-1.573-.947-.84-1.587-1.88-1.773-2.2-.187-.32-.02-.493.14-.653.144-.144.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.987-2.373-.26-.627-.52-.533-.72-.547-.187-.013-.4-.013-.613-.013a1.18 1.18 0 0 0-.853.4c-.293.32-1.12 1.093-1.12 2.667s1.147 3.093 1.307 3.307c.16.213 2.253 3.44 5.467 4.827.763.333 1.36.533 1.827.68.768.24 1.467.207 2.02.127.613-.093 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z" />
              </svg>
              Chat with Us on WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="space-y-3">
              {[
                "We reply within minutes",
                "Free 30-minute strategy call",
                "No hard sell, just honest advice",
              ].map((p) => (
                <div key={p} className="flex items-center gap-3 text-white/80 text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  {p}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white">We&apos;ll be in touch!</h3>
                <p className="text-white/60 text-sm">
                  Expect a WhatsApp message from us within the next few hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-bold text-white text-lg mb-2">
                  Or leave your details:
                </h3>
                <div>
                  <label className="block text-xs font-medium text-white/60 mb-1.5" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Ahmad bin Abdullah"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.65_0.18_264)] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/60 mb-1.5" htmlFor="business">
                    Business Name
                  </label>
                  <input
                    id="business"
                    type="text"
                    required
                    value={form.business}
                    onChange={(e) => setForm({ ...form, business: e.target.value })}
                    placeholder="My Awesome Business Sdn Bhd"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.65_0.18_264)] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/60 mb-1.5" htmlFor="phone">
                    WhatsApp Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="01X-XXX XXXX"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.65_0.18_264)] transition-all"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
                  style={{ background: "oklch(0.70 0.19 45)" }}
                >
                  {status === "loading" ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {status === "loading" ? "Sending…" : "Get a Free Website Audit"}
                </button>
                <p className="text-center text-xs text-white/40">
                  No spam. We&apos;ll only contact you about your business.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
