import Cards from '../components/Cards'
import Header from '../components/Header'
import React from 'react'
import './Catalogue.css'

const Catalogue = () => {
  const [filtreApi,setFiltreApi]=React.useState(localStorage.getItem('maSelection'));
  console.log(filtreApi)
}
  return (
    <div className='catalogPage'>
      <div className='catalogContainer'>
        <Header />
        <div className='movie-grid'>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
 )
}

export default Catalogue
