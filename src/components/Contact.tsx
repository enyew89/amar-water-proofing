"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { company } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-slate-50">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700">
              Contact Us
            </span>
            <h2 className="section-heading mt-4">
              Ready to Stop the Leaks?
            </h2>
            <p className="section-subheading">
              Get a free site inspection and detailed quote. Our experts will
              assess your property and recommend the best waterproofing solution.
            </p>

            <ul className="mt-10 space-y-6">
              {[
                { icon: Phone, label: "Phone", value: company.phone, href: `tel:${company.phone.replace(/\s/g, "")}` },
                { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
                { icon: MapPin, label: "Address", value: company.address, href: "#" },
                { icon: Clock, label: "Working Hours", value: "Mon – Sat: 8:00 AM – 7:00 PM", href: "#" },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white shadow-lg shadow-brand-600/20">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">{item.label}</p>
                    {item.href.startsWith("tel:") || item.href.startsWith("mailto:") ? (
                      <a
                        href={item.href}
                        className="font-semibold text-brand-950 transition-colors hover:text-brand-600"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-brand-950">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-2xl bg-white p-8 shadow-xl shadow-slate-200/50"
            >
              <h3 className="font-display text-xl font-bold text-brand-950">
                Request a Free Quote
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Fill in the form and we&apos;ll get back within 24 hours.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Service Required
                </label>
                <select
                  id="service"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Roof Waterproofing</option>
                  <option>Terrace & Balcony</option>
                  <option>Basement Waterproofing</option>
                  <option>Bathroom & Kitchen</option>
                  <option>Swimming Pool</option>
                  <option>Commercial Project</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="mt-4">
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                />
              </div>

              <button type="submit" className="btn-dark mt-6 w-full">
                Send Message
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
