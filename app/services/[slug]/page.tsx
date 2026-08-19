import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Zap,
  PhoneCall,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Car,
  FileText,
  AlertTriangle,
  ChevronRight,
  Sparkles,
  Award,
  Phone,
  Calculator,
} from "lucide-react";
import { generateServiceSchema } from "@/app/lib/schema";
import QuoteEstimator from "@/app/components/QuoteEstimator";

interface ServiceData {
  title: string;
  subtitle: string;
  priceTag: string;
  timeEstimate: string;
  icon: any;
  overview: string;
  features: string[];
  pricingBreakdown: { item: string; price: string; notes: string }[];
  regulatoryNote: string;
}

const serviceCatalog: Record<string, ServiceData> = {
  "ev-charger-installation": {
    title: "Smart EV Charger Installation UK",
    subtitle: "Fast 7kW & 22kW Smart Home Charging Points across Surrey & Hampshire",
    priceTag: "From £650",
    timeEstimate: "3-5 Hours",
    icon: Car,
    overview:
      "Future-proof your home with an OZEV-approved smart EV wallbox installation. We install leading British & European chargers including Myenergi Zappi, Hypervolt, and Ohme. Compatible with all electric and plug-in hybrid vehicles.",
    features: [
      "7kW Smart Charge Points (up to 3x faster than standard 3-pin plug)",
      "Solar PV Integration (Charge directly from your home solar panels)",
      "Dynamic Load Balancing (Prevents main head fuse overload)",
      "Smart App Setup for cheap overnight EV electricity tariffs (Octopus Go, Intelligent Octopus)",
      "NICEIC Electrical Certificate & Building Control Notification included",
    ],
    pricingBreakdown: [
      { item: "Standard 7kW Smart EV Wallbox", price: "£650 – £850", notes: "Includes unit + standard cable run (<10m)" },
      { item: "Solar PV Coupled Charger (Zappi 2.1)", price: "£895 – £1,100", notes: "Optimised solar eco charging setup" },
      { item: "Commercial Dual Socket EV Post (22kW)", price: "£1,450+", notes: "For office parks & landlord car parks" },
    ],
    regulatoryNote:
      "All EV charger installations comply strictly with Section 722 of BS 7671 IET Wiring Regulations and the Electric Vehicles (Smart Charge Points) Regulations 2021.",
  },

  "fuse-box-upgrades-consumer-units": {
    title: "Consumer Unit & Fuse Box Upgrades",
    subtitle: "Replace Old Fuse Wire Boards With Modern RCBO & SPD Protection",
    priceTag: "From £550",
    timeEstimate: "4-6 Hours",
    icon: Zap,
    overview:
      "Protect your family and property against electrical shocks and electrical fires. Old re-wireable fuse boxes lack modern RCD protection. Our metal-clad 18th Edition consumer units feature individual RCBO breakers and Surge Protection Devices (SPD).",
    features: [
      "Full Metal Clad 18th Edition Amendment 2 Consumer Unit",
      "Individual RCBO breakers (If one circuit trips, the rest of the house stays lit)",
      "Surge Protection Device (SPD) protecting TVs, laptops, and appliances from lightning & grid surges",
      "Main protective bonding verification (gas and water pipes)",
      "Full Electrical Installation Certificate (EIC) & Part P registration",
    ],
    pricingBreakdown: [
      { item: "Standard 6-8 Way RCBO Consumer Unit", price: "£550 – £680", notes: "Ideal for 1-3 bed flats and houses" },
      { item: "Large 10-14 Way RCBO Consumer Unit + SPD", price: "£680 – £850", notes: "Ideal for larger homes & outbuildings" },
      { item: "Commercial 3-Phase Distribution Board", price: "£1,200+", notes: "Custom commercial specification" },
    ],
    regulatoryNote:
      "Compulsory Part P notification to LABC included. Compliant with BS 7671 18th Edition Amendment 2 regulations.",
  },

  "eicr-landlord-certificates": {
    title: "EICR Landlord Electrical Safety Certificates",
    subtitle: "Official 5-Year Inspection & Certification for UK Landlords & Buyers",
    priceTag: "From £160",
    timeEstimate: "Same-Day PDF",
    icon: FileText,
    overview:
      "Ensure legal compliance under the Electrical Safety Standards in the Private Rented Sector (England) Regulations. We conduct thorough dead-and-live testing of circuits, sockets, and earthing to issue valid EICR certificates.",
    features: [
      "Thorough 100% visual and instrument inspection by City & Guilds 2391 inspector",
      "Official digital EICR certificate emailed within 24 hours",
      "Clear C1, C2, and C3 code classification with upfront repair quote if non-compliant",
      "Landlord letting agent compliance guarantee",
      "Fast turnaround for urgent house sales and new tenancies",
    ],
    pricingBreakdown: [
      { item: "1-2 Bedroom Apartment / Studio", price: "£160 – £190", notes: "Includes up to 6 circuits" },
      { item: "3-4 Bedroom House", price: "£190 – £240", notes: "Includes up to 10 circuits" },
      { item: "5+ Bedroom / Large HMO Property", price: "£250 – £350", notes: "Comprehensive multi-unit testing" },
    ],
    regulatoryNote:
      "Landlords face fines up to £30,000 for non-compliance. Our certificates meet all local authority and letting agent requirements.",
  },

  "emergency-247-electrician": {
    title: "24/7 Emergency Electrician Dispatch",
    subtitle: "Rapid 45-Minute Emergency Response Across Guildford & Surrey",
    priceTag: "From £95",
    timeEstimate: "On-Site in 45 Mins",
    icon: AlertTriangle,
    overview:
      "Power failure, burning smell from sockets, noisy consumer unit, or water-damaged electrics? Our local emergency vans operate 24 hours a day, 365 days a year, carrying diagnostic gear to restore safe power fast.",
    features: [
      "24/7 Live phone dispatch — speak directly to an engineer",
      "Rapid on-site response (average 32-45 minutes in Surrey)",
      "Thermal diagnostic scan to pinpoint short circuits immediately",
      "No hidden call-out charge when repair work is authorized",
      "Fully stocked emergency van carrying replacement breakers, sockets, and RCDs",
    ],
    pricingBreakdown: [
      { item: "Standard Emergency Callout & 1st Hour Fault-Finding", price: "£95 – £140", notes: "Covers 1 hour diagnostic testing" },
      { item: "After-Hours / Late Night Emergency (10pm - 6am)", price: "£140 – £180", notes: "Immediate night response" },
      { item: "Urgent Temporary Power Supply Setup", price: "£150+", notes: "Safe power restoration" },
    ],
    regulatoryNote:
      "All emergency repairs are made completely safe to BS 7671 safety standards before leaving site.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceCatalog[slug];
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Apex Electrical UK`,
    description: service.subtitle,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceCatalog[slug];

  if (!service) {
    notFound();
  }

  const Icon = service.icon;
  const schemaJson = generateServiceSchema(
    service.title,
    service.subtitle,
    `https://apexelectrical.co.uk/services/${slug}`
  );

  return (
    <div className="bg-[#09090b] text-[#f4f4f5] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      {/* Service Header Hero */}
      <section className="relative py-14 sm:py-18 bg-[#0d0d10] border-b border-zinc-800">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <div className="flex items-center gap-2 text-yellow-400 text-xs font-bold uppercase tracking-wider">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
            <span>Services</span>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
            <span className="text-zinc-400 truncate">{service.title}</span>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3.5 rounded-2xl bg-yellow-400 text-black shrink-0 mt-1 shadow-lg shadow-yellow-400/20">
              <Icon className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">{service.title}</h1>
              <p className="text-sm sm:text-base text-zinc-300">{service.subtitle}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-bold">
            <span className="bg-[#121215] px-3.5 py-1.5 rounded-xl text-yellow-400 border border-zinc-800">
              Guide Price: <strong>{service.priceTag}</strong>
            </span>
            <span className="bg-[#121215] px-3.5 py-1.5 rounded-xl text-white border border-zinc-800">
              Est Duration: <strong>{service.timeEstimate}</strong>
            </span>
            <span className="bg-yellow-400 text-black px-3.5 py-1.5 rounded-xl font-black">
              NICEIC Certified & Guaranteed
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <a
              href="tel:+441234567890"
              className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-black px-6 py-3.5 rounded-xl text-xs sm:text-sm shadow-lg shadow-yellow-400/20 transition-transform hover:scale-105"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call Dispatch: 01234 567890</span>
            </a>

            <a
              href="#quote-estimator"
              className="flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-black px-6 py-3.5 rounded-xl border border-zinc-700 hover:border-yellow-400 text-xs sm:text-sm transition-transform hover:scale-105"
            >
              <Calculator className="w-4 h-4 text-yellow-400" />
              <span>Get Instant Fixed Quote</span>
            </a>
          </div>
        </div>
      </section>

      {/* Overview & Key Inclusions */}
      <section className="py-14 bg-[#09090b]">
        <div className="container mx-auto px-4 max-w-4xl space-y-10">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white mb-3">Service Overview</h2>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed bg-[#121215] p-5 sm:p-6 rounded-3xl border border-zinc-800">
              {service.overview}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white mb-4">Key Inclusions & Compliance</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-[#121215] border border-zinc-800 p-4 rounded-2xl text-xs sm:text-sm text-zinc-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Breakdown Table */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white mb-4">Transparent Pricing Breakdown</h2>
            <div className="overflow-x-auto bg-[#121215] rounded-3xl border border-zinc-800">
              <table className="w-full text-left text-xs sm:text-sm text-zinc-300">
                <thead className="bg-[#09090b] text-yellow-400 font-black uppercase text-[11px] border-b border-zinc-800">
                  <tr>
                    <th className="p-4">Package / Specification</th>
                    <th className="p-4">Estimated Range</th>
                    <th className="p-4">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/80">
                  {service.pricingBreakdown.map((row, idx) => (
                    <tr key={idx} className="hover:bg-zinc-900/50">
                      <td className="p-4 font-bold text-white">{row.item}</td>
                      <td className="p-4 font-black text-yellow-400">{row.price}</td>
                      <td className="p-4 text-zinc-400 text-xs">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Regulatory Note Box */}
          <div className="bg-[#121215] border border-yellow-400/30 rounded-3xl p-5 sm:p-6 flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-yellow-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h3 className="text-sm font-black text-white">UK Building Regulations & Compliance Assurance</h3>
              <p className="text-xs text-zinc-300 leading-relaxed font-normal">{service.regulatoryNote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Quote Calculator */}
      <section id="quote-estimator" className="py-14 bg-[#0d0d10] border-t border-zinc-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <QuoteEstimator />
        </div>
      </section>
    </div>
  );
}
