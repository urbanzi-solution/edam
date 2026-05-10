"use client";

import Link from "next/link";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-extrabold tracking-wide">
            <span className="text-[#d6b98c]">EDAM</span>
          </h2>
          <p className="text-sm text-white/60 mt-4 leading-relaxed">
            Architectural visualization studio crafting immersive,
            photorealistic experiences before they’re built.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-sm uppercase tracking-widest text-white/70 mb-4">
            Navigation
          </h3>
          <ul className="space-y-3 text-sm text-white/60">
            <li>
              <Link href="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-white transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:text-white transition">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-sm uppercase tracking-widest text-white/70 mb-4">
            Services
          </h3>
          <ul className="space-y-3 text-sm text-white/60">
            <li>Interior Visualization</li>
            <li>Exterior Visualization</li>
            <li>3D Animation</li>
            <li>VR / AR Experiences</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm uppercase tracking-widest text-white/70 mb-4">
            Contact
          </h3>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex items-center gap-3">
              <EnvelopeIcon className="w-4 h-4" />
              edamdesignstudio.eds@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <PhoneIcon className="w-4 h-4" />
              +91 9188330605, +91 8921277670
            </li>
            <li className="flex items-center gap-3">
              <MapPinIcon className="w-4 h-4" />
              Vattiyoorkkav Puliyarakkonam Rd, Puliyarakonam,
              Vilappil, Kerala 695573
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 mt-16 pt-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} EDAM. All rights reserved.
      </div>
    </footer>
  );
}