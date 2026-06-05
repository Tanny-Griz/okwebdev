"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Layers,
  Monitor,
  PanelsTopLeft,
  SearchCheck,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Boxes,
  Store,
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

const heroServices = [
  { label: "Websites", icon: Monitor },
  { label: "E-commerce", icon: ShoppingCart },
  { label: "WordPress", icon: PanelsTopLeft },
  { label: "Shopify", icon: Store },
  { label: "SEO", icon: SearchCheck },
  { label: "Custom Code", icon: Code2 },
];

export function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-73px)] items-center overflow-hidden px-6 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-[1.05fr_0.95fr]">
        <motion.div variants={fadeIn} initial="hidden" animate="show">
          <span className="mb-6 flex items-center justify-start gap-3 text-sm uppercase tracking-[0.22em] text-black/50">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#1bae70]" />
            Hi, I’m Tanya, Web Developer & Designer in Minnesota
          </span>

          <motion.h1
            variants={fadeUp}
            className="max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-black md:text-6xl"
          >
            Websites that feel personal, polished, and easy to use
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-8 text-black/65"
          >
            Hi, I’m Tanya. I help small businesses, creative brands, and
            independent owners create clean websites, online stores, and website
            improvements.
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

          <motion.ul
            variants={fadeUp}
            className="mt-7 flex max-w-2xl flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm font-medium text-black/55 md:justify-start"
            aria-label="Services"
          >
            {heroServices.map((service) => {
              const Icon = service.icon;

              return (
                <li key={service.label} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 shrink-0 text-[#1bae70]" />
                  <span>{service.label}</span>
                </li>
              );
            })}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="relative min-h-136 md:min-h-144 xl:min-h-136"
        >
          <div className="absolute inset-0 rounded-[3rem] bg-linear-to-br from-[#1bae70]/10 via-white to-black/3" />

          <motion.div
            variants={float}
            animate="animate"
            id="hero-img1"
            className="absolute left-1/2 top-4 z-20 w-[90%] max-w-160 -translate-x-1/2 overflow-hidden rounded-4xl border border-black/10 bg-white shadow-2xl shadow-black/12"
          >
            <div className="flex items-center justify-between border-b border-black/10 bg-white/95 px-4 py-3 backdrop-blur">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#1bae70]" />
              </div>
              <div className="h-2 w-20 rounded-full bg-black/10" />
            </div>

            <div className="relative aspect-16/10 overflow-hidden bg-[#f4f7f5]">
              <Image
                src="/images/clothing-store-mockup.png"
                alt="Clothing online store preview"
                fill
                priority
                sizes="(min-width: 1024px) 600px, (min-width: 768px) 52vw, 90vw"
                className="object-cover"
              />
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
            className="absolute right-0 top-72 z-10 w-[62%] rotate-2 rounded-4xl bg-[#063f2d] p-6 text-white opacity-95 shadow-2xl shadow-black/20"
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
            className="absolute bottom-26 xl:bottom-16 left-0 z-30 flex max-w-[20rem] items-center gap-4 rounded-3xl border border-black/10 bg-white/92 p-4 shadow-2xl shadow-black/10 backdrop-blur"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eef2ec]">
              <ShoppingBag className="h-6 w-6 text-black" />
            </div>

            <div>
              <p className="text-sm font-medium text-black">
                Shopify E-commerce
              </p>
              <p className="mt-1 text-sm leading-5 text-black/50">
                Storefront · Products · Collections
                <br />Checkout · SEO
              </p>
            </div>
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
            className="absolute bottom-0 right-3 z-30 grid grid-cols-2 gap-3 md:right-8"
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
