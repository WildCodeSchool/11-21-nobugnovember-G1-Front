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
          <TableauScore score={score} playerName={props.playerName} link={props.link}
                        setLink={props.setLink}/>
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
      <Footer />
    </div>
  )
}

{
  /* Faire une DIV DE RESULTAT avec :

          Titre Différent selon score 
          ==> si score === 10  =        Wow !! Felicitations {playerName} , tu as atteinds le score maximal de 10 réponses correctes à ce questionnaire!
                                      Tente ta chance aux quizz des autres emojis pour voir si tu es un expert en Film & Série!
            ___________
          ==> si score entre >6 et <10  Bravo {playerName} , tu as obtenus {score} réponses correctes à ce questionnaire!
                                      Retente ta chance et essais d'obtenir 10 réponses justes !
___________         
          ==> si score >3 && <7       {playerName}, tu ne te sentais pas bien aujourd'hui ? Tu as seulement {score} réponses juste à ce questionnaire!
                                      J'espère que tu n'as rien prévu cette semaine? Tu pourrais en profiter pour replonger dans les Films & Séries :p
            ___________
          ==> si score <=3            {playerName}, tu me donnes envie de casser l'écran ? Tu as fait un score à s'en jeter du pont. Tu as un score de {score} à ce questionnaire!
                                      Tu as besoin d'allumer ton écran pour pouvoir regarder des Films et Séries afin savoir de quoi ils parlent. 
                                      Ecoutez les récits de tes amis ne fait pas de toi un cinéphile. Maintenant, tu es au courant.                           
                                      
                      ___________            ___________            ___________            ___________

          Résultats des réponses : 
            const resultatExport = clickchoice = (if true = V else if false = F)

            (tableau avec bordure)
          Question 1 : 
          {Questions[].Questiontext}
          Résultat suite à réponse = {resultExport} soit V soit F (ou icone :) )
          Quest 2 3 4 5 6 7 8 9 10 + Rep 2 3 4 5 6 7 8 9 10 idem

          Lien pour allez sur le quizz lié aux autres emojis QUIZZ
          */
}
