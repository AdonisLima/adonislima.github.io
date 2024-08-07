import { colors } from "@/modules/app/presentation/styles/colors";
import { skewedShape } from "@/modules/app/presentation/styles/mixins";
import styled, { css } from "styled-components";

export const Container = styled.section`
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 64px 0 178px 0;

  color: ${colors.text1};
  background-color: ${colors.secondary1};

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

export const AboutMeText = styled.p`
  margin-top: 40px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1144px;

  color: ${colors.primary1};
  font-size: 1.75rem;
  font-weight: 500;
  text-align: center;
  line-height: 34px;
`;
