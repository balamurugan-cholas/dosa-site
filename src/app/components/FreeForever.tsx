"use client";

const SERVICES = [
  {
    name: "Deepgram",
    role: "Live transcription",
    credit: "$200 FREE CREDIT",
    note: "~400 hours of audio metrics",
  },
  {
    name: "OpenRouter",
    role: "AI answers",
    credit: "FREE MODELS INCLUDED",
    note: "Llama, Mistral, Gemma networks",
  },
  {
    name: "Gemini",
    role: "Screen analysis",
    credit: "1,500 REQ / DAY",
    note: "Flash 1.5 — absolute zero cost",
  },
];

export default function FreeForever() {
  return (
    <section className="py-24 sm:py-36 px-6 border-b border-white/[0.06] bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-24">
          {/* Main layout tag updated to themed orange */}
          <p className="text-[10px] sm:text-xs text-orange-500/80 font-black tracking-[0.2em] uppercase mb-4">
            TOTAL FREE TIER ECOSYSTEM
          </p>
          <h2 
            className="text-[clamp(2.25rem,6vw,3.5rem)] font-black text-white Rust-base leading-[1.02] tracking-tighter uppercase mb-6"
            style={{ fontFamily: '"Arial Black", "Impact", "Inter", sans-serif' }}
          >
            Built to be free.
          </h2>
          <p className="text-sm sm:text-base text-white/60 max-w-[540px] mx-auto leading-relaxed tracking-wide">
            DOSA itself is free, fully open-source, and always will be. It processes 
            environment logic via the generous native free allocations of three premium APIs.
          </p>
        </div>

        {/* Brutalist Infrastructure Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {SERVICES.map(({ name, role, credit, note }) => (
            <div
              key={name}
              className="group border border-white/[0.08] p-6 bg-[#0d0d0d] rounded-none hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-between min-h-[180px] cursor-default relative overflow-hidden"
            >
              {/* Dynamic Orange Lower Accent Accent Line */}
              <div className="absolute bottom-0 left-0 h-[2px] bg-orange-500 w-0 transition-all duration-300 group-hover:w-full" />

              <div>
                {/* Module Heading Metatags */}
                <div className="flex items-center justify-between mb-4 font-mono">
                  <div 
                    className="text-white text-base font-black uppercase tracking-wide transition-colors duration-200 group-hover:text-orange-500"
                    style={{ fontFamily: '"Arial Black", "Impact", "Inter", sans-serif' }}
                  >
                    {name}
                  </div>
                  <span className="text-[9px] text-white/30 tracking-widest uppercase">
                    API CORE
                  </span>
                </div>
                
                {/* Structural Functional Role */}
                <div className="text-xs font-black uppercase tracking-widest text-white/40 mb-6 font-mono">
                  {role}
                </div>
              </div>

              {/* Vertical Border Accent switched to orange-500 */}
              <div className="border-l-2 border-orange-500 pl-3 py-0.5 font-mono">
                <div className="text-xs sm:text-sm font-black tracking-widest text-white uppercase leading-none mb-1.5 transition-colors duration-200 group-hover:text-orange-400">
                  {credit}
                </div>
                <div className="text-[10px] text-white/30 tracking-wider uppercase leading-none">
                  {note}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security / Privacy Footnote Notice Box - Tinted with orange borders */}
        <div className="mt-16 text-center max-w-[600px] mx-auto">
          <p className="text-xs sm:text-sm text-white/40 leading-relaxed tracking-wide border border-orange-500/10 bg-orange-500/[0.01] p-4 rounded-none font-mono">
            <span className="text-orange-500 font-bold uppercase">Security Guard Policy:</span> Bring your own local API keys — DOSA executes variables directly on your hardware and never stores or proxies credentials. Your keys, your absolute ownership.
          </p>
        </div>
        
      </div>
    </section>
  );
}
