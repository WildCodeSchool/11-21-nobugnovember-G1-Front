import Cards from '../components/Cards'
import Header from '../components/Header'
import { useEffect, useState } from 'react'
import './Catalogue.css'
import Footer from '../components/Footer'
import Loading from '../components/Loading'
import axios from 'axios'
import CardFilm from '../components/CardFilm'

const Catalogue = ({
  getDetails,
  setGetDetails,
  isActive,
  setIsActive,
  getProps,
  setGetProps,
  isShowing,
  toggle,
  setIsLoading,
  isLoading,
  casting,
  setCasting,
  getPropsTv,
  setGetPropsTv,
  pegi,
  setPegi,
  ...props
}) => {
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
          `https://api.themoviedb.org/3/discover/movie?api_key=430fd4a9e11f41d3009ea74bba3edc1a&with_genres=${props.emojiSelected.correspondance}&language=fr-FR&page=3`
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
          `https://api.themoviedb.org/3/movie/${getProps.id}?api_key=430fd4a9e11f41d3009ea74bba3edc1a&append_to_response=videos,images,release_dates&language=fr-FR`
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
        <CardFilm
          getProps={getProps}
          isShowing={isShowing}
          hide={toggle}
          retourFunc={retourFunc}
          getDetails={getDetails}
          casting={casting}
          setCasting={setCasting}
          setPegi={setPegi}
          pegi={pegi}
        />

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
              <Cards
                key={element.key}
                toggle={toggle}
                setIsActive={setIsActive}
                setGetProps={setGetProps}
                setGetPropsTv={setGetPropsTv}
                data={element}
                setPegi={setPegi}
                getProps={getProps}
              />
            ))}
          </div>
        )}

        <Footer />
      </div>
    </div>
  )
}

export default Catalogue
