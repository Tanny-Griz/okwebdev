"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

export function Hero() {
  return (
    <section className="px-6 py-16 md:py-24 min-h-[calc(100vh-73px)] flex items-center">
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center">
        <motion.div variants={fadeIn} initial="hidden" animate="show">
          <motion.p
            variants={fadeUp}
            className="mb-6 text-sm uppercase tracking-[0.2em] text-black/50"
          >
            Product-minded web developer | Minnesota, USA
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-4xl font-semibold tracking-tight md:text-5xl"
          >
            Web Developer building modern web experiences
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg text-black/65 max-w-xl"
          >
            I build clean, responsive websites with React, Vue, WordPress, and
            e-commerce experience.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-6 flex items-center gap-3 text-sm text-black/60"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1bae70]/60"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#1bae70]"></span>
            </span>

            <span>Available for new projects</span>
          </motion.div>
        </motion.div>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="relative flex justify-center md:justify-center xl:justify-end"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            whileHover={{ y: -6 }}
            className="relative mt-4 w-[240px] sm:w-[280px] md:mt-8 md:w-[320px] xl:mt-0 xl:w-[380px]"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-200 via-transparent to-blue-200 blur-2xl opacity-50" />

            <Image
              src="/images/hero-img.jpeg"
              alt="Tanya"
              width={400}
              height={500}
              className="relative h-auto w-full rounded-3xl object-cover shadow-xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
