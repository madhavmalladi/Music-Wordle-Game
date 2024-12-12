import './App.css';
import Board from './components/Board';
import React, { useState, useEffect } from 'react';
import Info from './Info.js';
import { createContext } from 'react'; 
import { defaultBoard } from './Info.js'
import DropDown from './components/DropDown';
import { Artist, answerBank } from './Artist.js';

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(defaultBoard);
  const [currAttempt, setCurrAttempt] = useState({attempt: 0, letterPos: 0});
  
  // Initialize correctArtist once when the component mounts
  const [correctArtist] = useState(answerBank[Math.floor(Math.random() * answerBank.length)]);
  
  const [selectedArtist, setSelectedArtist] = useState(null); // Track selected artist
  const [guessedArtist, setGuessedArtist] = useState(null); // Track guessed artist
  const [guessed, setGuessed] = useState(false); // Track if a guess has been made
  const [firstGuessMade, setFirstGuessMade] = useState(false); // Track if the first guess has been made

  useEffect(() => {
    console.log(correctArtist); // Log once when correctArtist is set
  }, [correctArtist]);  // Dependency array ensures this only runs once when correctArtist is set
  
  const handleGuess = () => {
    if (selectedArtist) {
      setGuessedArtist(selectedArtist); // Set guessed artist
      setGuessed(true); // Set guessed to true when the button is clicked
      setFirstGuessMade(true); // Set firstGuessMade to true after the first guess
    }
  };

  return (
    <div className="App">
      <nav>
        <h1>Music Wordle - Guess the Artist!</h1>
        <sub>Note: Numerical Data was retrieved from Spotify as of December 2024</sub>
      </nav>
      <AppContext.Provider value={{board, setBoard, correctArtist, guessedArtist, firstGuessMade}}>
        <DropDown onSelect={(artist) => setSelectedArtist(artist)} /> 
        {/* Update state when an artist is selected */}
        
        {/* Display the guess button only when an artist is selected */}
        {selectedArtist && !guessed && (
          <button className="guess-button" onClick={handleGuess}>
            Guess Artist
          </button>
        )}
        
        <Board />
      </AppContext.Provider> 
    </div>
  );
}

export default App;
