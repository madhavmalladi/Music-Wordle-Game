import React from 'react'
import { useContext } from 'react'
import { AppContext } from "../App"

function MonthlyStreams({ attemptPos, attemptVal }) {
  const { guessedArtist, correctArtist } = useContext(AppContext);
  let color = "";
  let arrow = "";

  if (guessedArtist && guessedArtist.monthlyStreams === correctArtist.monthlyStreams) {
    color = "correct";  // Exact match
  } 
  else if (guessedArtist && Math.abs(guessedArtist.monthlyStreams - correctArtist.monthlyStreams) <= 10) {
    color = "almost";  // Within 10 monthly streams
    arrow = guessedArtist.monthlyStreams < correctArtist.monthlyStreams ? "⬆️" : "⬇️";  // Up or down arrow based on the guess
  } 
  else if (guessedArtist && guessedArtist.monthlyStreams !== correctArtist.monthlyStreams) {
    color = "wrong";  // Completely incorrect monthly streams
    arrow = guessedArtist.monthlyStreams < correctArtist.monthlyStreams ? "⬆️" : "⬇️";  // Show arrow even for wrong guess
  }

  return (
    <div className="monthlystreams" id={color}>
      {guessedArtist && guessedArtist.monthlyStreams ? guessedArtist.monthlyStreams + "m": ""}
      {arrow && ` ${arrow}`} {/* Add a space before the arrow */}
    </div>
  )
}

export default MonthlyStreams
