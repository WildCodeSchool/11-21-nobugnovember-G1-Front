import affiche from '../assets/affichetest.jpg'
import './Cards.css'
const Cards = () => {
  return (
    <div className='cards'>
      <img src={affiche} className='poster' alt='poster'></img>
      <div className='caption'>
        <h3>
          Joker (<span>2018</span>)
        </h3>
      </div>
      {/* <span>2018</span> */}
    </div>
  )
}
export default Cards
