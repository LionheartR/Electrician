"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Zap, Phone, ShieldCheck, Menu, X, Calculator, Clock } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#09090b]">
      {/* Top Urgent Emergency Dispatch Banner */}
      <div className="bg-yellow-400 text-black text-xs font-bold py-2 px-4 sm:px-8 border-b border-yellow-500 shadow-sm">
        <div className="container mx-auto max-w-7xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
            </span>
            <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider truncate">
              ⚡ 24/7 Emergency Dispatch • 45-Min Response in Guildford, Woking & Surrey
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-6 shrink-0 text-[11px] font-bold">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" /> NICEIC Approved #609412
            </span>
            <span className="text-black/40">•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> 24 Hours / 7 Days
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar Bar */}
      <nav
        className={`w-full transition-all duration-300 border-b ${
          scrolled
            ? "bg-[#09090b]/95 backdrop-blur-md border-zinc-800 shadow-2xl py-3.5"
            : "bg-[#09090b] border-zinc-800/80 py-4"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-8 max-w-7xl flex items-center justify-between gap-8">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-yellow-400 text-black flex items-center justify-center font-black text-xl shadow-lg shadow-yellow-400/20 group-hover:scale-105 transition-transform">
              <Zap className="w-5 h-5 fill-black text-black" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white">APEX</span>
                <span className="text-xl sm:text-2xl font-black tracking-tight text-yellow-400">ELECTRICAL</span>
              </div>
              <span className="text-[10px] font-semibold text-zinc-400 tracking-wider uppercase">
                NICEIC Approved • Part P Certified
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-zinc-300">
            <Link href="/#services" className="hover:text-yellow-400 transition-colors whitespace-nowrap">
              Services
            </Link>
            <Link href="/#quote-section" className="hover:text-yellow-400 transition-colors whitespace-nowrap">
              Instant Quote
            </Link>
            <Link href="/#reviews" className="hover:text-yellow-400 transition-colors whitespace-nowrap">
              Reviews
            </Link>
            <Link href="/#faqs" className="hover:text-yellow-400 transition-colors whitespace-nowrap">
              FAQs
            </Link>
          </div>

          {/* Desktop Right CTAs */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href="tel:+441234567890"
              className="flex items-center gap-2 bg-zinc-900/90 hover:bg-zinc-800 text-white hover:text-yellow-400 px-5 py-2.5 rounded-xl font-bold text-xs border border-zinc-700/80 hover:border-yellow-400/50 transition-all"
            >
              <Phone className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              <span>01234 567890</span>
            </a>

            <Link
              href="#quote-section"
              className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black px-5 py-2.5 rounded-xl font-black text-xs transition-all shadow-lg shadow-yellow-400/20 hover:scale-105 whitespace-nowrap"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>GET INSTANT ESTIMATE</span>
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="tel:+441234567890"
              className="p-2.5 rounded-xl bg-yellow-400 text-black font-black text-xs flex items-center justify-center shadow-md"
              aria-label="Call emergency dispatcher"
            >
              <Phone className="w-4 h-4 fill-current" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white hover:text-yellow-400"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#09090b] border-t border-zinc-800 px-5 py-6 space-y-4 shadow-2xl">
            <div className="grid grid-cols-1 gap-2.5 text-sm font-semibold text-zinc-300">
              <Link
                href="/#services"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-[#121215] border border-zinc-800 hover:text-yellow-400"
              >
                🛠️ Services & Fixed Rates
              </Link>
              <Link
                href="/#quote-section"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-[#121215] border border-zinc-800 hover:text-yellow-400"
              >
                🧮 60-Second Instant Quote
              </Link>
              <Link
                href="/#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-[#121215] border border-zinc-800 hover:text-yellow-400"
              >
                ⭐ 4.9/5 Reviews & Accreditations
              </Link>
              <Link
                href="/#faqs"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-[#121215] border border-zinc-800 hover:text-yellow-400"
              >
                ❓ FAQs & Regulations
              </Link>
            </div>

            <div className="pt-3 border-t border-zinc-800/80 grid grid-cols-1 gap-3">
              <a
                href="tel:+441234567890"
                className="w-full flex items-center justify-center gap-2 bg-yellow-400 text-black py-3.5 rounded-xl font-black text-xs shadow-lg shadow-yellow-400/20"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>CALL DISPATCH: 01234 567890</span>
              </a>

              <Link
                href="#quote-section"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-zinc-900 text-white border border-zinc-700 py-3.5 rounded-xl font-black text-xs"
              >
                <Calculator className="w-4 h-4 text-yellow-400" />
                <span>CALCULATE FIXED ESTIMATE</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
