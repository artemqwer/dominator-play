"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const imgLogo = "/logo.svg";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      style={{ top: '0' }}
      className={`sticky left-0 w-full h-[146px] z-[9999] transition-all duration-300 px-[120px] flex items-center justify-center ${
        isScrolled 
          ? "bg-black/40 backdrop-blur-xl border-b border-white/10" 
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="w-full max-w-[1680px] flex items-center justify-between h-full">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="h-[40px] shrink-0">
            <img src={imgLogo} alt="DP" className="h-full w-auto object-contain" />
          </div>
          <div className="flex flex-col leading-[0.9] text-white">
            <span className="font-extrabold text-[20px] tracking-tight uppercase text-white">Dominator</span>
            <span className="font-extrabold text-[20px] tracking-tight uppercase opacity-60 text-white">Play</span>
          </div>
        </Link>

        {/* Right Section (Nav + Button) with strict 32px gaps */}
        <div className="flex items-center gap-[32px]">
          {/* Navigation Section */}
          <nav className="flex items-center gap-[32px]">
            <Link href="#" className="text-[14px] font-semibold text-white/70 hover:text-white transition-colors">Games</Link>
            <Link href="#" className="text-[14px] font-semibold text-white/70 hover:text-white transition-colors">About Us</Link>
            <div className="flex items-center gap-1 cursor-pointer group">
              <span className="text-[14px] font-semibold text-white/70 group-hover:text-white transition-colors">News</span>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="opacity-50 group-hover:opacity-100 transition-opacity">
                 <path d="M1 1L5 5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex items-center gap-1 cursor-pointer group">
              <span className="text-[14px] font-semibold text-white/70 group-hover:text-white transition-colors uppercase">en</span>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="opacity-50 group-hover:opacity-100 transition-opacity">
                 <path d="M1 1L5 5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </nav>

          {/* Action Button */}
          <button className="w-[176px] h-[48px] border border-[#FF4F8B] bg-white/5 hover:bg-[#FF4F8B]/20 text-white flex items-center justify-center gap-[10px] rounded-[9px] text-[14px] font-bold transition-all uppercase tracking-wider">
            Client Area
          </button>
        </div>
      </div>
    </header>
  );
}
