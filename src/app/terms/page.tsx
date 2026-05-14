import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "MoFrame Terms & Conditions — service scope, refund policy, Google Ads, and what 'free' means.",
  robots: { index: true, follow: true },
};

const UPDATED = "14 May 2025";
const EMAIL = "hello@mo-frame.com";
const COMPANY = "MoFrame";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-xl font-bold text-[#212121] mb-4 pb-2 border-b border-[#e5e0da]">{title}</h2>
      <div className="space-y-3 text-[#555] leading-relaxed text-sm">{children}</div>
    </section>
  );
}

const toc = [
  ["definitions", "1. Definitions"],
  ["what-free-means", '2. What "Free" Means'],
  ["plans-billing", "3. Plans & Billing"],
  ["money-back", "4. 14-Day Money-Back Guarantee"],
  ["google-ads", "5. Google Ads Management"],
  ["service-scope", "6. Service Scope"],
  ["results-disclaimer", "7. Results Disclaimer"],
  ["ip", "8. Intellectual Property"],
  ["cancellation", "9. Cancellation & Termination"],
  ["liability", "10. Limitation of Liability"],
  ["governing-law", "11. Governing Law"],
  ["changes", "12. Changes to These Terms"],
  ["contact", "13. Contact"],
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#f9f6f3]">
      {/* Header */}
      <div className="bg-[#212121] text-white py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-sm text-white/50 hover:text-white/80 transition-colors mb-6 inline-block">
            ← Back to mo-frame.com
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Terms &amp; Conditions</h1>
          <p className="mt-3 text-white/50 text-sm">Last updated: {UPDATED}</p>
          <p className="mt-4 text-white/70 text-sm max-w-xl">
            Please read these terms carefully before subscribing. By using {COMPANY}&apos;s services you agree to be bound by these terms.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12">
        {/* Table of contents */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-1">
            <p className="text-xs font-bold uppercase tracking-widest text-[#787878] mb-3">Contents</p>
            {toc.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="block text-xs text-[#787878] hover:text-[#912428] transition-colors py-0.5"
              >
                {label}
              </a>
            ))}
          </div>
        </aside>

        {/* Body */}
        <main className="space-y-12">
          <Section id="definitions" title="1. Definitions">
            <p><strong>"{COMPANY}"</strong>, <strong>"we"</strong>, <strong>"us"</strong>, or <strong>"our"</strong> refers to MoFrame, the service provider.</p>
            <p><strong>"Client"</strong>, <strong>"you"</strong>, or <strong>"your"</strong> refers to the business or individual subscribing to a MoFrame plan.</p>
            <p><strong>"Services"</strong> refers to the website design, hosting, domain registration, SEO, GEO optimisation, AI chatbot setup, and Google Ads management (Scale plan only) provided under your chosen plan.</p>
            <p><strong>"Plan"</strong> refers to the Starter, Growth, or Scale subscription tiers listed at mo-frame.com/pricing.</p>
          </Section>

          <Section id="what-free-means" title="2. What Free Means">
            <p>
              When MoFrame describes a website, domain, hosting, or AI chatbot as <strong>"FREE"</strong>, this means those items are included in your monthly subscription at no additional charge — they are not standalone free products.
            </p>
            <p>
              Specifically:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Website design & development</strong> — built and maintained by MoFrame as part of your plan. No separate setup or design fee is charged.</li>
              <li><strong>Custom domain</strong> — one .com.my or .com domain registered on your behalf, included for the duration of your active subscription. Domain ownership details are documented and can be transferred to you upon cancellation.</li>
              <li><strong>Web hosting</strong> — enterprise-grade hosting managed by MoFrame. Included for the duration of your subscription.</li>
              <li><strong>AI chatbot (basic or advanced depending on plan)</strong> — setup, configuration, and maintenance included. No third-party chatbot subscription fee is charged to you separately.</li>
            </ul>
            <p>
              These services are tied to your active subscription. If you cancel, services remain live until the end of your paid billing period. After that, you retain ownership of your domain; website files can be provided upon request.
            </p>
          </Section>

          <Section id="plans-billing" title="3. Plans & Billing">
            <p>All plans are billed monthly in Malaysian Ringgit (MYR) unless otherwise agreed in writing.</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Starter — RM 1,499/mo</strong></li>
              <li><strong>Growth — RM 2,499/mo</strong></li>
              <li><strong>Scale — RM 4,499/mo</strong> (excludes Google Ads spend — see Section 5)</li>
            </ul>
            <p>Payment is due at the start of each billing cycle. Failure to pay within 7 days of the due date may result in suspension of services.</p>
            <p>Prices are subject to change with 30 days&apos; written notice. You may cancel before the new pricing takes effect without penalty.</p>
          </Section>

          <Section id="money-back" title="4. 14-Day Money-Back Guarantee">
            <p>
              We offer a <strong>14-day money-back guarantee</strong> on the first month of any new subscription. If you are not satisfied with our services within the first 14 calendar days of your subscription start date, you may request a full refund of your first month&apos;s payment.
            </p>
            <p><strong>Conditions:</strong></p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>The refund request must be submitted in writing (WhatsApp or email to {EMAIL}) within 14 calendar days of your subscription start date.</li>
              <li>The guarantee applies to the first subscription month only and does not apply to subsequent renewals.</li>
              <li>The guarantee does not apply if you have violated these Terms & Conditions.</li>
              <li>Google Ads spend (Scale plan) is excluded from the guarantee, as ad spend is paid directly to Google and is non-refundable by MoFrame.</li>
              <li>Domain registration fees (if incurred before the refund request) may be deducted from the refund at cost price.</li>
            </ul>
            <p>Approved refunds are processed within 10 business days via the original payment method.</p>
          </Section>

          <Section id="google-ads" title="5. Google Ads Management (Scale Plan)">
            <p>
              The Scale plan includes <strong>Google Ads campaign management</strong> by MoFrame. This covers campaign setup, ad copywriting, keyword strategy, bid management, and monthly performance reporting.
            </p>
            <p><strong>Important:</strong></p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Ad spend is not included</strong> in the RM 4,499/mo plan fee. You are responsible for funding your own Google Ads account directly with Google.</li>
              <li>MoFrame will recommend a suitable monthly ad budget based on your industry and goals. You are free to set your own budget.</li>
              <li>Ad spend payments go directly from your payment method to Google — MoFrame does not handle or hold ad funds.</li>
              <li>MoFrame is not responsible for Google policy changes, ad account suspensions, or changes in ad performance due to factors outside our control (e.g. seasonality, competitor activity).</li>
              <li>MoFrame does <strong>not</strong> manage Meta Ads (Facebook/Instagram), TikTok Ads, or other paid social media advertising under any plan.</li>
            </ul>
          </Section>

          <Section id="service-scope" title="6. Service Scope">
            <p>MoFrame provides the following services depending on your plan:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Professional website design and development (mobile-first)</li>
              <li>Custom domain registration and management</li>
              <li>Web hosting and maintenance</li>
              <li>AI chatbot setup and configuration</li>
              <li>On-page SEO (Search Engine Optimisation)</li>
              <li>GEO (Generative Engine Optimisation) — content structured for AI tools such as ChatGPT, Claude, and Perplexity</li>
              <li>Monthly SEO reporting</li>
              <li>Google Ads management (Scale plan only)</li>
            </ul>
            <p>Services <strong>not</strong> included under any plan unless explicitly agreed:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Meta Ads / Facebook Ads / Instagram Ads</li>
              <li>TikTok Ads or other social media advertising</li>
              <li>E-commerce development or payment gateway integration (unless quoted separately)</li>
              <li>Logo design or branding (unless quoted separately)</li>
              <li>Photography or videography</li>
            </ul>
          </Section>

          <Section id="results-disclaimer" title="7. Results Disclaimer">
            <p>
              SEO and GEO results are not guaranteed within any specific timeframe. Organic search rankings depend on many factors outside MoFrame&apos;s control, including search engine algorithm changes, competitor activity, and the age and authority of your domain.
            </p>
            <p>
              Typical timelines based on our experience: early movement in 4–8 weeks, meaningful traffic in 3–4 months, significant results in 6–12 months. These are estimates, not guarantees.
            </p>
            <p>
              MoFrame will provide monthly reports to track progress honestly and transparently.
            </p>
          </Section>

          <Section id="ip" title="8. Intellectual Property">
            <p>
              Upon full payment of all outstanding amounts and completion of any minimum contract period, the website design and content created specifically for your business become your property. You may request source files upon cancellation.
            </p>
            <p>
              MoFrame retains the right to display your website in our portfolio unless you request otherwise in writing.
            </p>
            <p>
              Any content, copy, or materials you provide to MoFrame remain your intellectual property. You grant MoFrame a license to use them solely for delivering the agreed services.
            </p>
          </Section>

          <Section id="cancellation" title="9. Cancellation & Termination">
            <p>You may cancel your subscription at any time by providing written notice via WhatsApp or email to {EMAIL}.</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Services remain active until the end of your current paid billing period.</li>
              <li>No partial-month refunds are issued after the 14-day guarantee window.</li>
              <li>Upon cancellation, MoFrame will provide your website files and assist with domain transfer at no additional cost.</li>
              <li>MoFrame reserves the right to terminate services with 14 days&apos; notice if payment is overdue by more than 30 days or if these Terms are violated.</li>
            </ul>
          </Section>

          <Section id="liability" title="10. Limitation of Liability">
            <p>
              To the fullest extent permitted by applicable law, MoFrame&apos;s total liability for any claim arising from or related to these Terms or the Services shall not exceed the total amount paid by you in the three months preceding the claim.
            </p>
            <p>
              MoFrame is not liable for indirect, incidental, or consequential damages including loss of revenue, loss of data, or business interruption.
            </p>
          </Section>

          <Section id="governing-law" title="11. Governing Law">
            <p>
              These Terms are governed by the laws of Malaysia. Any disputes shall be subject to the exclusive jurisdiction of the courts of Malaysia.
            </p>
          </Section>

          <Section id="changes" title="12. Changes to These Terms">
            <p>
              MoFrame reserves the right to update these Terms at any time. We will notify active clients via WhatsApp or email at least 14 days before changes take effect. Continued use of our services after the effective date constitutes acceptance of the updated Terms.
            </p>
          </Section>

          <Section id="contact" title="13. Contact">
            <p>For questions about these Terms, please contact us:</p>
            <ul className="list-none space-y-1">
              <li><strong>Email:</strong> {EMAIL}</li>
              <li><strong>WhatsApp:</strong> <a href="https://wa.me/60123548676" className="text-[#912428] hover:underline">+60 12-354 8676</a></li>
              <li><strong>Website:</strong> <a href="https://mo-frame.com" className="text-[#912428] hover:underline">mo-frame.com</a></li>
            </ul>
          </Section>
        </main>
      </div>

      <div className="border-t border-[#e5e0da] py-8 px-4 sm:px-6 text-center">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#787878] hover:text-[#912428] transition-colors">
          ← Back to mo-frame.com
        </Link>
      </div>
    </div>
  );
}
