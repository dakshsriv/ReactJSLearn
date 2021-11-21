import React from "react";

const Result = ({score, playAgain}) => {
  return (
  <div className="score-board">
    <h1>You scored {score} / 5 correct answers!</h1>
    <button className="playBtn" onClick={playAgain}>Play again!</button>
  </div> )
}

export default Result