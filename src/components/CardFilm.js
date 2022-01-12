import Header from './Header' 
import affiche from '../assets/affichetest.jpg'
import popcorn from '../assets/popcorn.png'
import cast1 from '../assets/cast1.jpg'
import cast2 from '../assets/cast2.jpg'
import cast3 from '../assets/cast3.jpg'
import cast4 from '../assets/cast4.jpg'
import cast5 from '../assets/cast5.jpg'
import cast6 from '../assets/cast6.jpg'
import ReactStars from 'react-rating-stars-component'


import '../components/CardFilm.css'

const CardFilm = (props) => {
    return (
        <div>
            <div className='cardFilm'>
                <div className='cardFilmContainer'>
                    <Header emojiSelected={props.emojiSelected} setEmojiSelected={props.setEmojiSelected} />
                    <div className='infoContainer'>
                        <img src={affiche} className='jaquette' alt='jaquette'></img>
                        <div className='holderInfo'>
                            <h3 className='titre'>Joker</h3>
                            <p className='year'>2020</p>
                            <div className='info'>
                                <p className='duration'>2 h 06 mins</p>
                                <div className='holderPegi'><p id='pegi'>Tout public</p></div>
                                <img src={popcorn} className='popcorn' alt='porpcorn'></img> <p>88%</p> 
                                <ReactStars  classNames={'ratingStars'} count={5} size={25} activeColor={'#FFDC6C'} isHalf={true} edit={true} />
                            </div>
                            <div className='synopsis'>
                                <p>Arthur Fleck, comédien raté, rencontre des voyous violents en errant dans les rues de Gotham City déguisé en clown. Méprisé par la société, Fleck s'enfonce peu à peu dans la démence et devient le génie criminel connu sous le nom de Joker, un dangereux tueur psychotique.
                                </p>  
                                <button className='playButton'>Play</button>
                            </div> 
                            <p className='infoProd'> <span className='textGrey'>Producteur :</span> Todd Phillips </p>
                            <p className='infoProd'> <span className='textGrey'>Scénario :</span> Todd Phillips, Scott Silver, Bob Kane </p>
                            <p className='infoProd'> <span className='textGrey'>Studio :</span> Warner Bros., Village Ro…llage Roadshow Pictures </p>
                            <p className='infoProd'> <span className='textGrey'>Genres :</span> Crime, Drame, Thriller</p>
                                
                        </div>
                        {/* <iframe className='trailer' width="560" height="315" src="https://www.youtube.com/embed/OoTx1cYC5u8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true">
                        </iframe>             */}
                        <video className='trailer' poster='https://m.media-amazon.com/images/M/MV5BOTU0ZGVmY2MtMTM1OS00YmNlLWE1NGUtMGYyMjI1MjY1NWUzXkEyXkFqcGdeQWFybm8@._V1_QL75_UX500_CR0,1,500,281_.jpg' controls src="https://imdb-video.media-imdb.com/vi1723318041/1434659607842-pgv4ql-1567008550851.mp4?Expires=1642032222&Signature=DYUxmsqKaNPDsAJelPufbkQ9WECMpZ9CZcsg57cC1pQFFJZw7DvYuPiJlv0Hs6QEb-rtpbhweFVFO2sxT8-Ey9r07JhdqBHqEKW~r-L7a4-UpTOkl71vWT7-EhaoYcQ6MLBz6lk~IHbxgVFIvJEfcm03I8QRFvDyNxMLum3BFKdJWFNz4eNPyiYR2HU49mgkSLGu1lIt8LnhP~opmNk7EiTObqUBtSJ8QEq-gUSGTHqh-SmXh3wFbsFMepAXEF7bFv1C5Sptv1CTEUqb2YQlJ8zPtNOTqQ2ERsBMQUuBmJwB947FmNk8ORHrkjv8hhVYJa3-lF~5Up~WaNeWyrib4Q__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"></video>
                    </div>
                    <h4 className='casting'>Casting</h4> 
                    <div className='castingListe'>
                        <div className='infoCasting'>
                            <div className='divCarre'>
                                <img src={cast1} className='imgCast' alt='casting'></img>              
                            </div>
                            <p className='actorName'>Joaquin Phoenix</p>
                            <p className='roleName'>Arthur Fleckas Arthur Flec</p>
                        </div>
                        <div className='infoCasting'>
                            <div className='divCarre'>
                                <img src={cast2} className='imgCast' alt='casting'></img>
                            </div>
                            <p className='actorName'>Robert De Niro</p>
                            <p className='roleName'>Murray Franklinas Murray Franklin</p>
                        </div>
                        <div className='infoCasting'>
                            <div className='divCarre'>
                                <img src={cast3} className='imgCast' alt='casting'></img>
                            </div>
                            <p className='actorName'>Zazie Beetz</p>
                            <p className='roleName'>Arthur Fleckas Arthur Flec</p>
                        </div>
                        <div className='infoCasting'>
                            <div className='divCarre'>
                                <img src={cast4} className='imgCast' alt='casting'></img>
                            </div>
                            <p className='actorName'>Frances Conroy</p>
                            <p className='roleName'>Penny Fleckas Penny Fleck</p>
                        </div>
                        <div className='infoCasting'>
                            <div className='divCarre'>
                                <img src={cast5} className='imgCast' alt='casting'></img>
                            </div>
                            <p className='actorName'>Brett Cullen</p>
                            <p className='roleName'>Sophie Dumondas Sophie Dumond</p>
                        </div>
                        <div className='infoCasting'>
                            <div className='divCarre'>
                                <img src={cast6} className='imgCast' alt='casting'></img>
                            </div>
                            <p className='actorName'>Shea Whigham</p>
                            <p className='roleName'>Detective Burkeas Detective Burke</p>
                        </div>
                    </div>
                    <div></div><iframe SRC="https://uqload.org/embed-na65en0j8853.html" FRAMEBORDER='0' MARGINWIDTH='0' MARGINHEIGHT='0' SCROLLING='NO' WIDTH='640' HEIGHT='360' allowfullscreen='true'></iframe> 
                </div>             
            </div>
        </div>
    )
}

export default CardFilm