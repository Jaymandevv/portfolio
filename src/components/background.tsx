"use client";

import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useRef } from "react";

interface BackgroundProps {
  children: React.ReactNode;
  gradientSize: number;
  // gradientColor: string;
  className: string;
}

function Background({ children, gradientSize, className }: BackgroundProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);
  const { theme } = useTheme();
  const gradientColor = theme === "dark" ? "#1e293b" : "#eee";

  console.log(theme);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (cardRef.current) {
        const { left, top } = cardRef.current.getBoundingClientRect();
        const clientX = e.clientX;
        const clientY = e.clientY;
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
      }
    },
    [mouseX, mouseY]
  );

  const handleMouseOut = useCallback(
    (e: MouseEvent) => {
      if (!e.relatedTarget) {
        document.removeEventListener("mousemove", handleMouseMove);
        mouseX.set(-gradientSize);
        mouseY.set(-gradientSize);
      }
    },
    [handleMouseMove, mouseX, gradientSize, mouseY]
  );

  const handleMouseEnter = useCallback(() => {
    document.addEventListener("mousemove", handleMouseMove);
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [handleMouseMove, mouseX, gradientSize, mouseY]);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [handleMouseEnter, handleMouseMove, handleMouseOut]);

  useEffect(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [gradientSize, mouseX, mouseY]);

  return (
    <div ref={cardRef} className={"group relative flex size-full"}>
      <div className="absolute inset-0 z-10 " />
      <div className={`relative z-30 ${className}`}>{children}</div>
      <motion.div
        className="pointer-events-none absolute inset-px z-10  lg:opacity-0 lg:transition-opacity duration-300 lg:group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
             radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)
           `,
          // opacity: gradientOpacity,˚
        }}
      />
    </div>
  );
}

export default Background;
