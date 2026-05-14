import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_ID = "G-9F1L2KV4M1";

const siteUrl = "https://mo-frame.com";
const siteName = "MoFrame";
const siteDescription =
  "Get a professional website + full marketing engine for your Malaysian SME. Free website, domain, hosting, AI chatbot, SEO & GEO — from RM 1,499/mo. Zero upfront cost.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Professional Website + Marketing Engine for Malaysian SMEs`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "website design Malaysia",
    "SME website Malaysia",
    "affordable website Malaysia",
    "SEO Malaysia",
    "GEO optimization Malaysia",
    "AI chatbot Malaysia",
    "digital marketing Malaysia",
    "website development KL",
    "online presence Malaysia",
    "MoFrame",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: siteUrl,
    siteName,
    title: `${siteName} — Free Website + Marketing Engine for Malaysian SMEs`,
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteName} — Professional Website & Marketing for Malaysian SMEs`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Free Website + Marketing Engine`,
    description: siteDescription,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteName,
        url: siteUrl,
        logo: { "@type": "ImageObject", url: `${siteUrl}/logo.svg` },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          availableLanguage: ["English", "Malay"],
          areaServed: "MY",
        },
        areaServed: { "@type": "Country", name: "Malaysia" },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        description: siteDescription,
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "en-MY",
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}/#service`,
        name: "Website + Marketing Engine for Malaysian SMEs",
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: { "@type": "Country", name: "Malaysia" },
        description:
          "Professional website design with free domain, hosting, AI chatbot, SEO, and GEO optimization for Malaysian small businesses.",
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "MYR",
          lowPrice: "1499",
          offerCount: "3",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is the website really free?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes — the website is included in your monthly plan. No setup fee, no hidden costs.",
            },
          },
          {
            "@type": "Question",
            name: "What is GEO optimization?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "GEO (Generative Engine Optimization) means we optimize your content so AI tools like ChatGPT, Claude, and Google AI recommend your business when people search for what you offer.",
            },
          },
          {
            "@type": "Question",
            name: "How long until I see SEO results?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "SEO takes 3–6 months for meaningful traffic. We set expectations honestly upfront.",
            },
          },
          {
            "@type": "Question",
            name: "What happens if I cancel my plan?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Your website stays live until the contract ends. We can help you migrate if needed.",
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en-MY" className="h-full antialiased">
      <head>
        {/* Satoshi via Bunny Fonts — self-hosted CDN, GDPR-friendly */}
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=satoshi:400,500,700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}</Script>
      </body>
    </html>
  );
}
