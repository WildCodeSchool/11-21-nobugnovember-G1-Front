import Logo from '../components/Logo'
import './Home.css'
import Emojis from '../components/Emojis'

const Home = () => {
  return (
    <div className='home'>
      <Logo />
<<<<<<< HEAD

      <h1>Quel est votre mood ? </h1>
      <Emojis  />
      <br />
      <iframe /* A SUPPRIMER, NE PAS OUBLIER LE CSS DANS HOME CSS " Coco" */
        className='Coco'
        width='560'
        height='315'
        src='https://www.youtube.com/embed/QR5hB59NaOw'
        title='YouTube video player'
        frameborder='0'
=======
      <div className='main'>
        <h1>Quel est votre mood ? </h1>
        <Emojis />
      </div>
>>>>>>> 3302a4cfd60445fd370ff8f5b4df0fbb085684ac
        
      </div>
  )
}

export default Home
