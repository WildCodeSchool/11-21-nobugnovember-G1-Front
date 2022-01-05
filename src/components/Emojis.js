import { NavLink } from 'react-router-dom'
import amour from '../assets/amour.png'
import colere from '../assets/colere.png'
import aubergine from '../assets/aubergine.png'
import joyeux from '../assets/joyeux.png'
import peur from '../assets/peur.png'
import pleure from '../assets/pleure.png'
import surprise from '../assets/surprise.png'

import './Emojis.css'

const Emojis = () => {
  return (
    <div className='emojibarre'>
      <div className='container'>
        <NavLink to='/Catalogue' className=''>
          <img className='emojiimg' src={joyeux} alt='Emoji joyeux'></img>
        </NavLink>
        <figcaption>Joyeux</figcaption>
      </div>
      <div className='container'>
        <img className='emojiimg' src={pleure} alt='Emoji pleure'></img>
        <figcaption>Triste</figcaption>
      </div>
      <div className='container'>
        <img className='emojiimg' src={surprise} alt='Emoji surprise'></img>
        <figcaption>Surpris</figcaption>
      </div>
      <div className='container'>
        <img className='emojiimg' src={amour} alt='Emoji amoureux'></img>
        <figcaption>Amoureux</figcaption>
      </div>
      <div className='container'>
        <img className='emojiimg' src={colere} alt='Emoji colere'></img>
        <figcaption>Enervé</figcaption>
      </div>
      <div className='container'>
        <img className='emojiimg' src={peur} alt='Emoji peur'></img>
        <figcaption>Effrayé</figcaption>
      </div>
      <div className='container'>
        <img className='emojiimg' src={aubergine} alt='Emoji auberg'></img>
        <figcaption>Coquin</figcaption>
      </div>
    </div>
  )
}

export default Emojis
