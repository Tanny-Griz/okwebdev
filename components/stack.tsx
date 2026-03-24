import { Code2, Database, Globe, Wrench } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export function Stack() {
  const stackGroups = [
    {
      title: "Frontend",
      icon: Code2,
      items: [
        "JavaScript",
        "TypeScript",
        "React (Next.js)",
        "Vue (Nuxt.js)",
        "HTML / Pug",
        "CSS / SCSS",
      ],
    },
    {
      title: "Backend",
      icon: Database,
      items: ["REST APIs", "Python", "MongoDB", "PostgreSQL"],
    },
    {
      title: "Web & CMS",
      icon: Globe,
      items: ["WordPress", "WooCommerce", "Twig", "Shopify"],
    },
    {
      title: "Workflow & Tools",
      icon: Wrench,
      items: ["Git", "Figma", "Jest", "Cypress", "Storybook", "Agile/Scrum"],
    },
  ];

  return (
    <AnimatedSection
      id="stack"
      className="scroll-mt-24 px-6 py-20 bg-[#f7f7f5]"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.22em] text-black/40">
            Stack
          </p>
        </div>
        <div className="space-y-8 text-lg text-black/70">
          {stackGroups.map((group) => {
            const Icon = group.icon;

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
