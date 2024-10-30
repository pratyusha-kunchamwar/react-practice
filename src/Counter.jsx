import React, { useState } from "react";

const Counter = () => {
  const [count, setcount] = useState(0);
  const [step, setStep] = useState(1);
  function increment() {
    setcount((prev) => prev + step);
  }
  function decrement() {
    setcount((prev) => prev - step);
  }
  return (
    <>
      <h1>Counter:{count}</h1>
      <label htmlFor="step">Incremwnt/Decrement</label>
      <input
        type="number"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />

      <button onClick={increment}>{"+"}</button>
      <button onClick={decrement}>{"-"}</button>
      <button onClick={() => setcount(0)}>{"reset"}</button>
    </>
  );
};

export default Counter;
