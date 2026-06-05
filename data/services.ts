import { Code2, ShoppingBag, RefreshCw, Settings, type LucideIcon } from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  includes: string[];
};

export const services: Service[] = [
  {
    title: "Website Design & Development",
    description:
      "Clean, responsive websites for small businesses, creative brands, and service providers.",
    icon: Code2,
    includes: [
      "Business websites",
      "Landing pages",
      "Portfolio websites",
      "Responsive UI",
      "Custom frontend",
    ],
  },
  {
    title: "E-commerce & Shopify Setup",
    description:
      "Online stores and product experiences built to look polished, work smoothly, and support sales.",
    icon: ShoppingBag,
    includes: [
      "Shopify setup",
      "Product pages",
      "Collections",
      "Cart & checkout flow",
      "Store improvements",
    ],
  },
  {
    title: "Website Redesign & Improvements",
    description:
      "Updates for websites that feel outdated, messy, hard to use, or no longer match your business.",
    icon: RefreshCw,
    includes: [
      "Layout cleanup",
      "Mobile improvements",
      "Content updates",
      "UI refresh",
      "Performance improvements",
    ],
  },
  {
    title: "Launch, SEO & Website Support",
    description:
      "Technical setup and ongoing help to keep your website live, organized, and easy to manage.",
    icon: Settings,
    includes: [
      "Domain & hosting",
      "Vercel deployment",
      "DNS setup",
      "Analytics setup",
      "SEO",
    ],
  },
];
