"use client";

import { AnimatedSection } from "./AnimatedSection";

export function Experience() {
  return (
    <AnimatedSection id="experience" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto mb-12 max-w-7xl text-center">
        <p className="text-sm uppercase tracking-[0.22em] text-black/40">
          Experience
        </p>
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="mt-12 space-y-10">
          <div className="flex gap-6">
            <div className="mt-1 h-2 w-2 rounded-full bg-[#1bae70]" />

            <div>
              <p className="text-sm text-black/40">2022 — Present</p>
              <h3 className="mt-1 text-lg font-medium">
                Web Developer
              </h3>
              <p className="mt-2 text-black/65">
                Building and maintaining business websites and e-commerce
                platforms, focusing on performance, SEO, and long-term support.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="mt-1 h-2 w-2 rounded-full bg-black/30" />

            <div>
              <p className="text-sm text-black/40">2019 — 2022</p>
              <h3 className="mt-1 text-lg font-medium">Frontend Developer</h3>
              <p className="mt-2 text-black/65">
                Built single-page applications for different business needs
                using modern JavaScript frameworks, with a focus on clean
                structure, reusable components, and reliable production-ready
                solutions.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="mt-1 h-2 w-2 rounded-full bg-black/20" />

            <div>
              <p className="text-sm text-black/40">2015 — 2016</p>
              <h3 className="mt-1 text-lg font-medium">SEO Specialist</h3>
              <p className="mt-2 text-black/65">
                Improved organic traffic and search visibility through SEO
                strategy and performance optimization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
