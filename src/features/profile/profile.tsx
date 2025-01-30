import { DockCM } from "../nav-dock";
import ScrollEffect from "./components/scrollEffect";
import { data } from "@/data/data";

function Profile() {
  const {
    profile: { name, job, sub_title },
  } = data;

  return (
    <div className="lg:py-24 w-full lg:basis-[48%] flex flex-col items-start ">
      <div className="space-y-3 ">
        <h1 className="dark:text-slate-200 text-slate-700  text-4xl font-bold tracking-tight">{name}</h1>
        <h2 className="text-2xl text-slate-700 dark:text-slate-200">{job}</h2>

        <p className="mr-20">{sub_title}</p>
      </div>

      <div className="hidden lg:mt-20 lg:block">
        <ScrollEffect />
      </div>

      <div className="fixed self-center bottom-2 lg:mt-auto lg:pb-8 lg:self-start lg:relative">
        <DockCM />
      </div>
    </div>
  );
}

export default Profile;
