import LinkComp from "@/components/linkComp";
import { data } from "@/data/data";
import { useState } from "react";

function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div>
      <ol className="flex flex-col gap-4 justify-start">
        {data.experience.map((exp, i) => (
          <li
            key={exp.duration}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`p-6 rounded-md transition-all ${hoveredIndex === i ? "bg-slate-800/50" : hoveredIndex !== null ? "opacity-50" : ""}`}
          >
            <div className=" flex">
              <div className="w-[30%]">
                <p className="text-slate-500 text-sm font-semibold">{exp.duration}</p>
              </div>
              <div className="text-lg w-full flex flex-col gap-3">
                <LinkComp url="" name={exp.company} className={`${hoveredIndex === i && "text-teal-300"}`} />
                <p>{exp.works}</p>
                <div className="flex gap-2 ">
                  {exp.stacks.map((s) => (
                    <div key={s} className="bg-teal-400/10 px-3 py-1 text-sm text-teal-300 rounded-full">
                      <p>{s}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Experience;
