import { data } from "@/data/data";
import ProjectItems from "./projectItems";
import { useState } from "react";
function Project() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="space-y-5 lg:space-y-0">
      {data.projects.map((p, index) => (
        <li
          key={p.title}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={`lg:p-6 rounded-md transition-all list-none ${hoveredIndex === index ? "lg:bg-slate-800/50" : hoveredIndex !== null ? "lg:opacity-50" : ""}`}
        >
          <ProjectItems project={p} index={index} hoveredIndex={hoveredIndex} />
        </li>
      ))}
    </div>
  );
}

export default Project;
