import Logo from '../components/Logo'
import './Home.css'
import '../components/Footer.css'
import Emojis from '../components/Emojis'
import Footer from '../components/Footer'

import NavbarMobile from '../components/NavbarMobile'

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
      <NavbarMobile
        emojiSelected={props.emojiSelected}
        setEmojiSelected={props.setEmojiSelected}
        aubergine={props.aubergine}
        setAubergine={props.setAubergine}
      />
      <Footer />
    </div>
  )
}

export default Home
