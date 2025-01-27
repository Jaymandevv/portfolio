import { useState } from "react";
import ItemHoverComp from "../ItemHover";
import Image from "next/image";
import LinkComp from "@/components/linkComp";

function Project() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div>
      <ItemHoverComp hoveredIndex={hoveredIndex} index={1} setHoveredIndex={setHoveredIndex}>
        <div className="">
          <div className="relative h-20 w-32 rounded-sm ring-2 ring-red-400 overflow-hidden bg-black">
            <Image src="/img/quiz-app-light.png" className="object-cover" fill alt="project image" />
          </div>
          <div>
            <LinkComp url="https://quiz-app-jayman.vercel.app/" name="Quiz App" className={`text-base ${hoveredIndex === 1 && "text-teal-300"}`} />
            <p></p>
          </div>
        </div>
      </ItemHoverComp>
    </div>
  );
}

export default Project;
