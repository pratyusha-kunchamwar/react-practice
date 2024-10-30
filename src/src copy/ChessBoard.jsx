import React, { useState } from "react";

const ChessBoard = () => {
  const [dignoal, setDignoal] = useState(0);
  function renderCell() {
    let cell = [];
    for (let i = 0; i < 8; i++) {
      let row = [];
      for (let j = 0; j < 8; j++) {
        const cellClass = (i + j) % 2 == 0 ? "bg-gray-700" : "bg-black";
        const dig =
          dignoal &&
          (i - j === dignoal.row - dignoal.col ||
            i + j === dignoal.row + dignoal.col);
        const style = dig ? "bg-red-800" : cellClass;
        row.push(
          <div
            className={`${style} w-20 h-20`}
            key={`${i}-${j}`}
            onClick={() => setDignoal({ row: i, col: j })}
          ></div>
        );
      }
      cell.push(
        <div className="flex" key={i}>
          {row}
        </div>
      );
    }
    return cell;
  }

  return <div className="flex flex-col items-center">{renderCell()}</div>;
};

export default ChessBoard;
