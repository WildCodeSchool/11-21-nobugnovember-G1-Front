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
  const handleChange = () =>{

    const correspondanceTab=[ {emotion:"Emoji joyeux",correspondance:"comedy"},
                              {emotion:"Emoji pleure",correspondance:"drama"},
                              {emotion:"Emoji surprise",correspondance:"fantasy,sci_fi"},
                              {emotion:"Emoji amoureux",correspondance:"romance"},
                              {emotion:"Emoji colere",correspondance:"action,war"},
                              {emotion:"Emoji peur",correspondance:"horror"},
                              {emotion:"Emoji auberg",correspondance:""}
    ]
   const selection = correspondanceTab.filter (element => element.emotion === event.target.alt)
   /*Ajouter selection[0].correspondance dans un useState pour récupérer le filtre correspondant à la selection
    /*console.log(selection[0].correspondance)*/

  }
  return (
    <div className='emojibarre'>
      <div className='container'>
        <NavLink  to='/Catalogue' className=''>
          <img onClick={handleChange} className='emojiimg' src={joyeux} alt='Emoji joyeux'></img>
        </NavLink>
        <figcaption>Joyeux</figcaption>
      </div>
      <div className='container'>
        <img onClick={handleChange} className='emojiimg' src={pleure} alt='Emoji pleure'></img>
        <figcaption>Triste</figcaption>
      </div>
      <div className='container'>
        <img onClick={handleChange} className='emojiimg' src={surprise} alt='Emoji surprise'></img>
        <figcaption>Surpris</figcaption>
      </div>
      <div className='container'>
        <img onClick={handleChange} className='emojiimg' src={amour} alt='Emoji amoureux'></img>
        <figcaption>Amoureux</figcaption>
      </div>
      <div className='container'>
        <img onClick={handleChange} className='emojiimg' src={colere} alt='Emoji colere'></img>
        <figcaption>Enervé</figcaption>
      </div>
      <div className='container'>
        <img onClick={handleChange} className='emojiimg' src={peur} alt='Emoji peur'></img>
        <figcaption>Effrayé</figcaption>
      </div>
      <div className='container'>
        <img onClick={handleChange} className='emojiimg' src={aubergine} alt='Emoji auberg'></img>
        <figcaption>Coquin</figcaption>
      </div>
    </div>
  )
}

export default Emojis
