import Logo from '../components/Logo'
import './Home.css'
import Emojis from '../components/Emojis'

const Home = () => {
  return (
    <div className='home'>
      <Logo />
      <div className='main'>
        <h1>Quel est votre mood ? </h1>
        <Emojis />
      </div>
        
      </div>
  )
}

export default Home
