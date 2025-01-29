import { data } from "@/data/data";
import ExperienceItems from "./experienceItems";
import { useState } from "react";

function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div>
      <ol className="flex flex-col gap-4 justify-start">
        {data.experience.map((exp, index) => (
          <li
            key={exp.duration}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`p-6 rounded-md transition-all list-none ${hoveredIndex === index ? "bg-slate-800/50" : hoveredIndex !== null ? "opacity-50" : ""}`}
          >
            <ExperienceItems exp={exp} index={index} hoveredIndex={hoveredIndex} />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Experience;
