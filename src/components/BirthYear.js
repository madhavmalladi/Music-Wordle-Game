import React from 'react';
import { useContext } from 'react';
import { AppContext } from "../App";

function BirthYear({ attemptPos, attemptVal }) {
  const { guessedArtist, correctArtist, firstGuessMade } = useContext(AppContext);
  let color = "";
  let arrow = "";

  // Update color only if it's the first guess
  if (firstGuessMade && guessedArtist) {
    if (guessedArtist.birthYear === correctArtist.birthYear) {
      color = "correct";
    } else if (Math.abs(guessedArtist.birthYear - correctArtist.birthYear) <= 7) {
      color = "almost";
      arrow = guessedArtist.birthYear < correctArtist.birthYear ? "⬆️" : "⬇️";
    } else {
      color = "wrong";
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
