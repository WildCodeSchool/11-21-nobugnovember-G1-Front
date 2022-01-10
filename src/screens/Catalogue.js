import Cards from '../components/Cards'
import Header from '../components/Header'
import { useEffect, useState } from 'react'
import './Catalogue.css'
import Footer from '../components/Footer'
import Loading from '../components/Loading'
import axios from 'axios'
import EmojiChanger from '../components/EmojiChanger'
import joyeux from '../assets/joyeux.png'

const Catalogue = (props) => {

  const [isLoading,setIsLoading] = useState(true);

  const apiKey = 'k_0nug4wnp'//'k_gcprl00i'
  const titleType = 'movies&tv_series'
  const [resultat, setResultat] = useState([])
  useEffect(()=>{
      axios.get(`https://imdb-api.com/API/AdvancedSearch/${apiKey}?title_type=${titleType}&genres=${props.emojiSelected.correspondance}&count=100`)
      .then((response)=>response.data)
      .then((data)=>{setResultat(data.results);
      setIsLoading(false);});
  },[])
  return (
    <div className='catalogPage'>
      <div className='catalogContainer'>
        <Header className='headerband' emojiSelected={props.emojiSelected} setEmojiSelected={props.setEmojiSelected}/>

        <div className='movie-grid'>
          {resultat.map(element => (
            <Cards key={element.key}
              title={element.title}
              poster={element.image}
              description={element.description}
            />
          ))}
        </div>
        {isLoading?<Loading />:""}
        <Footer />
      </div>
    </div>
  )
}

export default Catalogue
