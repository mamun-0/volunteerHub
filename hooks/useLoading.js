import { useState } from "react";

export function useLoading(initialValue = true) {
  const [loading, setLoading] = useState(initialValue);
  function stopLoading() {
    setLoading(false);
  }
  return [loading, stopLoading];
}
