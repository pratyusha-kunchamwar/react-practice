import React, { useState } from "react";

const ImageGalary = () => {
  const data = ["Pratyusha", "priyanka", "Ramya", "Anasuya"];
  const [select, setSelect] = useState(null);
  function handleClick(data) {
    setSelect(data);
  }
  return (
    <div className="flex  flex-col gap-20 ">
      {data.map((data, index) => (
        <div
          key={index}
          className="bg-red-600"
          onClick={() => handleClick(data)}
        >
          {data}
        </div>
      ))}
      {select && (
              <div className="flex
        ">
          <p>{select}</p>
        </div>
      )}
    </div>
  );
};

export default ImageGalary;
