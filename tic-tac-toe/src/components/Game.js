import { useState } from "react";

import calculateWinner from "../helpers/calculateWinner";
import Board from "./Board";
import GameInfo from "./GameInfo";
import "./components.css";

const Game = () => {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
    },
  ]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);

  const handleClick = (index) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = [...current.squares];

    const isWinner = calculateWinner(squares);
    if (squares[index] || isWinner.winner) {
      return;
    }

    squares[index] = xIsNext ? "X" : "O";

    setHistory([
      ...newHistory,
      {
        squares,
      },
    ]);
    setStepNumber(newHistory.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step) => () => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const current = history[stepNumber];
  const winnerInfo = calculateWinner(current.squares);

  let status;
  if (winnerInfo.winner) {
    status = (
      <p>
        Winner: Player <span className="winner">{winnerInfo.winner}</span>
      </p>
    );
  } else if (stepNumber === 9) {
    status = "It's draw";
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={handleClick}
          winnerLine={winnerInfo.winnerLine}
        />
      </div>
      <GameInfo history={history} jumpTo={jumpTo} status={status} />
    </div>
  );
};

export default Game;
