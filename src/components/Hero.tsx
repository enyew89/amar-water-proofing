"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, Clock } from "lucide-react";
import { company } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-water-pattern" />

      {/* Decorative elements */}
      <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-brand-400/20 blur-3xl" />
      <div className="absolute -left-32 bottom-1/4 h-80 w-80 rounded-full bg-accent-400/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-32 pb-20 sm:px-6 lg:px-8 lg:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
              <Shield className="h-4 w-4 text-accent-400" />
              Trusted Waterproofing Experts Since 2010
            </div>

            <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              {company.name.split(" ").slice(0, 1)[0]}{" "}
              <span className="text-accent-400">
                {company.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>

            <p className="mt-2 font-display text-xl font-medium text-brand-200 sm:text-2xl">
              {company.tagline}
            </p>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              {company.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Get Free Inspection
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#services" className="btn-secondary">
                Our Services
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="glass-card p-8">
                <div className="grid gap-6">
                  {[
                    {
                      icon: Shield,
                      title: "100% Leak-Free Guarantee",
                      desc: "Advanced membrane systems",
                    },
                    {
                      icon: Award,
                      title: "10-Year Warranty",
                      desc: "On all workmanship",
                    },
                    {
                      icon: Clock,
                      title: "Quick Turnaround",
                      desc: "Minimal disruption to you",
                    },
                  ].map((item, i) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 border-b border-white/10 pb-6 last:border-0 last:pb-0"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-500/20 text-accent-400">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{item.title}</h3>
                        <p className="mt-0.5 text-sm text-white/60">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 animate-float rounded-2xl bg-white px-6 py-4 shadow-2xl">
                <p className="font-display text-3xl font-bold text-brand-600">15+</p>
                <p className="text-sm font-medium text-slate-600">Years of Excellence</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-white"
          />
        </div>
      </div>
    </section>
  );
}
