"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { contractors } from "@/data/content";

export default function Contractors() {
  return (
    <section
      id="contractors"
      className="border-y border-slate-100 bg-white py-14"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700">
            Trusted Partners
          </span>
          <h2 className="section-heading mt-4 !text-2xl sm:!text-3xl">
            Contractors &amp; Institutions We&apos;ve Worked With
          </h2>
          <p className="section-subheading mx-auto !text-base">
            From government institutions to private developers — a snapshot of
            the organizations behind our 4,000+ completed projects.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.06 }}
          className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
        >
          {contractors.map((name) => (
            <motion.div
              key={name}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 transition-all hover:border-brand-300 hover:bg-brand-50 hover:shadow-md hover:shadow-brand-100/60"
            >
              <Building2 className="h-5 w-5 shrink-0 text-brand-600" />
              <span className="text-sm font-semibold text-brand-950">
                {name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
