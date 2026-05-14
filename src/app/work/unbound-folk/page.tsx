import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Study: AI Product Photography SaaS — Unbound Folk",
  description:
    "How MoFrame built a fast, SEO-ready landing page for an AI product photography startup — live in under a week, mobile-first, with organic traffic in the first month.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://mo-frame.com/work/unbound-folk" },
  openGraph: {
    title: "Case Study: AI SaaS Landing Page — MoFrame",
    description:
      "MoFrame designed and built the full website for Unbound Folk — an AI product photography platform. Live in days, mobile-first, organic traffic from month one.",
    url: "https://mo-frame.com/work/unbound-folk",
    type: "website",
  },
};

const results = [
  { metric: "< 1 week", label: "From brief to live site" },
  { metric: "Month 1", label: "Organic traffic started" },
  { metric: "Mobile-first", label: "Optimised for all devices" },
  { metric: "SEO + GEO", label: "Structured for AI & Google" },
];

const deliverables = [
  "Full landing page design & development",
  "Custom domain setup and web hosting",
  "Mobile-first responsive layout",
  "On-page SEO — meta tags, structured data, canonical URLs",
  "GEO optimisation — content structured for AI search tools",
  "AI chatbot setup for lead capture",
  "WhatsApp integration",
  "Performance optimisation — fast load on mobile & desktop",
];

export default function UnboundFolkPage() {
  return (
    <div className="min-h-screen bg-[#f9f6f3]">
      {/* Header */}
      <div className="bg-[#212121] text-white py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-sm text-white/50 hover:text-white/80 transition-colors mb-6 inline-block">
            ← Back to mo-frame.com
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 text-white/60">
              Case Study
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-emerald-500/20 text-emerald-400">
              Live Project
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            AI Product Photography SaaS
          </h1>
          <p className="mt-3 text-white/60 text-lg max-w-xl">
            A fast, conversion-focused landing page for an AI startup — built and live in under a week.
          </p>
          <a
            href="https://unboundfolk.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
          >
            unboundfolk.com <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 space-y-14">

        {/* Result metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {results.map(({ metric, label }) => (
            <div key={label} className="bg-white rounded-xl border border-[#e5e0da] p-5 text-center">
              <div className="text-xl font-bold text-[#912428]">{metric}</div>
              <div className="text-xs text-[#787878] mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* The brief */}
        <section>
          <h2 className="text-2xl font-bold text-[#212121] mb-4">The brief</h2>
          <div className="space-y-3 text-[#555] leading-relaxed">
            <p>
              The founder had built an AI product photography tool that transforms a single product photo into a full gallery of professional-quality images in under 5 minutes — no studio, no designer needed. They needed a website that could explain a technically sophisticated product clearly, convert cold visitors into free trial signups, and rank on Google from day one.
            </p>
            <p>
              The target audience: e-commerce sellers on Shopify, Amazon, Etsy, and WooCommerce who needed professional product images without the cost of a traditional photoshoot.
            </p>
          </div>
        </section>

        {/* What we built */}
        <section>
          <h2 className="text-2xl font-bold text-[#212121] mb-6">What we built</h2>
          <ul className="space-y-3">
            {deliverables.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#555]">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Approach */}
        <section className="bg-white rounded-2xl border border-[#e5e0da] p-8 space-y-4">
          <h2 className="text-2xl font-bold text-[#212121]">Our approach</h2>
          <p className="text-[#555] leading-relaxed">
            AI SaaS products live and die by how clearly they communicate value in the first 5 seconds. We led with the core transformation — one photo in, professional gallery out — and structured the entire page around removing objections: speed, simplicity, and a free tier with no credit card required.
          </p>
          <p className="text-[#555] leading-relaxed">
            The site was built mobile-first because the majority of e-commerce sellers browse and make decisions on their phones. Every section was written and structured for both Google and GEO — so when someone asks ChatGPT or Perplexity about AI product photography tools, Unbound Folk has a strong chance of being recommended.
          </p>
          <p className="text-[#555] leading-relaxed">
            The full project — from brief to live — was completed in under one week.
          </p>
        </section>

        {/* Results */}
        <section>
          <h2 className="text-2xl font-bold text-[#212121] mb-4">Early results</h2>
          <div className="space-y-3 text-[#555] leading-relaxed">
            <p>
              Within the first month of launch, the site began receiving organic traffic — without any paid advertising. The SEO foundation is in place and rankings are building. At one month old, this is exactly on track with realistic SEO timelines.
            </p>
            <p>
              The site is fully live, mobile-optimised, and processing visitors from Google search. Conversion optimisation is ongoing as the product gains traction.
            </p>
          </div>
          <div className="mt-6 p-5 bg-amber-50 border border-amber-200 rounded-xl">
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>Honest note:</strong> The site is one month old. Organic conversions are still building — SEO takes 3–6 months for meaningful results. We set this expectation upfront with every client.
            </p>
          </div>
        </section>

        {/* Tech stack */}
        <section>
          <h2 className="text-2xl font-bold text-[#212121] mb-4">Tech stack</h2>
          <div className="flex flex-wrap gap-2">
            {["Next.js", "Tailwind CSS", "Vercel", "Resend", "SEO / Schema Markup", "GEO Optimisation", "Mobile-First"].map((tag) => (
              <span key={tag} className="px-3 py-1.5 rounded-full text-sm font-medium bg-white border border-[#e5e0da] text-[#555]">
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#212121] text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Want a site like this?</h2>
          <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
            We build fast, SEO-ready websites for Malaysian SMEs and startups — live in days, not months. From RM 1,499/mo with zero upfront cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/message/OMRIJWN3SVAKM1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-[#912428] hover:bg-[#781F21] transition-colors shadow-lg text-sm"
            >
              Chat on WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/#plans"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-bold text-white/80 border border-white/20 hover:border-white/40 transition-colors text-sm"
            >
              View Plans
            </Link>
          </div>
        </section>
      </div>

      <div className="border-t border-[#e5e0da] py-8 px-4 sm:px-6 text-center">
        <Link href="/" className="text-sm text-[#787878] hover:text-[#912428] transition-colors">
          ← Back to mo-frame.com
        </Link>
      </div>
    </div>
  );
}
