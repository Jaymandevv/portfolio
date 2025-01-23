import { DockCM } from "../nav-dock";
import { useScroll } from "@/components/ScrollProvider/provider";

function Profile() {
  const {activeSection} = useScroll();


  console.log(activeSection, "active")

  return (
    <div className="py-24 w-full basis-[48%] flex flex-col">
      <div>
          <h1 className="text-slate-200 text-4xl font-bold tracking-tight">
            Garba Jamiu O.
          </h1>
          <h2 className="text-2xl text-slate-200">
                A Blockchain And Front end Developer
          </h2>

          <p>I build accessible, pixel-perfect digital experiences for the web.</p>
      </div>

      <div>
      {["about", "project"].map((id) => (
        <div
          key={id}
          id={id}
          style={{
            // height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "24px",
            // border: "1px solid black",
            color: activeSection === id ? "red" : "white",
            fontWeight: activeSection === id ? "bold" : "normal",
          }}
        >
            {id}
        </div>
      ))}
    </div>

      <DockCM />
    </div>
  );
}

export default Profile;
