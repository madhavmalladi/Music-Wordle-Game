import React, { useContext } from 'react';
import { AppContext } from "../App";

function Name({ attemptVal }) {
    const { board, correctArtist } = useContext(AppContext); 

    const guessedArtist = board[attemptVal]?.guessedArtist;
    let color = "";

    if (guessedArtist) {
        if (guessedArtist.name === correctArtist.name) {
            color = "correct"; 
        } else {
            color = "wrong"; 
        }
    }

    return (
      <div className="name" id={color}>
        {guessedArtist ? guessedArtist.name : ""} 
      </div>
    );
}

export default Name;
