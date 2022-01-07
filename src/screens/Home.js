import Logo from '../components/Logo'
import './Home.css'
import '../components/Footer.css'
import Emojis from '../components/Emojis'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Logo />
      <h1>Quel est votre mood ? </h1>
      <Emojis />
      <Footer />
    </div>
  )
}

export default Home
