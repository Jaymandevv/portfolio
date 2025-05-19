import { data } from "@/data/data";
import ProjectItems from "./projectItems";
import { useState } from "react";
function Project() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="space-y-5 lg:space-y-0">
      <header className="sticky top-0 bg-[#0e172a]/80 backdrop-blur-md p-2 z-20 lg:hidden">
        <h2 className="text-lg text-slate-200">PROJECT</h2>
      </header>

      <ol className="flex flex-col gap-4 justify-start">
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
      </ol>
    </div>
  );
}

export default Project;
