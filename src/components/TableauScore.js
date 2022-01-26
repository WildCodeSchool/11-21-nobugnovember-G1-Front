import './TableauScore.css'
import { useEffect, useState } from 'react'
import Emojis from './Emojis'
import EmojiChanger from './EmojiChanger'
const TableauScore = props => {
  const [message, setMessage] = useState('Message à la con')
  useEffect(() => {
    if (props.score === 10) {
      setMessage(`Wow ${props.playerName} ! 
      Tu as réussi à avoir ${props.score} réponses justes !
      Incroyable !
      
      Tu penses tout connaitre en matière de Films & Séries ? 
      Nous avons une surprise pour toi.

      Selectionne un autre émoji présent dans la barre des émojis et essais d'obtenir un score maximal dans un autre quizz.
      " Bon chance.. " `)
    } else if (props.score < 10 && props.score > 6) {
      setMessage(`Bravo ${props.playerName} , tu as obtenus ${props.score} réponses correctes à ce questionnaire!
      Ta prestation est un peu du genre "Je participe mais je ne veux pas être le premier. Être un lâche me convient amplement."

      Retente ta chance et essais d'obtenir 10 réponses justes !`)
    } else if (props.score > 3 && props.score < 6) {
      setMessage(`${props.playerName}, tu ne te sentais pas bien aujourd'hui ?
      Tu as seulement ${props.score} réponses justes à ce questionnaire!

      J'ai un peu honte de toi pour tout te dire.

      J'espère que tu n'as rien de prévu cette semaine?
      Tu pourrais en profiter pour replonger dans les Films & Séries 😀. `)
    } else {
      setMessage(`${props.playerName}, tu me donnes envie de casser l'écran ?
      Tu as fait un score à s'en jeter du pont.

      Ton score est seulement de ${props.score} réponses correctes à ce questionnaire!
    
      PETITE ASTUCE AMICALE :
      Tu as réellement besoin d'allumer ton écran pour pouvoir regarder des Films et Séries afin de savoir de quoi l'histoire parle réellement.
      Faire semblant et raconter les récits de tes amis ne fait pas de toi un cinéphile. Maintenant, tu es au courant. `)
    }
  }, [])

  return (
    <div className='tableau-score'>
      <div className='titre-tableau-resultat'>
        <h2>RESULTAT QUIZZ</h2>
      </div>
      <div className='tableau-titre-resultat'>
        {/* DIV CONTENANT LE TABLEAU DE SCORE FINAL */}
        <h2>
          <p>Bravo {props.playerName} !</p>
          <p className='phrase-pre-score'>Ton score est de </p>

          <p className='score-final'>{props.score}/10 !</p>
        </h2>
      </div>

      <div className='tableau-resultat'>
        <p className='phrase-pre-resultat'>DETAILS DES RESULTATS </p>
        <ul className='ul-resultat'style={{ display: 'flex', justifyContent: 'space-around' }}>
          <li className='resultat-positif'>{props.score} réponses correctes</li>
          <li className='resultat-negatif'>
            {10 - props.score} réponses fausses
          </li>
        </ul>
      </div>
      <div className='tableau-commentaire'>
        <p className='phrase-pre-resultat'>LA NOTE DU MAÎTRE DU JEU</p>
        <p className='display-linebreak'>{message}</p>{' '}
        {/* Ajout de la className=display-linebreak pour sauter une ligne */}
      </div>

    </div>
  )
}

export default TableauScore
