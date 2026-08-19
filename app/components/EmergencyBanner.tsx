import React from "react";
import { AlertCircle, PhoneCall, ShieldAlert, Zap } from "lucide-react";

export default function EmergencyBanner() {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-rose-950/80 to-slate-900 border-y border-rose-500/30 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="p-3 rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/30 shrink-0">
            <ShieldAlert className="w-8 h-8 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2 text-xs font-black text-rose-400 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
              24/7 UK Emergency Electrician Service
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
              Smelling Burning, Tripping Breakers, or Power Failure?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              On-site within 45 minutes across Guildford, Woking & Surrey. No call-out fee when work is approved.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
          <a
            href="tel:+441234567890"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-500 text-white font-extrabold px-6 py-3.5 rounded-xl shadow-lg shadow-rose-600/30 text-sm transition-all transform hover:scale-105"
          >
            <PhoneCall className="w-5 h-5 fill-current animate-bounce" />
            <span>01234 567890</span>
          </a>
        </div>
      </div>
    </div>
  );
}
