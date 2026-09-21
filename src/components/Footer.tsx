"use client";

import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import Logo from "@/components/Logo";
import { company, navLinks, services } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-12 sm:flex-row sm:px-6 lg:px-8">
          <div>
            <h3 className="font-display text-2xl font-bold sm:text-3xl">
              Don&apos;t Wait for the Next Monsoon
            </h3>
            <p className="mt-2 text-white/60">
              Book your free inspection today and protect your property.
            </p>
          </div>
          <a href="#contact" className="btn-primary shrink-0">
            Get Started Now
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="inline-block rounded-xl bg-white p-2">
              <Logo height={64} />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Premium waterproofing solutions for residential and commercial
              properties. Protecting structures since 2010.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white/70 transition-colors hover:bg-brand-600 hover:text-white"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold">Quick Links</h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-accent-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold">Services</h4>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-sm text-white/60 transition-colors hover:text-accent-400"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold">Contact Info</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/60">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                {company.phone}
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/60">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                {company.email}
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                {company.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p className="text-sm text-white/40">
            Designed as a portfolio showcase
          </p>
        </div>
      </div>
    </footer>
  );
}
