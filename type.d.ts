type Tstacks = string[];

interface IExperienceItems {
  exp: {
    company: string;
    duration: string;
    works: string;
    stacks: Tstacks;
  };
  index: number;
  hoveredIndex: number | null;
}

interface IProjects {
  project: {
    title: string;
    image_url: string;
    description?: string;
    url: string;
    stacks: Tstacks;
    github_url: string;
  };
  hoveredIndex: number | null;
  index: number;
}
