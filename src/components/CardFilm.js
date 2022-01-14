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
                        <p className='duration'>{getProps.runtimeStr}</p>
                        <div className='holderPegi'>
                          <p id='pegi'>{getProps.contentRating}</p>
                        </div>
                        <img
                          src={popcorn}
                          className='popcorn'
                          alt='porpcorn'
                        ></img>{' '}
                        <p>{getDetails.metacriticRating} %</p>
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
                    <video
                      controls
                      className='trailer'
                      width='560'
                      height='315'
                      // src={`https://imdb-video.media-imdb.com/${getDetails.trailer.videoId}/1434659607842-pgv4ql-1596404706743.mp4?Expires=1642245486&Signature=AKAxTmMtuaNHs5B1-BIA-N-f0yzaNkpsqkImKPcLsTaLPA2sMQWgXaXy5ZBjXEGdq0Y-AQiF4E3i2izZHRYCGq52zv5qXqpINdfkb4Zcd6q~ZQprfCYD97jjVOqBuK~pcphcZZfj~BUfKP3WrCab-TB0RGVI83V6chs6Dpnop8r5crNw~em5GnVDGjwJaqFIrMSTUbzbEHpHn3SQdS1HOonZPgl3~cbrx7u7iIX6FO0rolREELgHkCpY4Fj7EsvfDSySZAxACqlRf-QfBf-mYeNpdeW9PQ2kvwIfbY4KElshQ8Rs68f1~0q8ZSygotJ~Z1jJ-8g556j3Yw8LQvSq7w__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA`}
                      frameborder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowfullscreen='true'
                    ></video>
                  </div>
                  <h4 className='casting'>Casting</h4>
                  <ActorCard getDetails={getDetails} />
                </div>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null

export default CardFilm
