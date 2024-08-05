import { colors } from "@/modules/app/presentation/styles/colors";
import styled, { css } from "styled-components";

export const Container = styled.section`
  position: relative;
  padding: 64px 0 178px 0;

  background-color: ${colors.primary1};

  color: ${colors.text2};
`;

export const ProjectCardsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 1144px;
  margin: 0 auto;
  gap: 16px;
  margin-top: 40px;
`;
