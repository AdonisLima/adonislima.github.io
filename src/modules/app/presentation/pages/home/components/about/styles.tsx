import { colors } from "@/modules/app/presentation/styles/colors";
import { skewedShape } from "@/modules/app/presentation/styles/mixins";
import styled, { css } from "styled-components";

export const Container = styled.section`
  position: relative;
  height: 25vh;
  width: 100vw;

  color: ${colors.text1};

  &:after {
    position: absolute;
    bottom: -40px;
    left: 0;
    right: 0;
    transform: skewY(3deg);

    display: block;
    width: 100%;
    height: 70px;
    background-color: ${colors.tertiary1};

    content: "";

    ${skewedShape}
  }
`;
