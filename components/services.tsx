"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 px-6 py-20 bg-[#f7f7f5]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-18 text-center">
          <p className="text-sm uppercase tracking-[0.22em] text-black/40">
            Services
          </p>

          <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] text-black md:text-4xl">
            What I can do for you
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative rounded-4xl border border-black/10 bg-white/70 p-8 transition duration-300 hover:border-[#1bae70]/60 hover:shadow-2xl hover:shadow-black/10 xl:min-h-90"
              >
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#eef2ec]">
                  <Icon className="h-10 w-10 text-black" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-black">
                  {service.title}
                </h3>

                <p className="mt-6 text-[15px] leading-7 text-black/60">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-black/60"
                    >
                      <Check className="h-4 w-4 shrink-0 text-[#1bae70]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
