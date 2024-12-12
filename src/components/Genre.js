import React from 'react'
import {useContext} from 'react'
import { AppContext } from "../App"

function Genre({attemptPos, attemptVal}) {
  const { guessedArtist, correctArtist } = useContext(AppContext);
  let color = "";

  if (guessedArtist && guessedArtist.genre === correctArtist.genre) {
      color = "correct";
  } 
  else if (guessedArtist && guessedArtist.genre !== correctArtist.genre) {
      color = "wrong"; 
  }

  return (
    <div className="genre" id={color}>
      {guessedArtist && guessedArtist.genre ? guessedArtist.genre : ""}
    </div>
  )
}

export default Genre