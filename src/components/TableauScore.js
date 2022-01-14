import './TableauScore.css'
import { useEffect, useState } from 'react'
const TableauScore = props => {
  const [message, setMessage] = useState('Message à la con')
  useEffect(() => {
    if (props.score === 10) {
      setMessage(`Wow {playerName} ! 
      Tu as réussi à avoir ${props.score} réponses justes !
      Incroyable !
      
      Tu penses tout connaitre en matière de Films & Séries ? 
      Nous avons une surprise pour toi.
      Selectionne un autre émoji parmi la liste suivante et essaye d'obtenir un score maximal dans un autre quizz.
      
      Bon chance..`)
    } else if (props.score < 10 && props.score > 6) {
      setMessage(`Bravo {playerName} , tu as obtenus ${props.score} réponses correctes à ce questionnaire!
      Ta prestation est un peu du genre "Je participe mais je ne veux pas être le premier. Être un lâche me convient amplement."

      Retente ta chance et essais d'obtenir 10 réponses justes !`)
    } else if (props.score > 3 && props.score < 6) {
      setMessage(`{playerName}, tu ne te sentais pas bien aujourd'hui ?
      Tu as seulement ${props.score} réponses justes à ce questionnaire!
      J'ai un peu honte de toi pour tout te dire.

      J'espère que tu n'as rien de prévu cette semaine?
      Tu pourrais en profiter pour replonger dans les Films & Séries :). `)
    } else {
      setMessage(`{playerName}, tu me donnes envie de casser l'écran ?
      Tu as fait un score à s'en jeter du pont.
      Ton score est seulement de ${props.score} réponses correctes à ce questionnaire!
      Petite astuce amicale : Tu as besoin d'allumer ton écran pour pouvoir regarder des Films et Séries afin savoir de quoi ça parle.
      Ecoutez les récits de tes amis ne fait pas de toi un cinéphile. Maintenant, tu es au courant. `)
    }
  }, [])

  return (
    <div className='tableau-score'>
      <div className='titre-tableau-resultat'>
        <h2>
          RESULTAT QUIZZ <span style={{ fontSize: '7vw' }}> [ EMOTION ]</span>{' '}
        </h2>
      </div>
      <div className='tableau-titre-resultat'>
        {/* DIV CONTENANT LE TABLEAU DE SCORE FINAL */}
        <h2>
          <p>Bravo [userName] !</p>
          <p className='phrase-pre-score'>Ton score est de </p>

          <p className='score-final'>{props.score}/10 !</p>
        </h2>
      </div>

      <div className='tableau-resultat'>
        <p className='phrase-pre-resultat'>DETAILS DES RESULTATS </p>
        <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
          <li className='resultat-positif'>{props.score} réponses correctes</li>
          <li className='resultat-negatif'>
            {10 - props.score} réponses fausses
          </li>
        </ul>
      </div>
      <div className='tableau-commentaire'>
        <p className='phrase-pre-resultat'>LA NOTE DU MAITRE DU JEU</p>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default TableauScore
