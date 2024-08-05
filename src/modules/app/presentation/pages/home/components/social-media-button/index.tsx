import { Container, SocialMediaIcon } from "./styles";
import { SocialMediaButtonProps } from "./types";

export function SocialMediaButton(props: SocialMediaButtonProps) {
  const { socialMediaIcon, href } = props;

  return (
    <Container href={href} target="_blank">
      <SocialMediaIcon src={socialMediaIcon} />
    </Container>
  );
}
