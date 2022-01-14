import { NavLink } from 'react-router-dom'
import amour from '../assets/amour.png'
import colere from '../assets/colere.png'
import aubergine from '../assets/aubergine.png'
import joyeux from '../assets/joyeux.png'
import peur from '../assets/peur.png'
import pleure from '../assets/pleure.png'
import surprise from '../assets/surprise.png'

import './Emojis.css'

const Emojis = (props) => {
  const handleChange = () => {
    const correspondanceTab = [
      { emotion: 'Emoji joyeux', correspondance: 'comedy',emoji: joyeux },
      { emotion: 'Emoji pleure', correspondance: 'drama',emoji: pleure },
      { emotion: 'Emoji surprise', correspondance: 'fantasy,sci_fi',emoji: surprise },
      { emotion: 'Emoji amoureux', correspondance: 'romance',emoji: amour },
      { emotion: 'Emoji colere', correspondance: 'action,war',emoji: colere },
      { emotion: 'Emoji peur', correspondance: 'horror',emoji: peur },
      { emotion: 'Emoji auberg', correspondance: '',emoji: aubergine }
    ]
    const selection = correspondanceTab.filter(
      element => element.emotion === event.target.alt
    )
    props.setChange(true);
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
