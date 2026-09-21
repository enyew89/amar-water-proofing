"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/content";
import Logo from "@/components/Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-lg shadow-brand-950/5 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="group rounded-xl bg-white/95 p-1.5 shadow-sm transition-transform hover:scale-[1.02] sm:p-2"
        >
          <Logo height={52} priority />
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-slate-700 hover:bg-brand-50 hover:text-brand-700"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className={`hidden rounded-full px-5 py-2.5 text-sm font-semibold transition-all lg:inline-flex ${
            scrolled
              ? "bg-brand-600 text-white hover:bg-brand-700"
              : "bg-accent-500 text-brand-950 hover:bg-accent-400"
          }`}
        >
          Get Free Quote
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`rounded-lg p-2 lg:hidden ${
            scrolled ? "text-brand-950" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-brand-950/98 backdrop-blur-lg lg:hidden">
          <ul className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-white/90 hover:bg-white/10"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full text-center"
              >
                Get Free Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
