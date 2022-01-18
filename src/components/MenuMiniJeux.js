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
        Cette partie a été créée afin de vérifier tes connaissances
        cinématographiques ainsi que ta mémoire auditive ! Pour faire simple, tu auras la possibilité de participer à des mini-jeux en rapport avec ta sélection HUMEUR DU JOUR.
        <ul >
          <li className="li-minijeux">
            Le premier, un quizz contenant des questions sur des films & séries.
          </li>
          <li className="li-minijeux">
            Le second, un blind contenant des musiques et des extraits de films
            & séries.
          </li>
        </ul>
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
