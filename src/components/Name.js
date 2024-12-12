import React, { useContext } from 'react';
import { AppContext } from "../App";

function Name({attemptPos, attemptVal}) {
    const { guessedArtist, correctArtist } = useContext(AppContext);
    let color = "";

    if (guessedArtist && guessedArtist.name === correctArtist.name) {
        color = "correct";
    } 
    else if (guessedArtist && guessedArtist.name !== correctArtist.name) {
        color = "wrong"; 
    }
    return (
      <div className="name" id={color}>
        {guessedArtist ? guessedArtist.name : ""} {/* Check if guessedArtist exists */}
      </div>
    )
}

export default Name;
