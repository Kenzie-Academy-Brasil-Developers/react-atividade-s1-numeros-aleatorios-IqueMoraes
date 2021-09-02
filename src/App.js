import "./App.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(1);

  function randomNumber() {
    setNumber(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
  }

  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={randomNumber}>Criar novo numero</button>
    </div>
  );
}

export default App;
