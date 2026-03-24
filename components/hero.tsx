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
    <section className="px-6 py-20 scroll-mt-24">
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
        >
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
            Frontend Developer building modern web experiences 
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg text-black/65 max-w-xl"
          >
            I build clean, responsive websites with React, Vue, WordPress, and e-commerce experience.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="relative flex justify-end"
        >
          <motion.div
            variants={fadeUp}
            className="relative w-[300px] md:w-[380px]"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-200 via-transparent to-blue-200 blur-2xl opacity-50"></div>

            <Image
              src="/images/hero-img.jpeg"
              alt="Tanya"
              width={400}
              height={500}
              className="relative rounded-3xl object-cover shadow-xl"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}