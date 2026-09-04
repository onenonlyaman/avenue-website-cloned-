"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const residentialProjects = [
  { name: "The One", href: "/the-one", desc: "Civil Lines, Nagpur" },
  { name: "Paris City", href: "#paris-city", desc: "Luxury Residences" },
  { name: "Infinity East", href: "#infinity-east", desc: "Wardha Road" },
  { name: "Anandam World City", href: "#anandam", desc: "Township" },
  { name: "Embassy II", href: "#embassy-2", desc: "Modern Living" },
];

const commercialProjects = [
  { name: "West 19", href: "/west-19", desc: "Commercial & Retail Hub" },
  { name: "Business Park", href: "#kbp", desc: "Grade-A Corporate Offices" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0c0a09]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-10 w-36">
            <Image
              src="/logo-white.png"
              alt="Avenue Infrastructures"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-[12px] uppercase font-grotesk tracking-[0.2em] font-medium text-white/80">
          {/* Residential */}
          <div
            className="relative group py-2"
            onMouseEnter={() => setOpenDropdown("res")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center gap-1.5 hover:text-brand-gold transition-colors">
              Residential
              <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
            </button>

            {openDropdown === "res" && (
              <div className="absolute top-full left-0 w-64 bg-[#14110c] border border-white/10 rounded-sm py-3 px-2 shadow-2xl backdrop-blur-lg animate-in fade-in slide-in-from-top-2 duration-200">
                {residentialProjects.map((p) => (
                  <Link
                    key={p.name}
                    href={p.href}
                    className="block px-4 py-2.5 rounded hover:bg-white/5 transition-colors group/item"
                  >
                    <div className="text-white text-xs font-semibold group-hover/item:text-brand-gold">
                      {p.name}
                    </div>
                    <div className="text-[10px] text-white/40 normal-case tracking-normal">
                      {p.desc}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Commercial */}
          <div
            className="relative group py-2"
            onMouseEnter={() => setOpenDropdown("com")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center gap-1.5 hover:text-brand-gold transition-colors">
              Commercial
              <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
            </button>

            {openDropdown === "com" && (
              <div className="absolute top-full left-0 w-64 bg-[#14110c] border border-white/10 rounded-sm py-3 px-2 shadow-2xl backdrop-blur-lg animate-in fade-in slide-in-from-top-2 duration-200">
                {commercialProjects.map((p) => (
                  <Link
                    key={p.name}
                    href={p.href}
                    className="block px-4 py-2.5 rounded hover:bg-white/5 transition-colors group/item"
                  >
                    <div className="text-white text-xs font-semibold group-hover/item:text-brand-gold">
                      {p.name}
                    </div>
                    <div className="text-[10px] text-white/40 normal-case tracking-normal">
                      {p.desc}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* About */}
          <Link href="/our-story" className="hover:text-brand-gold transition-colors">
            Our Story
          </Link>

          {/* Careers */}
          <Link href="/careers" className="hover:text-brand-gold transition-colors">
            Careers
          </Link>

          {/* Contact */}
          <Link href="/contact" className="hover:text-brand-gold transition-colors">
            Contact
          </Link>
        </nav>

        {/* Right Phone CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:+917888012200"
            className="inline-flex items-center gap-2.5 text-[11px] font-grotesk uppercase tracking-[0.2em] text-brand-gold hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>+91 78880 12200</span>
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 border border-white/20 text-white font-grotesk text-[11px] uppercase tracking-[0.2em] font-semibold hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
          >
            Inquire
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white hover:text-brand-gold transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0a09]/98 border-b border-white/10 px-6 py-8 space-y-6 animate-in slide-in-from-top-4 duration-300">
          <div className="space-y-4 text-[13px] font-grotesk uppercase tracking-[0.2em]">
            <div className="text-white/40 text-[10px]">Residential Projects</div>
            {residentialProjects.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block pl-3 text-white hover:text-brand-gold transition-colors"
              >
                {p.name}
              </Link>
            ))}

            <div className="pt-2 text-white/40 text-[10px]">Commercial Projects</div>
            {commercialProjects.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block pl-3 text-white hover:text-brand-gold transition-colors"
              >
                {p.name}
              </Link>
            ))}

            <div className="pt-2 border-t border-white/10" />

            <Link
              href="/our-story"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-white hover:text-brand-gold transition-colors"
            >
              Our Story
            </Link>
            <Link
              href="/careers"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-white hover:text-brand-gold transition-colors"
            >
              Careers
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-white hover:text-brand-gold transition-colors"
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-4">
            <a
              href="tel:+917888012200"
              className="flex items-center gap-2 text-sm text-brand-gold font-grotesk tracking-wider"
            >
              <Phone className="w-4 h-4" />
              <span>+91 78880 12200</span>
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-3 bg-brand-gold text-black font-grotesk text-xs uppercase tracking-[0.2em] font-semibold"
            >
              Inquire Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
