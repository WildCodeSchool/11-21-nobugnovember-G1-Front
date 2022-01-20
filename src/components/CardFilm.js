import popcorn from '../assets/popcorn.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import './CardFilm.css'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const CardFilm = ({ getProps, retourFunc, getDetails, casting }) => {
  let { id } = useParams()
  let pegi = 'N/A'

  useEffect(() => {
    console.log('refreshed')
  }, [getDetails])

  return (
    <>
      <div
        onClick={retourFunc}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          background: 'rgba(0, 0, 0, 0.7)'
        }}
      ></div>
      <div className='popUpModal'>
        <div
          className='cardFilm'
          style={{
            backgroundImage: `url(http://image.tmdb.org/t/p/w1280${getDetails.backdrop_path})`
          }}
        >
          <div className='cardFilmContainer'>
            <div className='closeModal' onClick={retourFunc}>
              <FontAwesomeIcon
                icon={faTimesCircle}
                size='3x'
                className='closeIcone'
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
                  <p className='duration'>Durée : {getDetails.runtime} min</p>
                  <div className='holderPegi'>
                    {getDetails.release_dates !== undefined &&
                      getDetails.release_dates.results.map(el => {
                        if (el.iso_3166_1.includes('FR')) {
                          if (el.release_dates[0].certification.length) {
                            pegi = el.release_dates[0].certification
                          }
                        }
                      })}
                    <p id='pegi'>{pegi}</p>
                  </div>
                  <img src={popcorn} className='popcorn' alt='porpcorn'></img>{' '}
                  <p>{getDetails.vote_average} /10</p>
                </div>
                <div className='synopsis'>
                  <p>{getDetails.overview}</p>
                  <button className='playButton'>Play</button>
                </div>
                <p className='infoProd'>
                  {' '}
                  <span className='textGrey'>Producteur :</span>{' '}
                  {getDetails.credits !== undefined &&
                    getDetails.credits.crew
                      .filter(el =>
                        el.known_for_department.includes('Directing')
                      )
                      .slice(0, 1)
                      .map(producer => producer.name)}
                </p>
                <p className='infoProd'>
                  {' '}
                  <span className='textGrey'>Scénario :</span>{' '}
                  {getDetails.credits !== undefined &&
                    getDetails.credits.crew
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
                    getDetails.production_companies.map((name, id, arr) => {
                      if (id < arr.length - 1) {
                        return name.name + ', '
                      } else {
                        return name.name
                      }
                    })}{' '}
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
              {getDetails.videos !== undefined &&
              getDetails.videos.results.length > 0 ? (
                <iframe
                  className='trailerYT'
                  width='560'
                  height='315'
                  src={`https://www.youtube.com/embed/${getDetails.videos.results[0].key}`}
                  title='YouTube trailer'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen='true'
                ></iframe>
              ) : (
                <video className='trailerYT' controls></video>
              )}
            </div>
            <h4 className='casting'>Casting</h4>
            <div className='castingListe'>
              {getDetails.credits !== undefined
                ? getDetails.credits.cast.slice(0, 5).map(actor => (
                    <div key={actor.id}>
                      <div className='infoCasting'>
                        <div className='divCarre'>
                          <img
                            src={`http://image.tmdb.org/t/p/w200${actor.profile_path}`}
                            className='imgCast'
                            alt='casting'
                          ></img>
                        </div>
                        <p className='actorName'>{actor.name}</p>
                        <p className='roleName'>{actor.character}</p>
                      </div>
                    </div>
                  ))
                : ''}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardFilm
