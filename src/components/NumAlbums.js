import React from 'react'
import {useContext} from 'react'
import { AppContext } from "../App"

function NumAlbums({attemptPos, attemptVal}) {
    const{ board, correctArtist } = useContext(AppContext)
    const numAlbums = board[attemptPos][5]
    let color = ""
    // if (numAlbums == correctArtist.numAlbums){
    //     color = "correct"
    // }
    // else if((numAlbums - correctArtist.numAlbums < 3) || (correctArtist.numAlbums - numAlbums < 3)){
    //   color = "almost"
    // }
    // else{
    //     color = "wrong"
    // }
  return (
    <div className = "numalbums"></div>
  )
}

export default NumAlbums