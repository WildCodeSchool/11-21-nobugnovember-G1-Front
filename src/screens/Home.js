import Logo from '../components/Logo'
import './Home.css'
import Emojis from '../components/Emojis'

const Home = () => {
  return (
    <div className='home'>
      <Logo />

      <h1>Quel est votre mood ? </h1>
      <Emojis />
      <br />
    </div>
  )
}

export default Home
