import React from 'react';
import { useContext } from 'react';
import { AppContext } from "../App";

function BirthYear({ attemptVal }) {
  const { board, correctArtist, firstGuessMade } = useContext(AppContext);
  const guessedArtist = board[attemptVal]?.guessedArtist; // Get the guessed artist for the current attempt row
  let color = "";
  let arrow = "";

  if (guessedArtist) {
    if (guessedArtist.birthYear === correctArtist.birthYear) {
      color = "correct";
    } 
    else if (Math.abs(guessedArtist.birthYear - correctArtist.birthYear) <= 7) {
      color = "almost";
      arrow = guessedArtist.birthYear < correctArtist.birthYear ? "⬆️" : "⬇️"; 
    } 
    else {
      color = "wrong";
      arrow = guessedArtist.birthYear < correctArtist.birthYear ? "⬆️" : "⬇️";
    }
  }

  return (
    <div className="birthyear" id={color}>
      {guessedArtist && guessedArtist.birthYear ? guessedArtist.birthYear : ""}
      {arrow && ` ${arrow}`} 
    </div>
  );
}

export default BirthYear;
