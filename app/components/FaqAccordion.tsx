"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is Part P of the Building Regulations and why does it matter?",
      a: "Part P is a legal building regulation in England & Wales requiring electrical work in dwellings to be carried out safely by a certified electrician. As an NICEIC Approved Contractor, Apex Electrical issues official compliance certificates and automatically registers all completed works with Local Authority Building Control (LABC).",
    },
    {
      q: "How long does a Fuse Box / Consumer Unit upgrade take?",
      a: "A standard consumer unit replacement typically takes between 4 to 6 hours. This includes installing modern RCBO breakers, Surge Protection Devices (SPD), full dead-and-live circuit testing, and issuing your NICEIC Electrical Installation Certificate (EIC).",
    },
    {
      q: "Are landlords legally required to have an EICR certificate in England?",
      a: "Yes. Under UK law, private landlords in England must have the electrical installations in their properties inspected and tested by a qualified electrician at least every 5 years, or at the start of a new tenancy. A copy of the EICR must be provided to tenants within 28 days.",
    },
    {
      q: "What happens during a 24/7 emergency electrical callout?",
      a: "Our emergency electrician will arrive on site (typically within 45 minutes across Surrey), carry out immediate fault-finding, isolate any dangerous circuits, and restore main power. If a permanent repair requires specialist parts, we safeguard the property immediately and provide a clear quote for completion.",
    },
    {
      q: "Can I get an EV Charger installed if my fuse box is older?",
      a: "Yes, but we must first check your main supply capacity (head fuse) and earthing bonding. If your existing consumer unit lacks RCD protection or space, we can either install a dedicated EV consumer unit or upgrade your main fuse box to ensure complete safety and compliance.",
    },
  ];

  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" /> Got Questions? We Have Answers
          </span>
          <h2 className="text-3xl font-extrabold mt-3">Frequently Asked Questions</h2>
          <p className="text-slate-400 text-sm mt-1">
            Learn more about UK wiring regulations, safety certifications, and emergency procedures.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-slate-950/80 border border-slate-800 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between font-bold text-sm text-slate-200 hover:text-amber-400"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 text-xs text-slate-300 border-t border-slate-800/60 pt-3 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
