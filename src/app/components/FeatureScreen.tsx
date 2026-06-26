"use client";

export default function FeatureScreen() {
  return (
    <section className="py-24 sm:py-36 px-6 border-b border-white/[0.06] bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left Side Branding Copy Column */}
        <div className="min-w-0">
          {/* Changed text color to orange-500/80 */}
          <p className="text-[10px] sm:text-xs text-orange-500/80 font-black tracking-[0.2em] uppercase mb-4">
            FEATURE 03
          </p>
          <h2 
            className="text-[clamp(2.25rem,6vw,3.5rem)] font-black text-white leading-[1.02] tracking-tighter uppercase mb-6"
            style={{ fontFamily: '"Arial Black", "Impact", "Inter", sans-serif' }}
          >
            Reads your screen.<br />Explains the code.
          </h2>
          <p className="text-sm sm:text-base text-white/60 leading-relaxed tracking-wide mb-8 max-w-[500px]">
            Gemini Vision engines continuously process visual matrix arrays instantly — 
            deciphering complex algorithms, layouts, or flow charts. DOSA translates 
            raw structures into architectural engineering context.
          </p>
          
          {/* Flat Brutalist Meta Capsule - Updated to orange accent borders and headers */}
          <div className="inline-flex max-w-full flex-row items-center gap-3 border border-orange-500/20 px-4 py-2.5 rounded-none text-xs font-mono tracking-wider bg-orange-500/[0.02]">
            <span className="text-orange-500 uppercase font-bold">GEMINI VISION -</span>
            <span className="text-white/80">Real-time mapping, zero storage footprint.</span>
          </div>
        </div>

        {/* Right Side Brutalist Panel Component */}
        <div className="min-w-0 bg-[#0d0d0d] border border-white/[0.08] rounded-none">
          {/* Header Track */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-[#090909]">
            <div className="flex items-center gap-2">
              {/* Pulsing indicator light turned orange */}
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-black text-orange-500 tracking-widest uppercase">
                Visual Analytics Frame
              </span>
            </div>
            <span className="text-[9px] text-white/30 font-mono tracking-widest">
              CAPTURE ACTIVE
            </span>
          </div>

          {/* Question Display Screen Section */}
          <div className="p-5 border-b border-white/[0.08]">
            <div className="text-[9px] text-white/30 font-black uppercase tracking-widest mb-3 font-mono">
              Live Input Feed
            </div>
            {/* Flat Zero-Radius Code Monitor Box - Tinted with fine orange border traces */}
            <div className="bg-[#090909]/40 rounded-none border border-orange-500/10 p-4 font-mono text-xs overflow-x-auto leading-relaxed">
              <div className="text-orange-500/60 mb-1">{"LeetCode 42 — Trapping Rain Water"}</div>
              <div className="text-white/70">{"Given n non-negative integers representing"}</div>
              <div className="text-white/70">{"an elevation map where the width of each bar"}</div>
              <div className="text-white/70">{"is 1, compute how much water it can trap."}</div>
              <div className="mt-3 text-white/40">{"height = [0,1,0,2,1,0,1,3,2,1,2,1]"}</div>
              <div className="text-orange-500 font-bold">{"Output: 6"}</div>
            </div>
          </div>

          {/* AI Explanation Result Output Section */}
          <div className="p-5">
            <div className="text-[9px] text-white/30 font-black uppercase tracking-widest mb-3 font-mono">
              Structural Breakdown
            </div>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-mono tracking-wide">
              Two-pointer approach: track max heights from left and right. Water
              at each position equals{" "}
              {/* Formula highlighter updated to orange styling block */}
              <span className="text-orange-500 font-bold bg-orange-500/10 px-1.5 py-0.5 border border-orange-500/20 select-all">
                min(maxL, maxR) - height[i]
              </span>
              . Move the pointer with the smaller max inward. O(n) time, O(1) space.
            </p>
            
            {/* Clean, Sharp Informational Meta Tags - Interacts to solid orange fills on group hover */}
            <div className="mt-5 flex flex-wrap gap-3 group">
              {["O(n) time", "O(1) space", "Two pointers"].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-black uppercase tracking-widest text-white/40 border border-white/10 px-3 py-1.5 rounded-none transition-all duration-200 hover:border-orange-500 hover:text-orange-500 hover:bg-orange-500/[0.02]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
