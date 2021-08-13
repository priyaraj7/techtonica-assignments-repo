import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick }) => {
  return (
    <div className="board">
      <Square
        className="boardSquare"
        value="1"
        onClick={() => onClick("dummy")}
      />
      <Square
        className="boardSuare"
        value="2"
        onClick={() => onClick("dummy")}
      />
      <Square
        className="boardSuare"
        value="3"
        onClick={() => onClick("dummy")}
      />
      <Square
        className="boardSuare"
        value="4"
        onClick={() => onClick("dummy")}
      />
      <Square
        className="boardSuare"
        value="5"
        onClick={() => onClick("dummy")}
      />
      <Square
        className="boardSuare"
        value="6"
        onClick={() => onClick("dummy")}
      />
      <Square
        className="boardSuare"
        value="7"
        onClick={() => onClick("dummy")}
      />
      <Square
        className="boardSuare"
        value="8"
        onClick={() => onClick("dummy")}
      />
      <Square
        className="boardSuare"
        value="9"
        onClick={() => onClick("dummy")}
      />
    </div>
  );
};

export default Board;
