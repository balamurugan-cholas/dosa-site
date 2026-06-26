"use client";

import { useEffect, useState } from "react";
import { RefreshCw } from "lucide-react";

const CODE_LINES = [
  { indent: 0, content: "function twoSum(nums, target) {" },
  { indent: 1, content: "const map = new Map();" },
  { indent: 1, content: "for (let i = 0; i < nums.length; i++) {" },
  { indent: 2, content: "const complement = target - nums[i];" },
  { indent: 2, content: "if (map.has(complement)) {" },
  { indent: 3, content: "return [map.get(complement), i];" },
  { indent: 2, content: "}" },
  { indent: 2, content: "map.set(nums[i], i);" },
  { indent: 1, content: "}" },
  { indent: 0, content: "}" },
];

const ANSWER_TEXT =
  "Use a hash map to store each number's index as you iterate. For each element, check if its complement (target - current) already exists in the map. If yes, return both indices. This gives O(n) time and O(n) space — optimal for this problem.";

// Strict TypeScript definitions for the Mockup props
interface AppMockupProps {
  isAnswering: boolean;
  onAnswerTrigger?: () => void;
  onClearTrigger?: () => void;
}

export default function AppMockup({ isAnswering, onAnswerTrigger, onClearTrigger }: AppMockupProps) {
  const [visibleChars, setVisibleChars] = useState(0);

  // Sync state: Type out character bytes only when isAnswering is active
  useEffect(() => {
    if (!isAnswering) {
      setVisibleChars(0);
      return;
    }
    if (visibleChars >= ANSWER_TEXT.length) return;

    const timer = setTimeout(() => setVisibleChars((v) => v + 3), 15);
    return () => clearTimeout(timer);
  }, [isAnswering, visibleChars]);

  return (
    <div className="relative rounded-none border border-white/[0.08] overflow-hidden bg-[#0d0d0d]">
      {/* Brutalist Window Topbar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-[#090909]">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <span className="ml-2 text-[11px] text-white/40 font-mono tracking-wider">
            LEETCODE — TWO SUM
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_340px] min-h-[340px] xl:min-h-[400px]">
        {/* Code Workspace Editor */}
        <div className="min-w-0 p-4 sm:p-6 font-mono text-[13px] border-b xl:border-b-0 xl:border-r border-white/[0.08] overflow-hidden bg-[#0a0a0a]">
          <div className="text-[10px] text-white/30 mb-4 uppercase tracking-widest font-black">
            solution.js
          </div>
          {CODE_LINES.map((line, i) => (
            <div key={i} className="flex leading-6">
              <span className="text-white/10 w-8 text-right mr-4 select-none text-xs flex-shrink-0">
                {i + 1}
              </span>
              <span
                style={{ paddingLeft: `${line.indent * 16}px` }}
                className="text-white/50"
              >
                <CodeLine content={line.content} />
              </span>
            </div>
          ))}
        </div>

        {/* Minimal Overlay Box Panel */}
        <div className="flex flex-col bg-[#0d0d0d]">
          {/* Box Header Section */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-[11px] font-black text-white tracking-widest uppercase">
                DOSA
              </span>
            </div>
            <span className="text-[9px] text-white/30 font-mono tracking-widest uppercase">
              HIDDEN FROM SHARE
            </span>
          </div>

          {/* Integrated Dynamic Live Audio Stream */}
          <div className="p-4 border-b border-white/[0.08]">
            <div className="text-[9px] text-white/30 font-black uppercase tracking-widest mb-2.5">
              TRANSCRIBTED TEXT
            </div>
            <p className="text-xs text-white/60 leading-5 font-medium italic">
              "Can you solve two sum in better than O(n²)? Walk me through your approach."
            </p>
            
            {/* EXACT HORIZONTAL WAVE ALIGNMENT FIXED HERE TOO */}
            <div className="flex flex-row items-center gap-2 mt-3 h-4">
              <div className="flex gap-[3px] items-center h-full">
                {[3, 5, 2, 4, 3, 5, 4, 2].map((h, i) => (
                  <div
                    key={i}
                    className={`w-[1.5px] bg-white/40 rounded-full ${
                      isAnswering ? "animate-[bounce_0.6s_infinite]" : "animate-pulse"
                    }`}
                    style={{
                      height: isAnswering ? `${h * 1.8}px` : `${h + 4}px`,
                      animationDelay: `${i * 70}ms`,
                    }}
                  />
                ))}
              </div>
              <span className="text-[10px] text-white/40 font-black tracking-widest uppercase leading-none">
                {isAnswering ? "Answering..." : "Listening..."}
              </span>
            </div>
          </div>

          {/* Typewriter Stream Interface */}
          <div className="p-4 flex-1 bg-[#090909]/40">
            <div className="text-[9px] text-white/30 font-black uppercase tracking-widest mb-2">
              DOSA RESPONSE
            </div>
            {isAnswering ? (
              <p className="text-xs text-white/80 leading-5 tracking-wide font-medium">
                {ANSWER_TEXT.slice(0, visibleChars)}
                {visibleChars < ANSWER_TEXT.length && (
                  <span className="inline-block w-[1.5px] h-3 bg-white ml-0.5 align-middle animate-pulse" />
                )}
              </p>
            ) : (
              <p className="text-xs text-white/20 italic tracking-wide">
                Awaiting manual engine execution switch...
              </p>
            )}
          </div>

          {/* Clean Functional Minimal Actions */}
          <div className="px-4 py-3 border-t border-white/[0.08] flex items-center gap-4">
            {/* Answer Trigger Button */}
            <button 
              onClick={onAnswerTrigger}
              disabled={isAnswering}
              className={`flex-1 text-[10px] font-black uppercase tracking-widest py-2 rounded-none border transition-all duration-200 ${
                isAnswering 
                  ? "bg-transparent border-emerald-500/20 text-emerald-400 cursor-default" 
                  : "bg-white text-black border-white hover:bg-white/95"
              }`}
            >
              {isAnswering ? "Active" : "Answer"}
            </button>
            
            {/* Functional Clear Action */}
            <button 
              onClick={onClearTrigger}
              disabled={!isAnswering}
              className={`flex items-center justify-center gap-1.5 text-[10px] font-black uppercase tracking-widest py-2 px-3 transition-colors duration-200 ${
                isAnswering 
                  ? "text-rose-400/80 hover:text-rose-400" 
                  : "text-white/10 cursor-not-allowed"
              }`}
            >
              <RefreshCw size={10} strokeWidth={3} className={isAnswering ? "animate-spin [animation-duration:8s]" : ""} />
              <span>Clear</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CodeLine({ content }: { content: string }) {
  const keywords = ["function", "return", "for", "if", "let", "const", "new"];
  const parts: { text: string; type: "keyword" | "string" | "default" }[] = [];

  let remaining = content;
  while (remaining.length > 0) {
    let matched = false;
    for (const kw of keywords) {
      if (remaining.startsWith(kw) && (remaining[kw.length] === " " || remaining[kw.length] === "(" || !remaining[kw.length])) {
        parts.push({ text: kw, type: "keyword" });
        remaining = remaining.slice(kw.length);
        matched = true;
        break;
      }
    }
    if (!matched) {
      const last = parts[parts.length - 1];
      if (last && last.type === "default") {
        last.text += remaining[0];
      } else {
        parts.push({ text: remaining[0], type: "default" });
      }
      remaining = remaining.slice(1);
    }
  }

  return (
    <>
      {parts.map((p, i) =>
        p.type === "keyword" ? (
          <span key={i} className="text-white font-bold">
            {p.text}
          </span>
        ) : (
          <span key={i}>{p.text}</span>
        )
      )}
    </>
  );
}
