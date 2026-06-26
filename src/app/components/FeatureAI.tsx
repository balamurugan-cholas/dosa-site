"use client";

import { useEffect, useRef, useState } from "react";

const RESPONSES = {
  default: "To handle 10M concurrent users, I'd use a horizontally-scaled microservices architecture with load balancers distributing traffic. Key components: CDN for static assets, Redis for session caching, read replicas for database scaling, and message queues (Kafka) for async processing. Each service scales independently based on load metrics via Kubernetes HPA.",
  elaborate: "Scaling to 10M concurrent users demands a multi-tiered global approach. First, Edge layer deployment via Cloudflare Anycast routes traffic to healthy geographic points. Next, API Gateways (Kong) enforce strict rate-limiting. The application tier leverages stateless NestJS instances managed inside Kubernetes nodes using Horizontal Pod Autoscaling (HPA) driven by custom Prometheus metrics. Storage loads are mitigated by Redis clusters handling high-throughput session writes, paired with highly optimized PostgreSQL read-replicas handling localized analytics queries without impacting master database transactions.",
  simplify: "To handle 10M users, distribute incoming network traffic across multiple servers using smart load balancers. Cache common web data using Redis so your primary databases don't get overwhelmed. Finally, decouple critical services using message queues to process long-running tasks safely in the background."
};

export default function FeatureAI() {
  const [activeMode, setActiveMode] = useState<"default" | "elaborate" | "simplify">("default");
  const [chars, setChars] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const ref = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);

  // Initial stream when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          setIsGenerating(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Controls the live typewriter streaming speed
  useEffect(() => {
    if (!isGenerating || chars >= RESPONSES[activeMode].length) {
      if (chars >= RESPONSES[activeMode].length) {
        setIsGenerating(false);
      }
      return;
    }
    const t = setTimeout(() => setChars((c) => c + 3), 18);
    return () => clearTimeout(t);
  }, [isGenerating, chars, activeMode]);

  // Handles switching modes with loading state simulation
  const handleModeChange = async (mode: "elaborate" | "simplify") => {
    if (isGenerating) return;
    setIsGenerating(false);
    setChars(0);
    setActiveMode(mode);
    
    // Tiny delay to simulate deep network request analysis context
    await new Promise((resolve) => setTimeout(resolve, 600));
    setIsGenerating(true);
  };

  // Handles copying the active context text smoothly
  const handleCopy = () => {
    navigator.clipboard.writeText(RESPONSES[activeMode]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 sm:py-36 px-6 border-b border-white/[0.06] bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Mockup Panel Component — Left Side */}
        <div ref={ref} className="min-w-0 bg-[#0d0d0d] border border-white/[0.08] rounded-none order-2 lg:order-1">
          {/* Header Track */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-[#090909]">
            <div className="flex items-center gap-2">
              {/* Pulsing indicator turned orange */}
              <span className={`w-1.5 h-1.5 rounded-full ${isGenerating ? "bg-orange-500 animate-pulse" : "bg-white/30"}`} />
              <span className={`text-[10px] sm:text-xs font-black tracking-widest uppercase transition-colors duration-200 ${isGenerating ? "text-orange-500" : "text-white"}`}>
                {isGenerating ? "AI Generating Response" : "AI Output Ready"}
              </span>
            </div>
            <div className="flex items-center">
              <span className={`text-[9px] font-mono tracking-widest uppercase transition-colors duration-200 ${isGenerating ? "text-orange-500/80" : "text-white/30"}`}>
                {isGenerating ? "Streaming..." : "Done"}
              </span>
            </div>
          </div>

          {/* Active Context Panels */}
          <div className="p-5 font-mono">
            {/* Question citation border updated to orange accent */}
            <div className="border border-orange-500/20 bg-orange-500/[0.01] p-3 mb-4 rounded-none">
              <p className="text-xs text-white/40 italic">
                "How would you handle 10 million concurrent users?"
              </p>
            </div>
            
            {/* Response Content Feed */}
            <div className="min-h-[160px] flex flex-col justify-start">
              {chars === 0 && isGenerating ? (
                <p className="text-xs text-orange-500/50 italic tracking-wider animate-pulse">
                  Analyzing context matrix logs...
                </p>
              ) : (
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed tracking-wide">
                  {RESPONSES[activeMode].slice(0, chars)}
                  {isGenerating && (
                    /* Terminal cursor block switched to orange */
                    <span className="inline-block w-[1.5px] h-3.5 bg-orange-500 ml-1 align-middle animate-[pulse_0.4s_infinite]" />
                  )}
                </p>
              )}
            </div>
          </div>

          {/* Premium Minimal Action Buttons */}
          <div className="px-5 pb-5 grid grid-cols-3 gap-3">
            {/* 1. Copy Action Trigger */}
            <button 
              onClick={handleCopy}
              className="text-[10px] font-black uppercase tracking-widest py-2 border border-white/10 hover:border-orange-500 hover:text-orange-500 text-white bg-transparent transition-all duration-200"
            >
              {copied ? "Copied" : "Copy"}
            </button>

            {/* 2. Elaborate Action Trigger */}
            <button 
              onClick={() => handleModeChange("elaborate")}
              disabled={isGenerating}
              className={`text-[10px] font-black uppercase tracking-widest py-2 border transition-all duration-200 ${
                activeMode === "elaborate"
                  ? "bg-orange-500 text-black border-orange-500 cursor-default"
                  : "bg-transparent border-white/10 text-white/50 hover:text-white hover:border-white/40 disabled:opacity-30 disabled:cursor-not-allowed"
              }`}
            >
              Elaborate
            </button>

            {/* 3. Simplify Action Trigger */}
            <button 
              onClick={() => handleModeChange("simplify")}
              disabled={isGenerating}
              className={`text-[10px] font-black uppercase tracking-widest py-2 border transition-all duration-200 ${
                activeMode === "simplify"
                  ? "bg-orange-500 text-black border-orange-500 cursor-default"
                  : "bg-transparent border-white/10 text-white/50 hover:text-white hover:border-white/40 disabled:opacity-30 disabled:cursor-not-allowed"
              }`}
            >
              Simplify
            </button>
          </div>
        </div>

        {/* Branding Typography Column — Right Side */}
        <div className="min-w-0 order-1 lg:order-2">
          {/* Metadata label switched to orange */}
          <p className="text-[10px] sm:text-xs text-orange-500/80 font-black tracking-[0.2em] uppercase mb-4">
            FEATURE 02
          </p>
          <h2 
            className="text-[clamp(2.25rem,6vw,3.5rem)] font-black text-white leading-[1.02] tracking-tighter uppercase mb-6"
            style={{ fontFamily: '"Arial Black", "Impact", "Inter", sans-serif' }}
          >
            AI answers.<br />Under 2 seconds.
          </h2>
          <p className="text-sm sm:text-base text-white/60 leading-relaxed tracking-wide mb-8 max-w-[500px]">
            Your transcription data streams straight into modern generation structures. 
            One macro cycle outputs structural, verified parameters targeted safely for 
            technical execution levels.
          </p>
        </div>

      </div>
    </section>
  );
}
