import {
  emailIcon,
  githubLogo,
  linkedinLogo,
} from "@/modules/app/presentation/assets";
import { SectionTitle } from "../../section-title";
import { SocialMediaButton } from "../../social-media-button";
import { ContactButtonsContainer, Container } from "./styles";
import { FadeInTransition } from "@/modules/app/presentation/components/fade-in-transition";

export function Contact() {
  return (
    <Container id="contact">
      <FadeInTransition>
        <SectionTitle>Contact</SectionTitle>
      </FadeInTransition>

      <FadeInTransition>
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
      </FadeInTransition>
    </Container>
  );
}
