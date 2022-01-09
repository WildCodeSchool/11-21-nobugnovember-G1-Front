import Cards from '../components/Cards'
import Header from '../components/Header'
import { useEffect, useState } from 'react'
import './Catalogue.css'
import Footer from '../components/Footer'
import Loading from '../components/Loading'
import axios from 'axios'
import EmojiChanger from '../components/EmojiChanger'

const Catalogue = () => {
  const [isLoading,setIsLoading] = useState(true);

  const apiKey = 'k_gcprl00i'
  const titleType = 'movies&tv_series'
  const [filtreApi, setFiltreApi] = useState(
    localStorage.getItem('maSelection')
  )
  const [resultat, setResultat] = useState([])
  useEffect(()=>{
    axios.get(`https://imdb-api.com/API/AdvancedSearch/${apiKey}?title_type=${titleType}&genres=${filtreApi}&count=100`)
      .then((response)=>response.data)
      .then((data)=>{setResultat(data.results);
      setIsLoading(false);});
  },[])
  return (
    <div className='catalogPage'>
      <div className='catalogContainer'>
        <Header className='headerband' />
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
