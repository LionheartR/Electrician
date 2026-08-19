import React from "react";
import Link from "next/link";
import { Star, ShieldCheck, ThumbsUp, ArrowRight, ExternalLink } from "lucide-react";

export default function ReviewsSection() {
  const reviews = [
    {
      name: "James H.",
      location: "Guildford, Surrey",
      rating: 5,
      date: "3 days ago",
      tag: "Consumer Unit Upgrade",
      text: "Outstanding service. Upgraded our old fuse box to a modern dual RCD board with surge protection. NICEIC certificate arrived in my inbox the same day. Highly recommended!",
    },
    {
      name: "Sarah M.",
      location: "Woking",
      rating: 5,
      date: "1 week ago",
      tag: "EICR Landlord Certificate",
      text: "Needed an urgent EICR for my rental property before new tenants moved in. Apex arrived promptly, carried out thorough testing, and resolved a minor earthing issue on the spot.",
    },
    {
      name: "Mark T.",
      location: "Farnham",
      rating: 5,
      date: "2 weeks ago",
      tag: "EV Charger Installation",
      text: "Fitted a Zappi EV charger neatly in our garage. Clean wiring, friendly advice on smart charging tariffs, and registered with building control for us. 10/10.",
    },
    {
      name: "Claire & Simon P.",
      location: "Godalming",
      rating: 5,
      date: "1 month ago",
      tag: "Emergency 24/7 Callout",
      text: "Power tripped at 11 PM on a Sunday. Apex arrived in under 35 minutes, found the short circuit in an outdoor socket, and isolated it safely. Lifesavers!",
    },
  ];

  return (
    <section className="py-16 bg-slate-950 text-white border-t border-slate-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 w-fit">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>4.9 / 5.0 Rating Across 145+ Verified UK Reviews</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black mt-3">
              Trusted By Local Homeowners & Landlords
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl">
              Real feedback from customers in Guildford, Woking, and across Surrey.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <Link
              href="/review"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-amber-400 px-4 py-2.5 rounded-xl text-xs font-bold transition-all"
            >
              <span>Leave a Google Review</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:border-amber-500/40 transition-all hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-500 font-semibold">{r.date}</span>
                </div>

                <p className="text-xs text-slate-300 italic mb-4 leading-relaxed">
                  &ldquo;{r.text}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold text-white flex items-center gap-1">
                    {r.name} <ShieldCheck className="w-3.5 h-3.5 text-blue-400 inline" />
                  </h3>
                  <span className="text-[11px] text-slate-400">{r.location}</span>
                </div>
                <span className="text-[10px] bg-slate-800 text-amber-400 px-2 py-0.5 rounded font-semibold">
                  {r.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
