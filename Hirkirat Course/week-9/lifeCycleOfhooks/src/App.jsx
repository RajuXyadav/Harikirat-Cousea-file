import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { useMousepointer } from "../hooks/useMousepointer";

function useDebounce(value, timeout) {
  return value;
}

function App() {
  // const mousePointer = useMousepointer();
  const [value, setValue] = useState(0);
  const debouncedValue = useDebounce(value, 500);

  return (
    <>
      Debounce value is : {debouncedValue}
      <input type="text" onChange={(e) => setValue(e.target.value)} />
    </>
  );
}

export default App;
