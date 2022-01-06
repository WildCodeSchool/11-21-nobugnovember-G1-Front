import Header from '../components/Header'
import React from 'react'
const Catalogue = () => {
  const [filtreApi,setFiltreApi]=React.useState(localStorage.getItem('maSelection'));
  console.log(filtreApi)
  return(
  <div>
    <Header />
  </div>
  )
}

export default Catalogue
