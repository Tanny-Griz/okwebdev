export type StackIcon = "code" | "database" | "globe" | "wrench";

export type StackGroups = {
  title: string;
  icon: StackIcon;
  items: string[];
};

export const stackGroups: StackGroups[] = [
  {
    title: "Frontend",
    icon: "code",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Vue",
      "Nuxt.js",
      "HTML",
      "Pug",
      "CSS",
      "SCSS",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    icon: "database",
    items: ["REST APIs", "Python", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Web & CMS",
    icon: "globe",
    items: ["Shopify", "WordPress", "WooCommerce", "Twig", "Wix"],
  },
  {
    title: "Workflow & Tools",
    icon: "wrench",
    items: [
      "Git",
      "Figma",
      "Jest",
      "Cypress",
      "Storybook",
      "Agile/Scrum",
      "Vercel",
      "AI tools",
      "Cursor",
      "Codex",
    ],
  },
] as const;
