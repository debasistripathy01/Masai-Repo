// import React from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [playerTurn, setPlayTurn] = useState(true);
  const [winner, setWinner] = useState(false);

  // This is for COunt of scores
  function handleCOunt(val) {
    setCount(count + val);
  }

  //player chance function

  function chance() {
    setPlayTurn(!playerTurn);
  }

  //Resetting the game function
  function reset() {
    setCount(0);
    setPlayTurn(true);
    setWinner(false);
  }
  // Increasing the value according to Button Clicks
  function HandleInc(val) {
    var newCount = count + val;
    if (newCount === 10) {
      setWinner(true);
      handleCOunt(val);
      return;
    } else {
      handleCOunt(val);
      chance();
    }
  }

  return (
    <div className="App">
      <h3>Welcome To Reach Ten Mini-Game</h3>
      {/* Display Player Turn here */}
      <p>It's Turn for :</p>
      <span data-testid="turn-container">
        {playerTurn ? "Player-1" : "Player-2"}
      </span>

      {/* Buttons to increment the counter */}
      <div data-testid="buttons-container">
        {/* Always Remeber to Use callbacks within Onclick to Prevent multiple-Re-Renders */}
        <button
          data-testid="add-one-btn"
          onClick={() => HandleInc(1)}
          disabled={winner}
        >
          +1
        </button>
        <button
          data-testid="add-two-btn"
          onClick={() => HandleInc(1)}
          disabled={count >= 10 ? true : false}
        >
          +2
        </button>
      </div>

      {/* Display the counter here */}
      <h1 data-testid="counter">{count}</h1>

      {/* Display the winner here */}
      <span data-testid="winner-container">
        {winner === false
          ? "Result Still to be decided"
          : playerTurn
          ? "player-1"
          : "player-2"}
      </span>

      {/* Reset the Game with this button */}
      <button data-testid="reset-btn" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default App;
