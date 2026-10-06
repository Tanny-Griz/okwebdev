export type Project = {
  title: string;
  category: string;
  filterCategory: ProjectFilter;
  description: string;
  image: string;
  liveUrl?: string;
  status: "soon" | "live";
  stack: string[];
};

export const projectFilters = [
  "All",
  "E-commerce",
  "Business",
  "Personal / Experimental",
] as const;

export type ProjectFilter = (typeof projectFilters)[number];
export type ProjectCategoryFilter = Exclude<ProjectFilter, "All">;

export const projects: Project[] = [
  {
    title: "Band Website Platform",
    category: "Full Stack Web Application",
    filterCategory: "Personal / Experimental",
    description: "A full-stack music platform connecting a frontend with a Spring Boot REST API, PostgreSQL database, and admin dashboard for managing tours, shows, venues, releases, tracks, and band content.",
    image: "/images/band.jpg",
    status: "soon",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "REST API",
    ],
  },
  {
    title: "SKIBKA Handmade Store",
    category: "E-commerce",
    filterCategory: "E-commerce",
    description:
      "Headless Shopify storefront built with Next.js and TypeScript, featuring dynamic product rendering, cart and wishlist logic, filtering, pagination, and responsive UI architecture.",
    image: "/images/skibka.jpg",
    liveUrl: "https://www.skibka.com",
    status: "live",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shopify Storefront API",
      "Custom UI/UX Design",
      "Vercel",
    ],
  },
  {
    title: "DFM Trucking",
    category: "Custom Business Website",
    filterCategory: "Business",
    description:
      "Custom business website created with Nuxt.js and TypeScript, featuring a fast modern frontend, smooth content management through a separate WordPress admin panel, and deployment on Vercel.",
    image: "/images/dfmtrucking.jpg",
    liveUrl: "https://dfmtrucking.com/",
    status: "live",
    stack: ["Nuxt.js", "Vue", "TypeScript", "WordPress Admin", "Vercel"],
  },
  {
    title: "Brugen Jewelers",
    category: "E-commerce",
    filterCategory: "E-commerce",
    description:
      "E-commerce jewelry website built with WordPress and WooCommerce, including theme customization, product management, eBay integration, and ongoing client support.",
    image: "/images/brugenjewelers.png",
    liveUrl: "http://brugenjewelers.com/",
    status: "live",
    stack: ["WordPress", "WooCommerce", "PHP", "CSS"],
  },
  {
    title: "A Song for Sleep",
    category: "Interactive / Academic Project",
    filterCategory: "Personal / Experimental",
    description: "A multimodal literary analysis transformed into an interactive web experience, exploring data, surveillance, power, and human identity through a speculative smart-building interface.",
    image: "/images/song.jpg",
    liveUrl: "https://a-song-for-sleep.vercel.app/",
    status: "live",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Interactive Design"],
  },
  {
    title: "Von Palmore Hof",
    category: "Business Website",
    filterCategory: "Business",
    description:
      "Business website for a dog breeding kennel, focused on structured content presentation, responsive layout, and clear client-oriented navigation.",
    image: "/images/vonpalmorehof.png",
    liveUrl: "https://vonpalmorehof.com/",
    status: "live",
    stack: ["WordPress", "CSS"],
  },
  {
    title: "CHE Project",
    category: "Educational / Organization Website",
    filterCategory: "Business",
    description:
      "Interior design portfolio website customized on top of WordPress, focused on visual presentation, content structure, and responsive styling.",
    image: "/images/cheproject.jpg",
    liveUrl: "https://www.cheproject.com/",
    status: "live",
    stack: ["WordPress", "CSS"],
  },
];
