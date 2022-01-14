import Header from '../components/Header'
import loadingSvg from '../assets/loadingImg.svg'

const MiniJeux = (props) => {
  return (
    <div className='catalogPage'>
      <Header emojiSelected={props.emojiSelected} setEmojiSelected={props.setEmojiSelected} />
      {/* <img src={loadingSvg} /> */}
    </div>
  )
}

export default MiniJeux
