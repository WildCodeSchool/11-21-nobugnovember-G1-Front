import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Cards from '../components/Cards'
import CardFilm from '../components/CardFilm'
import axios from 'axios'
import './Catalogue.css'

const Series = ({
  setGetProps,
  getProps,
  isActive,
  setIsActive,
  toggle,
  isShowing,
  isLoading,
  setIsLoading,
  retourFunc,
  getDetails,
  setGetDetails,
  resultat,
  casting,
  setCasting,
  getPropsTv,
  ...props
}) => {
  const apiKey = process.env.REACT_APP_API_KEY

  const [getDetailsTv, setGetDetailsTv] = useState([])
  // console.log(getPropsTv)
  /***************** APPEL API GENERAL SERIES*******************/
  useEffect(() => {
    const appelAPI = () => {
      setIsLoading(true)
      console.log('test correspondance 1', props.emojiSelected.correspondance)
      axios
        .get(
          `https://api.themoviedb.org/3/tv/popular?api_key=430fd4a9e11f41d3009ea74bba3edc1a&with_genres=${props.emojiSelected.correspondanceSerie}&language=fr-FR&page=1`
        )
        .then(response => response.data)
        .then(data => {
          props.setResultat(data.results)
          setIsLoading(false)
        })
      console.log('BAITED')
    }
    appelAPI()
  }, [props.emojiSelected.correspondanceSerie])

  /***************** APPEL API DETAILS SERIES*******************/
  useEffect(() => {
    const appelAPIFilm = () => {
      axios
        .get(
          `https://api.themoviedb.org/3/tv/${getProps.id}?api_key=430fd4a9e11f41d3009ea74bba3edc1a&language=fr-FR`
        )
        .then(res => res.data)
        .then(res => {
          setGetDetails(res)
          console.log('test micka', getDetails)
        })
    }
    isShowing && appelAPIFilm()
  }, [isShowing])

  return (
    <div className='catalogPage'>
      <div className='catalogContainer'>
        <CardFilm
          getProps={getProps}
          isShowing={isShowing}
          hide={toggle}
          retourFunc={retourFunc}
          getDetails={getDetails}
          casting={casting}
          setCasting={setCasting}
        />
        <Header
          emojiSelected={props.emojiSelected}
          setEmojiSelected={props.setEmojiSelected}
        />
        <div className={isActive ? 'none' : 'movie-grid'}>
          {resultat.map(element => (
            <Cards
              key={element.key}
              setGetProps={setGetProps}
              setIsActive={setIsActive}
              toggle={toggle}
              data={element}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Series
