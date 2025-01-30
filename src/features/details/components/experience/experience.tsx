import { data } from "@/data/data";
import ExperienceItems from "./experienceItems";
import { useState } from "react";

function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      <h2 className="text-lg text-slate-200 lg:hidden">Experience</h2>
      <ol className="flex flex-col gap-4 justify-start">
        {data.experience.map((exp, index) => (
          <li
            key={exp.duration}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`lg:p-6 rounded-md transition-all list-none ${hoveredIndex === index ? "lg:bg-slate-800/50" : hoveredIndex !== null ? "lg:opacity-50" : ""}`}
          >
            <ExperienceItems exp={exp} index={index} hoveredIndex={hoveredIndex} />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Experience;
