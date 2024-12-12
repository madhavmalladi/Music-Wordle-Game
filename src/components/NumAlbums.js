import React from 'react'
import { useContext } from 'react'
import { AppContext } from "../App"

function NumAlbums({ attemptPos, attemptVal }) {
  const { guessedArtist, correctArtist } = useContext(AppContext);
  let color = "";
  let arrow = "";

  if (guessedArtist && guessedArtist.numAlbums === correctArtist.numAlbums) {
    color = "correct";  // Exact match
  } 
  else if (guessedArtist && Math.abs(guessedArtist.numAlbums - correctArtist.numAlbums) <= 3) {
    color = "almost";  // Within 3 albums
    arrow = guessedArtist.numAlbums < correctArtist.numAlbums ? "⬆️" : "⬇️";  // Up or down arrow based on the guess
  } 
  else if (guessedArtist && guessedArtist.numAlbums !== correctArtist.numAlbums) {
    color = "wrong";  // Completely incorrect number of albums
    arrow = guessedArtist.numAlbums < correctArtist.numAlbums ? "⬆️" : "⬇️";  // Show arrow even for wrong guess
  }

  return (
    <div className="numalbums" id={color}>
      {guessedArtist && guessedArtist.numAlbums ? guessedArtist.numAlbums : ""}
      {arrow && ` ${arrow}`} {/* Add a space before the arrow */}
    </div>
  )
}

export default NumAlbums
