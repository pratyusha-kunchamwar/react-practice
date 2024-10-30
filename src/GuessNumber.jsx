import React, { useState, useEffect } from "react";

const GuessNumber = () => {
  const [input, setInput] = useState(1);
  const [output, setOutput] = useState();
  const [random, setRandom] = useState();
  useEffect(() => {
    setRandom(Math.floor(Math.random() * 100) + 1);
  });
  function handleCheck() {
    if (random > input) {
      setOutput("low");
    } else {
      setOutput("HIgh");
    }
  }
  return (
    <>
      <h1>nuber from 1-100</h1>
      <input
        type="number"
        value={input}
        min="0"
        max="100"
        onChange={(e) => setInput(e.target.value)}
      />
      <h1>{output}</h1>
      <button onClick={() => setInput(1)}>Reset</button>
      <button onClick={handleCheck}>Check</button>
    </>
  );
};

export default GuessNumber;
