// import React from "react";

// const TransFerList = () => {
//   return (
//     <>
//       <h1>TransFerList</h1>
//       <ul>
//         <li><input type="Checkbox" />java</li>
//         <li><input type="checkbox" />c</li>
//       </ul>
//       <div>
//         <button >{">>"}</button>{" "}
//         <button>{"<<"}</button>{" "}
//         <button>{">"}</button>{" "}
//         <button>{"<"}</button>{" "}
//       </div>
//       <ul>
//         <li><input type="checkbox" />react</li>
//         <li><input type="checkbox" />Angulat</li>
//       </ul>
//     </>
//   );
// };

// export default TransFerList;
import React, { useState } from "react";

const TransFerList = () => {
  // Single state object to manage both lists and selected items
  const [lists, setLists] = useState({
    left: ["Java", "C"],
    right: ["React", "Angular"],
    selectedLeft: null,
    selectedRight: null,
  });

  // Transfer selected item from left to right
  const transferToRight = () => {
    if (lists.selectedLeft !== null) {
      setLists((prev) => ({
        left: prev.left.filter((item) => item !== prev.selectedLeft),
        right: [...prev.right, prev.selectedLeft],
        selectedLeft: null,
        selectedRight: prev.selectedRight,
      }));
    }
  };

  // Transfer selected item from right to left
  const transferToLeft = () => {
    if (lists.selectedRight !== null) {
      setLists((prev) => ({
        left: [...prev.left, prev.selectedRight],
        right: prev.right.filter((item) => item !== prev.selectedRight),
        selectedLeft: prev.selectedLeft,
        selectedRight: null,
      }));
    }
  };

  // Transfer all items from left to right
  const transferAllToRight = () => {
    setLists((prev) => ({
      left: [],
      right: [...prev.right, ...prev.left],
      selectedLeft: null,
      selectedRight: null,
    }));
  };

  // Transfer all items from right to left
  const transferAllToLeft = () => {
    setLists((prev) => ({
      left: [...prev.left, ...prev.right],
      right: [],
      selectedLeft: null,
      selectedRight: null,
    }));
  };

  // Handle item selection
  const selectItem = (list, item) => {
    setLists((prev) => ({
      ...prev,
      selectedLeft: list === "left" ? item : prev.selectedLeft,
      selectedRight: list === "right" ? item : prev.selectedRight,
    }));
  };

  return (
    <>
      <h1>Transfer List</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        {/* Left List */}
        <ul>
          {lists.left.map((item) => (
            <li
              key={item}
              style={{
                cursor: "pointer",
                backgroundColor: item === lists.selectedLeft ? "lightgray" : "white",
              }}
              onClick={() => selectItem("left", item)}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Transfer Buttons */}
        <div>
          <button onClick={transferToRight}>{">"}</button>{" "}
          <button onClick={transferAllToRight}>{">>"}</button>{" "}
          <button onClick={transferToLeft}>{"<"}</button>{" "}
          <button onClick={transferAllToLeft}>{"<<"}</button>
        </div>

        {/* Right List */}
        <ul>
          {lists.right.map((item) => (
            <li
              key={item}
              style={{
                cursor: "pointer",
                backgroundColor: item === lists.selectedRight ? "lightgray" : "white",
              }}
              onClick={() => selectItem("right", item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TransFerList;

