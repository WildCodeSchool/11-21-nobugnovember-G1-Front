import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import axios from 'axios'
import './Catalogue.css'

const Series = ({
  setGetProps,
  getProps,
  isActive,
  setIsActive,
  toggle,
  isShowing,
  setIsLoading,
  setGetDetails,
  resultat,
  ...props
}) => {
  const location = useLocation()

  /***************** APPEL API GENERAL SERIES*******************/
  useEffect(() => {
    const appelAPI = () => {
      setIsLoading(true)
      axios
        .get(
          `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${props.emojiSelected.correspondanceSerie}&language=fr-FR&page=1`
        )
        .then(response => response.data)
        .then(data => {
          props.setResultat(data.results)
          setIsLoading(false)
        })
    }
    appelAPI()
  }, [props.emojiSelected.correspondanceSerie])

  return (
    <div className={isActive ? 'catalogPage none' : 'catalogPage movie-grid'}>
      <div className='catalogContainer'>
        <Header
          emojiSelected={props.emojiSelected}
          setEmojiSelected={props.setEmojiSelected}
        />
        <div className='cardContainer'>
          {resultat.map(element => (
            <Link
              key={element.key}
              to={`/cardS/${element.id}`}
              state={{ backgroundLocationSerie: location }}
              className='linkCard'
            >
              <Cards
                key={element.key}
                setGetProps={setGetProps}
                setIsActive={setIsActive}
                toggle={toggle}
                data={element}
              />
            </Link>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Series
