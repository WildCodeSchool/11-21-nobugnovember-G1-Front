import Header from '../components/Header'
import Footer from '../components/Footer'
import Quizz from '../components/Quizz'
import './MiniJeux.css'
import { NavLink } from 'react-router-dom'

import { useEffect, useState } from 'react'

const MiniJeux = props => {
  const handleChoice = () => {
    const saisie = document.querySelector('.inputPseudo')
    props.setPlayerName(saisie.value)
  }
  const handleChange = () => {
    props.setPlayerName(EventTarget.value)
  }

  /* Creation nouvelle page pour quizz, blind test + creation de routes*/

  return (
    <div className='catalogPage'>
      <Header
        emojiSelected={props.emojiSelected}
        setEmojiSelected={props.setEmojiSelected}
        link={props.link}
        setLink={props.setLink}
      />
      <div className='box-menu-jeux'>
        <h1>Bienvenue dans la section Mini-Jeux</h1>
        <p className='parag-minijeux'>
          Prenez une pause et testez vos connaissances en matière de films et séries, êtes-vous prêt à relever le défi?
        </p>
        <label className='label-miniJeux '>Indiquez votre pseudo :</label>
        <input className='inputPseudo' onChange={handleChange} />
        <h3>Choisissez votre jeux et essayez d'obtenir le meilleur score !</h3>
        <p className='choix-jeux'>Faites votre choix :</p>
        <div className='partie-buttons'>
          <NavLink
            to='/MiniJeux/Quizz'
            onClick={handleChoice}
            className='Quizz-btn'
          >
            Quizz
          </NavLink>
        </div>
        <p>
          Nous vous souhaitons bonne chance ainsi qu'une pleine réussite aux
          mini-jeux !!
        </p>
        <div className='bloc-asavoir-minijeux'>
          <h3>BONUS : Changez d'Emoji en fin de partie et recommencez un nouveau quizz 🤓</h3>
        </div>
        <p className='signature'>@ Les fondateurs Moody</p>
      </div>
      <Footer />
    </div>
  )
}

export default MiniJeux
