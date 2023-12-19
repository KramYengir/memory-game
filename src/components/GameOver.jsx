import { useState } from "react";

const GameOver = ({ message, score, onclick }) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <h1>{message}</h1>
        <p>Your score: {score}</p>
        <button onClick={onclick}>Go Again</button>
      </div>
    </div>
  );
};

export default GameOver;
