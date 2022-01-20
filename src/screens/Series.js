import { useEffect, useState } from 'react'
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
  isLoading,
  setIsLoading,
  retourFunc,
  getDetails,
  setGetDetails,
  resultat,
  casting,
  setCasting,
  pegi,
  setPegi,
  getPropsTv,
  setNumPage, 
  numPage,
  ...props
}) => {
  const location = useLocation()
  const apiKey = process.env.REACT_APP_API_KEY

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

  /***************** APPEL API DETAILS SERIES*******************/
  useEffect(() => {
    const appelDetailsSerie = () => {
      axios
        .get(
          `https://api.themoviedb.org/3/tv/${getProps.id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos,images,credits,release_dates&language=fr-FR`
        )
        .then(res => res.data)
        .then(res => {
          setGetDetails(res)
        })
    }
    isShowing && appelDetailsSerie()
  }, [isShowing])

  return (
    <div className='catalogPage'>
      <div className='catalogContainer'>
        <Header
          emojiSelected={props.emojiSelected}
          setEmojiSelected={props.setEmojiSelected}
        />
        <div className={isActive ? 'none' : 'movie-grid'}>
          {resultat.map(element => (
            <Link
              key={element.key}
              to={`/card/${getProps.id}`}
              state={{ backgroundLocation: location }}
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
