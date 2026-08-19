import React from "react";
import Link from "next/link";
import {
  MapPin,
  PhoneCall,
  Zap,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Phone,
  Calculator,
} from "lucide-react";
import { generateLocalBusinessSchema } from "@/app/lib/schema";
import QuoteEstimator from "@/app/components/QuoteEstimator";

interface CitySEOData {
  cityName: string;
  county: string;
  postcodes: string[];
  responseMinutes: string;
  landmark: string;
  localIntro: string;
  neighborhoodsServed: string[];
}

const locationData: Record<string, CitySEOData> = {
  "electrician-guildford": {
    cityName: "Guildford",
    county: "Surrey",
    postcodes: ["GU1", "GU2", "GU3", "GU4"],
    responseMinutes: "30-45 Minutes",
    landmark: "Guildford High Street & University of Surrey",
    localIntro:
      "Apex Electrical UK is Guildford's premier NICEIC Approved electrical contractor. Whether you live in Onslow Village, Merrow, Burpham, or near Guildford Station, our local engineers provide 24/7 emergency dispatch, fuse box replacements, and EV chargers.",
    neighborhoodsServed: ["Burpham", "Merrow", "Onslow Village", "Stoughton", "Shalford", "Guildford Town Centre"],
  },
  "electrician-woking": {
    cityName: "Woking",
    county: "Surrey",
    postcodes: ["GU21", "GU22", "GU24"],
    responseMinutes: "35-45 Minutes",
    landmark: "Woking Station & Victoria Place",
    localIntro:
      "Looking for a reliable certified electrician in Woking? We offer fast local response across Knaphill, Horsell, Pyrford, and St John's. Part P compliant, £5M public liability insured, and available 24 hours a day.",
    neighborhoodsServed: ["Knaphill", "Horsell", "Pyrford", "St John's", "Goldsworth Park", "Hook Heath"],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const rawCity = city.replace("electrician-", "").replaceAll("-", " ");
  const formattedCity = rawCity.charAt(0).toUpperCase() + rawCity.slice(1);

  return {
    title: `Certified Electrician in ${formattedCity} | 24/7 Emergency Response`,
    description: `NICEIC Approved Electrician in ${formattedCity}, Surrey. 24/7 emergency callouts, fuse box upgrades, EV chargers, and landlord EICR certificates. Call 01234 567890.`,
  };
}

export default async function LocationPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;

  const loc = locationData[city] || {
    cityName: city.replace("electrician-", "").replaceAll("-", " ").toUpperCase(),
    county: "Surrey",
    postcodes: ["Surrey & Surrounding Towns"],
    responseMinutes: "45 Minutes",
    landmark: "Surrey Regional Area",
    localIntro: `Apex Electrical UK provides 24/7 certified electrical services across ${city.replace(
      "electrician-",
      ""
    )} and surrounding areas. NICEIC Approved and Part P certified.`,
    neighborhoodsServed: ["Town Centre", "Suburbs & Surrounding Villages"],
  };

  const schemaJson = generateLocalBusinessSchema();

  return (
    <div className="bg-[#09090b] text-[#f4f4f5] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      {/* Hero Header for Location */}
      <section className="relative py-14 sm:py-18 bg-[#0d0d10] border-b border-zinc-800">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">
            <MapPin className="w-4 h-4" /> LOCAL SERVICE HUB • {loc.cityName}, {loc.county}
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            Emergency Electrician in <span className="text-yellow-400">{loc.cityName}</span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">{loc.localIntro}</p>

          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-bold">
            <span className="bg-[#121215] px-3.5 py-1.5 rounded-xl text-yellow-400 border border-zinc-800">
              Coverage: <strong>{loc.postcodes.join(", ")}</strong>
            </span>
            <span className="bg-[#121215] px-3.5 py-1.5 rounded-xl text-white border border-zinc-800">
              Avg Response: <strong>{loc.responseMinutes}</strong>
            </span>
            <span className="bg-yellow-400 text-black px-3.5 py-1.5 rounded-xl font-black">
              NICEIC Approved Contractor
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <a
              href="tel:+441234567890"
              className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-black px-6 py-3.5 rounded-xl shadow-lg shadow-yellow-400/20 text-xs sm:text-sm transition-transform hover:scale-105"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call {loc.cityName} Dispatch: 01234 567890</span>
            </a>
            <a
              href="#quote-estimator"
              className="flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-black px-6 py-3.5 rounded-xl border border-zinc-700 hover:border-yellow-400 text-xs sm:text-sm transition-transform hover:scale-105"
            >
              <Calculator className="w-4 h-4 text-yellow-400" />
              <span>Get Instant Quote for {loc.cityName}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Local Neighborhoods Served */}
      <section className="py-14 bg-[#09090b] border-b border-zinc-800">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <h2 className="text-xl sm:text-2xl font-black text-white">
            Neighborhoods & Areas Covered in {loc.cityName}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {loc.neighborhoodsServed.map((n, idx) => (
              <div
                key={idx}
                className="bg-[#121215] border border-zinc-800 p-3.5 rounded-2xl text-xs font-bold text-zinc-200 flex items-center gap-2.5"
              >
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>{n}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Calculator */}
      <section id="quote-estimator" className="py-14 bg-[#0d0d10]">
        <div className="container mx-auto px-4 max-w-4xl">
          <QuoteEstimator />
        </div>
      </section>
    </div>
  );
}
