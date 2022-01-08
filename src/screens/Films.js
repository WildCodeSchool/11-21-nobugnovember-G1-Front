import Header from '../components/Header'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from '../components/Cards'
const Films = () => {
  const [isLoading,setIsLoading] = useState(true);
  const [resultat, setResultat] = useState([])
  const apiKey = 'k_gcprl00i'
  const titleType = 'movies'
  const [filtreApi, setFiltreApi] = useState(
    localStorage.getItem('maSelection')
  )
  useEffect(()=>{
    axios.get(`https://imdb-api.com/API/AdvancedSearch/${apiKey}?title_type=${titleType}&genres=${filtreApi}&count=100`)
      .then((response)=>response.data)
      .then((data)=>{setResultat(data.results);
        setIsLoading(false);});
  },[])
  return(
  <div>
    <Header />
    <div className='movie-grid'>
      {resultat.map(element => (
        <Cards
          title={element.title}
          poster={element.image}
          description={element.description}
        />
      ))}
    </div>
  </div>
  )
}

export default Films
