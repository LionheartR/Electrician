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
  FileCheck2,
  Sparkles,
  ShieldAlert,
  Check,
} from "lucide-react";
import QuoteEstimator from "./components/QuoteEstimator";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      title: "Consumer Unit & Fuse Box Upgrades",
      desc: "Replace outdated, hazardous rewireable fuse wire boards with modern 18th Edition metal-clad dual RCD & RCBO consumer units with Surge Protection (SPD).",
      price: "From £550",
      time: "4-6 Hours",
      image: "/images/fuse_box.jpg",
      badge: "Part P Certified",
      icon: Zap,
      link: "/services/fuse-box-upgrades-consumer-units",
      benefits: ["Individual RCBO Breakers", "Surge Protection (SPD) Included", "Full NICEIC Certification"],
    },
    {
      title: "Smart EV Charger Installation",
      desc: "7kW to 22kW smart home EV wallbox installations for Tesla, BMW, Audi, Nissan & all UK electric vehicles. Compatible with cheap overnight solar/EV tariffs.",
      price: "From £650",
      time: "3-5 Hours",
      image: "/images/ev_charger.jpg",
      badge: "Smart Tariff Ready",
      icon: Car,
      link: "/services/ev-charger-installation",
      benefits: ["OZEV Approved Installers", "Dynamic Load Management", "Smart App Configuration"],
    },
    {
      title: "Landlord EICR Safety Certificates",
      desc: "Mandatory 5-year electrical safety inspection and testing for UK landlords, letting agents, and homebuyers with comprehensive digital reporting.",
      price: "From £160",
      time: "Same-Day PDF",
      image: "/images/hero.jpg",
      badge: "Legal Compliance",
      icon: FileText,
      link: "/services/eicr-landlord-certificates",
      benefits: ["City & Guilds 2391 Inspectors", "Clear C1/C2/C3 Code Breakdown", "Fast 24-Hr Turnaround"],
    },
    {
      title: "24/7 Emergency Fault Finding & Repair",
      desc: "Immediate dispatch for tripping switches, complete power outages, burning smells from sockets, or storm damage. Fully equipped rapid response vans.",
      price: "From £95",
      time: "On-Site in 45 Mins",
      image: "/images/emergency.jpg",
      badge: "24/7 Priority",
      icon: AlertTriangle,
      link: "/services/emergency-247-electrician",
      benefits: ["Thermal Diagnostic Scans", "No Callout Fee With Repair", "Safe Power Restored Fast"],
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Instant Fixed Estimate",
      desc: "Use our 60-second online quote wizard or call our dispatch desk for clear, 100% upfront fixed pricing with zero hidden fees.",
      icon: Calculator,
    },
    {
      num: "02",
      title: "Rapid Dispatch & Booking",
      desc: "Choose a convenient appointment slot or request priority 45-minute emergency arrival anywhere across Guildford and Surrey.",
      icon: Clock,
    },
    {
      num: "03",
      title: "Certified Safe Work",
      desc: "Our City & Guilds qualified, NICEIC Approved electricians execute the work cleanly in strict adherence to BS 7671 IET regulations.",
      icon: ShieldCheck,
    },
    {
      num: "04",
      title: "Same-Day Certification",
      desc: "Receive your official digital NICEIC Electrical Installation Certificate and LABC Building Control notification with our 6-year warranty.",
      icon: Award,
    },
  ];

  const reviews = [
    {
      name: "James H.",
      loc: "Guildford, GU1",
      tag: "Consumer Unit Upgrade",
      text: "Outstanding craftsmanship. Replaced our dangerous 1980s fuse board with a sleek RCBO unit with surge protection. Arrived right on time and provided the NICEIC certificate the same afternoon.",
    },
    {
      name: "Sarah M.",
      loc: "Woking, GU21",
      tag: "EICR Certificate",
      text: "Needed an urgent landlord EICR before new tenants moved into our rental apartment. Apex carried out thorough testing, fixed an earthing bonding issue on site, and emailed the report within hours.",
    },
    {
      name: "Mark T.",
      loc: "Farnham, GU9",
      tag: "EV Charger Installation",
      text: "Fitted a Zappi EV wallbox neatly in our garage. Flawless conduit routing, patient guidance on scheduling cheap overnight charging on Intelligent Octopus, and registered with building control.",
    },
    {
      name: "Claire & Simon P.",
      loc: "Godalming, GU7",
      tag: "24/7 Emergency Dispatch",
      text: "Our main RCD tripped and cut off power at 10 PM on a Sunday night. Apex arrived in under 35 minutes, quickly pinpointed a flooded outdoor patio socket, and safely restored our power.",
    },
  ];

  const faqs = [
    {
      q: "What is Part P of the UK Building Regulations and why is it important?",
      a: "Part P is a legal requirement in England & Wales ensuring domestic electrical installations are designed and installed safely. As an NICEIC Approved Contractor, Apex Electrical automatically issues Part P Compliance Certificates and registers all notifiable work with Local Authority Building Control (LABC) on your behalf.",
    },
    {
      q: "How fast can an emergency electrician arrive at my property?",
      a: "Our emergency vans are stationed across Guildford, Woking, and surrounding Surrey areas with an average arrival time of 30 to 45 minutes for urgent power failures, burning smells, or water ingress emergencies.",
    },
    {
      q: "Are your quotes 100% fixed with no hidden fees?",
      a: "Yes. Every quote calculated through our 60-second online estimator or agreed upon with our dispatch team comes with our 100% Fixed Price Guarantee. What we quote is what you pay — no surprise charges or hidden extras.",
    },
    {
      q: "How long does a modern consumer unit / fuse box replacement take?",
      a: "A standard consumer unit replacement typically takes between 4 to 6 hours. This covers complete installation of dual RCD/RCBO breakers, Surge Protection Devices (SPD), full circuit testing, and same-day digital certification.",
    },
    {
      q: "Are landlords legally required to have an EICR certificate in England?",
      a: "Yes. By law, private landlords in England must ensure all electrical installations in their rental properties are inspected and tested every 5 years (or at change of tenancy) by a qualified inspector, with certificates provided to tenants.",
    },
  ];

  const coverageAreas = [
    { name: "Guildford", code: "GU1, GU2, GU3, GU4", link: "/locations/electrician-guildford" },
    { name: "Woking", code: "GU21, GU22, GU24", link: "/locations/electrician-woking" },
    { name: "Godalming", code: "GU7, GU8", link: "/locations/electrician-guildford" },
    { name: "Farnham", code: "GU9, GU10", link: "/locations/electrician-guildford" },
    { name: "Camberley", code: "GU15, GU16", link: "/locations/electrician-woking" },
    { name: "Weybridge", code: "KT13", link: "/locations/electrician-woking" },
  ];

  return (
    <div className="bg-[#09090b] text-[#f4f4f5] min-h-screen">
      {/* ========================================================================= */}
      {/* SECTION 1: HERO SECTION — SPACIOUS, BALANCED, ELEGANT */}
      {/* ========================================================================= */}
      <section className="relative py-16 sm:py-24 lg:py-28 border-b border-zinc-800/80 bg-gradient-to-b from-[#09090b] via-[#111114] to-[#09090b] overflow-hidden">
        <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-7"
            >
              {/* Trust Badge Pill */}
              <div>
                <span className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-lg shadow-yellow-400/20">
                  <ShieldCheck className="w-4 h-4 text-black shrink-0" />
                  <span>NICEIC APPROVED CONTRACTOR #609412</span>
                </span>
              </div>

              {/* Main H1 Headline with Refined Proportions */}
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight text-white leading-[1.16]">
                Certified Electrical Safety & <span className="text-yellow-400">24/7 Rapid Dispatch</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-xl font-normal">
                Part P certified master electricians serving Guildford, Woking & Surrey. 100% fixed upfront pricing, 45-minute emergency response, and a 6-year workmanship warranty.
              </p>

              {/* Action Buttons Row */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <a
                  href="tel:+441234567890"
                  className="inline-flex items-center justify-center gap-2.5 bg-yellow-400 hover:bg-yellow-300 text-black font-black px-6 py-3.5 rounded-xl shadow-lg shadow-yellow-400/20 text-sm sm:text-base transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 fill-current text-black shrink-0" />
                  <span>Call Dispatch: 01234 567890</span>
                </a>

                <a
                  href="#quote-section"
                  className="inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-bold px-6 py-3.5 rounded-xl border border-zinc-700 hover:border-yellow-400 text-sm sm:text-base transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
                >
                  <Calculator className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span>Get Instant Estimate</span>
                </a>
              </div>

              {/* Quick Value Metrics Cards */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="bg-[#121215] border border-zinc-800 hover:border-yellow-400/50 p-3.5 sm:p-4 rounded-xl text-center transition-all shadow-sm">
                  <div className="text-base sm:text-lg font-black text-yellow-400">45 MINS</div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-zinc-400 uppercase tracking-wide mt-0.5 whitespace-nowrap">Rapid Arrival</div>
                </div>
                <div className="bg-[#121215] border border-zinc-800 hover:border-yellow-400/50 p-3.5 sm:p-4 rounded-xl text-center transition-all shadow-sm">
                  <div className="text-base sm:text-lg font-black text-yellow-400">100% FIXED</div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-zinc-400 uppercase tracking-wide mt-0.5 whitespace-nowrap">No Hidden Fees</div>
                </div>
                <div className="bg-[#121215] border border-zinc-800 hover:border-yellow-400/50 p-3.5 sm:p-4 rounded-xl text-center transition-all shadow-sm">
                  <div className="text-base sm:text-lg font-black text-yellow-400">6 YEARS</div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-zinc-400 uppercase tracking-wide mt-0.5 whitespace-nowrap">Work Warranty</div>
                </div>
              </div>
            </motion.div>

            {/* Right Media Card Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-3xl overflow-hidden border-2 border-yellow-400 shadow-2xl group bg-[#121215]">
                <div className="relative h-[340px] sm:h-[420px] w-full">
                  <Image
                    src="/images/hero.jpg"
                    alt="Certified UK NICEIC Electrician testing consumer unit in Surrey"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent"></div>
                </div>

                {/* Floating Bottom Trust Panel */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#09090b]/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-yellow-400/40 space-y-1.5 shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-yellow-400 uppercase flex items-center gap-1.5">
                      <Zap className="w-4 h-4 fill-yellow-400 text-yellow-400" /> NICEIC APPROVED #609412
                    </span>
                    <span className="text-[10px] bg-yellow-400 text-black font-black px-2 py-0.5 rounded">
                      VERIFIED ACTIVE
                    </span>
                  </div>
                  <p className="text-xs font-bold text-white">Full BS 7671 Testing & Same-Day Compliance PDF</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: TRUST ACCREDITATIONS PILLARS */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-18 bg-[#0d0d10] border-b border-zinc-800/80">
        <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="bg-[#121215] border border-zinc-800 hover:border-yellow-400/40 p-5 sm:p-6 rounded-2xl text-center space-y-2.5 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 flex items-center justify-center mx-auto">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-sm font-black text-white">NICEIC Approved</div>
              <div className="text-xs text-zinc-400 font-medium">Contractor #609412</div>
            </div>

            <div className="bg-[#121215] border border-zinc-800 hover:border-yellow-400/40 p-5 sm:p-6 rounded-2xl text-center space-y-2.5 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 flex items-center justify-center mx-auto">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-sm font-black text-white">Part P Registered</div>
              <div className="text-xs text-zinc-400 font-medium">Building Control Compliant</div>
            </div>

            <div className="bg-[#121215] border border-zinc-800 hover:border-yellow-400/40 p-5 sm:p-6 rounded-2xl text-center space-y-2.5 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 flex items-center justify-center mx-auto">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <div className="text-sm font-black text-white">City & Guilds 2391</div>
              <div className="text-xs text-zinc-400 font-medium">Inspection & Testing Specialist</div>
            </div>

            <div className="bg-[#121215] border border-zinc-800 hover:border-yellow-400/40 p-5 sm:p-6 rounded-2xl text-center space-y-2.5 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 flex items-center justify-center mx-auto">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div className="text-sm font-black text-white">£5M Public Liability</div>
              <div className="text-xs text-zinc-400 font-medium">Fully Insured & Indemnified</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: CORE ELECTRICAL SERVICES WITH TRANSPARENT RATES */}
      {/* ========================================================================= */}
      <section id="services" className="py-20 sm:py-28 bg-[#09090b] border-b border-zinc-800/80">
        <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-1.5 bg-yellow-400 text-black px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> TRANSPARENT TRADE RATES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              SPECIALIST ELECTRICAL SERVICES
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Every job is carried out in full compliance with BS 7671 IET Wiring Regulations with fixed upfront pricing.
            </p>
          </div>

          {/* 4 Core Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {services.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#121215] border-2 border-zinc-800 hover:border-yellow-400 rounded-3xl overflow-hidden shadow-xl transition-all flex flex-col justify-between group"
                >
                  {/* Card Image Area */}
                  <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121215] via-[#121215]/40 to-transparent"></div>

                    {/* Price Badge */}
                    <span className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-black px-4 py-1.5 rounded-full shadow-lg">
                      {s.price}
                    </span>

                    {/* Tag Badge */}
                    <span className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md text-yellow-400 border border-yellow-400/40 text-xs font-bold px-3.5 py-1 rounded-lg">
                      {s.badge}
                    </span>
                  </div>

                  {/* Card Content Area */}
                  <div className="p-7 sm:p-8 space-y-5">
                    <div className="flex items-center gap-3.5">
                      <div className="p-3 rounded-2xl bg-yellow-400 text-black shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-yellow-400 transition-colors">
                        {s.title}
                      </h3>
                    </div>

                    <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                      {s.desc}
                    </p>

                    {/* Bullet Inclusions */}
                    <div className="space-y-2 pt-1">
                      {s.benefits.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-zinc-300">
                          <Check className="w-4 h-4 text-yellow-400 shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Metadata & Links */}
                    <div className="pt-5 border-t border-zinc-800 flex items-center justify-between text-xs sm:text-sm font-bold">
                      <span className="text-zinc-400 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-yellow-400" /> Est: {s.time}
                      </span>

                      <div className="flex items-center gap-4">
                        <Link
                          href={s.link}
                          className="text-zinc-400 hover:text-white transition-colors"
                        >
                          Details
                        </Link>
                        <a
                          href="tel:+441234567890"
                          className="bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-2 rounded-xl font-black transition-transform hover:scale-105 flex items-center gap-1"
                        >
                          Book <ChevronRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: 60-SECOND INSTANT QUOTE ESTIMATOR WIZARD */}
      {/* ========================================================================= */}
      <section id="quote-section" className="py-20 sm:py-28 bg-[#0d0d10] border-b border-zinc-800/80">
        <div className="container mx-auto px-4 max-w-4xl">
          <QuoteEstimator />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: HOW WE WORK */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#09090b] border-b border-zinc-800/80">
        <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-1.5 bg-yellow-400 text-black px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" /> SIMPLE 4-STEP PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              HOW WE DELIVER FLAWLESS ELECTRICAL WORK
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              From your first contact to same-day digital certification, our process is fast, transparent, and hassle-free.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#121215] border border-zinc-800 hover:border-yellow-400/50 p-7 rounded-3xl space-y-5 relative transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-yellow-400">{step.num}</span>
                    <div className="w-12 h-12 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-lg font-black text-white">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: VERIFIED CUSTOMER REVIEWS & SOCIAL PROOF */}
      {/* ========================================================================= */}
      <section id="reviews" className="py-20 sm:py-28 bg-[#0d0d10] border-b border-zinc-800/80">
        <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 bg-yellow-400 text-black px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
                <Star className="w-3.5 h-3.5 fill-black" /> 4.9 / 5.0 RATING ACROSS SURREY
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                TRUSTED BY 2,400+ LOCAL HOMEOWNERS & LANDLORDS
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
                Authentic, verified reviews from customers in Guildford, Woking, Farnham, and Godalming.
              </p>
            </div>

            <Link
              href="/review"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3.5 rounded-xl font-black text-xs sm:text-sm transition-all shrink-0 shadow-lg shadow-yellow-400/20"
            >
              <span>LEAVE GOOGLE REVIEW</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((r, idx) => (
              <div
                key={idx}
                className="bg-[#121215] border border-zinc-800 hover:border-yellow-400/40 p-6 sm:p-7 rounded-3xl space-y-4 flex flex-col justify-between transition-all"
              >
                <div className="space-y-3">
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 italic leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                </div>

                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-black text-white">{r.name}</div>
                    <div className="text-xs text-zinc-400 mt-0.5">{r.loc}</div>
                  </div>
                  <span className="text-[10px] bg-yellow-400 text-black font-black px-2.5 py-1 rounded">
                    {r.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: EMERGENCY 24/7 CALLOUT BANNER & SURREY LOCAL COVERAGE */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#09090b] border-b border-zinc-800/80">
        <div className="container mx-auto px-4 sm:px-8 max-w-7xl space-y-14">
          {/* Urgent Emergency Callout Highlight Card */}
          <div className="bg-yellow-400 text-black rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl text-center lg:text-left">
              <span className="bg-black text-yellow-400 px-3.5 py-1.5 rounded-full text-xs font-black uppercase">
                ⚡ 24/7 RAPID EMERGENCY DISPATCH
              </span>
              <h3 className="text-2xl sm:text-4xl font-black leading-tight">
                NEED AN EMERGENCY ELECTRICIAN IN SURREY RIGHT NOW?
              </h3>
              <p className="text-sm sm:text-base font-bold opacity-90 leading-relaxed">
                On-site in 45 minutes across Guildford, Woking & Surrey. No call-out fee when repairs are authorized.
              </p>
            </div>

            <a
              href="tel:+441234567890"
              className="w-full lg:w-auto inline-flex items-center justify-center gap-3 bg-black hover:bg-zinc-900 text-white font-black px-8 py-4 rounded-2xl text-sm sm:text-base transition-transform hover:scale-105 shrink-0 shadow-xl whitespace-nowrap"
            >
              <Phone className="w-4 h-4 fill-current text-yellow-400" />
              <span>Call Dispatch: 01234 567890</span>
            </a>
          </div>

          {/* Local Service Area Coverage Grid */}
          <div className="bg-[#121215] border border-zinc-800 p-8 sm:p-10 rounded-3xl space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs font-black text-yellow-400 uppercase tracking-widest">
                LOCAL REGIONAL FOOTPRINT
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                AREAS WE ACTIVELY COVER IN SURREY
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {coverageAreas.map((area, idx) => (
                <Link
                  key={idx}
                  href={area.link}
                  className="bg-[#09090b] border border-zinc-800 hover:border-yellow-400 p-4 rounded-2xl text-center space-y-1.5 group transition-all"
                >
                  <MapPin className="w-4 h-4 text-yellow-400 mx-auto" />
                  <div className="text-xs sm:text-sm font-black text-white group-hover:text-yellow-400 transition-colors">
                    {area.name}
                  </div>
                  <div className="text-[10px] text-zinc-400 font-bold">{area.code}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: COMPREHENSIVE FAQS ACCORDION */}
      {/* ========================================================================= */}
      <section id="faqs" className="py-20 sm:py-28 bg-[#0d0d10] border-b border-zinc-800/80">
        <div className="container mx-auto px-4 max-w-3xl space-y-10">
          <div className="text-center space-y-3">
            <span className="inline-flex items-center gap-1.5 bg-yellow-400 text-black px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" /> GOT QUESTIONS?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Answers regarding UK wiring regulations, landlord compliance, and fixed pricing.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#121215] border border-zinc-800 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between font-black text-sm sm:text-base text-white hover:text-yellow-400 transition-colors gap-4"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-yellow-400 shrink-0 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-sm text-zinc-300 border-t border-zinc-800/80 pt-4 leading-relaxed font-normal">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 9: FINAL BOOKING CTA */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#09090b] text-center">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <div className="inline-flex p-3.5 rounded-2xl bg-yellow-400 text-black">
            <Zap className="w-8 h-8 fill-black text-black" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            READY TO POWER YOUR HOME SAFELY?
          </h2>

          <p className="text-zinc-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Speak directly with a NICEIC Approved Electrician or calculate your instant fixed price quote in under 60 seconds.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="tel:+441234567890"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-yellow-400 hover:bg-yellow-300 text-black font-black px-8 py-4 rounded-xl text-sm sm:text-base shadow-xl shadow-yellow-400/25 transition-transform hover:scale-105 whitespace-nowrap"
            >
              <Phone className="w-4 h-4 fill-current text-black" />
              <span>Call 01234 567890</span>
            </a>

            <a
              href="#quote-section"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-bold px-8 py-4 rounded-xl border border-zinc-700 hover:border-yellow-400 text-sm sm:text-base transition-transform hover:scale-105 whitespace-nowrap"
            >
              <Calculator className="w-4 h-4 text-yellow-400" />
              <span>Calculate Instant Quote</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
