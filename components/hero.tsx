"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Layers,
  ShoppingBag,
  Sparkles,
  Boxes,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.1,
    },
  },
};

const float = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

export function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-73px)] items-center overflow-hidden px-6 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-[0.95fr_1.05fr]">
        <motion.div variants={fadeIn} initial="hidden" animate="show">
          <motion.p
            variants={fadeUp}
            className="mb-6 text-sm uppercase tracking-[0.22em] text-black/50 text-center md:text-left"
          >
            Web Developer · E-commerce · CMS · Minnesota
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-black md:text-6xl"
          >
            Clean, modern websites and apps for real business needs
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-8 text-black/65"
          >
            Hi, I’m Tanya. I create responsive websites, web apps, and
            e-commerce experiences that look polished, work smoothly, and
            support your business goals.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="rounded-full bg-[#1bae70] px-7 py-3 text-sm font-medium text-white shadow-lg shadow-[#1bae70]/20 transition hover:-translate-y-0.5 hover:bg-[#15975f]"
            >
              Let’s Talk
            </a>

            <a
              href="#projects"
              className="rounded-full border border-black/10 px-7 py-3 text-sm font-medium text-black transition hover:border-black/30 hover:bg-black/3"
            >
              View Projects
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-7 flex items-center gap-3 text-sm text-black/60"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1bae70]/60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#1bae70]" />
            </span>

            <span>Available for new projects</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="relative min-h-110 md:min-h-130 xl:min-h-110"
        >
          <div className="absolute inset-0 rounded-[3rem] bg-linear-to-br from-[#1bae70]/10 via-white to-black/3" />

          <motion.div
            variants={float}
            animate="animate"
            className="absolute left-4 top-10 rounded-3xl border border-black/10 bg-white/80 p-5 shadow-xl shadow-black/5 backdrop-blur"
          >
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#1bae70]" />
              <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
              <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
            </div>

            <div className="space-y-3">
              <div className="h-3 w-44 rounded-full bg-[#1bae70]/20" />
              <div className="h-3 w-64 rounded-full bg-black/10" />
              <div className="h-3 w-52 rounded-full bg-black/10" />
              <div className="h-3 w-72 rounded-full bg-black/10" />
            </div>
          </motion.div>

          <motion.div
            animate={{
              y: [0, 12, 0],
              rotate: [0, -1.5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-4 top-20 w-[76%] rounded-4xl bg-[#063f2d] p-6 text-white shadow-2xl shadow-black/20"
          >
            <div className="mb-6 flex items-center justify-between">
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#1bae70]" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
              </div>

              <Code2 className="h-5 w-5 text-white/70" />
            </div>

            <div className="space-y-3">
              <div className="h-3 w-2/3 rounded-full bg-white/25" />
              <div className="h-3 w-5/6 rounded-full bg-[#1bae70]/60" />
              <div className="h-3 w-1/2 rounded-full bg-white/20" />
              <div className="h-3 w-4/5 rounded-full bg-white/20" />
              <div className="h-3 w-3/5 rounded-full bg-[#1bae70]/50" />
            </div>
          </motion.div>

          <motion.div
            animate={{
              x: [0, 8, 0],
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-24 md:bottom-34 xl:bottom-22 left-0 rounded-3xl border border-black/10 bg-white/85 p-5 shadow-xl shadow-black/5 backdrop-blur"
          >
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef2ec]">
              <ShoppingBag className="h-6 w-6 text-black" />
            </div>

            <p className="text-sm font-medium text-black">Shopify E-commerce</p>
            <p className="mt-1 text-sm text-black/50">
              Storefront · Products · Checkout
            </p>
          </motion.div>

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-2 md:bottom-8 xl:bottom-15 right-5 md:right-8 grid grid-cols-2 gap-3"
          >
            {[
              { label: "React/Next.js", icon: Layers },
              { label: "Vue/Nuxt.js", icon: Boxes },
              { label: "CMS", icon: Globe },
              { label: "UI/UX", icon: Sparkles },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-2 rounded-2xl border border-black/10 bg-white/80 px-4 py-3 text-sm text-black/70 shadow-lg shadow-black/5 backdrop-blur"
                >
                  <Icon className="h-4 w-4 text-[#1bae70]" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
