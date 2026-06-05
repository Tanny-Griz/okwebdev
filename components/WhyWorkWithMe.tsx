"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Lightbulb,
  MessagesSquare,
  PencilRuler,
  RefreshCw,
} from "lucide-react";

const benefits = [
  {
    text: "Clear communication from start to finish",
    icon: MessagesSquare,
  },
  {
    text: "Thoughtful design with real business goals in mind",
    icon: PencilRuler,
  },
  {
    text: "Support beyond launch when you need updates or improvements",
    icon: RefreshCw,
  },
  {
    text: "I explain things clearly and keep the process simple",
    icon: BadgeCheck,
  },
  {
    text: "Experience turning unclear ideas into structured, polished websites",
    icon: Lightbulb,
  },
];

export function WhyWorkWithMe() {
  return (
    <section className="px-6 py-20 bg-[#f7f7f5]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.45fr_0.55fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="order-2 lg:order-1"
        >
          <p className="flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-black/40">
            <span className="h-2.5 w-2.5 rounded-full bg-[#1bae70]" />
            Why work with me
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-medium tracking-[-0.04em] text-black md:text-5xl">
            A different kind of web help
          </h2>

          <div className="mt-10 grid gap-x-10 gap-y-6 md:grid-cols-2">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    delay: index * 0.06,
                    duration: 0.45,
                    ease: "easeOut",
                  }}
                  className="flex gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eef2ec] text-[#1bae70]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="pt-2 text-base leading-7 text-black/65">
                    {benefit.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, x: 24 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="order-1 lg:order-2 lg:justify-self-end"
        >
          <div className="relative mx-auto w-68 rounded-4xl bg-[#eef8f3] p-3 shadow-xl shadow-black/5 sm:w-76 lg:w-[18rem]">
            <div className="relative h-84 overflow-hidden rounded-3xl bg-white sm:h-92 lg:h-86">
              <Image
                src="/images/hero-img.jpeg"
                alt="Tanya Kovalenko"
                fill
                sizes="288px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
