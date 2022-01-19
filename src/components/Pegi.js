import axios from 'axios'
import { useEffect } from 'react'

const Pegi = ({ getProps, setPegi, pegi }) => {

  let certif

  useEffect(() => {
    const getreleaseDates = () => {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${getProps.id}?api_key=430fd4a9e11f41d3009ea74bba3edc1a&append_to_response=release_dates&language=fr-FR`
        )
        .then(res => res.data)
        .then(res => {
          certif = res.release_dates.results.filter(el => el.iso_3166_1.includes('FR')).map(el => el.release_dates[0].certification)
          console.log('return',certif);
        })
    }
    getreleaseDates()
  }, [])

  return (
  <div className=''>
    {console.log('pegi', certif)}
    {/* {console.log('test pegi', pegi.release_dates.results)} */}
    {/* {pegi.release_dates.results !== undefined ? pegi.release_dates.results
    .filter(el => el.iso_3166_1.includes('FR'))
    .map(certif => (
      <div> 
      <p>{certif}</p>
      </div>
    ))
    : ''} */}
  </div>
)
}

export default Pegi
