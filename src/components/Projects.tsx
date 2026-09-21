"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MapPin, ExternalLink } from "lucide-react";
import { projects } from "@/data/content";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-slate-50">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700">
            Our Portfolio
          </span>
          <h2 className="section-heading mt-4">Projects We&apos;re Proud Of</h2>
          <p className="section-subheading mx-auto">
            Explore our completed work across residential, commercial, and
            industrial sectors.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-brand-600 text-white shadow-lg shadow-brand-600/30"
                  : "bg-white text-slate-600 hover:bg-brand-50 hover:text-brand-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg shadow-slate-200/50"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/20 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />

                  {/* Overlay content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <span className="mb-2 inline-block w-fit rounded-full bg-accent-500/90 px-3 py-1 text-xs font-semibold text-brand-950">
                      {project.category}
                    </span>
                    <h3 className="font-display text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <div className="mt-2 flex items-center gap-1.5 text-sm text-white/70">
                      <MapPin className="h-3.5 w-3.5" />
                      {project.location}
                    </div>
                  </div>

                  {/* Hover icon */}
                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur-sm transition-all group-hover:opacity-100">
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
