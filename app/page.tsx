import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";

export default function Home() {
  return (
    <main className="text-black">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}