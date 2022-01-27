import { useState } from 'react'
import './Quizz.css'
import amour2 from '../quizzdata/amour.json'
import aubergine2 from '../quizzdata/aubergine.json'
import colere2 from '../quizzdata/colere.json'
import joyeux2 from '../quizzdata/joyeux.json'
import peur2 from '../quizzdata/peur.json'
import surprise2 from '../quizzdata/surprise.json'
import triste2 from '../quizzdata/triste.json'
import TableauScore from './TableauScore'
import Header from './Header'
import Footer from '../components/Footer'
import NavbarMobile from './NavbarMobile'

export default function Quizz(props) {
  const questionnaire = props.emojiSelected.quizzSelected

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const handleAnswer = isCorrect => {
    if (isCorrect) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questionnaire.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  return (
    <div className='PageQuizz'>
      <Header
        emojiSelected={props.emojiSelected}
        setEmojiSelected={props.setEmojiSelected}
        link={props.link}
        setLink={props.setLink}
      />
      <div className='quizz-container'>
        {/* Conteneur général du quizz */}
        {/* CONDITION Conteneur Texte Résultat APPARAIT A LA FIN */}
        {showScore ? (
          <TableauScore
            score={score}
            playerName={props.playerName}
            link={props.link}
            setLink={props.setLink}
          />
        ) : (
          <div>
            {/* DIV CONTENANT LE CONTENEUR SUIVI QUEST  */}
            <div className='title-suiviquestion-container'>
              {/* DIV CONTENANT LE SUIVI NUMERO QUIZZ */}
              <h4 className='title-suiviquestion'>
                Question {currentQuestion + 1}/{questionnaire.length}
              </h4>
            </div>
            {/* FIN DIV SUIVI NUMERO QUIZZ */}

            <div className='ConteneurQuestionReponse'>
              <div className='questions-container'>
                {/* DEBUT DIV QUESTION*/}
                <h2 className='questions'>
                  {questionnaire[currentQuestion].questionText}
                </h2>
              </div>
              {/* FIN DIV QUESTION*/}

              <div className='button-grid'>
                {/* DIV CONTENANT LES OPTIONS REPONSES*/}
                {questionnaire[currentQuestion].answerOptions.map(
                  (element, index) => (
                    <button
                      onClick={() => handleAnswer(element.isCorrect)}
                      className='quizz-button'
                    >
                      {element.answerText}
                    </button>
                  )
                )}
              </div>
              {/* FIN DIV DE L'OPTION REPONSES*/}
            </div>
          </div>
        )}
      </div>
      <NavbarMobile
        emojiSelected={props.emojiSelected}
        setEmojiSelected={props.setEmojiSelected}
        aubergine={props.aubergine}
        setAubergine={props.setAubergine}
        setLink={props.setLink}
        link={props.link}
      />
      <Footer />
    </div>
  )
}
