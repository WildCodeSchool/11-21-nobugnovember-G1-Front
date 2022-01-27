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
import { useEffect } from 'react'
import './EmojisNavBarMobile.css' // Fichier CSS DE POULET !! a ne pas supprimer
import { useNavigate } from 'react-router-dom'

const Poulet = props => {
  let navigate = useNavigate()
  let page = document.location.href.split('/')
  // let numPage1 = () => {
  //   setNumPage(1)
  // }
  const navbarsecret = document.querySelector('.navbarmobile-secret')
  const navbarmobile = document.querySelector('.navbarmobile')
  const circleBtn = document.querySelector('.circle-btn')
 

  useEffect(() => {
    console.log('PAGE DANS USEFFECT', page)
    console.log('props.emojiSelected.emotion : ', props.emojiSelected.emotion)
    if (page[3] === 'MiniJeux' || page[3] === 'Quizz') {
      props.setLink('/MiniJeux')
    } else {
      props.setLink('/Catalogue')
    }
  }, [props.emojiSelected])

  const handleChange = () => {
    const correspondanceTab = [
      {
        emotion: 'Emoji joyeux',
        correspondance: '35',
        correspondanceSerie: '35',
        emoji: joyeux,
        quizzSelected: joyeux2
      },
      {
        emotion: 'Emoji pleure',
        correspondance: '18',
        correspondanceSerie: '18',
        emoji: pleure,
        quizzSelected: triste2
      },
      {
        emotion: 'Emoji surprise',
        correspondance: '878',
        correspondanceSerie: '10765',
        emoji: surprise,
        quizzSelected: surprise2
      },
      {
        emotion: 'Emoji amoureux',
        correspondance: '10749',
        correspondanceSerie: '10766',
        emoji: amour,
        quizzSelected: amour2
      },
      {
        emotion: 'Emoji colere',
        correspondance: '10752',
        correspondanceSerie: '10768',
        emoji: colere,
        quizzSelected: colere2
      },
      {
        emotion: 'Emoji peur',
        correspondance: '27',
        correspondanceSerie: '9648',
        emoji: peur,
        quizzSelected: peur2
      },
      {
        emotion: 'Emoji auberg',
        correspondance: '',
        correspondanceSerie: '',
        emoji: aubergine,
        quizzSelected: aubergine2
      }
    ]
    const selection = correspondanceTab.filter(
      element => element.emotion === event.target.alt
    )

    props.setEmojiSelected(selection[0])
    navbarsecret.style.display = 'none' /* ETAT PAR DEFAUT*/
    navbarmobile.style.borderRadius = '10px 10px 0 0'
    circleBtn.style.bottom = '20px'
    circleBtn.style.height = '60px'
    circleBtn.style.width = '60px'
    circleBtn.style.filter = 'grayscale(0)'
  }
  const handleChangeAuberg = () => {
    props.setAubergine(!props.aubergine)
    const correspondanceTab = [
      {
        emotion: 'Emoji joyeux',
        correspondance: '35',
        correspondanceSerie: '35',
        emoji: joyeux,
        quizzSelected: joyeux2
      },
      {
        emotion: 'Emoji pleure',
        correspondance: '18',
        correspondanceSerie: '18',
        emoji: pleure,
        quizzSelected: triste2
      },
      {
        emotion: 'Emoji surprise',
        correspondance: '878',
        correspondanceSerie: '10765',
        emoji: surprise,
        quizzSelected: surprise2
      },
      {
        emotion: 'Emoji amoureux',
        correspondance: '10749',
        correspondanceSerie: '10766',
        emoji: amour,
        quizzSelected: amour2
      },
      {
        emotion: 'Emoji colere',
        correspondance: '10752',
        correspondanceSerie: '10768',
        emoji: colere,
        quizzSelected: colere2
      },
      {
        emotion: 'Emoji peur',
        correspondance: '27',
        correspondanceSerie: '9648',
        emoji: peur,
        quizzSelected: peur2
      },
      {
        emotion: 'Emoji auberg',
        correspondance: '',
        correspondanceSerie: '',
        emoji: aubergine,
        quizzSelected: aubergine2
      }
    ]
    const selection = correspondanceTab.filter(
      element => element.emotion === event.target.alt
    )
    props.setEmojiSelected(selection[0])
    navbarsecret.style.display = 'none' /* ETAT PAR DEFAUT*/
    navbarmobile.style.borderRadius = '10px 10px 0 0'
    circleBtn.style.bottom = '20px'
    circleBtn.style.height = '60px'
    circleBtn.style.width = '60px'
    circleBtn.style.filter = 'grayscale(0)'

  }
  return (
    <div className='holderEmojibarre-NavBar'>
      <div className='emojibarre-NavBar'>
        <div className='container-NavBar'>
          <NavLink to={props.link} className='NavLink-NavBar'>
            <img
              onClick={handleChange}
              className='emojiimg-NavBar'
              src={joyeux}
              alt='Emoji joyeux'
            ></img>
          </NavLink>
        </div>
        <div className='container-NavBar'>
          <NavLink to={props.link} className='NavLink-NavBar'>
            <img
              onClick={handleChange}
              className='emojiimg-NavBar'
              src={pleure}
              alt='Emoji pleure'
            ></img>
          </NavLink>
        </div>
        <div className='container-NavBar'>
          <NavLink to={props.link} className='NavLink-NavBar'>
            <img
              onClick={handleChange}
              className='emojiimg-NavBar'
              src={surprise}
              alt='Emoji surprise'
            ></img>
          </NavLink>
        </div>
        <div className='container-NavBar'>
          <NavLink to={props.link} className='NavLink-NavBar'>
            <img
              onClick={handleChange}
              className='emojiimg-NavBar'
              src={amour}
              alt='Emoji amoureux'
            ></img>
          </NavLink>
        </div>
        <div className='container-NavBar'>
          <NavLink to={props.link} className='NavLink-NavBar'>
            <img
              onClick={handleChange}
              className='emojiimg-NavBar'
              src={colere}
              alt='Emoji colere'
            ></img>
          </NavLink>
        </div>
        <div className='container-NavBar'>
          <NavLink to={props.link} className='NavLink-NavBar'>
            <img
              onClick={handleChange}
              className='emojiimg-NavBar'
              src={peur}
              alt='Emoji peur'
            ></img>
          </NavLink>
        </div>
        <div className='container-NavBar'>
          <NavLink to={props.link} className='NavLink-NavBar'>
            <img
              onClick={handleChangeAuberg}
              className='emojiimg-NavBar'
              src={aubergine}
              alt='Emoji auberg'
            ></img>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Poulet
