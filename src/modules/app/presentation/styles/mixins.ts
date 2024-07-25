import { css } from "styled-components";

export const skewedShape = css`
  transform: skewY(3deg);

  @media (min-width: 1300px) {
    transform: skewY(2deg);
  }

  @media (min-width: 2300px) {
    transform: skewY(1.5deg);
  }

  @media (min-width: 3300px) {
    transform: skewY(0.7deg);
  }
`;
