import styled from "styled-components";
import { colors } from "@/modules/app/presentation/styles/colors";

export const Container = styled.a.attrs({
  role: "button",
  className: "button",
})`
  position: relative;
  z-index: 0;

  display: flex;
  width: 320px;
  height: 61px;

  background-color: transparent;
  border: 4px solid ${colors.secondary1};

  line-height: 34px;
  font-weight: 600;
  font-size: 28px;
  color: ${colors.secondary1};
  text-align: center;
  text-decoration: none;

  transition: color 0.2s;
  overflow: hidden;
  cursor: pointer;

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 0;

    transition: height 0.2s;
    z-index: -1;
    content: "";
  }

  &:hover {
    color: ${colors.primary1};
  }

  &:hover:after {
    height: 100%;
    background: ${colors.secondary1};
  }
`;

export const Label = styled.span.attrs({
  className: "button__label",
})`
  margin: auto;
`;
