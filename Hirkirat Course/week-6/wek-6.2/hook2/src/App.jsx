import { useState, memo, useCallback, useRef, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const divRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      console.log(divRef.current);
      divRef.current.innerHTML = 10;
    }, 5000);
  });
  const incomeTax = 20000;

  return (
    <div>
      hi there, your income tax return as <div ref={divRef}>{incomeTax}</div>
    </div>
  );
}

export default App;
