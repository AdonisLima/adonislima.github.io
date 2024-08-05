import { colors } from "@/modules/app/presentation/styles/colors";
import styled from "styled-components";

export const Container = styled.a.attrs({
  className: "social-media-link",
})`
  position: relative;
  display: flex;
  width: 130px;
  height: 130px;

  text-align: center;

  border-radius: 50%;
  background-color: ${colors.tertiary1};
  transition: background-color 0.2s;

  cursor: pointer;

  &:hover {
    background-color: ${colors.primary1};
  }
`;

export const SocialMediaIcon = styled.img`
  margin: auto;
  width: 45%;
  height: 45%;
`;
