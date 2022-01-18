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
import amour2 from '../quizzdata/amour.json'
import aubergine2 from '../quizzdata/aubergine.json'
import colere2 from '../quizzdata/colere.json'
import joyeux2 from '../quizzdata/joyeux.json'
import peur2 from '../quizzdata/peur.json'
import surprise2 from '../quizzdata/surprise.json'
import triste2 from '../quizzdata/triste.json'


const EmojiChanger = (props) => {
   const handleChange = () => {
    const correspondanceTab = [
      { emotion: 'Emoji joyeux', correspondance: '35',emoji: joyeux, quizzSelected: joyeux2},
      { emotion: 'Emoji pleure', correspondance: '18',emoji: pleure, quizzSelected: triste2},
      { emotion: 'Emoji surprise', correspondance: '878',emoji: surprise, quizzSelected:surprise2},
      { emotion: 'Emoji amoureux', correspondance: '10749',emoji: amour, quizzSelected:amour2},
      { emotion: 'Emoji colere', correspondance: '10752',emoji: colere, quizzSelected:colere2},
      { emotion: 'Emoji peur', correspondance: '27',emoji: peur, quizzSelected:peur2},
      { emotion: 'Emoji auberg', correspondance: '',emoji: aubergine, quizzSelected:aubergine2}
    ]
    const selection = correspondanceTab.filter(
      element => element.emotion === event.target.alt
    )
    
      console.log('test selection', selection);

    props.setEmojiSelected(selection[0])
    //console.log(selection[0].emoji)
    //localStorage.setItem('maSelection', selection[0])
  }
  return (
    <div className='search-box'>
      <div className='search-txt'>
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
      <div className='boiteSelection'>
        <NavLink to='/Catalogue' className='lienSelection'>
          <img className='emojiactif' src={props.emojiSelected.emoji} alt={props.emojiSelected.emotion}></img>
        </NavLink>
      </div>
    </div>
  )
}

export default EmojiChanger
