"use client";

import Details from "@/features/details/details";
import Profile from "@/features/profile/profile";

function App() {
  return (
    <div className="page flex flex-col gap-10 px-4 py-10 lg:px-0 lg:py-0 lg:flex-row w-full lg:h-screen">
      <Profile />
      <Details />
    </div>
  );
}

export default App;
