import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Pricing from "@/components/sections/Pricing";
import WhatYouGet from "@/components/sections/WhatYouGet";
import Comparison from "@/components/sections/Comparison";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQ from "@/components/sections/FAQ";
import CTAFooter from "@/components/sections/CTAFooter";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Pricing />
        <WhatYouGet />
        <Comparison />
        <HowItWorks />
        <FAQ />
        <CTAFooter />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
