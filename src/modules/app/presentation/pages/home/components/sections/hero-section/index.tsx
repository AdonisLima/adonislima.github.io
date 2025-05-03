import { Button } from "../../button";
import { SplitText } from "../../split-text";
import { Container } from "./styles";
import styles from "./styles.module.scss";

export function Hero() {
  return (
    <Container>
      <div className={styles.presentationContainer}>
        <SplitText
          tag="h1"
          className={styles.salutationTitle}
          text="Hello! I'm Adonis Lima"
          delay={30}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          threshold={0.2}
          rootMargin="-50px"
        />

        <SplitText
          tag="h2"
          className={styles.occupation}
          text="Front-end developer"
          delay={30}
          animationFrom={{ opacity: 0, transform: "translate3d(0,500px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          threshold={0.2}
          rootMargin="-50px"
        />

        <SplitText
          tag="h3"
          className={styles.location}
          text="Currently based in Salvador - Bahia, Brazil"
          delay={50}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50000px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          threshold={0.2}
          rootMargin="-50px"
        />

        <div className={styles.buttonGroupContainer}>
          <Button href="#projects">Projects</Button>
          <Button href="#contact">Contact</Button>
        </div>
      </div>
    </Container>
  );
}
