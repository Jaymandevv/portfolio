// import { useState } from "react";

interface ItemHoverCompProps {
  children: React.ReactNode;
  index: number;
  setHoveredIndex: (v: number | null) => void;
  hoveredIndex: number | null;
}

function ItemHoverComp({ children, index, hoveredIndex, setHoveredIndex }: ItemHoverCompProps) {
  return (
    <li
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className={`p-6 rounded-md transition-all list-none ${hoveredIndex === index ? "bg-slate-800/50" : hoveredIndex !== null ? "opacity-50" : ""}`}
    >
      {children}
    </li>
  );
}

export default ItemHoverComp;
