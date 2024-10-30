import React, { useState } from "react";

export const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        const formattedInput = input.replace(/\^/g, "**");
        const evalResult = eval(formattedInput);
        setResult(evalResult);
        setInput("");
      } catch {
        setResult("Error");
      }
    } else if (value === "AC") {
      setInput("");
      setResult("");
    } else if (value === "Del") {
      setInput(input.slice(0, -1));
    } else if (value === "√") {
      setInput(Math.sqrt(parseFloat(input)));
    }
    else {
      setInput((prev) => prev + value);
    }
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const buttons = [
    "AC",
    "Del",
    "+",
    "-",
    "*",
    "÷",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "=",
    "^",
    "√"
     
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="bg-white shadow-lg rounded-lg p-4">
        {/* Input field for user input */}
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className="text-xl text-right mb-2 w-40 h-20 border border-gray-300 rounded p-2"
          placeholder="Enter expression"
        />
        <div className="text-lg text-right text-gray-500 mb-4">
          Result:{result}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((label) => (
            <button
              key={label}
              onClick={() => handleButtonClick(label)}
              className="bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
