import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#212121] border-t border-white/5 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <Image
            src="/logo.svg"
            alt="MoFrame logo"
            width={36}
            height={17}
            className="h-6 w-auto brightness-0 invert"
          />
          <span className="text-white font-bold text-sm tracking-tight">MoFrame</span>
        </div>
        <p className="text-xs text-white/30 text-center">
          © {new Date().getFullYear()} MoFrame. All rights reserved. Helping Malaysian SMEs grow online.
        </p>
        <div className="flex gap-4 text-xs text-white/40">
          <a href="/privacy" className="hover:text-white/70 transition-colors">Privacy</a>
          <a href="/terms" className="hover:text-white/70 transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
