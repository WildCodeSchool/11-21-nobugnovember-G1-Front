import popcorn from '../assets/popcorn.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import './CardFilm.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import noImage from '../assets/No_image_available.svg'

const CardFilm = ({ getProps, retourFunc, getDetails }) => {
  let { id } = useParams()
  let pegi = 'N/A'
  const [detailCard, setDetailCard] = useState([])

  /*************** Appel API Details Film ****************************/

  useEffect(() => {
    const appelAPIFilm = () => {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos,images,credits,release_dates&language=fr-FR`
        )
        .then(res => res.data)
        .then(res => {
          console.log('P02 : ', res)
          setDetailCard(res)
        })
    }
    appelAPIFilm()
  }, [])

  return (
    <div className='fragmentContainer'>
      <div
        onClick={retourFunc}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          background: 'rgba(0, 0, 0, 0.8)'
        }}
      ></div>
      <div className='popUpModal'>
        <div
          className='cardFilm'
          style={{
            backgroundImage: `url(http://image.tmdb.org/t/p/w1280${detailCard.backdrop_path})`
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
                src={`http://image.tmdb.org/t/p/w500${detailCard.poster_path}`}
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
                  <p className='duration'>Durée : {detailCard.runtime} min</p>
                  <div className='holderPegi'>
                    {detailCard.release_dates !== undefined &&
                      detailCard.release_dates.results.map(el => {
                        if (el.iso_3166_1.includes('FR')) {
                          if (el.release_dates[0].certification.length) {
                            pegi = el.release_dates[0].certification
                          }
                        }
                      })}
                    <p id='pegi'>{pegi}</p>
                  </div>
                  <img src={popcorn} className='popcorn' alt='porpcorn'></img>{' '}
                  <p>{detailCard.vote_average} / 10</p>
                </div>
                <div className='synopsis'>
                  <p>{detailCard.overview}</p>
                  <button className='playButton'>Play</button>
                </div>
                <p className='infoProd'>
                  {' '}
                  <span className='textGrey'>Producteur :</span>{' '}
                  {detailCard.credits !== undefined &&
                    detailCard.credits.crew
                      .filter(el =>
                        el.known_for_department.includes('Directing')
                      )
                      .slice(0, 1)
                      .map(producer => producer.name)}
                </p>
                <p className='infoProd'>
                  {' '}
                  <span className='textGrey'>Scénario :</span>{' '}
                  {detailCard.credits !== undefined &&
                    detailCard.credits.crew
                      .filter(el =>
                        el.department.includes('Writing' || 'Writer')
                      )
                      .slice(0, 1)
                      .map(writer => writer.name)}
                </p>
                <p className='infoProd'>
                  {' '}
                  <span className='textGrey'>Studio :</span>{' '}
                  {detailCard.production_companies !== undefined &&
                    detailCard.production_companies.map((name, id, arr) => {
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
                  {detailCard.genres !== undefined &&
                    detailCard.genres.map((genre, id, arr) => {
                      if (id < arr.length - 1) {
                        return genre.name + ', '
                      } else {
                        return genre.name
                      }
                    })}
                </p>
              </div>
              {detailCard.videos !== undefined &&
              detailCard.videos.results.length > 0 ? (
                <iframe
                  className='trailerYT'
                  width='560'
                  height='315'
                  src={`https://www.youtube.com/embed/${detailCard.videos.results[0].key}`}
                  title='YouTube trailer'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen='true'
                ></iframe>
              ) : (
                <div>
                  <iframe 
                  className='trailerYT'
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/-MBj2xT_WtQ" 
                  title="YouTube video player" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='true'
                  ></iframe>
                </div>
              )}
            </div>
            <div className='mobileTitleCasting'>
              <h4 className='casting'>Casting</h4>
              </div>
            <div className='castingListe'>
              {detailCard.credits !== undefined
                ? detailCard.credits.cast.slice(0, 5).map(actor => (
                    <div key={actor.id}>
                      <div className='infoCasting'>
                        <div className='divCarre'>
                          <img src={noImage} className='noImage' />
                          <img
                            src={`http://image.tmdb.org/t/p/w200${actor.profile_path}`}
                            className='imgCast'
                            alt='casting'
                          ></img>
                        </div>
                        <div className='actorRole'>
                          <p className='actorName'>{actor.name}</p>
                          <p className='roleName'>{actor.character}</p>
                        </div>
                      </div>
                    </div>
                  ))
                : ''}
            </div>
            {/* <iframe
              width='660'
              height='437'
              src='https://tomacloud.com/iframe/ty0yt2g3g3Hu4'
              scrolling='no'
              frameborder='0'
              allowfullscreen
              webkitallowfullscreen
            ></iframe> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardFilm
