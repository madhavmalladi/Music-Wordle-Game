import './App.css';
import Board from './components/Board';
import React, { useState, useEffect } from 'react';
import Info from './Info.js';
import { createContext } from 'react'; 
import { defaultBoard } from './Info.js'
import {board} from './components/Board';
import DropDown from './components/DropDown';
import { Artist, answerBank } from './Artist.js';

export const AppContext = createContext()

function App() {
  const [board, setBoard] = useState(defaultBoard)
  const [currAttempt, setCurrAttempt] = useState({attempt: 0, letterPos: 0})
  const correctArtist = answerBank[Math.floor(Math.random() * answerBank.length)];
  useEffect(() => {
    console.log(correctArtist); // Logs only once
  }, []);
  return (
    <div className="App">
      <nav>
        <h1>Music Wordle - Guess the Artist!</h1>
        <sub>Note: Numerical Data was retrieved from Spotify as of December 2024</sub>
      </nav>
      <AppContext.Provider value={{board,setBoard, correctArtist}}>
        <DropDown onSelect={(selectedArtist) => console.log(selectedArtist)} />
        <Board />
      </AppContext.Provider> 
    </div>
  );
}

export default App;