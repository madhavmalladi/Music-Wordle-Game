import React, { useContext } from 'react';
import Genre from './Genre';
import BirthYear from './BirthYear';
import DebutYear from './DebutYear';
import MonthlyStreams from './MonthlyStreams';
import NumAlbums from './NumAlbums';
import Name from './Name';
import { AppContext } from '../App';

function Board() {
  const { board, currAttempt, guessedArtist, correctArtist } = useContext(AppContext);

  return (
    <div className="board-container">
      {/* Header Row */}
      <div className="header-row">
        <div className="header-item">Name</div>
        <div className="header-item">Genre</div>
        <div className="header-item">Birth Year</div>
        <div className="header-item">Debut Year</div>
        <div className="header-item">Monthly Streams</div>
        <div className="header-item"># of Albums</div>
      </div>

      {/* Data Rows */}
      <div className="board">
        {Array.from({ length: 6 }).map((_, attemptVal) => (
          <div 
            className={`row ${attemptVal === currAttempt.attempt ? 'current-attempt' : ''}`} 
            key={attemptVal}
          >
            <Name attemptVal={attemptVal} />
            <Genre attemptVal={attemptVal} />
            <BirthYear attemptVal={attemptVal} />
            <DebutYear attemptVal={attemptVal} />
            <MonthlyStreams attemptVal={attemptVal} />
            <NumAlbums attemptVal={attemptVal} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Board;
