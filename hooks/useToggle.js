import { useState } from "react";

export function useToggle(initialValue = true) {
  const [toggle, setToggle] = useState(initialValue);
  function toggleMe() {
    setToggle((current) => {
      return !current;
    });
  }
  return [toggle, toggleMe];
}
