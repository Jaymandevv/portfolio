"use client";

import Details from "@/features/details/details";
import Profile from "@/features/profile/profile";

function App() {
  return (
    <div className="flex flex-col gap-10 py-10 lg:py-0 lg:flex-row w-full lg:h-screen">
      <Profile />
      <Details />
    </div>
  );
}

export default App;
