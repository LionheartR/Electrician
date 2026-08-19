"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Zap,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Car,
  FileText,
  AlertTriangle,
  ChevronRight,
  Star,
  Calculator,
  Award,
  MapPin,
  HelpCircle,
  ChevronDown,
  MessageCircle,
  Laptop,
} from "lucide-react";
import QuoteEstimator from "../components/QuoteEstimator";

export default function MobilePage() {
  const [activeTab, setActiveTab] = useState<"home" | "services" | "quote" | "reviews" | "faq">("home");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      title: "Consumer Unit Upgrade",
      desc: "Replace old fuse box with modern dual RCD & RCBO breakers + Surge Protection (SPD).",
      price: "From £550",
      time: "4-6 Hours",
      image: "/images/fuse_box.jpg",
      badge: "Part P Certified",
      icon: Zap,
    },
    {
      title: "EV Charger Install",
      desc: "7kW Smart Wallbox installation for Tesla, BMW & all UK electric vehicles.",
      price: "From £650",
      time: "3-5 Hours",
      image: "/images/ev_charger.jpg",
      badge: "OZEV Approved",
      icon: Car,
    },
    {
      title: "EICR Certificate",
      desc: "Mandatory 5-year electrical safety inspection and testing for UK landlords.",
      price: "From £160",
      time: "Same-Day PDF",
      image: "/images/hero.jpg",
      badge: "Landlord Legal",
      icon: FileText,
    },
    {
      title: "24/7 Emergency Dispatch",
      desc: "Immediate dispatch for tripping breakers, burning smells, power cuts.",
      price: "From £95",
      time: "On-Site 45 Mins",
      image: "/images/emergency.jpg",
      badge: "24/7 Priority",
      icon: AlertTriangle,
    },
  ];

  const reviews = [
    {
      name: "James H.",
      loc: "Guildford, GU1",
      tag: "Fuse Box Upgrade",
      text: "Outstanding service. Upgraded our fuse box with surge protection. NICEIC certificate sent same day!",
    },
    {
      name: "Sarah M.",
      loc: "Woking, GU21",
      tag: "EICR Certificate",
      text: "Urgent EICR for my rental property. Arrived promptly and fixed an earthing issue on site.",
    },
    {
      name: "Mark T.",
      loc: "Farnham, GU9",
      tag: "EV Charger",
      text: "Fitted a Zappi charger in garage. Clean wiring, friendly advice on smart tariffs.",
    },
  ];

  const faqs = [
    {
      q: "What is Part P compliance?",
      a: "Part P is a UK building regulation ensuring safe electrical work. Apex registers all work directly with Building Control.",
    },
    {
      q: "How fast is emergency arrival?",
      a: "Our emergency vans average 30 to 45 minutes arrival across Guildford, Woking, and Surrey.",
    },
    {
      q: "Are quotes 100% fixed?",
      a: "Yes! Every quote calculated on our app comes with a 100% Fixed Price Guarantee.",
    },
  ];

  return (
    <div className="bg-[#09090b] text-[#f4f4f5] min-h-screen pb-28 font-sans selection:bg-yellow-400 selection:text-black">
      {/* App Top Header */}
      <header className="sticky top-0 z-50 bg-[#09090b]/95 backdrop-blur-md border-b-2 border-yellow-400 px-4 py-3 shadow-2xl">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-yellow-400 text-black flex items-center justify-center font-black">
              <Zap className="w-5 h-5 fill-black text-black" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base font-black tracking-tight text-white">
                APEX<span className="text-yellow-400">ELECTRICAL</span>
              </span>
              <span className="text-[9px] font-bold text-yellow-400 tracking-wider uppercase">
                NICEIC • 24/7 SURREY
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <a
              href="tel:+441234567890"
              className="flex items-center gap-1.5 bg-yellow-400 text-black px-3 py-1.5 rounded-xl font-black text-xs shadow-md active:scale-95 transition-transform"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>CALL</span>
            </a>

            <Link
              href="/"
              className="p-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white text-[10px] font-bold flex items-center gap-1"
              title="Full Website"
            >
              <Laptop className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Emergency Ticker Banner */}
      <div className="bg-yellow-400 text-black px-3 py-1.5 text-[11px] font-black flex items-center justify-between uppercase">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-black animate-ping"></span>
          24/7 DISPATCH — ON-SITE IN 45 MINS
        </span>
        <span className="font-bold">GUILDFORD & SURREY</span>
      </div>

      {/* Mobile Navigation Tabs */}
      <div className="px-3 py-2.5 bg-[#0d0d10] border-b border-zinc-800 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
        <button
          onClick={() => setActiveTab("home")}
          className={`px-3 py-1.5 rounded-xl text-xs font-black shrink-0 transition-all cursor-pointer ${
            activeTab === "home"
              ? "bg-yellow-400 text-black shadow-md"
              : "bg-[#121215] border border-zinc-800 text-zinc-300"
          }`}
        >
          ⚡ Overview
        </button>
        <button
          onClick={() => setActiveTab("services")}
          className={`px-3 py-1.5 rounded-xl text-xs font-black shrink-0 transition-all cursor-pointer ${
            activeTab === "services"
              ? "bg-yellow-400 text-black shadow-md"
              : "bg-[#121215] border border-zinc-800 text-zinc-300"
          }`}
        >
          🛠️ Services
        </button>
        <button
          onClick={() => setActiveTab("quote")}
          className={`px-3 py-1.5 rounded-xl text-xs font-black shrink-0 transition-all cursor-pointer ${
            activeTab === "quote"
              ? "bg-yellow-400 text-black shadow-md"
              : "bg-[#121215] border border-zinc-800 text-zinc-300"
          }`}
        >
          🧮 Calculator
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`px-3 py-1.5 rounded-xl text-xs font-black shrink-0 transition-all cursor-pointer ${
            activeTab === "reviews"
              ? "bg-yellow-400 text-black shadow-md"
              : "bg-[#121215] border border-zinc-800 text-zinc-300"
          }`}
        >
          ⭐ Reviews
        </button>
        <button
          onClick={() => setActiveTab("faq")}
          className={`px-3 py-1.5 rounded-xl text-xs font-black shrink-0 transition-all cursor-pointer ${
            activeTab === "faq"
              ? "bg-yellow-400 text-black shadow-md"
              : "bg-[#121215] border border-zinc-800 text-zinc-300"
          }`}
        >
          ❓ FAQs
        </button>
      </div>

      {/* Main Tab Content */}
      <main className="p-4 max-w-md mx-auto space-y-6">
        {/* OVERVIEW TAB */}
        {activeTab === "home" && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
            {/* Mobile Hero Card */}
            <div className="bg-[#121215] border-2 border-yellow-400 rounded-3xl p-5 shadow-2xl space-y-4 relative overflow-hidden">
              <div className="relative h-44 rounded-2xl overflow-hidden border border-yellow-400/40">
                <Image
                  src="/images/hero.jpg"
                  alt="UK Electrician"
                  fill
                  sizes="400px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <span className="absolute bottom-2 left-2 bg-yellow-400 text-black text-[10px] font-black px-2.5 py-0.5 rounded">
                  NICEIC #609412
                </span>
              </div>

              <div className="space-y-1.5 text-center">
                <h1 className="text-xl sm:text-2xl font-black leading-tight text-white">
                  24/7 CERTIFIED <span className="text-yellow-400">SURREY ELECTRICIAN</span>
                </h1>
                <p className="text-xs text-zinc-300 font-normal">
                  Guildford & Woking emergency dispatch. 100% fixed upfront pricing.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+441234567890"
                  className="flex items-center justify-center gap-1.5 bg-yellow-400 text-black py-3 rounded-2xl font-black text-xs shadow-lg shadow-yellow-400/20 active:scale-95 transition-transform"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call Dispatch</span>
                </a>

                <button
                  type="button"
                  onClick={() => setActiveTab("quote")}
                  className="flex items-center justify-center gap-1.5 bg-[#09090b] text-white py-3 rounded-2xl font-black text-xs border border-zinc-700 active:scale-95 transition-transform cursor-pointer"
                >
                  <Calculator className="w-4 h-4 text-yellow-400" />
                  <span>Quick Quote</span>
                </button>
              </div>
            </div>

            {/* Quick Stat Pill Cards */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-[#121215] border border-zinc-800 p-2.5 rounded-2xl text-center">
                <div className="text-xs sm:text-sm font-black text-yellow-400">45 MINS</div>
                <div className="text-[9px] font-bold text-zinc-400">Arrival</div>
              </div>
              <div className="bg-[#121215] border border-zinc-800 p-2.5 rounded-2xl text-center">
                <div className="text-xs sm:text-sm font-black text-yellow-400">100% FIXED</div>
                <div className="text-[9px] font-bold text-zinc-400">Quotes</div>
              </div>
              <div className="bg-[#121215] border border-zinc-800 p-2.5 rounded-2xl text-center">
                <div className="text-xs sm:text-sm font-black text-yellow-400">6 YEARS</div>
                <div className="text-[9px] font-bold text-zinc-400">Warranty</div>
              </div>
            </div>

            {/* Featured Services Preview */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-black">
                <span className="text-yellow-400 uppercase">Popular Electrical Jobs</span>
                <button onClick={() => setActiveTab("services")} className="text-zinc-400 underline cursor-pointer">
                  View All
                </button>
              </div>

              {services.slice(0, 2).map((s, idx) => (
                <div key={idx} className="bg-[#121215] border border-zinc-800 p-3.5 rounded-2xl flex items-center justify-between gap-3">
                  <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-zinc-800">
                    <Image src={s.image} alt={s.title} fill sizes="60px" className="object-cover" />
                  </div>
                  <div className="flex-grow space-y-0.5">
                    <div className="text-xs font-black text-white">{s.title}</div>
                    <div className="text-[10px] text-zinc-400 font-medium">{s.time}</div>
                    <div className="text-[11px] font-black text-yellow-400">{s.price}</div>
                  </div>
                  <a
                    href="tel:+441234567890"
                    className="p-2 rounded-xl bg-yellow-400 text-black font-black text-xs shrink-0"
                  >
                    Book
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* SERVICES TAB */}
        {activeTab === "services" && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            <h2 className="text-base font-black text-yellow-400 uppercase text-center">TRADE SERVICES</h2>

            {services.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div key={idx} className="bg-[#121215] border-2 border-zinc-800 rounded-3xl overflow-hidden shadow-lg space-y-3 p-4">
                  <div className="relative h-36 rounded-2xl overflow-hidden border border-zinc-800">
                    <Image src={s.image} alt={s.title} fill sizes="400px" className="object-cover" />
                    <span className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-black px-2.5 py-0.5 rounded">
                      {s.price}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-yellow-400 shrink-0" />
                      <h3 className="text-sm font-black text-white">{s.title}</h3>
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed font-normal">{s.desc}</p>
                  </div>

                  <div className="pt-2 border-t border-zinc-800 flex items-center justify-between">
                    <span className="text-[10px] text-zinc-400 font-bold">Est: {s.time}</span>
                    <a
                      href="tel:+441234567890"
                      className="bg-yellow-400 text-black px-4 py-1.5 rounded-xl font-black text-xs flex items-center gap-1"
                    >
                      <span>Call Engineer</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}

        {/* QUOTE TAB */}
        {activeTab === "quote" && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <QuoteEstimator />
          </motion.div>
        )}

        {/* REVIEWS TAB */}
        {activeTab === "reviews" && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            <div className="text-center space-y-1">
              <h2 className="text-base font-black text-yellow-400 uppercase">4.9 / 5.0 REVIEWS</h2>
              <p className="text-xs text-zinc-400">Verified local UK ratings</p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="bg-[#121215] border border-zinc-800 p-3 rounded-2xl text-center space-y-1">
                <ShieldCheck className="w-6 h-6 text-yellow-400 mx-auto" />
                <div className="text-xs font-black text-white">NICEIC Approved</div>
                <div className="text-[9px] text-zinc-400">#609412</div>
              </div>
              <div className="bg-[#121215] border border-zinc-800 p-3 rounded-2xl text-center space-y-1">
                <Award className="w-6 h-6 text-yellow-400 mx-auto" />
                <div className="text-xs font-black text-white">Part P Registered</div>
                <div className="text-[9px] text-zinc-400">LABC Certified</div>
              </div>
            </div>

            {reviews.map((r, idx) => (
              <div key={idx} className="bg-[#121215] border border-zinc-800 p-4 rounded-2xl space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-[9px] bg-yellow-400 text-black font-black px-2 py-0.5 rounded">
                    {r.tag}
                  </span>
                </div>
                <p className="text-xs text-zinc-300 italic leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                <div className="text-[11px] font-black text-white">{r.name} • <span className="text-zinc-400 font-normal">{r.loc}</span></div>
              </div>
            ))}

            <Link
              href="/review"
              className="w-full flex items-center justify-center gap-2 bg-yellow-400 text-black py-3 rounded-2xl font-black text-xs shadow-lg"
            >
              <span>POST DIRECT GOOGLE REVIEW</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}

        {/* FAQ TAB */}
        {activeTab === "faq" && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
            <h2 className="text-base font-black text-yellow-400 uppercase text-center mb-4">LOCAL FAQS</h2>

            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-[#121215] border border-zinc-800 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-3.5 text-left flex items-center justify-between font-black text-xs text-white cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-yellow-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-3.5 pb-3.5 text-xs text-zinc-300 border-t border-zinc-800 pt-2 font-normal leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="bg-yellow-400 text-black rounded-2xl p-4 text-center space-y-2 mt-6">
              <div className="text-sm font-black uppercase">NEED AN EMERGENCY ELECTRICIAN TODAY?</div>
              <p className="text-xs font-bold">On-site within 45 minutes across Guildford & Woking.</p>
              <a
                href="tel:+441234567890"
                className="w-full inline-flex items-center justify-center gap-2 bg-black text-white font-black py-3 rounded-xl text-xs"
              >
                <Phone className="w-4 h-4 fill-current text-yellow-400" />
                <span>CALL 01234 567890</span>
              </a>
            </div>
          </motion.div>
        )}
      </main>

      {/* App Fixed Bottom Navigation Sheet */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#09090b]/95 backdrop-blur-xl border-t-2 border-yellow-400 p-2 shadow-2xl safe-area-pb">
        <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
          <a
            href="tel:+441234567890"
            className="flex flex-col items-center justify-center bg-white text-black py-2 rounded-2xl text-[11px] font-black shadow-md border-2 border-black active:scale-95 transition-transform"
          >
            <Phone className="w-4 h-4 mb-0.5 fill-current" />
            <span>Call Now</span>
          </a>

          <a
            href="https://wa.me/441234567890?text=Hi%2C%20I%20need%20a%20mobile%20electrician%20quote"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center bg-emerald-500 text-black py-2 rounded-2xl text-[11px] font-black shadow-md active:scale-95 transition-transform"
          >
            <MessageCircle className="w-4 h-4 mb-0.5 fill-current" />
            <span>WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setActiveTab("quote")}
            className="flex flex-col items-center justify-center bg-yellow-400 text-black py-2 rounded-2xl text-[11px] font-black shadow-md shadow-yellow-400/20 active:scale-95 transition-transform cursor-pointer"
          >
            <Calculator className="w-4 h-4 mb-0.5" />
            <span>Quick Quote</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
