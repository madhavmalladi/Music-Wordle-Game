import React from 'react'
import {useContext} from 'react'
import { AppContext } from "../App"

function BirthYear({attemptPos, attemptVal}) {
    const{ board, correctArtist } = useContext(AppContext)
    const birthYear = board[attemptPos][2]
    let color = ""
    // if (birthYear == correctArtist.birthYear){
    //     color = "correct"
    // }
    // else if((birthYear - correctArtist.birthYear < 5) || (correctArtist.birthYear - birthYear < 5)){
    //   color = "almost"
    // }
    // else{
    //     color = "wrong"
    // }
  return (
    <div className = "birthyear"></div>
  )
}

export default BirthYear