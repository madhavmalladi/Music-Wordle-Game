import React from 'react'
import { useContext } from 'react'
import { AppContext } from "../App"

function DebutYear({ attemptPos, attemptVal }) {
  const { guessedArtist, correctArtist } = useContext(AppContext);
  let color = "";
  let arrow = "";

  if (guessedArtist && guessedArtist.debutYear === correctArtist.debutYear) {
    color = "correct";  // Exact match
  } 
  else if (guessedArtist && Math.abs(guessedArtist.debutYear - correctArtist.debutYear) <= 7) {
    color = "almost";  // Within 7 years
    arrow = guessedArtist.debutYear < correctArtist.debutYear ? "⬆️" : "⬇️";  // Up or down arrow based on the guess
  } 
  else if (guessedArtist && guessedArtist.debutYear !== correctArtist.debutYear) {
    color = "wrong";  // Completely incorrect debut year
    arrow = guessedArtist.debutYear < correctArtist.debutYear ? "⬆️" : "⬇️";  // Show arrow even for wrong guess
  }

  return (
    <div className="debutyear" id={color}>
      {guessedArtist && guessedArtist.debutYear ? guessedArtist.debutYear : ""}
      {arrow && ` ${arrow}`} {/* Add a space before the arrow */}
    </div>
  )
}

export default DebutYear;
