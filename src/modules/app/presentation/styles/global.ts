import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export const GlobalStyle = createGlobalStyle`
  div, section {
    background-color: ${colors.secondary1};
  }
`;
