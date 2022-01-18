import Header from '../components/Header'
import Quizz from '../components/Quizz'
import MenuMiniJeux from '../components/MenuMiniJeux'
import { useState } from 'react'
const MiniJeux = props => {
  const [playerName,setPlayerName]=useState()
  return (
    <div className='catalogPage' >
      <Header
        emojiSelected={props.emojiSelected}
        setEmojiSelected={props.setEmojiSelected}
      />
       {playerName?<Quizz
        emojiSelected={props.emojiSelected}
        setEmojiSelected={props.setEmojiSelected}
        playerName={playerName}
      />:<MenuMiniJeux playerName={playerName} setPlayerName={setPlayerName}/>}

    </div>
  )
}

export default MiniJeux
