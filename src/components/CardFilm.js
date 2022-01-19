import ReactDOM from 'react-dom'

import popcorn from '../assets/popcorn.png'
import ActorCard from './ActorCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

import './CardFilm.css'

const CardFilm = ({
  getProps,
  retourFunc,
  isShowing,
  getDetails,
  casting,
  setCasting,
  setPegi,
  pegi
}) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div>
            <div className='popUpModal'>
              <div
                className='cardFilm'
                style={{
                  backgroundImage: `url(http://image.tmdb.org/t/p/w1280${getDetails.backdrop_path})`
                }}
              >
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
                      <h3 className='titre'>
                        {getProps.title}
                        {getProps.name}
                      </h3>
                      <p className='year'>{getProps.release_date}</p>
                      <div className='info'>
                        <p className='duration'>
                          Durée : {getDetails.runtime} min
                        </p>
                        <div className='holderPegi'>
                          <p id='pegi'>{getDetails.release_dates !== undefined && getDetails.release_dates.results.filter(el => el.iso_3166_1.includes('FR')).map(el => el.release_dates[0].certification)}</p>
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
                        {casting.crew !== undefined &&
                          casting.crew
                            .filter(el => el.department.includes('Production'))
                            .slice(0, 1)
                            .map(producer => producer.name)}
                      </p>
                      <p className='infoProd'>
                        {' '}
                        <span className='textGrey'>Scénario :</span>{' '}
                        {casting.crew !== undefined &&
                          casting.crew
                            .filter(el =>
                              el.department.includes('Writing' || 'Writer')
                            )
                            .slice(0, 1)
                            .map(writer => writer.name)}
                      </p>
                      <p className='infoProd'>
                        {' '}
                        <span className='textGrey'>Studio :</span>{' '}
                        {getDetails.production_companies !== undefined &&
                          getDetails.production_companies.map(
                            (name, id, arr) => {
                              if (id < arr.length - 1) {
                                return name.name + ', '
                              } else {
                                return name.name
                              }
                            }
                          )}{' '}
                      </p>
                      <p className='infoProd'>
                        {' '}
                        <span className='textGrey'>Genres :</span>{' '}
                        {getDetails.genres !== undefined &&
                          getDetails.genres.map((genre, id, arr) => {
                            if (id < arr.length - 1) {
                              return genre.name + ', '
                            } else {
                              return genre.name
                            }
                          })}
                      </p>
                    </div>
                    {/* {getDetails.videos.results[0] ? <iframe className='trailerYT' width="560" height="315" src={`https://www.youtube.com/embed/${getDetails.videos.results[0].key}`} title="YouTube trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='true' ></iframe> : <div>Poulet</div>} */}
                  </div>
                  <h4 className='casting'>Casting</h4>
                  <ActorCard
                    casting={casting}
                    setCasting={setCasting}
                    getProps={getProps}
                  />
                </div>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null

export default CardFilm
