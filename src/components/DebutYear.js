import React from 'react';
import { useContext } from 'react';
import { AppContext } from "../App";

function DebutYear({ attemptVal }) {
  const { board, correctArtist } = useContext(AppContext);
  const guessedArtist = board[attemptVal]?.guessedArtist;
  let color = "";
  let arrow = "";

  if (guessedArtist) {
    if (guessedArtist.debutYear === correctArtist.debutYear) {
      color = "correct";
    } 
    else if (Math.abs(guessedArtist.debutYear - correctArtist.debutYear) <= 7) {
      color = "almost";
      arrow = guessedArtist.debutYear < correctArtist.debutYear ? "⬆️" : "⬇️";
    } 
    else {
      color = "wrong";
      arrow = guessedArtist.debutYear < correctArtist.debutYear ? "⬆️" : "⬇️"; 
    }
  }

  return (
    <div className="debutyear" id={color}>
      {guessedArtist && guessedArtist.debutYear ? guessedArtist.debutYear : ""}
      {arrow && ` ${arrow}`}
    </div>
  );
}

export default DebutYear;
