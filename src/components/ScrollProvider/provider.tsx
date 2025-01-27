"use client";

import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface ScrollContextProps {
  activeSection: string;
  setActiveSection: Dispatch<SetStateAction<string>>;
}

const ScrollContext = createContext<ScrollContextProps>({
  activeSection: "",
  setActiveSection: () => {},
});

export function ScrollContextProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState("about");

  return <ScrollContext.Provider value={{ activeSection, setActiveSection }}>{children}</ScrollContext.Provider>;
}

export function useScroll() {
  const context = useContext(ScrollContext);
  return context;
}
