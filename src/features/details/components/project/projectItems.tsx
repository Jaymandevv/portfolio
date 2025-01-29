import LinkComp from "@/components/linkComp";
import Tags from "@/components/tags";
import Image from "next/image";

function ProjectItems({ project, index, hoveredIndex }: IProjects) {
  return (
    <div className="flex gap-4">
      <div className="relative h-20 w-32 mt-2 rounded-sm ring-2 ring-red-400 overflow-hidden bg-black basis-[30%] ">
        <Image src={project.image_url} className="object-cover" fill alt="project image" />
      </div>
      <div className="w-full justify-self-start space-y-2">
        <LinkComp url={project.url} name={project.title} className={`text-base ${hoveredIndex === index && "text-teal-300"}`} />
        <p className="text-sm">
          A simple app that allow you choose from options quizes like Javascript, HTML, CSS, and Accessibility. You can only choose and solve at a time and also view your score at the end of the quiz.
        </p>
        <div>
          <Tags items={project.stacks} />
        </div>
      </div>
    </div>
  );
}

export default ProjectItems;
