import { useState, useEffect } from "react";

export function useMousepointer() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    console.log("Mounted mouseMove event listerner");
    return () => {
      console.log("unmounted mouseMove event listerner");
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return position;
}
