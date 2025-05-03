import { Container } from "./styles";
import { SectionTitleProps } from "./types";

export function SectionTitle(props: SectionTitleProps) {
  const { children, color } = props;

  return <Container color={color}>{children}</Container>;
}
