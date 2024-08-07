import { colors } from "@/modules/app/presentation/styles/colors";
import { SectionTitle } from "../../section-title";
import { Container, ProjectCardsContainer } from "./styles";
import { ProjectCard } from "../../project-card";
import {
  adonEcotourismScreenshot,
  tetrisDemoScreenshot,
} from "@/modules/app/presentation/assets";

export function Projects() {
  const projectList = [
    {
      title: "Tetris Clone",
      image: tetrisDemoScreenshot,
      projectInfo: [
        {
          subtitle: "Technologies used",
          text: "HTML (canvas), CSS, JavaScript.",
        },
        {
          subtitle: "Description",
          text: "A simple tetris clone made with vanilla JavaScript and HTML5",
        },
        {
          subtitle: "Challenges",
          text: "First time working with canvas. First JavaScript project.",
        },
      ],
      buttons: {
        demo: {
          label: "Demo",
          source: "https://adonisl.me/tetriss.js/",
        },
        sourceCode: {
          label: "Source",
          source: "https://github.com/AdonisLima/tetriss.js/",
        },
      },
    },

    {
      title: "Adon ecotourism",
      image: adonEcotourismScreenshot,
      projectInfo: [
        { subtitle: "Technologies used", text: "HTML, CSS, Bootstrap, SASS." },
        {
          subtitle: "Description",
          text: "A website for a fictional ecotourism agency based in the Amazon region.",
        },
        {
          subtitle: "Challenges",
          text: "First time using SASS.",
        },
      ],
      buttons: {
        demo: {
          label: "Demo",
          source: "https://adonislima.github.io/adon-ecotourism/",
        },
        sourceCode: {
          label: "Source",
          source: "https://github.com/AdonisLima/adon-ecotourism/",
        },
      },
    },
  ];

  return (
    <Container id="projects">
      <SectionTitle color={colors.secondary1}>Projects</SectionTitle>

      <ProjectCardsContainer>
        {projectList.map((project) => (
          <ProjectCard data={project} />
        ))}
      </ProjectCardsContainer>
    </Container>
  );
}
