import Logo from '../components/Logo'
import './Home.css'
import Emojis from '../components/Emojis'

const Home = () => {
  return (
    <div className='home'>
      <Logo />


      <h1>Quel est votre mood ? </h1>
      <Emojis  />
      <br />
      <iframe /* A SUPPRIMER, NE PAS OUBLIER LE CSS DANS HOME CSS " Coco" */
        className='Coco'
        width='560'
        height='315'
        src='https://www.youtube.com/embed/QR5hB59NaOw'
        title='YouTube video player'
        frameborder='0'></iframe>



        
      </div>
  )
}

export default Home
