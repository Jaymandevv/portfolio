"use client";

import Details from "@/features/details/details";
import Profile from "@/features/profile/profile";

function App() {
  return (
    <div className="flex w-full h-screen">
      <Profile />
      <Details />
    </div>
  );
}

export default App;
