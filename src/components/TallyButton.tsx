"use client";

import { type ReactNode } from "react";

// ─── REPLACE THIS WITH YOUR TALLY FORM ID ────────────────────────────────────
// After publishing your form, the URL looks like: https://tally.so/r/XXXXXX
// Paste the XXXXXX part below.
export const TALLY_FORM_ID = "YOUR_FORM_ID";
// ─────────────────────────────────────────────────────────────────────────────

interface TallyButtonProps {
  children: ReactNode;
  className?: string;
  hideTitle?: boolean;
}

export default function TallyButton({
  children,
  className = "",
  hideTitle = false,
}: TallyButtonProps) {
  return (
    <button
      data-tally-open={TALLY_FORM_ID}
      data-tally-layout="modal"
      data-tally-width="500"
      data-tally-emoji-text="👋"
      data-tally-emoji-animation="wave"
      data-tally-auto-close="3000"
      data-tally-hide-title={hideTitle ? "1" : undefined}
      className={className}
    >
      {children}
    </button>
  );
}
