export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  liveUrl: string;
  stack: string[];
  isCurrent?: boolean;
};

export const projects: Project[] = [
  {
    title: "Personal Portfolio Website",
    category: "Portfolio / Personal Website",
    description:
      "A modern personal portfolio website designed and developed to present projects, skills, and experience with a clean layout, smooth interactions, and strong focus on usability and performance.",
    image: "/images/okwebdev.jpg",
    liveUrl: "/",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    isCurrent: true
  },
  {
    title: "Brugen Jewelers",
    category: "E-commerce",
    description:
      "An e-commerce jewelry website focused on product presentation, store management, and a seamless shopping experience, including payment processing and multi-channel integrations.",
    image: "/images/brugenjewelers.png",
    liveUrl: "http://brugenjewelers.com/",
    stack: ["WordPress", "WooCommerce", "PHP", "CSS"],
  },
  {
    title: "Von Palmore Hof",
    category: "Business Website",
    description:
      "A business website for a dog breeding kennel, focused on presenting puppies, structure, and clear content for potential clients.",
    image: "/images/vonpalmorehof.png",
    liveUrl: "https://vonpalmorehof.com/",
    stack: ["WordPress", "CSS"],
  },
  {
    title: "DFM Trucking",
    category: "Custom Business Website",
    description:
      "A custom-built website for a trucking company, developed from a custom design with a fully tailored frontend implementation.",
    image: "/images/dfmtrucking.png",
    liveUrl: "https://dfmtrucking.com/",
    stack: ["WordPress", "Custom CSS", "Custom Layout"],
  },
  {
    title: "CHE Project",
    category: "Educational / Organization Website",
    description:
      "A portfolio website for an interior designer, built on WordPress and customized with CSS on top of an existing theme.",
    image: "/images/cheproject.jpg",
    liveUrl: "https://www.cheproject.com/",
    stack: ["WordPress", "CSS"],
  },
];
