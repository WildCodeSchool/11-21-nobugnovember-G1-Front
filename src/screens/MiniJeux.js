import Header from '../components/Header'
import loadingSvg from '../assets/loadingImg.svg'
import Quizz from '../components/Quizz'
const MiniJeux = props => {
  return (
    <div className='catalogPage'>
      <Header
        emojiSelected={props.emojiSelected}
        setEmojiSelected={props.setEmojiSelected}
      />
      <Quizz />
    </div>
  )
}

export default MiniJeux
