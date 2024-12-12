import React from 'react';
import './PopUp.css';

function PopUp({ artistName, isCorrect, onClose, onPlayAgain }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>{isCorrect ? `The Artist was ${artistName}!` : `The Artist was ${artistName}`}</h2>
        <p>{isCorrect ? 'Congrats!' : 'Better luck next time!'}</p>
        <div className="button-container">
          <button className="close-btn" onClick={onClose}>Close</button>
          <button className="play-again-btn" onClick={onPlayAgain}>Play Again</button>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
