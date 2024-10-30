import React, { useEffect, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const formatTime = () => {
    const hours = Math.floor((time / 3600000) % 24); // Calculate hours
    const minutes = Math.floor((time / 60000) % 60); 
    const seconds = Math.floor((time / 1000) % 60); 
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(milliseconds).padStart(2, "0")}`; // Format time
  };
 
  const handleStart = () => {
    console.log("Start");
    setIsActive(true);
  };

  const handleStop = () => {
    console.log("Stop");
    setIsActive(false);
  };

  const handleReset = () => {
    console.log("set");
    setIsActive(false);
    setTime(0);
  };
  return (
    <div>
      <h1>Stop Watch</h1>
      <h2>{formatTime()}</h2>
      <button
        onClick={handleStart}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
      >
        Start
      </button>
      <button
        onClick={handleStop}
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
      >
        Stop
      </button>
      <button
        onClick={handleReset}
        className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700"
      >
        Reset
      </button>
    </div>
  );
};

export default StopWatch;
