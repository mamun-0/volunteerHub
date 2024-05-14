import { useContext } from "react";
import { ModeContext } from "../ModeProvider/ModeProvider";

export function useProvideMode() {
  const mode = useContext(ModeContext);
  return mode;
}
