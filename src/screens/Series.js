import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import Pagination from '../components/Pagination'
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
  setNumPage, 
  numPage,
  ...props
}) => {
  const location = useLocation()

  /***************** APPEL API GENERAL SERIES*******************/
  useEffect(() => {
    const appelAPI = () => {
      setIsLoading(true)
      axios
        .get(
          `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${props.emojiSelected.correspondanceSerie}&language=fr-FR&page=${numPage}`
        )
        .then(response => response.data)
        .then(data => {
          props.setResultat(data.results)
          setIsLoading(false)
        })
    }
    appelAPI()
  }, [props.emojiSelected.correspondanceSerie, numPage])

  return (
    <div className={isActive ? 'catalogPage none' : 'catalogPage movie-grid'}>
      <div className='catalogContainer'>
        <Header
          emojiSelected={props.emojiSelected}
          setEmojiSelected={props.setEmojiSelected}
          link={props.link}
          setLink={props.setLink}
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
        <Pagination 
        setNumPage={setNumPage} 
        numPage={numPage}
        />
        <Footer />
      </div>
    </div>
  )
}

export default Series
