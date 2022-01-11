import Header from '../components/Header' 
import affiche from '../assets/affichetest.jpg'
import popcorn from '../assets/popcorn.png'

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
                            <div className='info'><p className='duration'>2 h 06 mins</p>
                                <div className='holderPegi'><p id='pegi'>Tout public</p></div>
                                <img src={popcorn} className='popcorn' alt='porpcorn'></img> <p>88%</p>
                            </div>
                            <div className='synopsis'>
                                <p>Arthur Fleck, comédien raté, rencontre des voyous violents en errant dans les rues de Gotham City déguisé en clown. Méprisé par la société, Fleck s'enfonce peu à peu dans la démence et devient le génie criminel connu sous le nom de Joker, un dangereux tueur psychotique.
                                </p>  
                            </div> 
                            <p className='infoProd'> <span className='textGrey'>Producteur :</span> Todd Phillips </p>
                            <p className='infoProd'> <span className='textGrey'>Scénario :</span> Todd Phillips, Scott Silver, Bob Kane </p>
                            <p className='infoProd'> <span className='textGrey'>Studio :</span> Warner Bros., Village Ro…llage Roadshow Pictures </p>
                            <p className='infoProd'> <span className='textGrey'>Genres :</span> Crime, Drame, Thriller</p>
                                
                        </div>
                        <iframe className='trailer' width="560" height="315" src="https://www.youtube.com/embed/OoTx1cYC5u8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true">
                        </iframe>                 
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default CardFilm