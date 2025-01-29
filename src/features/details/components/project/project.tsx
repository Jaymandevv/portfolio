import { data } from "@/data/data";
import ProjectItems from "./projectItems";
import { useState } from "react";
function Project() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div>
      {data.projects.map((p, index) => (
        <li
          key={p.title}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={`p-6 rounded-md transition-all list-none ${hoveredIndex === index ? "bg-slate-800/50" : hoveredIndex !== null ? "opacity-50" : ""}`}
        >
          <ProjectItems project={p} index={index} hoveredIndex={hoveredIndex} />
        </li>
      ))}
    </div>
  );
}

export default Project;
