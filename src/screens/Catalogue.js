import Cards from '../components/Cards'
import Header from '../components/Header'
import { useEffect, useState } from 'react'
import './Catalogue.css'
import Footer from '../components/Footer'
import axios from 'axios'

const Catalogue = () => {
  const apiKey = 'k_gcprl00i'
  const titleType = 'movies&tv_series'
  const [filtreApi, setFiltreApi] = useState(
    localStorage.getItem('maSelection')
  )
  const [resultat, setResultat] = useState([])
  useEffect(()=>{
    axios.get(`https://imdb-api.com/API/AdvancedSearch/${apiKey}?title_type=${titleType}&genres=${filtreApi}&count=100`)
      .then((response)=>response.data)
      .then((data)=>{setResultat(data.results);console.log(data.results)});
  },[])
  return (
    <div className='catalogPage'>
      <div className='catalogContainer'>
        <Header className='headerband' />
        <div className='movie-grid'>
          {resultat.map(element => (
            <Cards
              title={element.title}
              poster={element.image}
              description={element.description}
            />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Catalogue
