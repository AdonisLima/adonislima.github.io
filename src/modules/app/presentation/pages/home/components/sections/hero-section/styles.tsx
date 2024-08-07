import { colors } from "@/modules/app/presentation/styles/colors";
import { skewedShape } from "@/modules/app/presentation/styles/mixins";
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  position: relative;
  height: 100vh;

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

export const PresentationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;

  background-color: transparent;
`;

export const Salutation = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 48px;
  margin-bottom: 32px;
`;

export const Occupation = styled.h2`
  font-size: 3.5rem;
  font-weight: 600;
  line-height: 58px;
  margin-bottom: 24px;
`;

export const Location = styled.h3`
  font-size: 1.75rem;
  font-weight: 400;
  line-height: 34px;
  margin-bottom: 56px;
`;

export const ButtonGroupContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;
