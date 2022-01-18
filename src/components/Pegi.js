import axios from 'axios'
import { useEffect } from 'react'

const Pegi = ({ getProps }) => {
  useEffect(() => {
    const getrelease_dates = () => {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${getProps.id}?api_key=430fd4a9e11f41d3009ea74bba3edc1a&append_to_response=release_dates&language=fr-FR`
        )
        .then(res => res.data)
        .then(res => {
          setPegi(res)
        })
    }
    getgetrelease_dates()
  }, [])

  return
}

export default Pegi
