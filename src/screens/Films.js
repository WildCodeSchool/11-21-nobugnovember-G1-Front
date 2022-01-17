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
  getProps,
  getDetails,
  setGetDetails,
  ...props
}) => {
  const apiKey = process.env.REACT_APP_API_KEY

  useEffect(() => {
    const appelAPIFilm = () => {
      axios
        .get(
          `https://imdb-api.com/fr/API/Title/${apiKey}/${getProps.id}/FullActor,FullCast,Posters,Images,Trailer,Ratings,`
        )
        .then(res => res.data)
        .then(res => {
          setGetDetails(res)
          console.log('lolol', getDetails)
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
        />
        <Header
          emojiSelected={props.emojiSelected}
          setEmojiSelected={props.setEmojiSelected}
        />

        <div className={isActive ? 'none' : 'movie-grid'}>
          {props.resultat
            .filter(element => !element.description.includes('–'))
            .map(element => (
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
