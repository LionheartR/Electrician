import React from "react";
import { ShieldCheck, Award, FileCheck2, ShieldAlert, CheckCircle2 } from "lucide-react";

export default function TrustBadges() {
  const badges = [
    {
      title: "NICEIC Approved Contractor",
      desc: "Contractor #609412 - Full Scope Electrical Safety",
      icon: ShieldCheck,
      color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    },
    {
      title: "Part P Certified",
      desc: "UK Building Regulations Compliance Guarantee",
      icon: FileCheck2,
      color: "text-blue-400 border-blue-500/30 bg-blue-500/10",
    },
    {
      title: "City & Guilds 2391",
      desc: "Level 3 Inspection, Testing & Certification Specialist",
      icon: Award,
      color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    },
    {
      title: "£5M Public Liability",
      desc: "Fully Insured & Indemnified Workmanship",
      icon: ShieldAlert,
      color: "text-purple-400 border-purple-500/30 bg-purple-500/10",
    },
  ];

  return (
    <div className="py-12 bg-slate-950 border-y border-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Uncompromising Standards & Peace of Mind
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
            UK Regulatory Compliance & Accreditations
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Every installation, report, and emergency repair strictly adheres to BS 7671 IET Wiring Regulations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className={`p-5 rounded-xl border ${b.color} transition-transform hover:-translate-y-1`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-700">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white leading-tight">{b.title}</h3>
                    <div className="flex items-center gap-1 text-[11px] text-amber-400 font-semibold mt-0.5">
                      <CheckCircle2 className="w-3 h-3" /> Verified Active
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
