import {
  Code2,
  ShoppingBag,
  Settings,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  includes: string[];
};

export const services: Service[] = [
  {
    title: "Website Development & Support",
    description:
      "Custom websites and improvements for existing sites across modern platforms, CMS, and no-code tools.",
    icon: Code2,
    includes: [
      "Business websites",
      "Landing pages",
      "Existing site improvements/redesigns",
      "Responsive UI",
      "Custom frontend",
    ],
  },
  {
    title: "E-commerce & Shopify Setup",
    description:
      "Custom Shopify stores and product experiences built to look polished, work smoothly, and support online sales.",
    icon: ShoppingBag,
    includes: [
      "Custom storefront",
      "Product pages",
      "Cart & checkout flow",
      "Shopify integrations",
    ],
  },
  {
    title: "Website Launch & Technical Setup",
    description:
      "Everything you need to launch your website safely and make it work smoothly.",
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
