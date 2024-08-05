import { colors } from "@/modules/app/presentation/styles/colors";
import styled from "styled-components";

export const Container = styled.h2`
  color: ${(props) => props.color || colors.primary1};
  text-align: center;
  font-weight: 600;
  font-size: 40px;
  font-weight: 48px;
`;
