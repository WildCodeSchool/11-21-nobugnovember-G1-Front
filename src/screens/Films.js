import Header from '../components/Header'
import Footer from '../components/Footer'

import Cards from '../components/Cards'
import axios from 'axios'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Pagination from '../components/Pagination'
import Coquin from '../auberginedata/Coquin.json'

const Films = ({
  toggle,
  isShowing,
  isActive,
  setIsActive,
  setIsLoading,
  getProps,
  setGetDetails,
  setNumPage, 
  numPage,
  aubergine,
  setAubergine,
  ...props
}) => {
  const location = useLocation()

  useEffect(() => {

    const appelAub = () => {
      props.setResultat(Coquin.results)
      console.log(props.resultat)      
    }
    
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
          console.log(Coquin);
        })
      
    }
    aubergine ? appelAub() : appelAPI()
  }, [props.emojiSelected.correspondance, numPage, aubergine])

  return (
    <div className={isActive ? 'catalogPage none' : 'catalogPage movie-grid'}>
      <div className='catalogContainer'>
        <Header
          emojiSelected={props.emojiSelected}
          setEmojiSelected={props.setEmojiSelected}
          link={props.link}
          setLink={props.setLink}
          setAubergine={setAubergine}
        />

        <div className='cardContainer'>
          {props.resultat.map(element => (
            <Link
              key={element.key}
              to={`/card/${element.id}`}
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
        <Pagination
        setNumPage={setNumPage} 
        numPage={numPage}
        />
        <Footer className="footerCatalogue"/> 
      </div>
    </div>
  )
}

export default Films
