import { useState } from "react";
import ItemHoverComp from "../ItemHover";
import LinkComp from "@/components/linkComp";
import Tags from "@/components/tags";

function ExperienceItems({ exp, index }: IExperienceItems) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <ItemHoverComp setHoveredIndex={setHoveredIndex} hoveredIndex={hoveredIndex} index={index}>
      <div className=" flex">
        <div className="w-[30%]">
          <p className="text-slate-500 text-xs font-semibold">{exp.duration}</p>
        </div>
        <div className="text-sm w-full flex flex-col gap-3">
          <LinkComp url="" name={exp.company} className={`text-base ${hoveredIndex === index && "text-teal-300"}`} />
          <p>{exp.works}</p>
          <Tags items={exp.stacks} />
        </div>
      </div>
    </ItemHoverComp>
  );
}

export default ExperienceItems;
