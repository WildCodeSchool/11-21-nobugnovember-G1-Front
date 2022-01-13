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
const CardFilm = ({ getProps, retourFunc, isShowing, getDetails }) =>
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
                      src={getDetails.image}
                      className='jaquette'
                      alt='jaquette'
                    ></img>
                    <div className='holderInfo'>
                      <h3 className='titre'>{getProps.title}</h3>
                      <p className='year'>{getDetails.year}</p>
                      <div className='info'>
                        <p className='duration'>{getDetails.runtimeStr}</p>
                        <div className='holderPegi'>
                          <p id='pegi'>{getDetails.contentRating}</p>
                        </div>
                        <img
                          src={popcorn}
                          className='popcorn'
                          alt='porpcorn'
                        ></img>{' '}
                        <p>{getDetails.metacriticRating}</p>
                      </div>
                      <div className='synopsis'>
                        <p>{getDetails.plotLocal}</p>
                        <button className='playButton'>Play</button>
                      </div>
                      <p className='infoProd'>
                        {' '}
                        <span className='textGrey'>Producteur :</span>{' '}
                        {getDetails.directors}{' '}
                      </p>
                      <p className='infoProd'>
                        {' '}
                        <span className='textGrey'>Scénario :</span>{' '}
                        {getDetails.writers}{' '}
                      </p>
                      <p className='infoProd'>
                        {' '}
                        <span className='textGrey'>Studio :</span>{' '}
                        {getDetails.companies}{' '}
                      </p>
                      <p className='infoProd'>
                        {' '}
                        <span className='textGrey'>Genres :</span>{' '}
                        {getDetails.genres}
                      </p>
                    </div>
                    {/* <iframe
                      className='trailer'
                      width='560'
                      height='315'
                      src={getDetails.trailer.linkEmbed}
                      title='YouTube video player'
                      frameborder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowfullscreen='true'
                    ></iframe> */}
                  </div>

                  {/******************************************
                  <h4 className='casting'>Casting</h4>
                  <div className='castingListe'>                 


                    {getDetails.actorList.map(actor => (
                      <div className='infoCasting'>
                        <div className='divCarre'>
                          <img
                            src={actor.image}
                            className='imgCast'
                            alt='casting'
                          ></img>
                        </div>
                        <p className='actorName'>{actor.name}</p>
                        <p className='roleName'>{actor.asCharacter}</p>
                      </div>
                    ))}

                      /*******************************************/}

                  <div className='infoCasting'>
                    <div className='divCarre'>
                      <img
                        src={getDetails.actorList}
                        className='imgCast'
                        alt='casting'
                      ></img>
                    </div>
                    <p className='actorName'>{getDetails.stars}</p>
                    <p className='roleName'>Arthur Fleckas Arthur Flec</p>
                  </div>

                  <div className='infoCasting'>
                    <div className='divCarre'>
                      <img src={cast2} className='imgCast' alt='casting'></img>
                    </div>
                    <p className='actorName'>Robert De Niro</p>
                    <p className='roleName'>
                      Murray Franklinas Murray Franklin
                    </p>
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
                    <p className='roleName'>???????????????</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </>,
        document.body
      )
    : null

export default CardFilm
