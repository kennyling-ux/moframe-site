"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const WA_URL =
  "https://wa.me/message/OMRIJWN3SVAKM1";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [showPulse, setShowPulse] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1500);
    const p = setTimeout(() => setShowPulse(false), 5000);
    return () => { clearTimeout(t); clearTimeout(p); };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-4 sm:right-6 z-50 flex items-end gap-3"
        >
          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-1 bg-white rounded-xl px-3 py-2 shadow-lg border border-border text-sm font-medium text-foreground whitespace-nowrap hidden sm:block"
          >
            Chat with us on WhatsApp
            <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-r border-t border-border rotate-45" />
          </motion.div>

          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-xl hover:scale-110 active:scale-95 transition-transform duration-200"
            style={{ background: "#25D366" }}
          >
            {showPulse && (
              <span
                className="absolute inset-0 rounded-full animate-ping opacity-40"
                style={{ background: "#25D366" }}
              />
            )}
            <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white" aria-hidden>
              <path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.64 4.64 1.84 6.64L2.667 29.333l6.907-1.813A13.26 13.26 0 0 0 16.004 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.004 2.667zm0 24c-2.12 0-4.187-.573-5.987-1.653l-.427-.253-4.093 1.08 1.093-4-.28-.44A10.653 10.653 0 0 1 5.333 16c0-5.893 4.773-10.667 10.667-10.667S26.667 10.107 26.667 16 21.893 26.667 16 26.667zm5.84-7.973c-.32-.16-1.893-.933-2.187-1.04-.293-.107-.507-.16-.72.16-.213.32-.827 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.347-.493-2.56-1.573-.947-.84-1.587-1.88-1.773-2.2-.187-.32-.02-.493.14-.653.144-.144.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.987-2.373-.26-.627-.52-.533-.72-.547-.187-.013-.4-.013-.613-.013a1.18 1.18 0 0 0-.853.4c-.293.32-1.12 1.093-1.12 2.667s1.147 3.093 1.307 3.307c.16.213 2.253 3.44 5.467 4.827.763.333 1.36.533 1.827.68.768.24 1.467.207 2.02.127.613-.093 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z" />
            </svg>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
