"use client";

import { EyeOff, Eye } from "lucide-react";

export default function InvisibleSection() {
  return (
    <section className="py-24 sm:py-36 px-6 border-b border-white/[0.06] bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-24">
          {/* Section tag changed to premium orange */}
          <p className="text-[10px] sm:text-xs text-orange-500/80 font-black tracking-[0.2em] uppercase mb-4">
            PRIVACY INTEGRITY BY DESIGN
          </p>
          <h2 
            className="text-[clamp(2.25rem,6vw,3.5rem)] font-black text-white leading-[1.02] tracking-tighter uppercase"
            style={{ fontFamily: '"Arial Black", "Impact", "Inter", sans-serif' }}
          >
            Hidden from screen share.<br />Not hidden from you.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Side: Technical Explanation Text Column */}
          <div className="min-w-0">
            <p className="text-sm sm:text-base text-white/60 leading-relaxed tracking-wide mb-8">
              DOSA integrates deep window architecture layers using Electron's{" "}
              {/* Formula highlighter updated to orange styling block */}
              <span className="text-orange-500 font-bold bg-orange-500/10 px-1.5 py-0.5 border border-orange-500/20 font-mono text-xs sm:text-sm select-all">
                setContentProtection
              </span>{" "}
              API framework strings to enforce total secure mask abstraction. This native hardware call 
              instructs the operating system core to dynamically block screen capture raster arrays, 
              rendering window frames completely blank across broadcast channels.
            </p>

            {/* Brutalist Platform Status Matrix Rows */}
            <div className="space-y-4">
              {[
                {
                  icon: EyeOff,
                  label: "OBS, Zoom, Teams, Meet",
                  value: "Blank Window Capture",
                  isActive: false,
                },
                {
                  icon: Eye,
                  label: "Local System User View",
                  value: "Full Core UI Stream",
                  isActive: true,
                },
              ].map(({ icon: Icon, label, value, isActive }, i) => (
                <div
                  key={i}
                  className={`flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border px-5 py-4 bg-[#0d0d0d] rounded-none transition-all duration-300 ${
                    isActive ? "border-orange-500/30 shadow-[0_0_15px_rgba(249,115,22,0.02)]" : "border-white/[0.08]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={14} strokeWidth={3} className={isActive ? "text-orange-500" : "text-white/30"} />
                    <span className={`text-xs font-black uppercase tracking-widest font-mono ${isActive ? "text-white" : "text-white/50"}`}>
                      {label}
                    </span>
                  </div>
                  <span className={`text-xs font-black uppercase tracking-widest font-mono ${isActive ? "text-orange-500" : "text-white/30"}`}>
                    [ {value} ]
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-white/40 mt-6 leading-relaxed tracking-wide">
              This executes directly as an OS-level environment policy — not a fragile injection or runtime bypass wrapper hook. It acts with absolute stability across screen shares parsing platform window handles.
            </p>
          </div>

          {/* Right Side: Split Stream Mockups Panel Track */}
          <div className="space-y-4 min-w-0">
            {/* Stream View Split One: OBS Broadcast Output */}
            <div className="border border-white/[0.08] rounded-none bg-[#0d0d0d]">
              <div className="flex items-center justify-between px-4 py-3 bg-[#090909] border-b border-white/[0.08]">
                <span className="text-[10px] sm:text-xs font-black text-white/40 uppercase tracking-widest font-mono">
                  ZOOM MEET — Preview Stream
                </span>
                <span className="text-[9px] font-black text-white/30 tracking-widest uppercase font-mono">
                  RECORDING
                </span>
              </div>
              <div className="bg-[#050505] h-[160px] sm:h-[180px] flex items-center justify-center px-4 font-mono">
                <div className="text-center">
                  <div className="w-12 h-12 border border-dashed border-white/10 rounded-none mx-auto mb-3 flex items-center justify-center">
                    <EyeOff size={16} strokeWidth={3} className="text-white/20" />
                  </div>
                  <p className="text-[10px] text-white/40 font-black tracking-widest uppercase">
                    CONTENT PROTECTED
                  </p>
                  <p className="text-[9px] text-white/20 tracking-wider mt-1">
                    System framework renders frame blank
                  </p>
                </div>
              </div>
            </div>

            {/* Stream View Split Two: Your Actual Display View - Updated with high-contrast Orange focal theme */}
            <div className="border border-orange-500/40 rounded-none bg-[#0d0d0d] shadow-[0_0_20px_rgba(249,115,22,0.03)]">
              <div className="flex items-center justify-between px-4 py-3 bg-[#090909] border-b border-orange-500/40">
                <span className="text-[10px] sm:text-xs font-black text-orange-500 uppercase tracking-widest font-mono">
                  Local Target Screen — ENTIRE SCREEN
                </span>
                <span className="text-[9px] font-black text-orange-500 tracking-widest uppercase font-mono">
                  VISIBLE TO YOU
                </span>
              </div>
              <div className="bg-[#090909]/40 h-[170px] sm:h-[190px] p-5 font-mono">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                    <span className="text-[10px] font-black text-white tracking-widest uppercase">
                      DOSA - STREAM ENGINE ACTIVE
                    </span>
                  </div>
                  <div className="border border-white/[0.08] bg-[#090909]/40 p-2.5 rounded-none">
                    <p className="text-[11px] text-white/40 italic">
                      "Tell me about your experience with distributed systems."
                    </p>
                  </div>
                  <div className="bg-orange-500/10 border border-orange-500/20 p-2.5 rounded-none">
                    <p className="text-xs text-white/90 leading-relaxed tracking-wide">
                      I've worked extensively with distributed architectures,
                      particularly around consensus algorithms and eventual
                      consistency patterns...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
