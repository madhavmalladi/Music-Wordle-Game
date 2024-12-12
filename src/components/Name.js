import React from 'react'
import {useContext} from 'react'
import { AppContext } from "../App"


function Name({attemptPos, attemptVal}) {
    const{ board, correctArtist } = useContext(AppContext)
    const name = board[attemptPos][0]
    let color = ""
    if (name == correctArtist.name){
        color = "correct"
    }
    else{
        color = "wrong"
    }
  return (
    <div className = "name" id={color}></div>
  )
}

export default Name