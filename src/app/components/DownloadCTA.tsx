"use client";

import { Download, Monitor } from "lucide-react";

export default function DownloadCTA() {
  return (
    <section id="download" className="py-24 sm:py-36 px-6 border-b border-white/[0.06] bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Minimalist Subheading changed to premium orange */}
        <p className="text-[10px] sm:text-xs text-orange-500/80 font-black tracking-[0.2em] uppercase mb-6">
          GET STARTED INSTANTLY
        </p>
        
        {/* Bold Brutalist Heading */}
        <h2 
          className="text-[clamp(2.5rem,7vw,4.5rem)] font-black text-white leading-[1.02] tracking-tighter uppercase mb-6 sm:mb-8"
          style={{ fontFamily: '"Arial Black", "Impact", "Inter", sans-serif' }}
        >
          Ready for your<br />next interview?
        </h2>
        
        {/* Clean High-Contrast Body */}
        <p className="text-sm sm:text-base text-white/60 mb-10 sm:mb-14 max-w-[440px] mx-auto leading-relaxed tracking-wide">
          Install in 30 seconds. No setup wizard, no account, no subscription.
          Just open it and execute.
        </p>

        {/* Stark Box Shaped Sharp-Corner Download Button - Converted to Orange Theme */}
        <div className="mb-12">
          <a
            href="https://github.com/balamurugan-cholas/Dosa/releases/download/0.0.4/Dosa.Setup.0.0.4.exe"
            className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-orange-500 text-black hover:bg-orange-400 text-xs font-black uppercase tracking-widest px-8 py-4 rounded-none transition-all duration-200 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]"
          >
            <Download size={14} strokeWidth={3} className="text-black transition-transform duration-200 group-hover:translate-y-[-1px]" />
            <span>Download for Windows</span>
          </a>
        </div>

        {/* Brutalist Metadata Footer Track - Updated indicators to orange */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 sm:gap-6 text-[11px] font-black uppercase tracking-widest text-white/40 font-mono">
          <div className="flex items-center gap-2 text-orange-500/80">
            <Monitor size={12} strokeWidth={3} className="text-orange-500" />
            <span>Windows 10 / 11</span>
          </div>
          <span className="hidden sm:block w-1.5 h-1.5 bg-orange-500/30 rotate-45 flex-shrink-0" />
          <span className="hover:text-white transition-colors duration-200 cursor-default">No account required</span>
          <span className="hidden sm:block w-1.5 h-1.5 bg-orange-500/30 rotate-45 flex-shrink-0" />
          <span className="hover:text-white transition-colors duration-200 cursor-default">Free to use</span>
          <span className="hidden sm:block w-1.5 h-1.5 bg-orange-500/30 rotate-45 flex-shrink-0" />
          <span className="hover:text-white transition-colors duration-200 cursor-default">Open source</span>
        </div>
      </div>
    </section>
  );
}
