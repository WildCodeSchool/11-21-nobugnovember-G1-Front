import Header from '../components/Header'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from '../components/Cards'
import Loading from '../components/Loading'
const Films = (props) => {
  const [isLoading,setIsLoading] = useState(true);
  const apiKey=process.env.REACT_APP_API_KEY;

  //const titleType = 'movies'
  //const [resultat, setResultat] = useState([])
  // useEffect(()=>{
  //   axios.get(`https://imdb-api.com/API/AdvancedSearch/${apiKey}?title_type=${titleType}&genres=${props.emojiSelected.correspondance}&count=100`)
  //     .then((response)=>response.data)
  //     .then((data)=>{setResultat(data.results);
  //       setIsLoading(false);});
  // },[])
  return(
  <div>
    <Header emojiSelected={props.emojiSelected} setEmojiSelected={props.setEmojiSelected} />
    <div className='movie-grid'>
      {props.resultat.filter((element)=> !element.description.includes('–')).map(element => (
        <Cards
          title={element.title}
          poster={element.image}
          description={element.description}
        />
      ))}
    </div>
    {isLoading?<Loading />:""}
  </div>
  )
}

export default Films
