import { useState } from "react";
import "../../App.css";

export default function Random() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);

  function randomNumber() {
    setNumber(Math.floor(Math.random() * 100) + 1);
  }

  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={randomNumber}>Criar novo numero</button>
    </div>
  );
}
