import Cards from '../components/Cards'
import Header from '../components/Header'
import { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import './Catalogue.css'
import Footer from '../components/Footer'
import Loading from '../components/Loading'
import axios from 'axios'
import chevrondroit from '../assets/chevrondroit.png'
import chevrongauche from '../assets/chevrongauche.png'
import chevroninactif from '../assets/chevroninactif.png'
import Pagination from '../components/Pagination'

const Catalogue = ({
  setGetDetails,
  isActive,
  setIsActive,
  getProps,
  setGetProps,
  toggle,
  setIsLoading,
  isLoading,
  setPegi,
  setIsShowing,
  isShowing,
  setNumPage,
  numPage,
  ...props
}) => {
  // POUR AFFICHAGE MODAL
  let location = useLocation()

  /***************** APPEL API GENERAL *******************/
  useEffect(() => {
    const appelAPI = () => {
      setIsLoading(true)
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${props.emojiSelected.correspondance}&language=fr-FR&page=${numPage}`
        )
        .then(response => response.data)
        .then(data => {
          props.setResultat(data.results)
          setIsLoading(false)
        })
    }
    appelAPI()
  }, [props.emojiSelected.correspondance, numPage])

  return (
    <div className={isActive ? 'catalogPage none' : 'catalogPage movie-grid'}>
      <div className='catalogContainer'>
        <Header
          className='headerband'
          emojiSelected={props.emojiSelected}
          setEmojiSelected={props.setEmojiSelected}
          setNumPage={setNumPage}
        />
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className='cardContainer'>
              {props.resultat.map(element => (
                <Link
                  key={element.key}
                  to={`/card/${element.id}`}
                  state={{ backgroundLocation: location }}
                  className='linkCard'
                >
                  <Cards
                    toggle={toggle}
                    setIsActive={setIsActive}
                    setGetProps={setGetProps}
                    data={element}
                    setPegi={setPegi}
                    getProps={getProps}
                    setIsShowing={setIsShowing}
                    isShowing={setIsShowing}
                  />
                </Link>
              ))}
            </div>
            <Pagination setNumPage={setNumPage} numPage={numPage} />

          </>
        )}

        <Footer className='footerCatalogue' />
      </div>
    </div>
  )
}

export default Catalogue
