import { NavLink } from 'react-router-dom'
import amour from '../assets/amour.png'
import colere from '../assets/colere.png'
import aubergine from '../assets/aubergine.png'
import joyeux from '../assets/joyeux.png'
import peur from '../assets/peur.png'
import pleure from '../assets/pleure.png'
import surprise from '../assets/surprise.png'
import './EmojiChanger.css'
import amour2 from '../quizzdata/amour.json'
import aubergine2 from '../quizzdata/aubergine.json'
import colere2 from '../quizzdata/colere.json'
import joyeux2 from '../quizzdata/joyeux.json'
import peur2 from '../quizzdata/peur.json'
import surprise2 from '../quizzdata/surprise.json'
import triste2 from '../quizzdata/triste.json'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const EmojiChanger = props => {
  let navigate = useNavigate()
  let page = document.location.href.split('/')
  // let numPage1 = () => {
  //   setNumPage(1)
  // }

  useEffect(() => {
    console.log('PAGE DANS USEFFECT', page)
    console.log('props.emojiSelected.emotion : ', props.emojiSelected.emotion)
    if (page[3] === 'MiniJeux' || page[3] === 'Quizz') {
      props.setLink('/MiniJeux')
    } else {
      props.setLink('/Catalogue')
    }
  }, [props.emojiSelected])

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
  }

  const handleChange = () => {
    props.setLink('/MiniJeux')
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
  }

  return (
    <div className='search-box'>
      <div className='search-txt'>
        <NavLink to={props.link} className='lienSelection'>
          <img
            className='emojis'
            src={joyeux}
            alt='Emoji joyeux'
            onClick={handleChange}
          />
        </NavLink>
        <NavLink to={props.link} className='lienSelection'>
          <img
            className='emojis'
            src={pleure}
            alt='Emoji pleure'
            onClick={handleChange}
          />
        </NavLink>
        <NavLink to={props.link} className='lienSelection'>
          <img
            className='emojis'
            src={surprise}
            alt='Emoji surprise'
            onClick={handleChange}
          />
        </NavLink>
        <NavLink to={props.link} className='lienSelection'>
          <img
            className='emojis'
            src={amour}
            alt='Emoji amoureux'
            onClick={handleChange}
          />
        </NavLink>
        <NavLink to={props.link} className='lienSelection'>
          <img
            className='emojis'
            src={colere}
            alt='Emoji colere'
            onClick={handleChange}
          />
        </NavLink>
        <NavLink to={props.link} className='lienSelection'>
          <img
            className='emojis'
            src={peur}
            alt='Emoji peur'
            onClick={handleChange}
          />
        </NavLink>
        <NavLink to='/Films' className='lienSelection'>
          <img
            className='emojis'
            src={aubergine}
            alt='Emoji auberg'
            onClick={handleChangeAuberg}
          />
        </NavLink>
      </div>
      <div className='boiteSelection'>
        <NavLink to={props.link} className='lienSelection'>
          <img
            className='emojiactif'
            src={props.emojiSelected.emoji}
            alt={props.emojiSelected.emotion}
          />
        </NavLink>
      </div>
    </div>
  )
}

export default EmojiChanger
