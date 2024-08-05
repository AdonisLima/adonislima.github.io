import React from "react";
import { Container } from "./styles";

export function SectionTitle(props) {
  const { children, color } = props;

  return <Container color={color}>{children}</Container>;
}
