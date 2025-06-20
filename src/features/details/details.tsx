import { useScroll } from "@/components/ScrollProvider/provider";
import { useEffect } from "react";
import About from "./components/about";
import Experience from "./components/experience/experience";
import Project from "./components/project/project";
import LinkComp from "@/components/linkComp";

const data = [
  { id: "about", comp: <About /> },
  { id: "experience", comp: <Experience /> },
  { id: "project", comp: <Project /> },
];

function Details() {
  const { setActiveSection } = useScroll();

  const handleScroll = () => {
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
    <div className="detail space-y-5 lg:py-24 details w-full lg:basis-[52%] lg:overflow-y-scroll hide-scrollbar  lg:space-y-10">
      <div className="space-y-10 lg:pl-6">
        {data.map(({ id, comp }) => (
          <section key={id} id={id} className="text-xl">
            {comp}
          </section>
        ))}
      </div>
      <div className="lg:pl-12 space-y-10 lg:space-y-20">
        <LinkComp className="!mt-5" name="View Full Résumé" url="https://drive.google.com/file/d/1q4nies91g51C0na2Vtt2AZ8ygQIkwIXD/view?usp=drive_link" />

        <footer className="!mb-10 text-sm lg:mr-48 ">
          Inspired by <LinkComp name="Brittany Chiang" url="https://www.linkedin.com/in/bchiang7/" />, coded in <LinkComp name="Visual Studio Code" url="https://code.visualstudio.com/" /> by yours
          truly. Built with <LinkComp name="Next js" url="https://nextjs.org/" /> and <LinkComp name="Tailwind Css" url="https://tailwindcss.com/" />, deployed with{" "}
          <LinkComp name="Vercel" url="https://vercel.com/" />. All text is set in the <LinkComp name="Inter" url="https://rsms.me/inter/" /> typeface
        </footer>
      </div>
    </div>
  );
}

export default Details;
