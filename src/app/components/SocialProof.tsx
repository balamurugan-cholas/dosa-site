"use client";

export default function SocialProof() {
  const items = [
    "Free forever",
    "No screen share detection",
    "Works with Zoom, Meet, Teams",
    "No account required",
    "Windows native",
  ];

  // Double the items array to ensure a seamless looping illusion across wide screens
  const tickerItems = [...items, ...items, ...items];

  return (
    <div className="relative border-y border-white/[0.06] py-5 overflow-hidden bg-[#0a0a0a]">
      {/* Premium Gradient Edge Masks for a smooth fade effect */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

      {/* Infinite Horizontal Animation Track Container */}
      <div className="flex max-w-[1200px] mx-auto overflow-hidden whitespace-nowrap">
        <div className="inline-flex gap-12 animate-[ticker_25s_linear_infinite]">
          {tickerItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2.5 flex-shrink-0 group cursor-default">
              {/* Updated to a subtle orange accent diamond */}
              <span className="w-1.5 h-1.5 bg-orange-500/40 rotate-45 transition-transform duration-300 group-hover:scale-125 group-hover:bg-orange-500" />
              {/* Text fades to orange on component hover */}
              <span className="text-xs font-black uppercase tracking-widest text-white/40 transition-colors duration-200 group-hover:text-orange-500/80">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
