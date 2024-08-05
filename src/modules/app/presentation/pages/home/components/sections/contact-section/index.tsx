import {
  emailIcon,
  githubLogo,
  linkedinLogo,
} from "@/modules/app/presentation/assets";
import { SectionTitle } from "../../section-title";
import { SocialMediaButton } from "../../social-media-button";
import { ContactButtonsContainer, Container } from "./styles";

export function Contact() {
  return (
    <Container id="contact">
      <SectionTitle>Contact</SectionTitle>
      <ContactButtonsContainer>
        <SocialMediaButton
          href="https://www.linkedin.com/in/adonisjv-lima"
          socialMediaIcon={linkedinLogo}
        />
        <SocialMediaButton
          href="https://github.com/AdonisLima"
          socialMediaIcon={githubLogo}
        />
        <SocialMediaButton
          href="mailto:adonisjvl@gmail.com"
          socialMediaIcon={emailIcon}
        />
      </ContactButtonsContainer>
    </Container>
  );
}
