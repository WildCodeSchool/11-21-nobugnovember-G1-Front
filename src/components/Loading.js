import './Loading.css'
import loading from '../assets/loadingImg.png'
import { useEffect } from 'react'
const Loading = () =>{
  useEffect(()=>{
    const imgLoading = document.querySelector('.loading-img');
    imgLoading.style.transform="rotate(12turn)";
  },[])
  return(
    <div className='loading-container'>
      {/*<h1>Chargement...</h1>*/}
      <img className="loading-img" src={loading} alt="Loading" />
    </div>
  )
}
export default Loading;