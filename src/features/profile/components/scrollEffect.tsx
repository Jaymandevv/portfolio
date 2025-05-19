import { useScroll } from "@/components/ScrollProvider/provider";

function ScrollEffect() {
  const { activeSection } = useScroll();

  console.log(activeSection, "active section");

  return (
    <div className="flex flex-col gap-6">
      {["about", "experience", "project"].map((id) => (
        <div
          key={id}
          className="flex items-center gap-3"
          id={id}
          style={{
            fontSize: "24px",
            fontWeight: activeSection === id ? "bold" : "normal",
          }}
        >
          <div className={`h-[1px]  ${activeSection === id ? "w-20 bg-teal-400 dark:bg-white" : "w-10 bg-teal-200 dark:bg-slate-400"} transition-all`}></div>
          <p className={`uppercase text-base ${activeSection === id ? "text-teal-400 dark:text-white" : "text-teal-200 dark:text-slate-400"}`}>{id}</p>
        </div>
      ))}
    </div>
  );
}

export default ScrollEffect;
