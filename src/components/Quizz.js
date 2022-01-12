import { useState } from 'react'
import './Quizz.css'
export default function Quizz() {
  const questionsJoyeux = [
    {
      questionText:
        'Quelle citation est attitrée au personnage principal de The Mask ?',
      answerOptions: [
        { answerText: 'ENOOOOOOOOOORME !', isCorrect: false },
        { answerText: 'PAS MAAAAAAAAAL !', isCorrect: false },
        { answerText: 'SPLEEEEEEENDIDE !', isCorrect: true },
        { answerText: 'OH MY GOD! BECKY LOOK AT HER BUTT !', isCorrect: false }
      ]
    },
    {
      questionText:
        'Dans quel film entend-on "Tu es un laidron mais tu es bien bonne !" ?',
      answerOptions: [
        { answerText: 'Very Bad Trip', isCorrect: false },
        { answerText: 'Les visiteurs', isCorrect: true },
        { answerText: 'Brice de Nice', isCorrect: false },
        { answerText: 'Austin Powers', isCorrect: false }
      ]
    },
    {
      questionText: 'Quel personnage célèbre est joué par Rowan Atkinson ?',
      answerOptions: [
        { answerText: 'Dr Strange', isCorrect: false },
        { answerText: 'Mr Bean', isCorrect: true },
        { answerText: 'The Arrow', isCorrect: false },
        { answerText: 'The Witcher', isCorrect: false }
      ]
    },
    {
      questionText: `De quel film provient l'expression : " Pas de bras, pas de chocolat !"`,
      answerOptions: [
        { answerText: 'Les Bronzés font du ski', isCorrect: false },
        { answerText: 'Oss 117', isCorrect: false },
        { answerText: 'Babysitter', isCorrect: false },
        { answerText: 'Intouchables', isCorrect: true }
      ]
    },
    {
      questionText: 'Quel sport collectif est pratiqué dans le film "Rrrrrrr!"',
      answerOptions: [
        { answerText: 'Froggy-Pong', isCorrect: false },
        { answerText: 'Yorkmouth', isCorrect: false },
        { answerText: 'Fourche-Ball', isCorrect: false },
        { answerText: 'Biche-Volley', isCorrect: true }
      ]
    },
    {
      questionText: 'Dans quel film aperçoit-on "Double Gras" ? ',
      answerOptions: [
        { answerText: 'Austin Powers', isCorrect: true },
        { answerText: 'Oss 117', isCorrect: false },
        { answerText: 'Fatal Bazooka', isCorrect: false },
        { answerText: 'La tour Montparnasse Infernale', isCorrect: false }
      ]
    },
    {
      questionText: 'Dans quel film aperçoit-on "Double Gras" ? ',
      answerOptions: [
        { answerText: 'Austin Powers', isCorrect: true },
        { answerText: 'Oss 117', isCorrect: false },
        { answerText: 'Fatal Bazooka', isCorrect: false },
        { answerText: 'La tour Montparnasse Infernale', isCorrect: false }
      ]
    }
  ]
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const handleAnswer = isCorrect => {
    if (isCorrect) {
      setScore(score + 1)
    }
    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questionsJoyeux.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  return (
    <div className='app'>
      {showScore ? (
        <div>
          <p>Your score is {score}</p>
        </div>
      ) : (
        <div>
          <h1>
            Question {currentQuestion + 1}/{questionsJoyeux.length}
          </h1>

          <h2> {questionsJoyeux[currentQuestion].questionText}</h2>
          <div className='button-grid'>
            {questionsJoyeux[currentQuestion].answerOptions.map(
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
        </div>
      )}
    </div>
  )
}
