"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
          {contractors.map((c) => (
            <motion.div
              key={c.name}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
              title={c.name}
              className={`flex h-28 flex-col items-center justify-center gap-1.5 rounded-xl px-4 py-3 transition-all ${
                c.dark
                  ? "border border-brand-950 bg-brand-950 hover:shadow-lg hover:shadow-brand-950/30"
                  : c.logo
                    ? "border border-slate-200 bg-white hover:border-brand-300 hover:shadow-md hover:shadow-brand-100/60"
                    : "border border-dashed border-slate-300 bg-slate-50 hover:border-brand-300"
              }`}
            >
              {c.logo ? (
                <>
                  <Image
                    src={c.logo}
                    alt={`${c.name} logo`}
                    width={c.logoWidth ?? 80}
                    height={c.logoHeight ?? 48}
                    className="h-auto max-h-12 w-auto object-contain"
                  />
                  <span
                    className={`text-center text-xs font-semibold ${
                      c.dark ? "text-white/80" : "text-slate-600"
                    }`}
                  >
                    {c.name}
                  </span>
                </>
              ) : (
                <div className="flex flex-col items-center gap-1.5">
                  <Building2 className="h-6 w-6 text-slate-300" />
                  <span className="text-sm font-semibold text-slate-500">
                    {c.name}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
