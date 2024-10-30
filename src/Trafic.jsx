// import React from "react";
// import { useState, useEffect } from "react";
// const states = {
//   red: { backgroundColor: "red", duration: 4000, next: "green" },
//   yellow: { backgroundColor: "yellow", duration: 500, next: "red" },
//   green: { backgroundColor: "green", duration: 3000, next: "yellow" },
// };

// const Trafic = () => {
//   const [currentColor, setCurrentColor] = useState("");
//   useState(() => {
//     const { duration, next } = states[currentColor];
//     const id = setTimeout(() => setCurrentColor(next), duration)
//     return () => clearInterval(id);
//   },[currentColor])
//   return (
//     <div className="wrapper">
//       <div className="lights">
//         {Object.keys(states).map((color) => (
//             <div
//                 key={color}
//                 className="light"

//             ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Trafic;

// main <code></code>
import React, { useEffect, useState } from "react";


const trafficStates = {
  red: { backgroundColor: "red", duration: 4000, next: "green" },
  yellow: { backgroundColor: "yellow", duration: 500, next: "red" },
  green: { backgroundColor: "green", duration: 3000, next: "yellow" },
};

export default function App() {
  const [currentColor, setCurrentColor] = useState("red");

  useEffect(() => {
    const { duration, next } = trafficStates[currentColor];
    const timerId = setTimeout(() => setCurrentColor(next), duration);
    return () => clearTimeout(timerId);
  }, [currentColor]);

  return (
    <div className="wrapper">
      <div className="traffic-light-container">
        {Object.keys(trafficStates).map((color) => (
          <div
            key={color}
            className="traffic-light"
            style={{
              backgroundColor:
                color === currentColor
                  ? trafficStates[color].backgroundColor
                  : "blac",
              height: "100px",
              width: "100px",
              borderRadius: "50%",
              margin: "10px",
              opacity: color === currentColor ? 1 : 0.5,
            }}
          />
        ))}
      </div>
    </div>
  );
}
