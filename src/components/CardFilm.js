import Header from '../components/Header' 
import affiche from '../assets/affichetest.jpg'

import '../components/CardFilm.css'

const CardFilm = () => {
    return (
        <div>
            <div className='catalogPage'>
                <div className='catalogContainer'>
                    <Header />
                    <div className='infoContainer'>
                        <img src={affiche} className='jaquette' alt='jaquette'></img>
                        <div className='holderInfo'>
                            <h3 className='titre'>Joker</h3>
                            <p className='year'>2020</p>
                            <div className='info'>
                                <p className='duration'>2 h 06 mins</p>
                                <div className='pegi'><p>U</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
    )
}

export default CardFilm