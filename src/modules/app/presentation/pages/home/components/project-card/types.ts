export interface ProjectCardProps {
  data: ProjectCardData;
  className?: string;
}

export interface ProjectCardData {
  title: string;
  image: string;
  projectInfo: { subtitle: string; text: string }[];
  buttons: {
    demo: ButtonAttributes;
    sourceCode: ButtonAttributes;
  };
}

interface ButtonAttributes {
  label: string;
  source: string;
}
