import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Stack } from "@/components/stack";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="text-black">
        <Hero />
        <About />
        <Projects />
        <Stack />
        <Contact />
      </main>
    </>
  );
}
