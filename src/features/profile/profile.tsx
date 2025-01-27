import { DockCM } from "../nav-dock";
import ScrollEffect from "./components/scrollEffect";

function Profile() {
  return (
    <div className="py-24 w-full basis-[44%] flex flex-col items-start ">
      <div>
        <h1 className="dark:text-slate-200 text-slate-700  text-4xl font-bold tracking-tight">Garba Jamiu O.</h1>
        <h2 className="text-2xl text-slate-700 dark:text-slate-200">A Blockchain And Front end Developer</h2>

        <p>I build accessible, pixel-perfect digital experiences for the web.</p>
      </div>

      <div className="mt-20">
        <ScrollEffect />
      </div>

      <div className="mt-auto pb-8">
        <DockCM />
      </div>
    </div>
  );
}

export default Profile;
