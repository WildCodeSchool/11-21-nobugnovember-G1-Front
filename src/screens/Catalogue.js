import Cards from '../components/Cards'
import Header from '../components/Header'
import { useEffect, useState } from 'react'
import './Catalogue.css'
import apiCall from '../scripts/api'
import Footer from '../components/Footer'

const Catalogue = () => {
  const apiKey = 'k_gcprl00i'
  const typeTitle = 'movies&tv_series'
  const [filtreApi, setFiltreApi] = useState(
    localStorage.getItem('maSelection')
  )
  const [resultat, setResultat] = useState([])
  useEffect(() => {
    apiCall(typeTitle, filtreApi, apiKey).then(res => setResultat(res.results))
  }, [])
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
