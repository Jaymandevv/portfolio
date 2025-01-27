import { data } from "@/data/data";
import ExperienceItems from "./experienceItems";

function Experience() {
  return (
    <div>
      <ol className="flex flex-col gap-4 justify-start">
        {data.experience.map((exp, i) => (
          <ExperienceItems exp={exp} index={i} key={exp.duration} />
        ))}
      </ol>
    </div>
  );
}

export default Experience;
