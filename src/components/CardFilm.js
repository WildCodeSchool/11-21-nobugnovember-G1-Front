import ReactDOM from 'react-dom'

import Header from './Header'
import affiche from '../assets/affichetest.jpg'
import popcorn from '../assets/popcorn.png'
import cast1 from '../assets/cast1.jpg'
import cast2 from '../assets/cast2.jpg'
import cast3 from '../assets/cast3.jpg'
import cast4 from '../assets/cast4.jpg'
import cast5 from '../assets/cast5.jpg'
import cast6 from '../assets/cast6.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

import '../components/CardFilm.css'

const CardFilm = ({ getProps, retourFunc, isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div>
            <div className='popUpModal'>
              <div className='cardFilm'>
                <div className='cardFilmContainer'>
                  <div className='closeModal'>
                    <FontAwesomeIcon
                      icon={faTimesCircle}
                      size='3x'
                      className='closeIcone'
                      onClick={() => retourFunc()}
                    />
                  </div>
                  <div className='infoContainer'>
                    <img
                      src={getProps.image}
                      className='jaquette'
                      alt='jaquette'
                    ></img>
                    <div className='holderInfo'>
                      <h3 className='titre'>{getProps.title}</h3>
                      <p className='year'>{getProps.description}</p>
                      <div className='info'>
                        <p className='duration'>{getProps.runtimeStr}</p>
                        <div className='holderPegi'>
                          <p id='pegi'>{getProps.contentRating}</p>
                        </div>
                        <img
                          src={popcorn}
                          className='popcorn'
                          alt='porpcorn'
                        ></img>{' '}
                        <p>{getProps.metacriticRating}%</p>
                      </div>
                      <div className='synopsis'>
                        <p>{getProps.plot}</p>
                        <button className='playButton'>Play</button>
                      </div>
                      <p className='infoProd'>
                        {' '}
                        <span className='textGrey'>Producteur :</span> Todd
                        Phillips{' '}
                      </p>
                      <p className='infoProd'>
                        {' '}
                        <span className='textGrey'>Scénario :</span> Todd
                        Phillips, Scott Silver, Bob Kane{' '}
                      </p>
                      <p className='infoProd'>
                        {' '}
                        <span className='textGrey'>Studio :</span> Warner Bros.,
                        Village Ro…llage Roadshow Pictures{' '}
                      </p>
                      <p className='infoProd'>
                        {' '}
                        <span className='textGrey'>Genres :</span>{' '}
                        {getProps.genres}
                      </p>
                    </div>
                    <iframe
                      className='trailer'
                      width='560'
                      height='315'
                      src='https://www.youtube.com/embed/OoTx1cYC5u8'
                      title='YouTube video player'
                      frameborder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowfullscreen='true'
                    ></iframe>
                    {/* <video
                      className='trailer'
                      controls
                      poster='https://m.media-amazon.com/images/M/MV5BOTU0ZGVmY2MtMTM1OS00YmNlLWE1NGUtMGYyMjI1MjY1NWUzXkEyXkFqcGdeQWFybm8@._V1_QL75_UX500_CR0,1,500,281_.jpg'
                      src='https://imdb-video.media-imdb.com/vi1723318041/1434659607842-pgv4ql-1567008550851.mp4?Expires=1642175607&Signature=GEcMrwmlowNGZ-z9G3tkELcS12ecyaZg~HisRC7M7OXj8izg09~1Km9ROoGr59p2TKf43sk4in~Ky82iN3gJ3nXz9q8IOWv740wOo8LYsrGsZ4LVQUmSBpS0hUTf~8f963J3mm4htrvEXz7PBxg-S61-G5qG68ap~wbGY2jjFbaxIwbHxdzB15VjD3tNIwZkoHhv1xsNlAxZJvd7tog5crXmUWbEZtC0MR0lcDtK9QpvADnkixI01~rqDYOUiXrvjd7fQvG34UesfVz5w6WT8CQHaWF6X4tWFap6sJF8VskHWqC6z-Rh-GvgwFTnkH2a1T8qb1fvJdkphiJcB2Oh2w__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA'
                    ></video> */}
                    <h4 className='casting'>Casting</h4>
                    <div className='castingListe'>
                      <div className='infoCasting'>
                        <div className='divCarre'>
                          <img
                            src={cast1}
                            className='imgCast'
                            alt='casting'
                          ></img>
                        </div>
                        <p className='actorName'>{getProps.stars}</p>
                        <p className='roleName'>Arthur Fleckas Arthur Flec</p>
                      </div>
                      <div className='infoCasting'>
                        <div className='divCarre'>
                          <img
                            src={cast2}
                            className='imgCast'
                            alt='casting'
                          ></img>
                        </div>
                        <p className='actorName'>Robert De Niro</p>
                        <p className='roleName'>
                          Murray Franklinas Murray Franklin
                        </p>
                      </div>
                      <div className='infoCasting'>
                        <div className='divCarre'>
                          <img
                            src={cast3}
                            className='imgCast'
                            alt='casting'
                          ></img>
                        </div>
                        <p className='actorName'>Zazie Beetz</p>
                        <p className='roleName'>Arthur Fleckas Arthur Flec</p>
                      </div>
                      <div className='infoCasting'>
                        <div className='divCarre'>
                          <img
                            src={cast4}
                            className='imgCast'
                            alt='casting'
                          ></img>
                        </div>
                        <p className='actorName'>Frances Conroy</p>
                        <p className='roleName'>Penny Fleckas Penny Fleck</p>
                      </div>
                      <div className='infoCasting'>
                        <div className='divCarre'>
                          <img
                            src={cast5}
                            className='imgCast'
                            alt='casting'
                          ></img>
                        </div>
                        <p className='actorName'>Brett Cullen</p>
                        <p className='roleName'>
                          Sophie Dumondas Sophie Dumond
                        </p>
                      </div>
                      <div className='infoCasting'>
                        <div className='divCarre'>
                          <img
                            src={cast6}
                            className='imgCast'
                            alt='casting'
                          ></img>
                        </div>
                        <p className='actorName'>Shea Whigham</p>
                        <p className='roleName'>???????????????</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null

export default CardFilm
