import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About MoFrame",
  description:
    "MoFrame is a Malaysian digital agency helping SMEs get found online — professional website, SEO, GEO optimisation, AI chatbot, and Google Ads bundled into one monthly subscription.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://mo-frame.com/about" },
  openGraph: {
    title: "About MoFrame — Website + Marketing Engine for Malaysian SMEs",
    description:
      "We bundle everything a Malaysian SME needs to get found online: website, domain, hosting, SEO, GEO, AI chatbot — one price, zero upfront cost.",
    url: "https://mo-frame.com/about",
    type: "website",
  },
};

const values = [
  {
    title: "Transparency first",
    body: "We quote one price that covers everything. No surprise invoices for hosting, SEO add-ons, or chatbot subscriptions. What you see is what you pay.",
  },
  {
    title: "Honest timelines",
    body: "SEO takes 3–6 months. We tell you this upfront. We set realistic expectations and back them up with monthly reports — not vanity metrics.",
  },
  {
    title: "Built for Malaysia",
    body: "We understand how Malaysian consumers search, what converts in Bahasa Malaysia and English, and how to rank in local Google results — not just textbook SEO.",
  },
  {
    title: "Cancel-friendly by design",
    body: "Month-to-month contracts. No lock-in. We believe in earning your loyalty every month — if we're not delivering, you should be free to leave.",
  },
];

const differentiators = [
  "Website, domain, and hosting are included — not extra",
  "GEO optimisation on every plan (most agencies don't offer this)",
  "AI chatbot setup and maintenance included",
  "WhatsApp integration standard on all plans",
  "New websites live in 3–5 business days",
  "One point of contact for everything digital",
];

const plans = [
  { name: "Starter", price: "RM 1,499/mo", who: "Businesses starting their online presence" },
  { name: "Growth", price: "RM 2,499/mo", who: "SMEs ready to dominate local search" },
  { name: "Scale", price: "RM 4,499/mo", who: "Businesses adding Google Ads to the mix" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f9f6f3]">
      {/* Header */}
      <div className="bg-[#212121] text-white py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-sm text-white/50 hover:text-white/80 transition-colors mb-6 inline-block">
            ← Back to mo-frame.com
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">About MoFrame</h1>
          <p className="mt-3 text-white/60 text-lg max-w-xl">
            We help Malaysian SMEs get found online — without the confusion, the hidden costs, or the vague agency promises.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 space-y-16">

        {/* Who we are */}
        <section>
          <h2 className="text-2xl font-bold text-[#212121] mb-4">Who we are</h2>
          <div className="space-y-4 text-[#555] leading-relaxed">
            <p>
              MoFrame is a Malaysian digital agency built specifically for small and medium businesses. We exist because most SMEs in Malaysia face the same problem: they know they need a website and SEO, but the agencies quoting them are either too expensive, too vague, or charge separately for every piece.
            </p>
            <p>
              We bundled everything into one transparent monthly subscription — professional website, custom domain, web hosting, AI chatbot, on-page SEO, GEO (Generative Engine Optimisation), and WhatsApp integration. Pay one price, get everything. No setup fee. No hidden extras.
            </p>
            <p>
              Our clients range from F&B businesses and salons in Kuala Lumpur to law firms in Penang and professional services companies across the Klang Valley. We also work with businesses in Singapore, Australia, and beyond — wherever you are, if your customers use Google, we can help you reach them.
            </p>
          </div>
        </section>

        {/* What GEO means */}
        <section className="bg-white rounded-2xl border border-[#e5e0da] p-8">
          <h2 className="text-2xl font-bold text-[#212121] mb-3">What is GEO Optimisation?</h2>
          <p className="text-[#555] leading-relaxed mb-4">
            GEO stands for Generative Engine Optimisation. It&apos;s the practice of structuring and writing your content so that AI-powered tools — ChatGPT, Claude, Perplexity, Google AI Overview — recommend your business when someone asks a relevant question.
          </p>
          <p className="text-[#555] leading-relaxed mb-4">
            Traditional SEO gets you ranked in Google&apos;s blue links. GEO gets your business cited in AI answers. As more consumers use AI tools to find recommendations (&ldquo;best accountant in KL&rdquo;, &ldquo;affordable web design Malaysia&rdquo;), GEO is becoming as important as SEO — and most agencies don&apos;t offer it yet.
          </p>
          <p className="text-[#555] leading-relaxed">
            We include GEO optimisation on every plan as a standard part of what we do.
          </p>
        </section>

        {/* What makes us different */}
        <section>
          <h2 className="text-2xl font-bold text-[#212121] mb-6">What makes us different</h2>
          <ul className="space-y-3">
            {differentiators.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#555]">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Values */}
        <section>
          <h2 className="text-2xl font-bold text-[#212121] mb-6">How we operate</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map(({ title, body }) => (
              <div key={title} className="bg-white rounded-xl border border-[#e5e0da] p-6">
                <h3 className="font-bold text-[#212121] mb-2">{title}</h3>
                <p className="text-sm text-[#787878] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Plans summary */}
        <section>
          <h2 className="text-2xl font-bold text-[#212121] mb-2">Our plans</h2>
          <p className="text-[#787878] text-sm mb-6">All plans include website, domain, hosting, AI chatbot, SEO, GEO, and WhatsApp integration. No setup fee. 14-day money-back guarantee.</p>
          <div className="space-y-3">
            {plans.map(({ name, price, who }) => (
              <div key={name} className="flex items-center justify-between bg-white rounded-xl border border-[#e5e0da] px-6 py-4">
                <div>
                  <span className="font-bold text-[#212121]">{name}</span>
                  <span className="ml-3 text-sm text-[#787878]">{who}</span>
                </div>
                <span className="font-bold text-[#912428] shrink-0 ml-4">{price}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#BEBEBE] mt-3">
            * Scale plan: Google Ads spend is paid directly to Google and is not included in the plan fee.{" "}
            <Link href="/terms" className="underline hover:text-[#787878] transition-colors">Full terms</Link>.
          </p>
        </section>

        {/* SEO timeline */}
        <section className="bg-[#212121] text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-3">Honest SEO timelines</h2>
          <p className="text-white/60 text-sm mb-6">
            We don&apos;t promise page 1 in 30 days. Here&apos;s what realistic SEO progress looks like:
          </p>
          <div className="space-y-4">
            {[
              { period: "4–8 weeks", result: "Early keyword movement visible in Google Search Console" },
              { period: "3–4 months", result: "Meaningful organic traffic from target keywords" },
              { period: "6–12 months", result: "Significant search visibility, consistent lead generation" },
            ].map(({ period, result }) => (
              <div key={period} className="flex gap-4 items-start">
                <span className="text-[#EE2234] font-bold text-sm shrink-0 w-24">{period}</span>
                <span className="text-white/70 text-sm">{result}</span>
              </div>
            ))}
          </div>
          <p className="text-white/40 text-xs mt-6">
            Results depend on domain age, competition, and search engine algorithm changes. We report monthly so you always know what&apos;s happening.
          </p>
        </section>

        {/* CTA */}
        <section className="text-center pb-4">
          <h2 className="text-2xl font-bold text-[#212121] mb-3">Ready to get started?</h2>
          <p className="text-[#787878] mb-6 text-sm">No commitment needed. Chat with us on WhatsApp and we&apos;ll explain exactly how we&apos;d grow your business online.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/message/OMRIJWN3SVAKM1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-[#912428] hover:bg-[#781F21] transition-colors shadow-lg text-sm"
            >
              Chat on WhatsApp
            </a>
            <Link
              href="/#plans"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-bold text-[#212121] border border-[#e5e0da] hover:border-[#912428] bg-white transition-colors text-sm"
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
