import axios from 'axios'
import { useEffect } from 'react'

const ActorCard = ({ getProps, setCasting, casting }) => {
  useEffect(() => {
    const getCast = () => {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${getProps.id}/credits?api_key=430fd4a9e11f41d3009ea74bba3edc1a&language=fr-FR`
        )
        .then(res => res.data)
        .then(res => {
          setCasting(res)
        })
    }
    getCast()
  }, [])

  useEffect(() => {
    const getCast = () => {
      axios
        .get(
          `https://api.themoviedb.org/3/tv/${getProps.id}/credits?api_key=430fd4a9e11f41d3009ea74bba3edc1a&language=fr-FR`
        )
        .then(res => res.data)
        .then(res => {
          setCasting(res)
        })
    }
    getCast()
  }, [])

  return (
    <div className='castingListe'>
      {casting.cast !== undefined
        ? casting.cast.slice(0, 5).map(actor => (
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
  )
}

export default ActorCard
