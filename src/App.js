import "./App.css";
import { useState } from "react";


function App() {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter((count) => count + 1);
  };
  const decrease = () => {
    if (counter > 0) {
      setCounter((count) => count - 1);
    }
  };
  return (
    <div className="counter text-center">
      <h1>Counter</h1>
      <span className="counterValue">{counter}</span>
      <div className="buttons">
        <button className="increaseBtn btn btn-success m-5" onClick={increase}>
          +
        </button>
        <button className="decreaseBtn btn btn-danger m-5" onClick={decrease}>
          -
        </button>
      </div>
    </div>
  );
}

export default App;
