import { Hero } from "./components";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Projects } from "./components/projects";

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
