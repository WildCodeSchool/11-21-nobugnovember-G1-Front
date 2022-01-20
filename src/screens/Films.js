import Header from '../components/Header'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import axios from 'axios'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Films = ({
  toggle,
  isShowing,
  isActive,
  setIsActive,
  retourFunc,
  isLoading,
  setIsLoading,
  getProps,
  getDetails,
  setGetDetails,
  setCasting,
  casting,
  setPegi,
  pegi,
  ...props
}) => {
  const location = useLocation()
  const apiKey = process.env.REACT_APP_API_KEY

  useEffect(() => {
    const appelAPI = () => {
      setIsLoading(true)
      console.log('test correspondance 1', props.emojiSelected.correspondance)
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${props.emojiSelected.correspondance}&language=fr-FR&page=1`
        )
        .then(response => response.data)
        .then(data => {
          props.setResultat(data.results)
          setIsLoading(false)
        })
      console.log('BAITED')
    }
    appelAPI()
  }, [props.emojiSelected.correspondance])

  useEffect(() => {
    const appelDetailsFilm = () => {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${getProps.id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos,images,credits,release_dates&language=fr-FR`
        )
        .then(res => res.data)
        .then(res => {
          setGetDetails(res)
        })
    }
    isShowing && appelDetailsFilm()
  }, [isShowing])

  return (
    <div className='catalogPage'>
      <div className='catalogContainer'>
        <Header
          emojiSelected={props.emojiSelected}
          setEmojiSelected={props.setEmojiSelected}
        />

        <div className={isActive ? 'none' : 'movie-grid'}>
          {props.resultat.map(element => (
            <Link
              key={element.key}
              to={`/card/${getProps.id}`}
              state={{ backgroundLocation: location }}
              className='linkCard'
            >
              <Cards
                key={element.key}
                setGetProps={props.setGetProps}
                toggle={toggle}
                data={element}
                setIsActive={setIsActive}
              />
            </Link>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Films
