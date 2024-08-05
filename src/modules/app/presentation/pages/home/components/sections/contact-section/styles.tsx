import { colors } from "@/modules/app/presentation/styles/colors";
import { skewedShape } from "@/modules/app/presentation/styles/mixins";
import styled, { css } from "styled-components";

export const Container = styled.section`
  position: relative;

  padding: 64px 0 100px 0;

  background-color: ${colors.secondary1};

  color: ${colors.text1};

  overflow: hidden;

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

export const ContactButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 500px;
  margin: 0 auto;
  justify-content: space-around;
  gap: 16px;
  margin-top: 48px;
  margin-bottom: 10px;
`;
