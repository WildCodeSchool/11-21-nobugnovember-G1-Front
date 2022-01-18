// import './MenuMiniJeuxStyle.css'
import { useState } from 'react'

const MenuMiniJeux = props => {
  const [choixMiniJeux, setChoixMinijeux] = useState()

  const handleChoice = () => {
    setChoixMinijeux(event.target.value)
  }

  const handleClick = () => {
    const saisie = document.querySelector('.inputPseudo')
    props.setPlayerName(saisie.value)
    console.log(saisie.value)
  }
  const handleChange = () => {
    props.setPlayerName = EventTarget.value
  }

  return (
    <div className='page-menu-minijeux'>
      <h2>Bienvenue dans la section Mini-Jeux</h2>
      <p>
        Derrière ce jeu, 
        Cette partie a été créée afin de vérifier tes connaissances
        cinématographiques ainsi que ta mémoire auditive ! Pour faire simple,
        ces mini-jeux que nous{' '}
      </p>

      <h2>Le Remote-Quizz</h2>
      <p>
        Ce premier jeu, comme son nom l'indique, est un quizz contenant des
        questions traitant de films & séries provenant d'une base de données de
        produits liés à l'humeur que tu as préalablement séléctionné.
      </p>

      <h2>Le Blind-test </h2>
      <p>
        {' '}
        Le second, un blind contenant des musiques et des extraits de films &
        séries.
      </p>
      <label>Veuillez saisir un pseudo</label>
      <input className='inputPseudo' onChange={handleChange} />
      <button onClick={handleClick}>Validation du pseudo</button>
      <p>Veuillez choisir votre mini jeux</p>
      <button onClick={handleChoice}>Quizz</button>
      <button onClick={handleChoice}>Blind Test</button>
    </div>
  )
}
export default MenuMiniJeux
