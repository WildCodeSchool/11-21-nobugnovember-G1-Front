import Header from '../components/Header'
import loadingSvg from '../assets/loadingImg.svg'
import Quizz from '../components/Quizz'
import Footer from '../components/Footer'


const MiniJeux = props => {
  return (
    <div className='catalogPage'>
      <Header
        emojiSelected={props.emojiSelected}
        setEmojiSelected={props.setEmojiSelected}
      />
      <Quizz
        emojiSelected={props.emojiSelected}
        setEmojiSelected={props.setEmojiSelected}
      />
      <Footer />
    </div>
  )
}

export default MiniJeux
