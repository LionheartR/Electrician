"use client";

import React from "react";
import { Phone, MessageCircle, Calculator } from "lucide-react";

export default function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#09090b]/95 backdrop-blur-xl border-t-2 border-yellow-400 p-2.5 shadow-2xl safe-area-pb">
      <div className="grid grid-cols-3 gap-2 container mx-auto max-w-md">
        <a
          href="tel:+441234567890"
          className="flex flex-col items-center justify-center bg-white text-black py-2 rounded-xl text-xs font-black transition-transform active:scale-95 shadow-md border-2 border-black"
        >
          <Phone className="w-4 h-4 mb-0.5 fill-current text-black" />
          <span>Call Now</span>
        </a>

        <a
          href="https://wa.me/441234567890?text=Hi%2C%20I%20need%20an%20electrician%20quote"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center bg-emerald-500 hover:bg-emerald-400 text-black py-2 rounded-xl text-xs font-black transition-transform active:scale-95 shadow-md"
        >
          <MessageCircle className="w-4 h-4 mb-0.5 fill-current text-black" />
          <span>WhatsApp</span>
        </a>

        <a
          href="#quote-section"
          className="flex flex-col items-center justify-center bg-yellow-400 hover:bg-yellow-300 text-black py-2 rounded-xl text-xs font-black transition-transform active:scale-95 shadow-md shadow-yellow-400/20"
        >
          <Calculator className="w-4 h-4 mb-0.5 text-black" />
          <span>Quote</span>
        </a>
      </div>
    </div>
  );
}
