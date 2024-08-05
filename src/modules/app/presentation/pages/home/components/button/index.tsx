import React, { useRef } from "react";
import { Container, Label } from "./styles";
import { ButtonProps } from "./types";

export function Button(props: ButtonProps) {
  const { children } = props;

  return (
    <Container {...props}>
      <Label>{children}</Label>
    </Container>
  );
}
