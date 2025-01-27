import { useScroll } from "@/components/ScrollProvider/provider";
import { useEffect } from "react";
import About from "./components/about";
import Experience from "./components/experience/experience";
import Project from "./components/project/project";

const data = [
  { id: "about", comp: <About /> },
  { id: "experience", comp: <Experience /> },
  { id: "project", comp: <Project /> },
];

function Details() {
  const { setActiveSection } = useScroll();

  const handleScroll = () => {
    console.log("scroll");

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        setActiveSection(section.id);
      }
    });
  };

  useEffect(() => {
    const scrollDiv: HTMLDivElement | null = document.querySelector(".detail");
    scrollDiv?.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="detail py-24 details w-full basis-[52%] overflow-y-scroll hide-scrollbar">
      <div className="flex flex-col gap-40">
        {data.map(({ id, comp }) => (
          <section key={id} id={id} className="text-xl">
            {comp}
          </section>
        ))}
      </div>
    </div>
  );
}

export default Details;
