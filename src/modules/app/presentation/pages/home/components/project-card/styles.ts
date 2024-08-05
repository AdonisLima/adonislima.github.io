import styled from "styled-components";
import { Button as DefaultButton } from "../button";
import { colors } from "@/modules/app/presentation/styles/colors";

export const Container = styled.article.attrs({ className: "project-card" })`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: ${colors.secondary1};
  max-width: 472px;
  min-width: 472px;

  color: ${colors.primary1};
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (min-width: 1300px) {
    max-width: 1090px;
    min-width: 1090px;
  }
`;

export const Image = styled.img`
  width: 472px;
  height: 420px;
  padding: 0;
  margin: 0;

  background-color: ${colors.tertiary1};
  object-fit: contain;
`;

export const TextContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
`;

export const Title = styled.h1`
  font-size: 23px;
  font-weight: 700;
  line-height: 28px;

  margin-bottom: 24px;
`;

export const SubjectGroup = styled.div`
  margin-bottom: 16px;
`;

export const Subtitle = styled.h2`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 24px;
  margin-top: auto;
`;

export const Button = styled(DefaultButton)`
  width: 145px;
  height: 48px;

  border-color: ${colors.primary1};
  color: ${colors.primary1};

  &:hover {
    color: ${colors.secondary1};
  }

  &:hover:after {
    height: 100%;
    background: ${colors.primary1};
  }

  > .button__label {
    font-size: 23px;
    line-height: 28px;
  }
`;
