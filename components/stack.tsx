import { Code2, Database, Globe, Wrench } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { stackGroups } from "@/data/skills";

const icons = {
  code: Code2,
  database: Database,
  globe: Globe,
  wrench: Wrench,
};

export function Stack() {
  return (
    <AnimatedSection
      id="stack"
      className="scroll-mt-24 px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 text-center">
          <h2 className="text-sm uppercase tracking-[0.22em] text-black/40">
            Stack
          </h2>
        </div>
        <div className="space-y-8 text-lg text-black/70">
          {stackGroups.map((group) => {
            const Icon = icons[group.icon];

            return (
              <div key={group.title} className="flex items-start gap-4">
                <Icon className="mt-1 h-5 w-5 text-black/40" />

                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  <span className="font-medium text-black">
                    {group.title} —
                  </span>

                  {group.items.map((item) => (
                    <span key={item} className="transition hover:text-black">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
