import { useContext, useState } from "react";
import { CounterContext } from "../components/context";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CounterContext.Provider value={count}>
        <Count setCount={setCount} />
      </CounterContext.Provider>
    </div>
  );
}

function Count({ count, setCount }) {
  return (
    <div>
      <CountRenderer />

      <Buttons setCount={setCount} />
    </div>
  );
}

function CountRenderer() {
  const count = useContext(CounterContext);
  return <div>{count}</div>;
}

function Buttons({ setCount }) {
  const count = useContext(CounterContext);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrase
      </button>
    </div>
  );
}

export default App;
