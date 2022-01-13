import { useState } from 'react'
import './Quizz.css'
import triste from '../quizzdata/triste.json'
export default function Quizz() {
  // const questionsTriste = [
  //   {
  //     questionText: `Comment s'appelle le paquebot dans "Titanic" ?`,
  //     answerOptions: [
  //       { answerText: `Santa Maria`, isCorrect: false },
  //       { answerText: `Titanic`, isCorrect: true },
  //       { answerText: `Mayflower`, isCorrect: false },
  //       { answerText: `Charles de Gaulle`, isCorrect: false }
  //     ]
  //   },
  //   {
  //     questionText: `Dans "Million Dollar Baby", qu'arrive t'il à la boxeuse à la fin du film ?`,
  //     answerOptions: [
  //       { answerText: `Elle devient championne du monde`, isCorrect: false },
  //       { answerText: `Elle devient entraineuse de boxe`, isCorrect: false },
  //       { answerText: `Elle chûte et devient tétrapligue`, isCorrect: true },
  //       { answerText: `Elle se casse les mains`, isCorrect: false }
  //     ]
  //   },
  //   {
  //     questionText: `De quoi parle le film "Hatchi" ?`,
  //     answerOptions: [
  //       { answerText: `Un chien qui attend son maitre`, isCorrect: true },
  //       { answerText: `Un enfant recherchant son père`, isCorrect: false },
  //       { answerText: `Un poisson qui recherche sa famille`, isCorrect: false },
  //       { answerText: `Un étudiant qui cherche l'amour`, isCorrect: false }
  //     ]
  //   },
  //   {
  //     questionText: `Dans "The NoteBook / N'oublie Jamais", de quelle maladie est atteinte Allie ? `,
  //     answerOptions: [
  //       { answerText: `Gilles de la Tourette`, isCorrect: false },
  //       { answerText: `Parkinson`, isCorrect: false },
  //       { answerText: `Cancer`, isCorrect: false },
  //       { answerText: `Alzheimer`, isCorrect: true }
  //     ]
  //   },
  //   {
  //     questionText: `Dans "PS. I LOVE YOU", qu'a fait le défunt mari avant de mourir ?`,
  //     answerOptions: [
  //       {
  //         answerText: `Il a mis en place un jeu de gages à executer afin que sa femme retrouve la joie de vivre malgré sa perte`,
  //         isCorrect: false
  //       },
  //       {
  //         answerText: `Il a légué son richissime héritage quelques heures avant sa mort`,
  //         isCorrect: false
  //       },
  //       {
  //         answerText: `Il a passé une soirée avec son ex copine`,
  //         isCorrect: false
  //       },
  //       {
  //         answerText: `Il a participé à un match de rugby avant de se casser les deux coudes contre un arbre`,
  //         isCorrect: true
  //       }
  //     ]
  //   },
  //   {
  //     questionText: `Dans "Le Pianiste", où se cache le pianiste au début du film ?`,
  //     answerOptions: [
  //       { answerText: `Dans le grenier`, isCorrect: true },
  //       { answerText: `Dans la cave`, isCorrect: false },
  //       { answerText: `Dans le garage`, isCorrect: false },
  //       { answerText: `Sous l'escalier de l'hotel`, isCorrect: false }
  //     ]
  //   },
  //   {
  //     questionText: `Dans "Les petits mouchoirs", que fait le personnage de Jean Dujardin ?`,
  //     answerOptions: [
  //       {
  //         answerText: `Il recherche sa femme en Corse et part travailler en Italie`,
  //         isCorrect: false
  //       },
  //       {
  //         answerText: `Il danse en boîte, conduit un scooter, meurt à l'hopital`,
  //         isCorrect: true
  //       },
  //       {
  //         answerText: `Il réussit un concours de police et devient lieutenant en brigade`,
  //         isCorrect: false
  //       },
  //       {
  //         answerText: `Il vend du crack et devient un riche dealer parisien`,
  //         isCorrect: false
  //       }
  //     ]
  //   },
  //   {
  //     questionText: `Quel nom porte la batte de baseball de Negan dans The Walking Dead ? `,
  //     answerOptions: [
  //       {
  //         answerText: `Molly`,
  //         isCorrect: false
  //       },
  //       { answerText: `Rebecca`, isCorrect: false },
  //       { answerText: `Lucille`, isCorrect: true },
  //       { answerText: `Cindy`, isCorrect: false }
  //     ]
  //   },
  //   {
  //     questionText: `Dans le dernier épisode de Desperate Housewives, que se passe t-il ?`,
  //     answerOptions: [
  //       {
  //         answerText: `Gabrielle Solis se fait écraser par un camion et meurt sur le coup`,
  //         isCorrect: false
  //       },
  //       { answerText: `Victor Newman tue Carlos Solis`, isCorrect: false },
  //       { answerText: `Mike se fait tirer dessus et meurt`, isCorrect: true },
  //       { answerText: `Le jardinier tue Gabrielle Solis`, isCorrect: false }
  //     ]
  //   },
  //   {
  //     questionText: 'Dans la ligne Verte, pourquoi John Coffey est en prison ?',
  //     answerOptions: [
  //       { answerText: `Homicide sur 2 policiers`, isCorrect: false },
  //       { answerText: `Viol et homicide sur 2 fillettes`, isCorrect: true },
  //       {
  //         answerText: `Il aurait volé un ballon à Decathlon`,
  //         isCorrect: false
  //       },
  //       {
  //         answerText: `Conduite d'une voiture en état d'ivresse `,
  //         isCorrect: false
  //       }
  //     ]
  //   }
  // ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const handleAnswer = isCorrect => {
    if (isCorrect) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questionsTriste.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  return (
    <div className='quizz-container'>
      {console.log(triste.questionText)}
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
              Question {currentQuestion + 1}/{questionsTriste.length}
            </h2>
          </div>
          {/* FIN DIV SUIVI NUMERO QUIZZ */}

          <div className='ConteneurQuestionReponse'>
            <div className='questions-container'>
              {/* DEBUT DIV QUESTION*/}
              <h1 className='questions'>
                {questionsTriste[currentQuestion].questionText}
              </h1>
            </div>
            {/* FIN DIV QUESTION*/}

            <div className='button-grid'>
              {/* DIV CONTENANT LES OPTIONS REPONSES*/}
              {questionsTriste[currentQuestion].answerOptions.map(
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
