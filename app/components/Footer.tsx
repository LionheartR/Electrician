import React from "react";
import Link from "next/link";
import { Zap, Phone, Mail, MapPin, ShieldCheck, Clock, Award, ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050507] text-zinc-400 text-xs border-t-2 border-yellow-400 pb-28 sm:pb-12 pt-14">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="space-y-3.5">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-xl bg-yellow-400 text-black flex items-center justify-center font-black">
                <Zap className="w-5 h-5 fill-black text-black" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                APEX<span className="text-yellow-400">ELECTRICAL</span>
              </span>
            </Link>
            <p className="text-zinc-400 text-xs leading-relaxed font-normal">
              Surrey&apos;s leading NICEIC Approved electrical contractor. Specialising in 24/7 emergency response, modern consumer unit upgrades, smart EV chargers, and landlord safety EICRs.
            </p>
            <div className="flex items-center gap-1.5 text-yellow-400 font-bold text-xs pt-1">
              <ShieldCheck className="w-4 h-4 shrink-0" /> NICEIC Approved Contractor #609412
            </div>
          </div>

          {/* Trade Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-wider border-b border-zinc-800 pb-1.5">
              ELECTRICAL SERVICES
            </h4>
            <ul className="space-y-2 font-medium">
              <li>
                <Link href="/services/fuse-box-upgrades-consumer-units" className="hover:text-yellow-400 transition-colors">
                  Consumer Unit / Fuse Box Upgrades
                </Link>
              </li>
              <li>
                <Link href="/services/ev-charger-installation" className="hover:text-yellow-400 transition-colors">
                  EV Charger Installation
                </Link>
              </li>
              <li>
                <Link href="/services/eicr-landlord-certificates" className="hover:text-yellow-400 transition-colors">
                  EICR Landlord Safety Certificates
                </Link>
              </li>
              <li>
                <Link href="/services/emergency-247-electrician" className="hover:text-yellow-400 transition-colors">
                  24/7 Emergency Dispatch
                </Link>
              </li>
            </ul>
          </div>

          {/* Surrey Coverage Areas */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-wider border-b border-zinc-800 pb-1.5">
              SURREY COVERAGE
            </h4>
            <ul className="space-y-2 font-medium">
              <li>
                <Link href="/locations/electrician-guildford" className="hover:text-yellow-400 transition-colors">
                  Guildford (GU1, GU2, GU3, GU4)
                </Link>
              </li>
              <li>
                <Link href="/locations/electrician-woking" className="hover:text-yellow-400 transition-colors">
                  Woking (GU21, GU22, GU24)
                </Link>
              </li>
              <li>
                <Link href="/locations/electrician-guildford" className="hover:text-yellow-400 transition-colors">
                  Godalming & Farnham
                </Link>
              </li>
              <li>
                <Link href="/locations/electrician-woking" className="hover:text-yellow-400 transition-colors">
                  Camberley, Aldershot & Weybridge
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact (NAP) */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-wider border-b border-zinc-800 pb-1.5">
              DIRECT DISPATCH
            </h4>
            <ul className="space-y-2.5 font-medium">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span>12 High Street, Guildford, Surrey, GU1 3AJ</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-yellow-400 shrink-0" />
                <a href="tel:+441234567890" className="hover:text-yellow-400 font-black text-white transition-colors">
                  01234 567890
                </a>
              </li>
              <li className="flex items-center gap-2 text-yellow-400 font-bold">
                <Clock className="w-4 h-4 shrink-0" />
                <span>24/7 On-Call Emergency Service</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500 font-medium">
          <p>© {new Date().getFullYear()} Apex Electrical UK. NICEIC & Part P Registered.</p>
          <div className="flex items-center gap-3">
            <span>BS 7671 IET Wiring Regulations Compliant</span>
            <span>•</span>
            <Link href="/review" className="hover:text-yellow-400 font-bold transition-colors">
              Leave Google Review
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
