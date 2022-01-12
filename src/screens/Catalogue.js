import Cards from '../components/Cards'
import Header from '../components/Header'
import { useEffect, useState } from 'react'
import './Catalogue.css'
import Footer from '../components/Footer'
import Loading from '../components/Loading'
import axios from 'axios'

const Catalogue = props => {
<<<<<<< HEAD
  const [isLoading, setIsLoading] = useState(true)
  const apiKey = process.env.REACT_APP_API_KEY

  const titleType = 'movies&tv_series'
  const [resultat, setResultat] = useState([])
=======
  const [isLoading, setIsLoading] = useState(false)
  const apiKey = process.env.REACT_APP_API_KEY

  const titleType = 'movies&tv_series'

>>>>>>> 843cb7754e73da25d07fc9dcea8480f7e5b8e60e
  useEffect(() => {
    setIsLoading(true)
    axios
      .get(
        `https://imdb-api.com/API/AdvancedSearch/${apiKey}?title_type=${titleType}&genres=${props.emojiSelected.correspondance}&count=100`
      )
      .then(response => response.data)
      .then(data => {
<<<<<<< HEAD
        setResultat(data.results)
=======
        props.setResultat(data.results)
>>>>>>> 843cb7754e73da25d07fc9dcea8480f7e5b8e60e
        setIsLoading(false)
      })
  }, [props.emojiSelected.correspondance])
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
          <div className='movie-grid'>
<<<<<<< HEAD
            {resultat.map(element => (
=======
            {props.resultat.map(element => (
>>>>>>> 843cb7754e73da25d07fc9dcea8480f7e5b8e60e
              <Cards
                key={element.key}
                title={element.title}
                poster={element.image}
                description={element.description}
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
