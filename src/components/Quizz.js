import { useState } from 'react'
import './Quizz.css'
export default function Quizz() {
  const questionsCoquineries = [
    {
      questionText: "Katsuni c'est :",
      answerOptions: [
        { answerText: `Une marque de litière `, isCorrect: false },
        { answerText: `Un personnage d\`animé`, isCorrect: false },
        { answerText: `Un phénomene naturel`, isCorrect: false },
        { answerText: `Une actrice X`, isCorrect: true }
      ]
    },
    {
      questionText: `De quel film vient le personnage de Morphanus ?`,
      answerOptions: [
        { answerText: `Les bronzés font du ski`, isCorrect: false },
        { answerText: `Les visiteuses`, isCorrect: false },
        { answerText: `Matrique`, isCorrect: true },
        { answerText: `Austin Popers`, isCorrect: false }
      ]
    },
    {
      questionText: `Dans American Pie 2, à quoi correspond Billy Bob ?`,
      answerOptions: [
        { answerText: `Une poupée gonflable`, isCorrect: false },
        { answerText: `Un vibromasseur`, isCorrect: true },
        { answerText: `Un nom de film`, isCorrect: false },
        { answerText: `Le surnom d\`un personnage`, isCorrect: false }
      ]
    },
    {
      questionText: `Quel nom de film n'est pas un film digne de la catégorie "Aubergine" ?"`,
      answerOptions: [
        { answerText: `Cyrano de Vergerac`, isCorrect: false },
        { answerText: `Le Père Noël en a une dure`, isCorrect: false },
        { answerText: `Le Parfum`, isCorrect: true },
        { answerText: `Rodéo sur Juliette`, isCorrect: false }
      ]
    },
    {
      questionText: `Lequels de ces films n'existe pas ?`,
      answerOptions: [
        { answerText: `French erection`, isCorrect: false },
        { answerText: `Ça Glisse au Pays des Merveilles`, isCorrect: false },
        { answerText: `Partouzes en haute mer`, isCorrect: false },
        { answerText: `Jason Burne`, isCorrect: true }
      ]
    },
    {
      questionText: `Dans Austin Powers quel forme prend sa pilosité de torse ? `,
      answerOptions: [
        { answerText: `Un pénis`, isCorrect: true },
        { answerText: `Une bouche`, isCorrect: false },
        { answerText: `Un revolver`, isCorrect: false },
        { answerText: `La tour Montparnasse Infernale`, isCorrect: false }
      ]
    },
    {
      questionText: `Qui prononce "J'aime me beurrer la biscotte" dans OSS 117 ?`,
      answerOptions: [
        { answerText: `Princesse Al Tarouk`, isCorrect: true },
        { answerText: `Loktar`, isCorrect: false },
        { answerText: `Hubert Bonisseur de la Bath`, isCorrect: true },
        { answerText: 'Raymond Pelletier', isCorrect: false }
      ]
    },
    {
      questionText: 'Qui ne joue pas dans le film les Valseuses ?',
      answerOptions: [
        { answerText: `Gérard Jugnot`, isCorrect: false },
        { answerText: `Gérard Depardieu`, isCorrect: false },
        { answerText: `Thierry Lhermitte`, isCorrect: false },
        { answerText: `Pierre Richard`, isCorrect: true }
      ]
    },
    {
      questionText:
        "Quelle actrice joue la celebre scene d'interrogatoire dans basic instinct ? ",
      answerOptions: [
        { answerText: `Sharon Stone`, isCorrect: true },
        { answerText: `Megan Fox`, isCorrect: false },
        { answerText: `Adriana Karambeu`, isCorrect: false },
        { answerText: `Monica Bellucci`, isCorrect: false }
      ]
    },
    {
      questionText:
        'Avec quoi joue Doofy dans sa chambre dans le film Scary Movie ? ',
      answerOptions: [
        { answerText: `Un aspirateur`, isCorrect: true },
        { answerText: `Un hand-spinner`, isCorrect: false },
        { answerText: `Une Gameboy`, isCorrect: false },
        { answerText: `Une figurine`, isCorrect: false }
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
    if (nextQuestion < questionsCoquineries.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  return (
    <div className='quizz-page'>
      <div className='quizz-container'>
        {showScore ? (
          <div>
            <p>Bravo Milhan, ton score est de {score} réponses justes /10 ! </p>
          </div>
        ) : (
          <div>
            <h2 className='nombre-question'>
              Question {currentQuestion + 1}/{questionsCoquineries.length}
            </h2>

            <h1 className='questions'>
              {' '}
              {questionsCoquineries[currentQuestion].questionText}
            </h1>
            <div className='button-grid'>
              {questionsCoquineries[currentQuestion].answerOptions.map(
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
                                      Tu as besoin d'allumer ton écran pour pouvoir regarder des Films et Séries pour savoir de quoi ils parlent. 
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
