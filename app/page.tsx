import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Stack } from "@/components/stack";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Services } from "@/components/services";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyWorkWithMe } from "@/components/WhyWorkWithMe";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />        
        <Projects />
        <Stack />
        <WhyWorkWithMe />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
