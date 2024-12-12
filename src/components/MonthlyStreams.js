import React from 'react';
import { useContext } from 'react';
import { AppContext } from "../App";

function MonthlyStreams({ attemptVal }) {
  const { board, correctArtist } = useContext(AppContext);
  const guessedArtist = board[attemptVal]?.guessedArtist;
  let color = "";
  let arrow = "";

  if (guessedArtist) {
    if (guessedArtist.monthlyStreams === correctArtist.monthlyStreams) {
      color = "correct";
    } 
    else if (Math.abs(guessedArtist.monthlyStreams - correctArtist.monthlyStreams) <= 10) {
      color = "almost";
      arrow = guessedArtist.monthlyStreams < correctArtist.monthlyStreams ? "⬆️" : "⬇️"; 
    } 
    else {
      color = "wrong";
      arrow = guessedArtist.monthlyStreams < correctArtist.monthlyStreams ? "⬆️" : "⬇️"; 
    }
  }

  return (
    <div className="monthlystreams" id={color}>
      {guessedArtist && guessedArtist.monthlyStreams ? guessedArtist.monthlyStreams + "m" : ""}
      {arrow && ` ${arrow}`}
    </div>
  );
}

export default MonthlyStreams;
