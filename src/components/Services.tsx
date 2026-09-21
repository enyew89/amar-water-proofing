"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Home,
  Layers,
  Building2,
  Droplets,
  Waves,
  Factory,
  ArrowUpRight,
} from "lucide-react";
import { services } from "@/data/content";

const iconMap: Record<string, React.ElementType> = {
  Home,
  Layers,
  Building2,
  Droplets,
  Waves,
  Factory,
};

export default function Services() {
  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700">
            Our Services
          </span>
          <h2 className="section-heading mt-4">
            Complete Waterproofing Solutions
          </h2>
          <p className="section-subheading mx-auto">
            From residential terraces to commercial mega-projects, we deliver
            tailored protection for every surface and structure.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Droplets;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg shadow-slate-200/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-200/50"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500 text-brand-950 shadow-lg">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-brand-950">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 transition-colors group-hover:text-brand-700"
                  >
                    Learn More
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
