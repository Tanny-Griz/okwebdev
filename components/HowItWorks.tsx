"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    title: "We talk about your goals",
    description: "You share your ideas, business, and what you need.",
  },
  {
    title: "I review & plan",
    description: "I review everything and create a clear plan for the project.",
  },
  {
    title: "Design & build",
    description:
      "I design and build your website with care and attention to detail.",
  },
  {
    title: "Review & feedback",
    description: "You review the website and we make any adjustments.",
  },
  {
    title: "Launch",
    description:
      "We launch your website and make sure everything works properly.",
  },
  {
    title: "Ongoing support",
    description: "I can help with updates, changes, and improvements anytime.",
  },
];

export function HowItWorks() {
  return (
    <section id="process" className="scroll-mt-24 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-18 text-center">
          <p className="text-sm uppercase tracking-[0.22em] text-black/40">
            How it works
          </p>

          <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] text-black md:text-4xl">
            A simple and clear process
          </h2>
        </div>
        {/* <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-black/40">
            <span className="h-2.5 w-2.5 rounded-full bg-[#1bae70]" />
            How it works
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-medium tracking-[-0.04em] text-black md:text-5xl">
            A simple and clear process
          </h2>
        </motion.div> */}

        <div className="relative mt-14">
          <div className="absolute left-5 top-0 h-full w-px bg-linear-to-b from-[#1bae70]/30 via-black/10 to-transparent lg:hidden" />

          <div className="grid gap-8 lg:grid-cols-6 lg:gap-6">
            {processSteps.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  delay: index * 0.06,
                  duration: 0.45,
                  ease: "easeOut",
                }}
                className="relative pl-14 lg:pl-0"
              >
                <div className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-[#eef2ec] text-sm font-semibold text-black shadow-sm lg:relative lg:left-auto lg:top-auto lg:mx-auto">
                  {index + 1}
                </div>

                <div className="pt-1 lg:mt-6 lg:pt-0">
                  <h3 className="text-lg font-semibold tracking-[-0.03em] text-black lg:text-center">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-black/60 lg:text-center">
                    {step.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
