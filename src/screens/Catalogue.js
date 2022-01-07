import Cards from '../components/Cards'
import Header from '../components/Header'
import { useEffect,useState } from 'react'
import './Catalogue.css'
import apiCall from '../scripts/api'

const Catalogue = () => {
  const apiKey='k_70cu350y';
  const typeTitle='movies&tv_series';
  const [filtreApi,setFiltreApi]=useState(localStorage.getItem('maSelection'));
  const [resultat,setResultat]= useState([]);
      useEffect(()=> {
        apiCall(typeTitle,filtreApi,apiKey).then(res=> setResultat(res.results))
      },[])
  //console.log(apiCall('movies','drama','k_70cu350y'))
  return (
    <div className='catalogPage'>

      <div className='catalogContainer'>
        <Header />
        <div className='movie-grid'>
          { resultat.map( element => <Cards title={element.title} />) }

        </div>
      </div>
    </div>
 )
}

export default Catalogue
