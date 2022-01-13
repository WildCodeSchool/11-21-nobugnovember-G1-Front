import Cards from '../components/Cards'
import Header from '../components/Header'
import { useEffect, useState } from 'react'
import './Catalogue.css'
import Footer from '../components/Footer'
import Loading from '../components/Loading'
import axios from 'axios'
import useModal from '../components/useModale'
import CardFilm from '../components/CardFilm'

const Catalogue = props => {
  const { isShowing, toggle } = useModal()

  const [isLoading, setIsLoading] = useState(false)
  const apiKey = 'k_yd4wrbrt'
  const titleType = 'movies&tv_series'

  const [isActive, setIsActive] = useState(false)
  const retourFunc = () => {
    toggle()
    setIsActive(!isActive)
  }
  const [getProps, setGetProps] = useState({})

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(
        `https://imdb-api.com/API/AdvancedSearch/${apiKey}?title_type=${titleType}&genres=${props.emojiSelected.correspondance}&count=100`
      )
      .then(response => response.data)
      .then(data => {
        props.setResultat(data.results)
        setIsLoading(false)
      })
  }, [props.emojiSelected.correspondance])

  useEffect(() => {
    console.log('test getProps', getProps)
  }, [getProps])
  return (
    <div className='catalogPage'>
      <div className='catalogContainer'>
        <CardFilm
          getProps={getProps}
          isShowing={isShowing}
          hide={toggle}
          retourFunc={retourFunc}
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
                // key={element.key}
                // title={element.title}
                // poster={element.image}
                // description={element.description}
                toggle={toggle}
                isShowing={isShowing}
                setIsActive={setIsActive}
                setGetProps={setGetProps}
                getProps={getProps}
                data={element}
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
