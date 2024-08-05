import React from "react";

import {
  Container,
  Image,
  TextContentContainer,
  Title,
  Subtitle,
  Text,
  Button,
  ButtonGroup,
  SubjectGroup,
} from "./styles";

import { ProjectCardProps } from "./types";

export function ProjectCard(props: ProjectCardProps) {
  const { data, className } = props;

  const { title, image, buttons, projectInfo } = data;

  const { demo, sourceCode } = buttons;

  function renderTextContent() {
    return projectInfo.map((info) => {
      return (
        <SubjectGroup>
          <Subtitle>{info.subtitle}</Subtitle>
          <Text>{info.text}</Text>
        </SubjectGroup>
      );
    });
  }

  return (
    <Container className={className}>
      <Image src={image}></Image>

      <TextContentContainer>
        <Title>{title}</Title>

        {renderTextContent()}
        <ButtonGroup>
          <Button href={demo.source} target="_blank">
            {demo.label}
          </Button>
          <Button href={sourceCode.source} target="_blank">
            {sourceCode.label}
          </Button>
        </ButtonGroup>
      </TextContentContainer>
    </Container>
  );
}
