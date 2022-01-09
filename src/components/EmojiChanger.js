import { NavLink } from 'react-router-dom'

import amour from '../assets/amour.png'
import colere from '../assets/colere.png'
import aubergine from '../assets/aubergine.png'
import joyeux from '../assets/joyeux.png'
import peur from '../assets/peur.png'
import pleure from '../assets/pleure.png'
import surprise from '../assets/surprise.png'
import './EmojiChanger.css'
import { useEffect, useState } from 'react'

const EmojiChanger = () => {
  const [selectedEmoji,setSelectedEmoji]=useState(joyeux)

  const handleChange = () => {
    const correspondanceTab = [
      { emotion: 'Emoji joyeux', correspondance: 'comedy',emoji: {joyeux} },
      { emotion: 'Emoji pleure', correspondance: 'drama',emoji: {pleure} },
      { emotion: 'Emoji surprise', correspondance: 'fantasy,sci_fi',emoji: {surprise} },
      { emotion: 'Emoji amoureux', correspondance: 'romance',emoji: {amour} },
      { emotion: 'Emoji colere', correspondance: 'action,war',emoji: {colere} },
      { emotion: 'Emoji peur', correspondance: 'horror',emoji: {peur} },
      { emotion: 'Emoji auberg', correspondance: '',emoji: {aubergine} }
    ]
    const selection = correspondanceTab.filter(
      element => element.emotion === event.target.alt
    )
    setSelectedEmoji(selection[0])
    console.log(selection[0].emoji)
    localStorage.setItem('maSelection', selection[0].correspondance)
    return selection
  }
  return (
    <div class='search-box'>
      <div class='search-txt'>
        <NavLink to='/Catalogue' className='lienSelection'>
          <img className='emojis' src={joyeux} alt='Emoji joyeux' onClick={handleChange}></img>
        </NavLink>
        <NavLink to='/Catalogue' className='lienSelection'>
          <img className='emojis' src={pleure} alt='Emoji pleure' onClick={handleChange}></img>
        </NavLink>
        <NavLink to='/Catalogue' className='lienSelection'>
          <img className='emojis' src={surprise} alt='Emoji surprise' onClick={handleChange}></img>
        </NavLink>
        <NavLink to='/Catalogue' className='lienSelection'>
          <img className='emojis' src={amour} alt='Emoji amoureux' onClick={handleChange}></img>
        </NavLink>
        <NavLink to='/Catalogue' className='lienSelection'>
          <img className='emojis' src={colere} alt='Emoji colere' onClick={handleChange}></img>
        </NavLink>
        <NavLink to='/Catalogue' className='lienSelection'>
          <img className='emojis' src={peur} alt='Emoji peur' onClick={handleChange}></img>
        </NavLink>
        <NavLink to='/Catalogue' className='lienSelection'>
          <img className='emojis' src={aubergine} alt='Emoji auberg' onClick={handleChange}></img>
        </NavLink>
      </div>
      <div class='boiteSelection'>
        <NavLink to='/Catalogue' className='lienSelection'>
          <img className='emojiactif' src={selectedEmoji.emoji} alt={selectedEmoji.emotion}></img>
        </NavLink>
      </div>
    </div>
  )
}

export default EmojiChanger
