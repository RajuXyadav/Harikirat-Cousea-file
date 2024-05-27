import { useEffect, useState } from "react";

export function useOnline() {
  const [oneline, setOnline] = useState(window.navigator.onLine);
  useEffect(() => {
    window.addEventListener("online", () => {
      setOnline(true);
    });
    window.addEventListener("offline", () => {
      setOnline(false);
    });
  }, []);

  return oneline;
}
