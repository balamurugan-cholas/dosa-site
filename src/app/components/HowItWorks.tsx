"use client";

const STEPS = [
  {
    number: "STEP 01",
    title: "Start listening",
    description:
      "Launch DOSA before your interview. It runs silently in the background, invisible to any screen-sharing software.",
  },
  {
    number: "STEP 02",
    title: "Interviewer talks, DOSA transcribes",
    description:
      "Every word your interviewer says is captured in real time by Deepgram. The transcript appears instantly in the DOSA overlay.",
  },
  {
    number: "STEP 03",
    title: "Click Answer, get response",
    description:
      "One click sends the transcript to the AI. A structured, interview-ready answer streams back in under 2 seconds.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-36 px-6 border-b border-white/[0.06] bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Title Meta & Header Track */}
        <div className="mb-16 sm:mb-24">
          {/* Section tag changed to premium orange */}
          <p className="text-[10px] sm:text-xs text-orange-500/80 font-black tracking-[0.2em] uppercase mb-4">
            OPERATIONAL FLOW
          </p>
          <h2 
            className="text-[clamp(2.25rem,6vw,3.5rem)] font-black text-white leading-[1.02] tracking-tighter uppercase"
            style={{ fontFamily: '"Arial Black", "Impact", "Inter", sans-serif' }}
          >
            Three steps.<br />Zero friction.
          </h2>
        </div>

        {/* Structural Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-12 xl:gap-x-16">
          {STEPS.map((step, i) => (
            <div 
              key={i} 
              className="relative pt-6 border-t border-white/[0.08] transition-all duration-300 group hover:border-orange-500/40 flex flex-col justify-start cursor-default"
            >
              {/* Dynamic Orange Animated Accent Underline Track */}
              <div className="absolute top-0 left-0 w-0 h-[1px] bg-orange-500 transition-all duration-300 group-hover:w-full" />

              {/* Technical Step Phase Flag - Updates to bright orange on parent card hover */}
              <div className="text-[10px] font-black tracking-widest text-white/30 uppercase mb-4 font-mono transition-colors duration-300 group-hover:text-orange-500">
                {step.number}
              </div>

              {/* Step Title Header */}
              <h3 
                className="text-base font-black text-white mb-3.5 uppercase tracking-wide leading-tight max-w-[20ch]"
                style={{ fontFamily: '"Arial Black", "Impact", "Inter", sans-serif' }}
              >
                {step.title}
              </h3>
              
              {/* Step Context Description */}
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed tracking-wide transition-colors duration-300 group-hover:text-white/80">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
