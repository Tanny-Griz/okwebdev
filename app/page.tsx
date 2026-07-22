import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Stack } from "@/components/stack";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Services } from "@/components/services";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyWorkWithMe } from "@/components/WhyWorkWithMe";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://okwebdev.com/#person",
      name: "Tanya Kovalenko",
      jobTitle: "Web Developer & Designer",
      url: "https://okwebdev.com",
      sameAs: [
        "https://www.linkedin.com/in/tanysha-kovalenko/",
        "https://github.com/Tanny-Griz",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://okwebdev.com/#business",
      name: "OKWEBDEV",
      url: "https://okwebdev.com",
      image: "https://okwebdev.com/images/okwebdev.jpg",
      description:
        "Web design and development services for small businesses, creative brands, e-commerce stores, WordPress, Shopify, SEO, and custom frontend projects.",
      founder: {
        "@id": "https://okwebdev.com/#person",
      },
      areaServed: [
        {
          "@type": "State",
          name: "Minnesota",
        },
        {
          "@type": "Country",
          name: "United States",
        },
      ],
      serviceType: [
        "Website design",
        "Website development",
        "E-commerce development",
        "Shopify development",
        "WordPress development",
        "SEO setup",
        "Custom frontend development",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://okwebdev.com/#website",
      name: "OKWEBDEV",
      url: "https://okwebdev.com",
      publisher: {
        "@id": "https://okwebdev.com/#business",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Stack />
        <Services />
        <HowItWorks />
        <WhyWorkWithMe />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
