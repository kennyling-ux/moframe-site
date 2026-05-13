"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, CheckCircle, Send, Loader2 } from "lucide-react";

const WA_URL = "https://wa.me/message/OMRIJWN3SVAKM1";

const plans = ["Starter — RM 1,499/mo", "Growth — RM 2,499/mo", "Scale — RM 4,499/mo", "Just exploring"];

// SSM registration number format validator
// Covers: old Sdn Bhd (7-digit + letter), new MyCoID (12-digit), Enterprise (IP prefix), LLP
function validateSSM(value: string): string {
  const v = value.trim().toUpperCase().replace(/\s/g, "");
  if (!v) return "SSM registration number is required.";
  const patterns = [
    { re: /^\d{7}-[A-Z0-9]{1,3}$/, label: "Sdn Bhd / Bhd (old format)" },       // 1234567-X
    { re: /^\d{12}$/, label: "MyCoID (new format)" },                              // 202001234567
    { re: /^IP\d{8,10}$/, label: "Enterprise / Sole Proprietor" },                 // IP12345678
    { re: /^LLP\d{7}-[A-Z]{3}$/, label: "LLP" },                                  // LLP0012345-LGN
    { re: /^[A-Z]{2}\d{6,10}$/, label: "Partnership / Co-operative" },             // SA1234567
  ];
  const matched = patterns.some(({ re }) => re.test(v));
  if (!matched)
    return "Doesn't look like a valid SSM number. Check your registration certificate and try again.";
  return "";
}

const countryCodes = [
  { code: "+60",  flag: "🇲🇾", name: "Malaysia",      min: 9,  max: 10 },
  { code: "+65",  flag: "🇸🇬", name: "Singapore",     min: 8,  max: 8  },
  { code: "+62",  flag: "🇮🇩", name: "Indonesia",     min: 8,  max: 12 },
  { code: "+66",  flag: "🇹🇭", name: "Thailand",      min: 8,  max: 9  },
  { code: "+63",  flag: "🇵🇭", name: "Philippines",   min: 10, max: 10 },
  { code: "+84",  flag: "🇻🇳", name: "Vietnam",       min: 9,  max: 10 },
  { code: "+61",  flag: "🇦🇺", name: "Australia",     min: 9,  max: 9  },
  { code: "+44",  flag: "🇬🇧", name: "United Kingdom",min: 10, max: 10 },
  { code: "+1",   flag: "🇺🇸", name: "United States", min: 10, max: 10 },
  { code: "+86",  flag: "🇨🇳", name: "China",         min: 11, max: 11 },
  { code: "+91",  flag: "🇮🇳", name: "India",         min: 10, max: 10 },
  { code: "+971", flag: "🇦🇪", name: "UAE",           min: 9,  max: 9  },
  { code: "+966", flag: "🇸🇦", name: "Saudi Arabia",  min: 9,  max: 9  },
];

export default function CTAFooter() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({
    name: "", business: "", ssm: "", countryCode: "+60", phone: "", plan: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [phoneError, setPhoneError] = useState("");
  const [ssmError, setSsmError] = useState("");

  const getCountry = (code: string) => countryCodes.find((c) => c.code === code)!;

  const validatePhone = (phone: string, code: string) => {
    const digits = phone.replace(/\D/g, "").replace(/^0/, "");
    const country = getCountry(code);
    if (!digits) return "WhatsApp number is required.";
    if (digits.length < country.min)
      return `Too short — ${country.name} numbers need at least ${country.min} digits.`;
    if (digits.length > country.max)
      return `Too long — ${country.name} numbers have at most ${country.max} digits.`;
    return "";
  };

  const handlePhoneChange = (val: string) => {
    const cleaned = val.replace(/[^\d\s\-]/g, "");
    setForm((f) => ({ ...f, phone: cleaned }));
    if (phoneError) setPhoneError(validatePhone(cleaned, form.countryCode));
  };

  const handleCodeChange = (code: string) => {
    setForm((f) => ({ ...f, countryCode: code }));
    if (phoneError) setPhoneError(validatePhone(form.phone, code));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const phoneErr = validatePhone(form.phone, form.countryCode);
    const ssmErr = validateSSM(form.ssm);
    if (phoneErr) setPhoneError(phoneErr);
    if (ssmErr) setSsmError(ssmErr);
    if (phoneErr || ssmErr) return;
    setPhoneError("");
    setSsmError("");
    setStatus("loading");
    const digits = form.phone.replace(/\D/g, "").replace(/^0/, "");
    const fullPhone = `${form.countryCode}${digits}`;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, phone: fullPhone }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const field = (
    id: keyof typeof form,
    label: string,
    placeholder: string,
    type = "text"
  ) => (
    <div>
      <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wide" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={id !== "message"}
        value={form[id]}
        onChange={(e) => setForm((f) => ({ ...f, [id]: e.target.value }))}
        placeholder={placeholder}
        className="w-full bg-white/[0.08] border border-white/15 rounded-lg px-4 py-3 text-white placeholder:text-white/25 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 transition-all"
      />
    </div>
  );

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 bg-[#212121] text-white overflow-hidden relative">
      {/* Red glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(238,34,52,0.12), transparent)" }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#EE2234]/40 to-transparent" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance">
            Ready to Get{" "}
            <span className="gradient-text">Found Online?</span>
          </h2>
          <p className="mt-4 text-lg text-white/55 max-w-xl mx-auto">
            No commitment to start the conversation. We&apos;ll show you exactly how we&apos;d grow your business online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left — WhatsApp + trust */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-bold text-white text-base shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              style={{ background: "#25D366" }}
            >
              <svg viewBox="0 0 32 32" className="w-5 h-5 fill-white shrink-0" aria-hidden>
                <path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.64 4.64 1.84 6.64L2.667 29.333l6.907-1.813A13.26 13.26 0 0 0 16.004 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.004 2.667zm0 24c-2.12 0-4.187-.573-5.987-1.653l-.427-.253-4.093 1.08 1.093-4-.28-.44A10.653 10.653 0 0 1 5.333 16c0-5.893 4.773-10.667 10.667-10.667S26.667 10.107 26.667 16 21.893 26.667 16 26.667zm5.84-7.973c-.32-.16-1.893-.933-2.187-1.04-.293-.107-.507-.16-.72.16-.213.32-.827 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.347-.493-2.56-1.573-.947-.84-1.587-1.88-1.773-2.2-.187-.32-.02-.493.14-.653.144-.144.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.987-2.373-.26-.627-.52-.533-.72-.547-.187-.013-.4-.013-.613-.013a1.18 1.18 0 0 0-.853.4c-.293.32-1.12 1.093-1.12 2.667s1.147 3.093 1.307 3.307c.16.213 2.253 3.44 5.467 4.827.763.333 1.36.533 1.827.68.768.24 1.467.207 2.02.127.613-.093 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z" />
              </svg>
              Chat on WhatsApp
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="space-y-2.5">
              {[
                "We reply within minutes",
                "Free 30-minute strategy call",
                "No hard sell, just honest advice",
                "No commitment to enquire",
              ].map((p) => (
                <div key={p} className="flex items-center gap-2.5 text-sm text-white/60">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  {p}
                </div>
              ))}
            </div>

            <div className="hidden lg:block mt-4 p-4 rounded-xl border border-white/10 bg-white/[0.04]">
              <p className="text-xs text-white/40 leading-relaxed">
                Prefer to read first?{" "}
                <a href="#faq" className="text-white/60 underline underline-offset-2 hover:text-white transition-colors">
                  Check our FAQ
                </a>{" "}
                or browse our{" "}
                <a href="#plans" className="text-white/60 underline underline-offset-2 hover:text-white transition-colors">
                  pricing plans
                </a>
                .
              </p>
            </div>
          </motion.div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 bg-white/[0.05] border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm"
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white">We&apos;ll be in touch!</h3>
                <p className="text-white/50 text-sm max-w-xs">
                  We&apos;ll reach out on WhatsApp within a few hours to arrange your free strategy call.
                </p>
                <button
                  onClick={() => { setStatus("idle"); setSsmError(""); setPhoneError(""); setForm({ name: "", business: "", ssm: "", countryCode: "+60", phone: "", plan: "", message: "" }); }}
                  className="text-xs text-white/30 hover:text-white/60 underline transition-colors mt-2"
                >
                  Submit another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-bold text-white text-xl mb-1">Book Your Free Strategy Call</h3>
                <p className="text-sm text-white/40 mb-5">Tell us about your business and we&apos;ll put together a personalised growth plan — no commitment needed.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {field("name", "Your Name", "Ahmad bin Abdullah")}
                  {field("business", "Business Name", "Warung Mak Zul Sdn Bhd")}
                </div>

                {/* SSM Registration Number */}
                <div>
                  <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wide" htmlFor="ssm">
                    SSM Registration No.
                  </label>
                  <input
                    id="ssm"
                    type="text"
                    required
                    value={form.ssm}
                    onChange={(e) => {
                      setForm((f) => ({ ...f, ssm: e.target.value }));
                      if (ssmError) setSsmError(validateSSM(e.target.value));
                    }}
                    onBlur={() => setSsmError(validateSSM(form.ssm))}
                    placeholder="e.g. 1234567-X or 202001234567"
                    className={`w-full bg-white/[0.08] border rounded-lg px-4 py-3 text-white placeholder:text-white/25 text-sm focus:outline-none focus:ring-2 transition-all ${
                      ssmError
                        ? "border-red-400/60 focus:ring-red-400/30"
                        : "border-white/15 focus:ring-white/30 focus:border-white/30"
                    }`}
                  />
                  {ssmError
                    ? <p className="text-xs text-red-400 mt-1.5">{ssmError}</p>
                    : <p className="text-xs text-white/25 mt-1.5">Must be a valid SSM-registered business number</p>
                  }
                </div>

                {/* Phone with country code */}
                <div>
                  <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wide">
                    WhatsApp Number
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={form.countryCode}
                      onChange={(e) => handleCodeChange(e.target.value)}
                      className="bg-white/[0.08] border border-white/15 rounded-lg px-3 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white/30 transition-all appearance-none shrink-0 w-[110px]"
                      style={{ colorScheme: "dark" }}
                    >
                      {countryCodes.map(({ code, flag }) => (
                        <option key={code} value={code} style={{ background: "#212121" }}>
                          {flag} {code}
                        </option>
                      ))}
                    </select>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => handlePhoneChange(e.target.value)}
                      onBlur={() => setPhoneError(validatePhone(form.phone, form.countryCode))}
                      placeholder={`e.g. ${getCountry(form.countryCode).min === 8 ? "8123 4567" : "12-345 6789"}`}
                      className={`flex-1 bg-white/[0.08] border rounded-lg px-4 py-3 text-white placeholder:text-white/25 text-sm focus:outline-none focus:ring-2 transition-all ${
                        phoneError
                          ? "border-red-400/60 focus:ring-red-400/30"
                          : "border-white/15 focus:ring-white/30 focus:border-white/30"
                      }`}
                    />
                  </div>
                  {phoneError
                    ? <p className="text-xs text-red-400 mt-1.5">{phoneError}</p>
                    : <p className="text-xs text-white/25 mt-1.5">Enter without leading 0 — digits only</p>
                  }
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wide" htmlFor="plan">
                    Which plan interests you?
                  </label>
                  <select
                    id="plan"
                    value={form.plan}
                    onChange={(e) => setForm((f) => ({ ...f, plan: e.target.value }))}
                    className="w-full bg-white/[0.08] border border-white/15 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/30 transition-all appearance-none"
                    style={{ colorScheme: "dark" }}
                  >
                    <option value="" style={{ background: "#212121" }}>Select a plan…</option>
                    {plans.map((p) => (
                      <option key={p} value={p} style={{ background: "#212121" }}>{p}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wide" htmlFor="message">
                    Tell us about your business <span className="normal-case text-white/25">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    placeholder="What do you sell? Who are your customers? Any specific goals?"
                    className="w-full bg-white/[0.08] border border-white/15 rounded-lg px-4 py-3 text-white placeholder:text-white/25 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 transition-all resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-400">Something went wrong. Please try WhatsApp instead.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-white text-sm bg-[#912428] hover:bg-[#781F21] transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 shadow-lg"
                >
                  {status === "loading"
                    ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>
                    : <><Send className="w-4 h-4" /> Book My Free Strategy Call</>
                  }
                </button>

                <p className="text-center text-xs text-white/25">
                  No spam. By submitting you agree to our{" "}
                  <a href="/terms" className="underline hover:text-white/50 transition-colors">Terms & Conditions</a>.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
