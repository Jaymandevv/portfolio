import LinkComp from "@/components/linkComp";
// import { useScroll } from "@/components/ScrollProvider/provider";

function About() {
  // const { activeSection } = useScroll();

  return (
    <div className="space-y-4">
      <header className="sticky !m-0 top-0 bg-[#0e172a]/80 backdrop-blur-md p-2 z-20 lg:hidden">
        <h2 className="text-lg text-slate-200 ">ABOUT</h2>
      </header>
      <div className="space-y-6 leading-8 lg:pl-6 text-base">
        <p>
          I am an experienced front-end developer with 2+ years of hands-on expertise in crafting engaging web interfaces. Dedicated to delivering seamless user experiences through collaborative
          problem- solving and attention to detail. I pride myself on my ability to write a clean and reusable code. I am highly organized, detail-oriented, and have strong communication skills.
        </p>

        <p>
          Currently, I&apos;m a Front end developer at <LinkComp url="" name="BigOStack" />, specialized in building a responsive and user friendly website. I also contribution to the projects
          planning to bring the project life
        </p>

        <p>I like play video games, football , reading ,and helping people.</p>
      </div>
    </div>
  );
}

export default About;
