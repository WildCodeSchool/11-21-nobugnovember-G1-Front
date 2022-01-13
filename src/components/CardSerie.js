import Header from './Header' 
import affiche from '../assets/affichetest2.jpg'
import popcorn from '../assets/popcorn.png'
import castS1 from '../assets/castS1.jpg'
import castS2 from '../assets/castS2.jpg'
import castS3 from '../assets/castS3.jpg'
import castS4 from '../assets/castS4.jpg'
import castS5 from '../assets/castS5.jpg'
import castS6 from '../assets/castS6.jpg'
import ReactStars from 'react-rating-stars-component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle  } from '@fortawesome/free-solid-svg-icons'


import '../components/CardSerie.css'

const CardSerie = (props) => {
    return (
        <div>
            <div className='cardSerie'>
                <div className='cardSerieContainer'>
                <div className='closeModal'>
                        <FontAwesomeIcon icon={faTimesCircle} size='3x' className='closeIcone'/>
                    </div>
                    <div className='infoContainer'>
                        <img src={affiche} className='jaquette' alt='jaquette'></img>
                        <div className='holderInfo'>
                            <h3 className='titre'>Breaking Bad</h3>
                            <p className='year'>2008 - 2013</p>
                            <div className='infoSerie'>
                            <p className='seasons'>Saisons : 4</p>
                                <div className='holderPegi'>
                                    <p id='pegi'>Tout public</p>
                                </div>
                                <img src={popcorn} className='popcorn' alt='porpcorn'></img><p>96%</p> 
                                <ReactStars  classNames={'ratingStars'} count={5} size={25} activeColor={'#FFDC6C'} isHalf={true} edit={true} />
                            </div>
                            <div className='synopsis'>
                                <p>When chemistry teacher Walter White is diagnosed with Stage III cancer and given only two years to live, he decides he has nothing to lose. He lives with his teenage son, who has cerebral palsy, and his wife, in New Mexico. Determined to ensure that his family will have a secure future, Walt embarks on a career of drugs and crime. He proves to be remarkably proficient in this new world as he begins manufacturing and selling methamphetamine with one of his former students. The series tracks the impacts of a fatal diagnosis on a regular, hard working man, and explores how a fatal diagnosis affects his morality and transforms him into a major player of the drug trade.</p>  
                                <button className='playButton'>Play</button>
                            </div> 
                            <p className='infoProd'> <span className='textGrey'>Producteur :</span></p>
                            <p className='infoProd'> <span className='textGrey'>Scénario :</span> Vince Gilligan</p>
                            <p className='infoProd'> <span className='textGrey'>Studio :</span> High Bridge Productions,…ony Pictures Television </p>
                            <p className='infoProd'> <span className='textGrey'>Genres :</span> Crime, Drame, Thriller</p>
                        </div>
                        {/* <iframe className='trailer' width="560" height="315" src="https://www.youtube.com/embed/OoTx1cYC5u8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true">
                        </iframe>             */}
                        <video className='trailer' poster='https://m.media-amazon.com/images/M/MV5BMTJiMzgwZTktYzZhZC00YzhhLWEzZDUtMGM2NTE4MzQ4NGFmXkEyXkFqcGdeQWpybA@@._V1_QL75_UX500_CR0,0,500,281_.jpg' controls src="https://imdb-video.media-imdb.com/vi338798873/1434659607842-pgv4ql-1616202355944.mp4?Expires=1642078866&Signature=GnRZr0D11Q5XTgAjchHBnwk1G6B2mONFptAtrPlQifVOxbnmnpLJ8j~SeXzRcK1qx0Jv7Q57RPZ98Y6lRK9gPwSq0AzWFoNyzRBXok9s8ovff9kI984ID0juMrDLCCmDRX65m6tpXkihyPem6RqFTozK60btcf3vQKnfisCgxc~L0okrEA5FsrLC5S9Ci~ytkWLN3F3nvGHlWvWm5HbId5ToseRXNed2y~Btwkvs1wzP3sbdSXmwgfhnzfiAkz2GFA5qgI-VyQImpdjZYy-XhYGl7~z6h35FtvnVJlEBqymynDUoTU7XXJPV~ulL4yXKR0XrNuZJ7EH-Vy8dHAB5Ow__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"></video>
                    </div>
                    <h4 className='casting'>Casting</h4> 
                    <div className='castingListe'>
                        <div className='infoCasting'>
                            <div className='divCarre'>
                                <img src={castS1} className='imgCast' alt='casting'></img>              
                            </div>
                            <p className='actorName'>Bryan Cranston</p>
                            <p className='roleName'>Walter White - 62 episodes, 2008-2013</p>
                        </div>
                        <div className='infoCasting'>
                            <div className='divCarre'>
                                <img src={castS2} className='imgCast' alt='casting'></img>
                            </div>
                            <p className='actorName'>Anna Gunn</p>
                            <p className='roleName'>Skyler White - 62 episodes, 2008-2013</p>
                        </div>
                        <div className='infoCasting'>
                            <div className='divCarre'>
                                <img src={castS3} className='imgCast' alt='casting'></img>
                            </div>
                            <p className='actorName'>Betsy Brandt</p>
                            <p className='roleName'>Marie Schrader - 62 episodes, 2008-2013</p>
                        </div>
                        <div className='infoCasting'>
                            <div className='divCarre'>
                                <img src={castS4} className='imgCast' alt='casting'></img>
                            </div>
                            <p className='actorName'>RJ Mitte</p>
                            <p className='roleName'>Walter White, Jr.  2008-2013</p>
                        </div>
                        <div className='infoCasting'>
                            <div className='divCarre'>
                                <img src={castS5} className='imgCast' alt='casting'></img>
                            </div>
                            <p className='actorName'>Dean Norris</p>
                            <p className='roleName'>Hank Schrader - 62 episodes, 2008-2013</p>
                        </div>
                        <div className='infoCasting'>
                            <div className='divCarre'>
                                <img src={castS6} className='imgCast' alt='casting'></img>
                            </div>
                            <p className='actorName'>Bob Odenkirk</p>
                            <p className='roleName'>Saul Goodman - 43 episodes, 2009-2013</p>
                        </div>
                    </div>
                </div>             
            </div>
        </div>
    )
}

export default CardSerie 