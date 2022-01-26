import Logo from '../components/Logo'
import './Home.css'
import '../components/Footer.css'
import Emojis from '../components/Emojis'
import Footer from '../components/Footer'

const Home = props => {
  return (
    <div className='home'>
      <Logo />
      <div className='homeChild'>
        <h1>Quel est votre mood ? </h1>
        <Emojis
          emojiSelected={props.emojiSelected}
          setEmojiSelected={props.setEmojiSelected}
          aubergine={props.aubergine}
          setAubergine={props.setAubergine}
        />
      </div>
      <Footer />
    </div>
  )
}

export default Home
