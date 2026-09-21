"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/content";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700">
            Testimonials
          </span>
          <h2 className="section-heading mt-4">What Our Clients Say</h2>
          <p className="section-subheading mx-auto">
            Real feedback from homeowners, architects, and builders who trust us
            with their most important projects.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl border border-slate-100 bg-slate-50 p-8 shadow-sm transition-all hover:border-brand-200 hover:shadow-lg hover:shadow-brand-100/50"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-brand-100" />

              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent-500 text-accent-500"
                  />
                ))}
              </div>

              <p className="mt-4 text-slate-700 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <footer className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-bold text-white">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <cite className="not-italic font-semibold text-brand-950">
                    {testimonial.name}
                  </cite>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
