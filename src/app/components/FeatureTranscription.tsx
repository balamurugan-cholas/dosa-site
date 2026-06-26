"use client";

import { useEffect, useRef, useState } from "react";

const TRANSCRIPT_PHRASES = [
  { text: "Tell me about your approach to system design. ", duration: 1500 },
  { text: "How would you handle 10 million concurrent users? ", duration: 1800 },
  { text: "Walk me through your database schema choices. ", duration: 1600 },
  { text: "What trade-offs did you consider?", duration: 1200 },
];

export default function FeatureTranscription() {
  const [typedParagraph, setTypedParagraph] = useState<string>("");
  const [isIncomingAudio, setIsIncomingAudio] = useState<boolean>(false);
  
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const startSimulation = async () => {
      let accumulatedText = "";

      for (let i = 0; i < TRANSCRIPT_PHRASES.length; i++) {
        const phrase = TRANSCRIPT_PHRASES[i];
        
        setIsIncomingAudio(true);
        
        const chars = phrase.text.split("");
        const speed = Math.floor(phrase.duration / chars.length);

        for (const char of chars) {
          accumulatedText += char;
          setTypedParagraph(accumulatedText);
          await new Promise((resolve) => setTimeout(resolve, speed));
        }

        setIsIncomingAudio(false);
        
        // Short natural breath gap between interviewer sentences
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          startSimulation();
        }
      },
      { threshold: 0.3 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 sm:py-36 px-6 border-b border-white/[0.06] bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left Side Branding Copy */}
        <div className="min-w-0">
          <p className="text-[10px] sm:text-xs text-orange-500/80 font-black tracking-[0.2em] uppercase mb-4">
            FEATURE 01
          </p>
          <h2 
            className="text-[clamp(2.25rem,6vw,3.5rem)] font-black text-white leading-[1.02] tracking-tighter uppercase mb-6"
            style={{ fontFamily: '"Arial Black", "Impact", "Inter", sans-serif' }}
          >
            Live transcription.<br />Zero latency.
          </h2>
          <p className="text-sm sm:text-base text-white/60 leading-relaxed tracking-wide mb-8 max-w-[540px]">
            Deepgram-powered speech recognition engines convert your interviewer's 
            voice into text raw data stream in absolute real time — maintaining sub-300ms 
            latencies. Every parameter captured, silently.
          </p>
          
          <div className="inline-flex max-w-full flex-row items-center gap-3 border border-orange-500/20 px-4 py-2.5 rounded-none text-xs font-mono tracking-wider bg-orange-500/[0.02]">
            <span className="text-orange-500 uppercase font-bold">DEEPGRAM -</span>
            <span className="text-white/80">Hears everything, blocks capture.</span>
          </div>
        </div>

        {/* Right Side Highly Interactive Box */}
        <div ref={ref} className="min-w-0 bg-[#0d0d0d] border border-white/[0.08] rounded-none">
          {/* Header Track */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-[#090909]">
            <div className="flex items-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full ${isIncomingAudio ? "bg-orange-500 animate-pulse" : "bg-white/25"}`} />
              <span className={`text-[10px] sm:text-xs font-black tracking-widest uppercase transition-colors duration-200 ${isIncomingAudio ? "text-orange-500" : "text-white"}`}>
                {isIncomingAudio ? "Interviewer Speaking" : "Waiting for Audio"}
              </span>
            </div>
            
            {/* Live Audio Intercept Waveform Indicator */}
            <div className="flex flex-row items-center gap-2 h-4">
              <div className="flex gap-[2px] items-center h-full">
                {[3, 5, 7, 4, 6, 8, 5, 3].map((h, i) => (
                  <div
                    key={i}
                    className={`w-[1.5px] rounded-full bg-orange-50 transition-all duration-200 ${
                      isIncomingAudio ? "animate-[bounce_0.6s_infinite] opacity-100" : "h-1.5 opacity-30"
                    }`}
                    style={{
                      height: isIncomingAudio ? `${h}px` : "3px",
                      animationDelay: `${i * 60}ms`,
                    }}
                  />
                ))}
              </div>
              <span className="text-[9px] text-white/30 font-mono tracking-widest">
                300MS
              </span>
            </div>
          </div>
          
          {/* Continuous Paragraph Board */}
          <div className="p-5 sm:p-6 min-h-[220px] sm:min-h-[260px] flex flex-col justify-start">
            <div className="text-[9px] text-white/30 font-black uppercase tracking-widest mb-3 font-mono">
              Live Capture Stream
            </div>
            
            {typedParagraph ? (
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-mono tracking-wide">
                {typedParagraph}
                {isIncomingAudio && (
                  <span className="inline-block w-[2px] h-3.5 bg-orange-500 ml-1 align-middle animate-[pulse_0.4s_infinite]" />
                )}
              </p>
            ) : (
              <p className="text-xs text-white/20 italic tracking-wider font-mono">
                Awaiting interviewer speech sequence...
              </p>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
