import React from 'react'
import {useContext} from 'react'
import { AppContext } from "../App"

function Genre({attemptPos, attemptVal}) {
    const{ board, correctArtist } = useContext(AppContext)
    const genre = board[attemptPos][1]
    let color = ""
    // if (genre == correctArtist.genre){
    //     color = "correct"
    // }
    // else{
    //     color = "wrong"
    // }
  return (
    <div className = "genre"></div>
  )
}

export default Genre