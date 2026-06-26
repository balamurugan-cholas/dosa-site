"use client";

import { Github, Instagram, Tag } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 sm:py-16 px-6 border-t border-white/[0.06] bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
        
        {/* Brand Information Module */}
        <div className="flex flex-col gap-1.5">
          {/* Logo updated to crisp primary brand orange */}
          <span 
            className="text-orange-500 text-lg font-black tracking-tighter uppercase"
            style={{ fontFamily: '"Arial Black", "Impact", "Inter", sans-serif' }}
          >
            DOSA
          </span>
          <p className="text-xs font-black uppercase tracking-widest text-white/40 font-mono">
            Built to compete with Parakeet AI, for free.
          </p>
        </div>

        {/* Minimal Navigation & Star Tray */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
          {/* GitHub Profile Icon Link */}
          <a
            href="https://github.com/balamurugan-cholas"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="text-white/40 hover:text-orange-500 transition-colors duration-200 p-1.5 border border-transparent hover:border-orange-500/20 bg-transparent"
          >
            <Github size={16} strokeWidth={2.5} />
          </a>

          {/* Instagram Profile Icon Link */}
          <a
            href="https://www.instagram.com/post_maram?igsh=MWltZ3YyMDVxdnoyYQ=="
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="text-white/40 hover:text-orange-500 transition-colors duration-200 p-1.5 border border-transparent hover:border-orange-500/20 bg-transparent"
          >
            <Instagram size={16} strokeWidth={2.5} />
          </a>

          {/* Version Releases Tag Icon Link */}
          <a
            href="https://github.com/balamurugan-cholas/Dosa/releases/tag/0.0.1"
            target="_blank"
            rel="noopener noreferrer"
            title="Latest Releases"
            className="text-white/40 hover:text-orange-500 transition-colors duration-200 p-1.5 border border-transparent hover:border-orange-500/20 bg-transparent mr-2"
          >
            <Tag size={16} strokeWidth={2.5} />
          </a>
          
          {/* Flat Minimal Star Button Box - Shifts to orange outline theme on hover */}
          <a
            href="https://github.com/balamurugan-cholas/Dosa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-transparent text-white border border-white/10 hover:border-orange-500 hover:text-orange-500 px-3 py-2 rounded-none text-[10px] sm:text-xs font-mono font-black uppercase tracking-widest transition-all duration-200"
          >
            <Github size={12} strokeWidth={3} />
            <span>Star on GitHub</span>
          </a>
        </div>
        
      </div>
    </footer>
  );
}
