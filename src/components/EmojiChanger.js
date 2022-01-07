import { NavLink } from 'react-router-dom'

import amour from '../assets/amour.png'
import colere from '../assets/colere.png'
import aubergine from '../assets/aubergine.png'
import joyeux from '../assets/joyeux.png'
import peur from '../assets/peur.png'
import pleure from '../assets/pleure.png'
import surprise from '../assets/surprise.png'

import './EmojiChanger.css'

const EmojiChanger = () => {
  return (
    <div class='search-box'>
      <div class='search-txt'>
        <NavLink to='/Catalogue' className='lienSelection'>
          <img className='emojis' src={joyeux} alt='Emoji joyeux'></img>
        </NavLink>
        <NavLink to='/Catalogue' className='lienSelection'>
          <img className='emojis' src={pleure} alt='Emoji pleure'></img>
        </NavLink>
        <NavLink to='/Catalogue' className='lienSelection'>
          <img className='emojis' src={surprise} alt='Emoji surprise'></img>
        </NavLink>
        <NavLink to='/Catalogue' className='lienSelection'>
          <img className='emojis' src={amour} alt='Emoji amoureux'></img>
        </NavLink>
        <NavLink to='/Catalogue' className='lienSelection'>
          <img className='emojis' src={colere} alt='Emoji colere'></img>
        </NavLink>
        <NavLink to='/Catalogue' className='lienSelection'>
          <img className='emojis' src={peur} alt='Emoji peur'></img>
        </NavLink>
        <NavLink to='/Catalogue' className='lienSelection'>
          <img className='emojis' src={aubergine} alt='Emoji auberg'></img>
        </NavLink>
      </div>
      <div class='boiteSelection'>
        <NavLink to='/Catalogue' className='lienSelection'>
          <img className='emojiactif' src={joyeux} alt='Emoji joyeux'></img>
        </NavLink>
      </div>
    </div>
  )
}

export default EmojiChanger
