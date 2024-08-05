import { SectionTitle } from "../../section-title";
import { AboutMeText, Container } from "./styles";

export function About() {
  return (
    <Container>
      <SectionTitle>About Me</SectionTitle>
      <AboutMeText>
        Front-end developer passionate about creating rich user interfaces using
        technologies from the React ecosystem and TypeScript. I am also an
        enthusiast of software design topics such as Test-Driven Development
        (TDD), Domain-Driven Design (DDD), and Clean Architecture.
      </AboutMeText>
    </Container>
  );
}
