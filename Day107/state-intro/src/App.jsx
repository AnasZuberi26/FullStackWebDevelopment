import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  let a = 5;

  return (
    <>
      <div>The count is {count}</div>
      <button
        onClick={() => {
          setCount(count * 2);
        }}
      >
        Update Count
      </button>

      <div>The a is {a}</div>
      <button
        onClick={() => {
          a = a + 1;
        }}
      >
        Update a
      </button>
    </>
  );
}

export default App;
