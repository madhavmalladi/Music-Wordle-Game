import './App.css';
import Board from './components/Board';
import React, { useState, useEffect } from 'react';
import Info from './Info.js';
import { createContext } from 'react'; 
import { defaultBoard } from './Info.js';
import DropDown from './components/DropDown';
import { Artist, answerBank } from './Artist.js';
import PopUp from './components/PopUp';

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(defaultBoard);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
  const [correctArtist] = useState(answerBank[Math.floor(Math.random() * answerBank.length)]);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [guessedArtist, setGuessedArtist] = useState(null);
  const [guessed, setGuessed] = useState(false);
  const [firstGuessMade, setFirstGuessMade] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [resetSearch, setResetSearch] = useState(false); 


  const handleGuess = () => {
    if (selectedArtist) {
      const updatedBoard = [...board];
      updatedBoard[currAttempt.attempt] = {
        guessedArtist: selectedArtist,
      };
      setBoard(updatedBoard);

      setGuessedArtist(selectedArtist);
      setGuessed(true);
      setFirstGuessMade(true);

      setCurrAttempt((prevAttempt) => ({
        attempt: prevAttempt.attempt + 1,
        letterPos: 0,
      }));

      if (selectedArtist === correctArtist) {
        setGameOver(true);
        setShowPopUp(true);
      } else if (currAttempt.attempt === 5) {
        setGameOver(true); 
        setShowPopUp(true);
      }

      setSelectedArtist(null);
      setGuessed(false);
      setResetSearch(true); 
    }
  };

  const handlePlayAgain = () => {
    setGameOver(false); 
    setShowPopUp(false); 
    window.location.reload();
  };

  const handleClose = () => {
    setShowPopUp(false); 
  };

  useEffect(() => {
    if (resetSearch) {
      setResetSearch(false); 
    }
  }, [resetSearch]);

  return (
    <div className="App">
      <nav>
        <h1>Music Wordle - Guess the Artist!</h1>
        <sub>Note: Numerical Data was retrieved from Spotify as of December 2024</sub>
      </nav>
      <AppContext.Provider value={{ board, setBoard, correctArtist, guessedArtist, firstGuessMade, currAttempt }}>
        <DropDown onSelect={(artist) => setSelectedArtist(artist)} resetSearch={resetSearch} /> 
        
        {selectedArtist && !guessed && (
          <button className="guess-button" onClick={handleGuess}>
            Guess Artist
          </button>
        )}
        
        <Board />
        
        {showPopUp && (
          <PopUp 
            artistName={correctArtist.name} 
            isCorrect={guessedArtist === correctArtist}
            onClose={handleClose}
            onPlayAgain={handlePlayAgain}
          />
        )}
      </AppContext.Provider> 
    </div>
  );
}

export default App;
