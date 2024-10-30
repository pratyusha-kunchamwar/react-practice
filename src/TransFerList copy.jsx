import React, { useState } from "react";
import data from "./data";

const TransFerList = () => {
  const [leftItems, setLeftItems] = useState(data);
  const [rightItems, setRightItems] = useState([]);

  function toggleLeft(id) {
    setLeftItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }
  function toggleRight(id) {
    setRightItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function handleAllRight() {
    setRightItems((prev) => [...prev, ...leftItems]);
    setLeftItems([]);
  }
  function handleAllLeft() {
    setLeftItems((prev) => [...prev, ...rightItems]);
    setRightItems([]);
  }
  function handleSelectLeft() {
    const checked = leftItems
      .filter((item) => item.checked)
      .map((item) => ({ ...item, checked: false }));
    setRightItems([...rightItems, ...checked]);
    setLeftItems((prev) => prev.filter((item) => !item.checked));
  }
  function handleSelectRight() {
    const checked = rightItems
      .filter((item) => item.checked)
      .map((item) => ({ ...item, checked: false }));
    setLeftItems((prev) => [...prev, ...checked]);
    setRightItems((prev) => prev.filter((item) => !item.checked));
  }
  return (
    <>
      <h1>TransFerList</h1>
      <div className="flex  flex-col ">
        <div>
          <ul style={{ listStyle: "none" }}>
            {leftItems.map(({ title, id, checked }) => (
              <li key={id}>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleLeft(id)}
                />
                {title}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col">
          <button onClick={handleAllRight}>{">>"}</button>{" "}
          <button onClick={handleAllLeft}>{"<<"}</button>
          <button onClick={handleSelectLeft}>{">"}</button>
          <button onClick={handleSelectRight}>{"<"}</button>{" "}
        </div>
        <div>
          <ul style={{ listStyle: "none" }}>
            {rightItems.map(({ title, id, checked }) => (
              <li key={id}>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleRight(id)}
                />
                {title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default TransFerList;
