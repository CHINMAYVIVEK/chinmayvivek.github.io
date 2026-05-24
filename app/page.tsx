import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Expertise } from "@/components/Expertise";
import { Hero } from "@/components/Hero";
import { HomeClient } from "@/components/HomeClient";
import { Projects } from "@/components/Projects";
import { Research } from "@/components/Research";

export default function HomePage() {
  return (
    <HomeClient>
      <Hero />
      <About />
      <Projects />
      <Expertise />
      <Research />
      <Experience />
      <Contact />
    </HomeClient>
  );
}
