import Header from '../components/Header'
import Cards from '../components/Cards'
import CardFilm from '../components/CardFilm'
import axios from 'axios'
import { useEffect } from 'react'

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
  ...props
}) => {
  const apiKey = process.env.REACT_APP_API_KEY

  useEffect(() => {
    const appelAPI = () => {
      setIsLoading(true)
      console.log('test correspondance 1', props.emojiSelected.correspondance)
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=430fd4a9e11f41d3009ea74bba3edc1a&with_genres=${props.emojiSelected.correspondance}&language=fr-FR&page=1`
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
          {props.resultat.map(element => (
            <Cards
              key={element.key}
              setGetProps={props.setGetProps}
              toggle={toggle}
              data={element}
              setIsActive={setIsActive}
            />
          ))}
        </div>
      </div>

    </div>
  )
}

export default Films
