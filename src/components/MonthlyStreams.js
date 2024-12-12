import React from 'react'
import {useContext} from 'react'
import { AppContext } from "../App"

function MonthlyStreams({attemptPos, attemptVal}) {
    const{ board, correctArtist } = useContext(AppContext)
    const monthlyStreams = board[attemptPos][4]
    let color = ""
    // if (monthlyStreams == correctArtist.monthlyStreams){
    //     color = "correct"
    // }
    // else if((monthlyStreams - correctArtist.monthlyStreams < 10) || (correctArtist.monthlyStreams - monthlyStreams < 10)){
    //   color = "almost"
    // }
    // else{
    //     color = "wrong"
    // }
  return (
    <div className = "monthlystreams"></div>
  )
}

export default MonthlyStreams