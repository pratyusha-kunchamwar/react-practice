import React, { useState } from "react";

const CircleRating = ({ value = 0, total = 4 }) => {
  const [rating, setRating] = useState(value);

  const handleClick = (index) => {
    setRating(index + 1);
  };

  const circlesArray = [];
  for (let index = 0; index < total; index++) {
    circlesArray.push(index);
  }

  return (
    <div className="flex cursor-pointer">
      {circlesArray.map((index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          className={`w-12 h-12 rounded-full 
            ${rating > index ? "bg-yellow-500" : "bg-gray-300"}
            flex items-center justify-center
            transition-colors duration-200 mx-1`}
        ></div>
      ))}
      <div className="ml-2">
        {rating > 0 && <span>Selected Rating: {rating}</span>}
      </div>
    </div>
  );
};

export default CircleRating;
