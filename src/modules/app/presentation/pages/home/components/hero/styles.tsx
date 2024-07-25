import { colors } from "@/modules/app/presentation/styles/colors";
import { skewedShape } from "@/modules/app/presentation/styles/mixins";
import styled, { css } from "styled-components";

export const Container = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;

  background-color: ${colors.primary1};
  color: ${colors.text2};

  &:after {
    position: absolute;
    bottom: -40px;
    left: 0;
    right: 0;
    transform: skewY(3deg);

    display: block;
    width: 100%;
    height: 70px;
    background-color: ${colors.secondary1};

    content: "";

    ${skewedShape}
  }
`;

export const Presentation = styled.h1``;

export const Occupation = styled.h2``;

export const Location = styled.h3``;

export const Button = styled.button``;
