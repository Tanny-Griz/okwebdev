"use client";

import { experience } from "@/data/experience";

import { AnimatedSection } from "./AnimatedSection";

export function Experience() {
  return (
    <AnimatedSection id="experience" className="scroll-mt-24 px-6 py-20 bg-[#f7f7f5]">
      <div className="mx-auto mb-12 max-w-7xl text-center">
        <h2 className="text-sm uppercase tracking-[0.22em] text-black/40">
          Experience
        </h2>
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="mt-12 space-y-10">
          {experience.map((item) => (
            <div key={item.period} className="flex gap-6">
              <div
                className={`mt-1 h-2 w-2 shrink-0 rounded-full ${
                  item.isCurrent ? "bg-[#1bae70]" : "bg-black/15"
                }`}
              />

              <div>
                <p className="text-sm text-black/40">{item.period}</p>

                <h3 className="mt-1 text-lg font-medium">{item.role}</h3>

                <p className="mt-2 text-black/65">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
