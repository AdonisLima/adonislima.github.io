import { Button } from "../../button";
import {
  Container,
  Occupation,
  Salutation,
  Location,
  PresentationContainer,
  ButtonGroupContainer,
} from "./styles";

export function Hero() {
  return (
    <Container>
      <PresentationContainer>
        <Salutation>Hello! I'm Adonis Lima</Salutation>
        <Occupation>Front-end developer</Occupation>
        <Location>Currently based in Salvador - Bahia, Brazil</Location>
        <ButtonGroupContainer>
          <Button href="#projects">Projects</Button>
          <Button href="#contact">Contact</Button>
        </ButtonGroupContainer>
      </PresentationContainer>
    </Container>
  );
}
