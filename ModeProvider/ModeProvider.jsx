import { createContext } from "react";
import { useToggle } from "../hooks/useToggle";

export const ModeContext = createContext(null);

export function ModeProvider({ children }) {
  const [toggle, setToggle] = useToggle(false);
  return (
    <ModeContext.Provider value={{ toggle, setToggle }}>
      {children}
    </ModeContext.Provider>
  );
}
