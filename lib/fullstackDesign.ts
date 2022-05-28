type ProjectLink = {
  displayText: string;
  url: string;
};

export type Project = {
  title: string;
  description: string;
  links: ProjectLink[];
};

const ProjectGradientPrototype: Project = {
  title: "Gradient Prototype",
  description:
    "Put a bird on it scenester hoodie bicycle rights whatever you probably haven't heard of them mlkshk lumbersexual etsy jianbing photo booth meggings praxis fashion axe. Hoodie cornhole schlitz green juice. Keffiyeh street art tattooed, cold-pressed copper mug 90's letterpress pitchfork poutine venmo ethical gochujang snackwave. Biodiesel waistcoat occupy street art, quinoa PBR&B pork belly. Blog chillwave bespoke vegan, squid cray raw denim +1 subway tile keytar celiac tofu.",
  links: [
    {
      displayText: "Figma",
      url: "https://chakra-ui.com/docs/components/navigation/link-overlay",
    },
    {
      displayText: "Codesandbox",
      url: "#",
    },
    {
      displayText: "Github",
      url: "#",
    },
  ],
};

export const projects: Project[] = [
  ProjectGradientPrototype
];