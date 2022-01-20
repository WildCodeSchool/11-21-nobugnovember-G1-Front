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
      />
      <div className='box-menu-jeux'>
        <h1>Bienvenue dans la section Mini-Jeux</h1>
        <p className='parag-minijeux'>
          Les mini-jeux de notre site ont pour but de vous divertir, de vous
          rappeler des choses oubliées, de vous apprendre des choses et surtout
          de vous offrir la possibilité de tester vos connaissances afin de
          vérifier que vous êtes bien un(e) véritable "expert(e)" en Films
          Séries.
        </p>

        {/* <h3>
        Pour se faire, vous avez la possibilité de participer à deux types de
        jeux :
      </h3>
      <ul className='ul-box-menu-jeux'>
        <li className='li-box-menu-jeux'>UN QUIZZ</li>
        <li className='li-box-menu-jeux'>UN BLIND-TEST</li>
      </ul> */}

        {/* <h3>Vous ne savez pas ce qu'est un Quizz ? Cliquez-ici </h3>
      <p className='parag-hidden-minijeux'>
        Un quiz est un jeu qui consiste en un questionnaire permettant de tester
        des connaissances générales ou spécifiques ou des compétences. De
        manière plus précise, sur notre site, vous allez être confronté à une
        série de questions traitant de films & séries lié à l'Emoji que vous
        avez sélectionné en arrivant sur Woody.com. Vous aurez la possibilité de
        choisir entre quatres réponses dont une seule sera "correcte". Il n'y a
        aucune réponse multiple possible.{' '}
      </p>

      <h3>Vous ne savez pas ce qu'est un Blind Test ? Cliquez-ici</h3>

      <p className='parag-hidden-minijeux'>
        Un Blind Test est un jeu de musique où vous devez deviner l'interprète
        ou le titre d'un morceau à partir d'un enregistrement musical.
        Egalement, il est possible de devoir tourner le jeu de sorte à ce que
        vous devez deviner " de quel film ou série tv, provient l'extrait
        musical/sonore " que vous entendrez durant les différents moments du
        jeu. Vous l'aurez compris, sur notre site, vous devrez deviner la
        provenance du "son entendu" parmi un choix de films ou séries proprosés
        en réponses.
      </p> */}

        <h3>
          Avant de lancer la partie, nous vous invitons à renseigner un
          pseudonyme de jeu :
        </h3>
        <p className='parag-minijeux'>
          Cela nous permettra de relier votre identifiant au score final obtenu
          et également de vous placer dans le classement des joueurs.
        </p>

        <label className='label-miniJeux'>Veuillez indiquer un pseudo :</label>
        <input className='inputPseudo' onChange={handleChange} />
        {/* <button onClick={handleClick} required>
        Validation du pseudo
      </button> */}
        <div className='bloc-asavoir-minijeux'>
          <h3>
            NOTE IMPORTANTE : Changement de thème possible en fin de partie
          </h3>
          <p className='parag-minijeux'>
            A la fin du test, sur la partie inférieure du tableau de résultat,
            vous aurez la possibilité de changer de thème en sélectionnant un
            emoji différent de celui que vous avez choisi initiallement. En
            selectionnant un émoji différent, vous serez donc confronté à des
            questions en rapport avec le thème de l'émoji. choisi.
          </p>
        </div>
        <h3>
          A partir de maintenant, vous n'avez plus qu'a choisir parmi les jeux
          proposés et essayez d'obtenir le meilleur score !
        </h3>
        <p className='choix-jeux'>Veuillez choisir un jeu :</p>
        <div className='partie-buttons'>
          <NavLink
            to='/MiniJeux/Quizz'
            onClick={handleChoice}
            className='Quizz-btn'
          >
            Quizz
          </NavLink>
           <NavLink to='/MiniJeux/BlindTest' className='' onClick={handleChoice}
              value='Blind Test'
              className='BlindTest-btn'>
            
              Blind Test
            
          </NavLink>
        </div>

        <p>
          Nous vous souhaitons bonne chance ainsi qu'une pleine réussite au
          mini-jeu !!
        </p>
        <p className='signature'>@ Les fondateurs Woody</p>
      </div>
      <Footer />
    </div>
  )
}

export default MiniJeux
