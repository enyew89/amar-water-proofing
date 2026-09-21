"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { company, whyChooseUs, processSteps } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="section-padding overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80"
                alt="Waterproofing team at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 to-transparent" />
            </div>

            {/* Overlap card */}
            <div className="absolute -bottom-8 -right-4 max-w-xs rounded-2xl bg-brand-600 p-6 text-white shadow-xl sm:-right-8">
              <p className="font-display text-4xl font-bold">{company.yearsExperience}+</p>
              <p className="mt-1 font-medium">Years Protecting Homes & Buildings</p>
            </div>

            {/* Decorative ring */}
            <div className="absolute -left-6 -top-6 -z-10 h-full w-full rounded-3xl border-2 border-brand-200" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700">
              About Us
            </span>
            <h2 className="section-heading mt-4">
              Your Trusted Partner in{" "}
              <span className="text-brand-600">Water Protection</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              {company.name} has been at the forefront of waterproofing
              innovation for over {company.yearsExperience} years. We combine
              cutting-edge materials with time-tested techniques to deliver
              solutions that stand the test of time — and the heaviest monsoons.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Our mission is simple: keep your property dry, safe, and
              structurally sound. Every project receives the same meticulous
              attention, whether it&apos;s a single bathroom or a 50-storey
              tower.
            </p>

            <ul className="mt-8 space-y-4">
              {whyChooseUs.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <div>
                    <p className="font-semibold text-brand-950">{item.title}</p>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Process steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <h3 className="text-center font-display text-2xl font-bold text-brand-950 sm:text-3xl">
            Our Proven Process
          </h3>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative text-center">
                {index < processSteps.length - 1 && (
                  <div className="absolute left-[calc(50%+2rem)] top-8 hidden h-0.5 w-[calc(100%-4rem)] bg-brand-200 lg:block" />
                )}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-600 font-display text-xl font-bold text-white shadow-lg shadow-brand-600/30">
                  {step.step}
                </div>
                <h4 className="mt-4 font-display text-lg font-bold text-brand-950">
                  {step.title}
                </h4>
                <p className="mt-2 text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
