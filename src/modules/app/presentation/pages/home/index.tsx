import { Hero } from "./components";
import { About } from "./components/sections/about-section";
import { Contact } from "./components/sections/contact-section";
import { Projects } from "./components/sections/projects-section";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
