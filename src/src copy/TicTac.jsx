import React, { useState } from "react";

const TicTac = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [xWins, setXWins] = useState(0);
  const [oWins, setOWins] = useState(0);
  const [draws, setDraws] = useState(0);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);

    let gameWinner = calculateWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      if (gameWinner === "X") {
        setXWins(xWins + 1);
      } else {
        setOWins(oWins + 1);
      }
    } else if (!newBoard.includes(null)) {
      setDraws(draws + 1);
      setWinner("Draw");
    }
    setIsXNext(!isXNext);
  };

  const calculateWinner = (board) => {
    const patren = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let combination of patren) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };
  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  let message;
  if (winner) {
    if (winner === "Draw") {
      message = <h2>Draw</h2>;
    } else {
      message =( <h2>Winner:{winner}</h2>) ;
    }
  } else {
    message = <h2>Playing</h2>;
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <h1>Tick Tac To</h1>
        <div className="grid grid-cols-3 mt-4">
          {board.map((cell, index) => (
            <button
              key={index}
              className="w-20 h-20 bg-white border-2 border-gray-300 "
              onClick={() => handleClick(index)}
            >
              {cell}
            </button>
          ))}
        </div>
        {message}
        <button className="mt-6 px-4 py-2 " onClick={handleReset}>
          {" "}
          Reset Game
        </button>
        <div className="mt-8 text-center">
          <h2>Game Overall Score</h2>
          <p>Xwin:{xWins}</p>
          <p>Owin:{oWins}</p>
          <p>Draw:{draws}</p>
        </div>
      </div>
    </>
  );
};

export default TicTac;
