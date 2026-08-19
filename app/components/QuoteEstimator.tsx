"use client";

import React, { useState } from "react";
import {
  Zap,
  ShieldCheck,
  Check,
  ChevronRight,
  ChevronLeft,
  PhoneCall,
  Sparkles,
  AlertTriangle,
  Car,
  FileText,
  CheckCircle,
  Clock,
} from "lucide-react";

type ServiceType = "fuse-box" | "ev-charger" | "eicr" | "emergency" | "rewire";

export default function QuoteEstimator() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState<ServiceType>("fuse-box");
  const [propertyType, setPropertyType] = useState("3-bed-house");
  const [details, setDetails] = useState("standard-upgrade");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [postcode, setPostcode] = useState("");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState("");

  const handleServiceSelect = (type: ServiceType) => {
    setService(type);
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !postcode.trim()) {
      setErrorMsg("Please provide your full name, phone number, and UK postcode.");
      return;
    }

    setErrorMsg("");
    setLoading(true);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service,
          propertyType,
          details,
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          postcode: postcode.trim().toUpperCase(),
        }),
      });

      const data = await res.json();
      setLoading(false);

      if (data.success) {
        setResult(data.estimate);
        setStep(4);
      } else {
        setErrorMsg(data.message || "Could not calculate quote. Please call our direct dispatch line.");
      }
    } catch (err) {
      setLoading(false);
      setErrorMsg("Connection error. Please call dispatch directly on 01234 567890.");
    }
  };

  const resetForm = () => {
    setStep(1);
    setResult(null);
    setErrorMsg("");
  };

  return (
    <div className="bg-[#121215] border-2 border-yellow-400 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
      {/* Calculator Header */}
      <div className="text-center space-y-3">
        <span className="inline-flex items-center gap-1.5 bg-yellow-400 text-black px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> 60-SECOND INSTANT CALCULATOR
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-white">CALCULATE ELECTRICAL COST</h2>
        <p className="text-zinc-400 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
          Get an instant estimated price range backed by our 100% Fixed Price Guarantee.
        </p>
      </div>

      {/* Progress Step Bar */}
      <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
        <div className="flex items-center gap-2.5">
          <span
            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${
              step >= 1 ? "bg-yellow-400 text-black" : "bg-zinc-800 text-zinc-400"
            }`}
          >
            1
          </span>
          <span className="text-xs sm:text-sm font-bold text-zinc-300 hidden sm:inline">Job Type</span>
        </div>
        <div className={`h-0.5 flex-grow mx-3 ${step >= 2 ? "bg-yellow-400" : "bg-zinc-800"}`}></div>
        <div className="flex items-center gap-2.5">
          <span
            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${
              step >= 2 ? "bg-yellow-400 text-black" : "bg-zinc-800 text-zinc-400"
            }`}
          >
            2
          </span>
          <span className="text-xs sm:text-sm font-bold text-zinc-300 hidden sm:inline">Specs</span>
        </div>
        <div className={`h-0.5 flex-grow mx-3 ${step >= 3 ? "bg-yellow-400" : "bg-zinc-800"}`}></div>
        <div className="flex items-center gap-2.5">
          <span
            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${
              step >= 3 ? "bg-yellow-400 text-black" : "bg-zinc-800 text-zinc-400"
            }`}
          >
            3
          </span>
          <span className="text-xs sm:text-sm font-bold text-zinc-300 hidden sm:inline">Contact</span>
        </div>
        <div className={`h-0.5 flex-grow mx-3 ${step === 4 ? "bg-yellow-400" : "bg-zinc-800"}`}></div>
        <div className="flex items-center gap-2.5">
          <span
            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${
              step === 4 ? "bg-yellow-400 text-black" : "bg-zinc-800 text-zinc-400"
            }`}
          >
            4
          </span>
          <span className="text-xs sm:text-sm font-bold text-zinc-300 hidden sm:inline">Result</span>
        </div>
      </div>

      {/* STEP 1: SERVICE TYPE SELECTION */}
      {step === 1 && (
        <div className="space-y-5">
          <h3 className="text-base sm:text-lg font-black text-white">Select required electrical work:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => handleServiceSelect("fuse-box")}
              className={`p-5 rounded-2xl border-2 text-left transition-all flex items-start gap-4 cursor-pointer ${
                service === "fuse-box"
                  ? "border-yellow-400 bg-yellow-400/10"
                  : "border-zinc-800 bg-[#09090b] hover:border-yellow-400/60"
              }`}
            >
              <div className="p-3 rounded-xl bg-yellow-400 text-black shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="font-black text-white text-sm sm:text-base">Consumer Unit / Fuse Box</div>
                <div className="text-xs text-zinc-400 leading-relaxed">
                  Dual RCD / RCBO & Surge Protection (SPD)
                </div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => handleServiceSelect("ev-charger")}
              className={`p-5 rounded-2xl border-2 text-left transition-all flex items-start gap-4 cursor-pointer ${
                service === "ev-charger"
                  ? "border-yellow-400 bg-yellow-400/10"
                  : "border-zinc-800 bg-[#09090b] hover:border-yellow-400/60"
              }`}
            >
              <div className="p-3 rounded-xl bg-yellow-400 text-black shrink-0">
                <Car className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="font-black text-white text-sm sm:text-base">EV Charger Installation</div>
                <div className="text-xs text-zinc-400 leading-relaxed">
                  7kW Smart Wallbox (Zappi / Hypervolt / Ohme)
                </div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => handleServiceSelect("eicr")}
              className={`p-5 rounded-2xl border-2 text-left transition-all flex items-start gap-4 cursor-pointer ${
                service === "eicr"
                  ? "border-yellow-400 bg-yellow-400/10"
                  : "border-zinc-800 bg-[#09090b] hover:border-yellow-400/60"
              }`}
            >
              <div className="p-3 rounded-xl bg-yellow-400 text-black shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="font-black text-white text-sm sm:text-base">EICR Landlord Certificate</div>
                <div className="text-xs text-zinc-400 leading-relaxed">
                  5-Year mandatory electrical safety inspection
                </div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => handleServiceSelect("emergency")}
              className={`p-5 rounded-2xl border-2 text-left transition-all flex items-start gap-4 cursor-pointer ${
                service === "emergency"
                  ? "border-yellow-400 bg-yellow-400/10"
                  : "border-zinc-800 bg-[#09090b] hover:border-yellow-400/60"
              }`}
            >
              <div className="p-3 rounded-xl bg-yellow-400 text-black shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="font-black text-white text-sm sm:text-base">24/7 Emergency Dispatch</div>
                <div className="text-xs text-zinc-400 leading-relaxed">
                  Power failure, burning smell, tripping breaker
                </div>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: SPECIFICATIONS */}
      {step === 2 && (
        <div className="space-y-6">
          <h3 className="text-base sm:text-lg font-black text-white">Specify property details:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-black text-zinc-300 mb-2 uppercase tracking-wide">
                Property Type
              </label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full bg-[#09090b] border-2 border-zinc-800 rounded-xl px-4 py-3.5 text-xs sm:text-sm font-bold text-white focus:border-yellow-400 focus:outline-none"
              >
                <option value="1-bed-flat">1-2 Bedroom Flat / Apartment</option>
                <option value="3-bed-house">3-4 Bedroom House</option>
                <option value="5-bed-large">5+ Bedroom Executive House</option>
                <option value="commercial">Commercial Premises</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-black text-zinc-300 mb-2 uppercase tracking-wide">
                Specific Requirement
              </label>
              <select
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="w-full bg-[#09090b] border-2 border-zinc-800 rounded-xl px-4 py-3.5 text-xs sm:text-sm font-bold text-white focus:border-yellow-400 focus:outline-none"
              >
                <option value="standard-upgrade">Standard Replacement / Install</option>
                <option value="urgent-dispatch">Urgent Today Dispatch Needed</option>
                <option value="with-surge-protection">Include Metal Clad / SPD Surge Protection</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" /> Back
            </button>
            <button
              type="button"
              onClick={() => setStep(3)}
              className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-black px-7 py-3 rounded-xl text-xs sm:text-sm transition-transform hover:scale-105 cursor-pointer shadow-lg shadow-yellow-400/20"
            >
              <span>Step 3: Contact</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: CONTACT INFORMATION */}
      {step === 3 && (
        <form onSubmit={handleSubmit} className="space-y-6">
          <h3 className="text-base sm:text-lg font-black text-white">Where should we deliver your estimate?</h3>

          {errorMsg && (
            <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/40 text-rose-300 text-xs sm:text-sm font-bold">
              {errorMsg}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-black text-zinc-300 mb-2 uppercase tracking-wide">Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. David Miller"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#09090b] border-2 border-zinc-800 rounded-xl px-4 py-3 text-xs sm:text-sm font-bold text-white focus:border-yellow-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-black text-zinc-300 mb-2 uppercase tracking-wide">Mobile Number *</label>
              <input
                type="tel"
                required
                placeholder="e.g. 07123 456789"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-[#09090b] border-2 border-zinc-800 rounded-xl px-4 py-3 text-xs sm:text-sm font-bold text-white focus:border-yellow-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-black text-zinc-300 mb-2 uppercase tracking-wide">Email Address (Optional)</label>
              <input
                type="email"
                placeholder="e.g. david@example.co.uk"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#09090b] border-2 border-zinc-800 rounded-xl px-4 py-3 text-xs sm:text-sm font-bold text-white focus:border-yellow-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-black text-zinc-300 mb-2 uppercase tracking-wide">UK Postcode *</label>
              <input
                type="text"
                required
                placeholder="e.g. GU1 3AJ"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                className="w-full bg-[#09090b] border-2 border-zinc-800 rounded-xl px-4 py-3 text-xs sm:text-sm font-bold text-white focus:border-yellow-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-4">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" /> Back
            </button>

            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-black px-8 py-3.5 rounded-xl text-xs sm:text-sm shadow-lg shadow-yellow-400/20 transition-all disabled:opacity-50 cursor-pointer"
            >
              {loading ? (
                <span>CALCULATING...</span>
              ) : (
                <>
                  <Zap className="w-4 h-4 fill-current" />
                  <span>CALCULATE FIXED ESTIMATE</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}

      {/* STEP 4: RESULT CARD */}
      {step === 4 && result && (
        <div className="space-y-6 text-center">
          <div className="p-7 sm:p-8 rounded-3xl bg-yellow-400 text-black space-y-3 border-2 border-black">
            <div className="inline-flex p-2.5 rounded-full bg-black text-yellow-400 mb-1">
              <CheckCircle className="w-7 h-7" />
            </div>
            <h3 className="text-base sm:text-xl font-black uppercase">ESTIMATED FIXED INVESTMENT RANGE</h3>
            <div className="text-4xl sm:text-6xl font-black tracking-tight">
              {result.currency}{result.minPrice} – {result.currency}{result.maxPrice}
            </div>
            <p className="text-xs sm:text-sm font-bold uppercase flex items-center justify-center gap-1.5 pt-1">
              <Clock className="w-4 h-4" /> Estimated Job Duration: <strong>{result.duration}</strong>
            </p>
          </div>

          <div className="bg-[#09090b] p-6 sm:p-7 rounded-3xl border border-zinc-800 text-left space-y-3">
            <div className="text-xs sm:text-sm font-black text-yellow-400 uppercase flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> PACKAGE INCLUDES AS STANDARD:
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-medium text-zinc-300">
              {result.includes?.map((item: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-3">
            <a
              href="tel:+441234567890"
              className="w-full sm:w-1/2 flex items-center justify-center gap-2.5 bg-yellow-400 hover:bg-yellow-300 text-black font-black py-4 px-6 rounded-xl text-sm shadow-lg shadow-yellow-400/20 transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>CALL TO BOOK: 01234 567890</span>
            </a>

            <button
              type="button"
              onClick={resetForm}
              className="w-full sm:w-1/2 bg-zinc-900 hover:bg-zinc-800 text-white font-bold py-4 px-6 rounded-xl text-sm border border-zinc-800 transition-colors cursor-pointer"
            >
              Calculate Another Job
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
