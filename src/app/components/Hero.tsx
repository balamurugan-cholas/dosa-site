"use client";

import { useEffect, useState } from "react";
import { Download, Terminal } from "lucide-react"; // Imported Terminal icon for VS Code
import AppMockup from "./AppMockup";

// Define the type for the AudioStatus component props
interface AudioStatusProps {
  isAnswering: boolean;
}

// --- AUDIO STATUS COMPONENT (FIXED ALIGNMENT & TS TYPES) ---
function AudioStatus({ isAnswering }: AudioStatusProps) {
  return (
    <div className="flex flex-row items-center gap-2 mb-6 sm:mb-8 z-10 relative">
      {/* Dynamic Wave Bars Icon Container */}
      <div className="flex items-center gap-[3px] h-4">
        <span className={`w-[2px] rounded-full bg-orange-500/60 ${isAnswering ? 'h-3.5 animate-[bounce_0.6s_infinite_0.1s]' : 'h-2.5 animate-[pulse_1s_infinite_0.1s]'}`} />
        <span className={`w-[2px] rounded-full bg-orange-500/60 ${isAnswering ? 'h-5 animate-[bounce_0.6s_infinite_0.3s]' : 'h-4 animate-[pulse_1s_infinite_0.3s]'}`} />
        <span className={`w-[2px] rounded-full bg-orange-500/60 ${isAnswering ? 'h-2 animate-[bounce_0.6s_infinite_0.5s]' : 'h-1.5 animate-[pulse_1s_infinite_0.5s]'}`} />
        <span className={`w-[2px] rounded-full bg-orange-500/60 ${isAnswering ? 'h-4.5 animate-[bounce_0.6s_infinite_0.2s]' : 'h-3.5 animate-[pulse_1s_infinite_0.2s]'}`} />
        <span className={`w-[2px] rounded-full bg-orange-500/60 ${isAnswering ? 'h-3 animate-[bounce_0.6s_infinite_0.4s]' : 'h-2 animate-[pulse_1s_infinite_0.4s]'}`} />
      </div>
      {/* Aligned Dynamic Text */}
      <span className="text-[10px] sm:text-xs text-orange-500/70 font-black tracking-[0.15em] uppercase leading-none min-w-[90px]">
        {isAnswering ? "Answering..." : "Listening..."}
      </span>
    </div>
  );
}

// --- NAVBAR COMPONENT ---
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/[0.05]" : "bg-transparent"
    }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 min-h-16 flex flex-row items-center justify-between">
        <span className="text-orange-500 text-xl font-black tracking-tighter uppercase transition-transform duration-200 active:scale-95 cursor-pointer" style={{ fontFamily: '"Arial Black", "Impact", "Inter", sans-serif' }} >
          DOSA
        </span>
        <a href="https://github.com/balamurugan-cholas/Dosa/releases/download/0.0.4/Dosa.Setup.0.0.4.exe" className="group inline-flex items-center justify-center gap-2 text-white/70 hover:text-orange-500 text-xs font-black uppercase tracking-widest p-2 sm:p-0 transition-colors duration-200" >
          <Download size={14} strokeWidth={3} className="transition-transform duration-200 group-hover:translate-y-[-1px]" />
          <span className="hidden sm:inline">Download</span>
        </a>
      </div>
    </nav>
  );
}

// --- MAIN HERO PAGE ---
export default function Hero() {
  // App state to handle the live mockup panel interactions
  const [isAnswering, setIsAnswering] = useState<boolean>(false);

  const handleAnswerClick = () => {
    setIsAnswering(true);
  };

  const handleClearClick = () => {
    setIsAnswering(false);
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white overflow-x-hidden relative">
      {/* Smooth Background Animation Blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-orange-600/10 rounded-full blur-[80px] sm:blur-[130px] animate-pulse pointer-events-none duration-[8000s] mix-blend-screen" />
      <div className="absolute top-1/3 left-1/3 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-orange-500/5 rounded-full blur-[60px] sm:blur-[100px] animate-ping pointer-events-none [animation-duration:12s] mix-blend-screen" />

      <Navbar />

      <section className="pt-32 sm:pt-44 pb-20 sm:pb-32 px-6 relative z-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-[800px]">
            {/* Minimalist Subheading reflecting Live Answering Engine */}
            <AudioStatus isAnswering={isAnswering} />

            {/* Bold Brutalist Typography */}
            <h1 className="text-[clamp(2.5rem,7vw,4.75rem)] font-black text-white leading-[1.02] tracking-tighter uppercase mb-6 sm:mb-8" style={{ fontFamily: '"Arial Black", "Impact", "Inter", sans-serif' }} >
              Your AI interview<br />companion. Invisible<br />to everyone else.
            </h1>

            {/* Clean High-Contrast Body */}
            <p className="text-sm sm:text-base text-white/60 leading-relaxed tracking-wide mb-10 sm:mb-12 max-w-[540px]">
              Live transcription, instant AI answers, screen analysis — all hidden from screen share. Compete at the highest level, quietly.
            </p>

            {/* Stark Actions: Dual Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Primary: Download Desktop App */}
              <a 
                href="https://github.com/balamurugan-cholas/Dosa/releases/download/0.0.4/Dosa.Setup.0.0.4.exe" 
                className="group inline-flex items-center justify-center gap-2 bg-orange-500 text-black hover:bg-orange-400 text-xs font-black uppercase tracking-widest px-6 py-4 rounded-none transition-colors duration-200"
              >
                <Download size={14} strokeWidth={3} className="text-black transition-transform duration-200 group-hover:translate-y-[-1px]" />
                <span>Download App</span>
              </a>

              {/* Secondary: VS Code Extension */}
              <a 
                href="https://github.com/balamurugan-cholas/Dosa/releases/download/0.0.4/vscode-dosa-bridge-0.1.0.vsix" // Replace with your actual VS Code Marketplace URL
                className="group inline-flex items-center justify-center gap-2 bg-transparent text-white border border-white/20 hover:border-orange-500/50 hover:text-orange-500 text-xs font-black uppercase tracking-widest px-6 py-4 rounded-none transition-colors duration-200"
              >
                <Terminal size={14} strokeWidth={3} className="transition-transform duration-200 group-hover:rotate-6" />
                <span>VS Code Extension</span>
              </a>
            </div>
          </div>

          {/* Connected Mockup Wrapper (Clicking inner buttons triggers typewriter animation) */}
          <div className="mt-16 sm:mt-24 opacity-90 relative z-20">
            <AppMockup isAnswering={isAnswering} onAnswerTrigger={() => handleAnswerClick()} onClearTrigger={() => handleClearClick()} />
          </div>
        </div>
      </section>
    </div>
  );
}
