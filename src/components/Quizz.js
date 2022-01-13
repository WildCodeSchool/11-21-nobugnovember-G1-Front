import { useState } from 'react'
import './Quizz.css'
import amour from '../quizzdata/amour.json'
import aubergine from '../quizzdata/aubergine.json'
import colere from '../quizzdata/colere.json'
import joyeux from '../quizzdata/joyeux.json'
import peur from '../quizzdata/peur.json'
import surprise from '../quizzdata/surprise.json'
import triste from '../quizzdata/triste.json'

export default function Quizz(props) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const handleAnswer = isCorrect => {
    if (isCorrect) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < props.emojiSelected.emoji.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  return (
    <div className='quizz-container'>
      {/* Conteneur général du quizz */}
      {/* CONDITION Conteneur Texte Résultat APPARAIT A LA FIN */}
      {showScore ? (
        <div>
          {/* DIV CONTENANT LE TABLEAU DE SCORE FINAL */}
          <p>Bravo Milhan, ton score est de {score} réponses justes /10 ! </p>
        </div>
      ) : (
        <div>
          {/* DIV CONTENANT LE CONTENEUR SUIVI QUEST  */}
          <div className='title-suiviquestion-container'>
            {/* DIV CONTENANT LE SUIVI NUMERO QUIZZ */}
            <h2 className='title-suiviquestion'>
              Question {currentQuestion + 1}/{props.emojiSelected.emoji.length}
            </h2>
          </div>
          {/* FIN DIV SUIVI NUMERO QUIZZ */}

          <div className='ConteneurQuestionReponse'>
            <div className='questions-container'>
              {/* DEBUT DIV QUESTION*/}
              <h1 className='questions'>
                {props.emojiSelected.emoji[currentQuestion].questionText}
              </h1>
            </div>
            {/* FIN DIV QUESTION*/}

            <div className='button-grid'>
              {/* DIV CONTENANT LES OPTIONS REPONSES*/}
              {props.emojiSelected.emoji[currentQuestion].answerOptions.map(
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
