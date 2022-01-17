import ReactDOM from 'react-dom'

import popcorn from '../assets/popcorn.png'
import ActorCard from './ActorCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

import '../components/CardFilm.css'
const CardFilm = ({ getProps, retourFunc, isShowing, getDetails }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div>
            <div className='popUpModal'>
              <div className='cardFilm' style={{backgroundImage : `url(http://image.tmdb.org/t/p/w1280${getDetails.backdrop_path})`}}>
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
                      src={`http://image.tmdb.org/t/p/w500${getDetails.poster_path}`}
                      className='jaquette'
                      alt='jaquette'
                    ></img>
                    <div className='holderInfo'>
                      <h3 className='titre'>{getProps.title}</h3>
                      <p className='year'>{getProps.release_date}</p>
                      <div className='info'>
                        <p className='duration'>{getProps.runtime}</p>
                        <div className='holderPegi'>
                          <p id='pegi'></p> 
                        </div>
                        <img
                          src={popcorn}
                          className='popcorn'
                          alt='porpcorn'
                        ></img>{' '}
                        <p>{getDetails.vote_average} /10</p>
                      </div>
                      <div className='synopsis'>
                        <p>{getDetails.overview}</p>
                        <button className='playButton'>Play</button>
                      </div>
                      <p className='infoProd'>
                        {' '}
                        <span className='textGrey'>Producteur :</span>{' '}
                        {/* {getDetails.directors}{' '} */}
                      </p>
                      <p className='infoProd'>
                        {' '}
                        <span className='textGrey'>Scénario :</span>{' '}
                        {/* {getDetails.writers}{' '} */}
                      </p>
                      <p className='infoProd'>
                        {' '}
                        <span className='textGrey'>Studio :</span>{' '}
                        {getDetails.production_companies !== undefined && getDetails.production_companies.map(name => name.name)}{' '}
                      </p>
                      <p className='infoProd'>
                        {' '}
                        <span className='textGrey'>Genres :</span>{' '}
                        {getDetails.genres !== undefined && getDetails.genres.map(genre => genre.name)}
                      </p>
                    </div>
                    {/* <iframe src={`https://www.imdb.com/video/imdb/${getDetails.trailer.videoId}/imdb/embed?autoplay=false&width=480`} width="480" height="270" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" frameborder="no" scrolling="no"></iframe> */}
                  </div>
                  <h4 className='casting'>Casting</h4>
                  {/* <ActorCard getDetails={getDetails} /> */}
                </div>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null

export default CardFilm
