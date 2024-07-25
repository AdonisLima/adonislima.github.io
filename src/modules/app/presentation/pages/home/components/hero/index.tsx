import {
  Container,
  Occupation,
  Presentation,
  Location,
  Button,
} from "./styles";

export function Hero() {
  return (
    <Container>
      <Presentation>Hello! I'm Adonis Lima</Presentation>
      <Occupation>Front-end developer</Occupation>
      <Location>Currently based in Salvador - Bahia, Brazil</Location>
      <Button>Projects</Button>
      <Button>Contact</Button>
      <h1>My hero section</h1>
    </Container>
  );
}
