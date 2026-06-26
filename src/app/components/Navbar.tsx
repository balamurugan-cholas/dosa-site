import { useEffect, useState } from "react";
import { Download } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/[0.05]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 min-h-16 flex flex-row items-center justify-between">
        <span 
          className="text-white text-xl font-black tracking-tighter uppercase transition-transform duration-200 active:scale-95 cursor-pointer"
          style={{ fontFamily: '"Arial Black", "Impact", "Inter", sans-serif' }}
        >
          DOSA
        </span>
        <a
          href="#download"
          className="group inline-flex items-center justify-center gap-2 text-white/70 hover:text-white text-xs font-black uppercase tracking-widest p-2 sm:p-0 transition-colors duration-200"
        >
          <Download size={14} strokeWidth={3} className="transition-transform duration-200 group-hover:translate-y-[-1px]" />
          <span className="hidden sm:inline">Download</span>
        </a>
      </div>
    </nav>
  );
}
