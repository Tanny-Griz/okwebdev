type Experience = {
  period: string;
  role: string;
  isCurrent: boolean;
  description: string;
};

export const experience: Experience[] = [
  {
    period: "2022 - Present",
    role: "Web Developer",
    isCurrent: true,
    description:
      "Developing and maintaining business websites and e-commerce platforms with a focus on responsive design, SEO, performance, and long-term support. Working directly with clients to turn business needs into clear, functional, and maintainable web solutions.",
  },
  {
    period: "2019 - 2022",
    role: "Frontend Developer",
    isCurrent: false,
    description:
      "Built single-page applications and reusable frontend components using modern JavaScript frameworks. Worked in team environments with designers, backend developers, and project managers, following code review processes and clean code standards.",
  },
  {
    period: "2015 - 2016",
    role: "SEO Specialist",
    isCurrent: false,
    description:
      "Worked on SEO strategy, website visibility, content optimization, and search performance, building a strong foundation in how websites attract users and support business goals.",
  },
];
