import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addOne = () => {
    setCounter(counter + 1);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>{counter}</h1>
      <button onClick={addOne}>Click me!</button>
    </div>
  );
}

export default App;
