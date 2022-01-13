import { NavLink } from 'react-router-dom'
import amour from '../assets/amour.png'
import colere from '../assets/colere.png'
import aubergine from '../assets/aubergine.png'
import joyeux from '../assets/joyeux.png'
import peur from '../assets/peur.png'
import pleure from '../assets/pleure.png'
import surprise from '../assets/surprise.png'

import amour2 from '../quizzdata/amour.json'
import aubergine2 from '../quizzdata/aubergine.json'
import colere2 from '../quizzdata/colere.json'
import joyeux2 from '../quizzdata/joyeux.json'
import peur2 from '../quizzdata/peur.json'
import surprise2 from '../quizzdata/surprise.json'
import triste2 from '../quizzdata/triste.json'


import './Emojis.css'

const Emojis = (props) => {
  const handleChange = () => {
    const correspondanceTab = [
      { emotion: 'Emoji joyeux', correspondance: 'comedy',emoji: joyeux, quizzSelected: joyeux2},
      { emotion: 'Emoji pleure', correspondance: 'drama',emoji: pleure, quizzSelected: triste2},
      { emotion: 'Emoji surprise', correspondance: 'fantasy,sci_fi',emoji: surprise, quizzSelected:surprise2},
      { emotion: 'Emoji amoureux', correspondance: 'romance',emoji: amour, quizzSelected:amour2},
      { emotion: 'Emoji colere', correspondance: 'action,war',emoji: colere, quizzSelected:colere2},
      { emotion: 'Emoji peur', correspondance: 'horror',emoji: peur, quizzSelected:peur2},
      { emotion: 'Emoji auberg', correspondance: '',emoji: aubergine, quizzSelected:aubergine2}
    ]
    const selection = correspondanceTab.filter(
      element => element.emotion === event.target.alt
    )
    props.setEmojiSelected(selection[0])

  }
  return (
    <div>
      <div className='emojibarre'>
        <div className='container'>
          <NavLink to='/Catalogue' className=''>
            <img
              onClick={handleChange}
              className='emojiimg'
              src={joyeux}
              alt='Emoji joyeux'
            ></img>
          </NavLink>
          <figcaption>Joyeux</figcaption>
        </div>
        <div className='container'>
          <NavLink to='/Catalogue' className=''>
            <img
              onClick={handleChange}
              className='emojiimg'
              src={pleure}
              alt='Emoji pleure'
            ></img>
          </NavLink>
          <figcaption>Triste</figcaption>
        </div>
        <div className='container'>
          <NavLink to='/Catalogue' className=''>
            <img
              onClick={handleChange}
              className='emojiimg'
              src={surprise}
              alt='Emoji surprise'
            ></img>
            </NavLink>
          <figcaption>Surpris</figcaption>
        </div>
        <div className='container'>
          <NavLink to='/Catalogue' className=''>
            <img
              onClick={handleChange}
              className='emojiimg'
              src={amour}
              alt='Emoji amoureux'
            ></img>
          </NavLink>
          <figcaption>Amoureux</figcaption>
        </div>
        <div className='container'>
          <NavLink to='/Catalogue' className=''>
            <img
              onClick={handleChange}
              className='emojiimg'
              src={colere}
              alt='Emoji colere'
            ></img>
          </NavLink>
          <figcaption>Enervé</figcaption>
        </div>
        <div className='container'>
          <NavLink to='/Catalogue' className=''>
            <img
              onClick={handleChange}
              className='emojiimg'
              src={peur}
              alt='Emoji peur'
            ></img>
          </NavLink>
          <figcaption>Effrayé</figcaption>
        </div>
        <div className='container'>
          <NavLink to='/Catalogue' className=''>
            <img
              onClick={handleChange}
              className='emojiimg'
              src={aubergine}
              alt='Emoji auberg'
            ></img>
          </NavLink>
          <figcaption>Coquin</figcaption>
        </div>
      </div>
    </div>
  )
}

export default Emojis
