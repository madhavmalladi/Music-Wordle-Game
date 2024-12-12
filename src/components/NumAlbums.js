import React from 'react';
import { useContext } from 'react';
import { AppContext } from "../App";

function NumAlbums({ attemptVal }) {
  const { board, correctArtist } = useContext(AppContext);
  const guessedArtist = board[attemptVal]?.guessedArtist;
  let color = "";
  let arrow = "";

  if (guessedArtist) {
    if (guessedArtist.numAlbums === correctArtist.numAlbums) {
      color = "correct";
    } 
    else if (Math.abs(guessedArtist.numAlbums - correctArtist.numAlbums) <= 3) {
      color = "almost";
      arrow = guessedArtist.numAlbums < correctArtist.numAlbums ? "⬆️" : "⬇️";
    } 
    else {
      color = "wrong";
      arrow = guessedArtist.numAlbums < correctArtist.numAlbums ? "⬆️" : "⬇️";
    }
  }

  return (
    <div className="numalbums" id={color}>
      {guessedArtist && guessedArtist.numAlbums ? guessedArtist.numAlbums : ""}
      {arrow && ` ${arrow}`} 
    </div>
  );
}

export default NumAlbums;
