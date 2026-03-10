"use client";

import { useState } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-md bg-black/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="text-white font-semibold text-xl"
          >
            EDAM
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-10 text-sm text-gray-300">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <Link href="/about" className="hover:text-white transition">About</Link>
            <Link href="/services" className="hover:text-white transition">Services</Link>
            <Link href="/projects" className="hover:text-white transition">Projects</Link>
            <Link href="/blog" className="hover:text-white transition">Blog</Link>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>
          </nav>

          {/* Right Side (WhatsApp + Mobile Menu Button) */}
          <div className="flex items-center gap-4">

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-[#25D366] text-white p-3 rounded-full"
            >
              <FaWhatsapp size={18} />
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <XMarkIcon className="w-7 h-7" />
              ) : (
                <Bars3Icon className="w-7 h-7" />
              )}
            </button>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md px-6 pb-6 pt-4 space-y-4 text-gray-300 text-sm">
            <Link href="/" onClick={() => setIsOpen(false)} className="block hover:text-white">Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block hover:text-white">About</Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="block hover:text-white">Services</Link>
            <Link href="/projects" onClick={() => setIsOpen(false)} className="block hover:text-white">Projects</Link>
            <Link href="/blog" onClick={() => setIsOpen(false)} className="block hover:text-white">Blog</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block hover:text-white">Contact</Link>
          </div>
        )}
      </div>
    </header>
  );
}
