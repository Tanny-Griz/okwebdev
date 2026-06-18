export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  liveUrl: string;
  status: "current" | "soon" | "live";
  stack: string[];
  isCurrent?: boolean;
};

export const projects: Project[] = [
  {
    title: "Personal Portfolio Website",
    category: "Portfolio / Personal Website",
    description:
      "Modern portfolio website built with Next.js and TypeScript, focused on clean UI, smooth interactions, responsive architecture, and performance.",
    image: "/images/okwebdev.jpg",
    liveUrl: "/",
    status: "current",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    isCurrent: true,
  },
  {
    title: "SKIBKA Handmade Store",
    category: "E-commerce",
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
    description:
      "E-commerce jewelry website built with WordPress and WooCommerce, including theme customization, product management, eBay integration, and ongoing client support.",
    image: "/images/brugenjewelers.png",
    liveUrl: "http://brugenjewelers.com/",
    status: "live",
    stack: ["WordPress", "WooCommerce", "PHP", "CSS"],
  },
  {
    title: "Von Palmore Hof",
    category: "Business Website",
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
    description:
      "Interior design portfolio website customized on top of WordPress, focused on visual presentation, content structure, and responsive styling.",
    image: "/images/cheproject.jpg",
    liveUrl: "https://www.cheproject.com/",
    status: "live",
    stack: ["WordPress", "CSS"],
  },
];
