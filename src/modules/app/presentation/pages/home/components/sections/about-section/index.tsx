import { SectionTitle } from "../../section-title";

import styles from "./styles.module.scss";
import { FadeInTransition } from "@/modules/app/presentation/components/fade-in-transition";

export function About() {
  return (
    <section className={`${styles.container} `}>
      <FadeInTransition>
        <SectionTitle>About Me</SectionTitle>
        <p className={styles.aboutMeText}>
          Front-end developer passionate about creating rich user interfaces
          using technologies from the React ecosystem and TypeScript. I am also
          an enthusiast of software design topics such as Test-Driven
          Development (TDD), Domain-Driven Design (DDD), and Clean Architecture.
        </p>
      </FadeInTransition>
    </section>
  );
}
