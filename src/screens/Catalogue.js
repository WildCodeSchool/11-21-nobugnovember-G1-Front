import Cards from '../components/Cards'
import Header from '../components/Header'
import { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import './Catalogue.css'
import Footer from '../components/Footer'
import Loading from '../components/Loading'
import axios from 'axios'

const Catalogue = ({
  getDetails,
  setGetDetails,
  isActive,
  setIsActive,
  getProps,
  setGetProps,
  toggle,
  setIsLoading,
  isLoading,
  casting,
  setCasting,
  getPropsTv,
  setGetPropsTv,
  pegi,
  setPegi,
  setIsShowing,
  isShowing,
  ...props
}) => {
  // POUR AFFICHAGE MODAL
  let location = useLocation()

  const apiKey = process.env.REACT_APP_API_KEY

  const retourFunc = () => {
    toggle()
    setIsActive(!isActive)
  }

  /***************** APPEL API GENERAL *******************/
  useEffect(() => {
    const appelAPI = () => {
      setIsLoading(true)
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${props.emojiSelected.correspondance}&language=fr-FR&page=2`
        )
        .then(response => response.data)
        .then(data => {
          props.setResultat(data.results)
          setIsLoading(false)
        })
    }
    appelAPI()
  }, [props.emojiSelected.correspondance])

  /*************** Appel API Details Film ****************************/
  useEffect(() => {
    const appelAPIFilm = () => {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${getProps.id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos,images,credits,release_dates&language=fr-FR`
        )
        .then(res => res.data)
        .then(res => {
          setGetDetails(res)
        })
    }
    isShowing && appelAPIFilm()
  }, [isShowing])

  return (
    <div className='catalogPage'>
      <div className='catalogContainer'>
        <Header
          className='headerband'
          emojiSelected={props.emojiSelected}
          setEmojiSelected={props.setEmojiSelected}
        />
        {isLoading ? (
          <Loading />
        ) : (
          <div className={isActive ? 'none' : 'movie-grid'}>
            {props.resultat.map(element => (
              <Link
                key={element.key}
                to={`/card/${getProps.id}`}
                state={{ backgroundLocation: location }}
                className='linkCard'
              >
                <Cards
                  toggle={toggle}
                  setIsActive={setIsActive}
                  setGetProps={setGetProps}
                  setGetPropsTv={setGetPropsTv}
                  data={element}
                  setPegi={setPegi}
                  getProps={getProps}
                  setIsShowing={setIsShowing}
                  isShowing={setIsShowing}
                />
              </Link>
            ))}
          </div>
        )}

        <Footer />
      </div>
    </div>
  )
}

export default Catalogue
