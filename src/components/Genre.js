import React from 'react';
import { useContext } from 'react';
import { AppContext } from "../App";

function Genre({ attemptVal }) {
  const { board, correctArtist } = useContext(AppContext); 
  const guessedArtist = board[attemptVal]?.guessedArtist;
  let color = "";

 
  if (guessedArtist) {
    if (guessedArtist.genre === correctArtist.genre) {
      color = "correct";
    } else {
      color = "wrong"; 
    }
  }

  return (
    <div className="genre" id={color}>
      {guessedArtist && guessedArtist.genre ? guessedArtist.genre : ""}
    </div>
  );
}

export default Genre;
