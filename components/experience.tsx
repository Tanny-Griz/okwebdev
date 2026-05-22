"use client";

import { AnimatedSection } from "./AnimatedSection";

export function Experience() {
  return (
    <AnimatedSection id="experience" className="scroll-mt-24 px-6 py-20">
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
              <h3 className="mt-1 text-lg font-medium">Web Developer</h3>
              <p className="mt-2 text-black/65">
                Developing and maintaining business websites and e-commerce
                platforms with a focus on responsive design, SEO, performance,
                and long-term support. Working directly with clients to turn
                business needs into clear, functional, and maintainable web
                solutions.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="mt-1 h-2 w-2 rounded-full bg-black/30" />

            <div>
              <p className="text-sm text-black/40">2019 — 2022</p>
              <h3 className="mt-1 text-lg font-medium">Frontend Developer</h3>
              <p className="mt-2 text-black/65">
                Built single-page applications and reusable frontend components
                using modern JavaScript frameworks. Worked in team environments
                with designers, backend developers, and project managers,
                following code review processes and clean code standards.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="mt-1 h-2 w-2 rounded-full bg-black/20" />

            <div>
              <p className="text-sm text-black/40">2015 — 2016</p>
              <h3 className="mt-1 text-lg font-medium">SEO Specialist</h3>
              <p className="mt-2 text-black/65">
                Worked on SEO strategy, website visibility, content
                optimization, and search performance, building a strong
                foundation in how websites attract users and support business
                goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
