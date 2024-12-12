import React from 'react'
import {useContext} from 'react'
import { AppContext } from "../App"

function DebutYear({attemptPos, attemptVal}) {
    const{ board, correctArtist } = useContext(AppContext)
    const debutYear = board[attemptPos][3]
    let color = ""
    // if (debutYear == correctArtist.debutYear){
    //     color = "correct"
    // }
    // else if((debutYear - correctArtist.debutYear < 5) || (correctArtist.debutYear - debutYear < 5)){
    //   color = "almost"
    // }
    // else{
    //     color = "wrong"
    // }
  return (
    <div className = "debutyear"></div>
  )
}

export default DebutYear