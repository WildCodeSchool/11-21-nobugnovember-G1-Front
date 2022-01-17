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
  const apiKey = process.env.REACT_APP_API_KEY
  const titleType = 'movies&tv_series'
  
  const [isActive, setIsActive] = useState(false)
  const retourFunc = () => {
    toggle()
    setIsActive(!isActive)
  }
  const [getProps, setGetProps] = useState([])
  const [getDetails, setGetDetails] = useState({})

  let dataAPI = [] /* Variable pour données de l'API dans le local storage */
  // const recupAPI = () => {
  //   dataAPI = JSON.parse(localStorage.getItem('dataAPI'))
  //   console.log('localJsonParse', JSON.parse(localStorage.getItem('dataAPI')))
  //   console.log('dataAPI', dataAPI)
  //   props.setResultat(dataAPI)
  // }

  /***************** APPEL API GENERAL *******************/
  useEffect(() => {
    const appelAPI = () => {
      setIsLoading(true)
      console.log('test correspondance 1', props.emojiSelected.correspondance);
      axios
        .get(
          // `https://imdb-api.com/API/AdvancedSearch/${apiKey}?title_type=${titleType}&genres=${props.emojiSelected.correspondance}&count=50`/* Requête de 50 le temps de dev, penser à remettre à 100 */
          `https://api.themoviedb.org/3/discover/movie?api_key=430fd4a9e11f41d3009ea74bba3edc1a&with_genres=${props.emojiSelected.correspondance}&language=fr-FR&page=1`
        )
        .then(response => response.data)
        .then(data => {
          props.setResultat(data.results)
          setIsLoading(false)
          // console.log('test correspondance 2', data.results);

          // localStorage.setItem('dataAPI', JSON.stringify(data.results))
        })
      /* création fichier local storage avec données de l'API */
      // dataAPI = localStorage.getItem('dataAPI')
      console.log('BAITED')
      /* BAITED si appel à l'API fait */
    }
    appelAPI()
    /* Local storage for API datas */
    // localStorage.getItem('dataAPI') ? recupAPI() : appelAPI()
    /*********************************************************/
  }, [props.emojiSelected.correspondance])


  /*************** Appel API Details Film ****************************/
  useEffect(() => {
    const appelAPIFilm = () => {
      // console.log('test id', getProps)
      
        fetch(
          // `https://imdb-api.com/fr/API/Title/${apiKey}/${getProps.id}/FullActor,FullCast,Posters,Images,Trailer,Ratings,`
         `https://api.themoviedb.org/3/movie/${getProps.id}?api_key=430fd4a9e11f41d3009ea74bba3edc1a&language=fr-FR`
        )
        .then(res => res.json())
        .then(res => {
          // console.log('lolol', res)
          setGetDetails(res)
          // console.log('details', getDetails)
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
