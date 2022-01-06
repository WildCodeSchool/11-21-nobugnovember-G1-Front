import Cards from '../components/Cards'
import Header from '../components/Header'

import './Catalogue.css'

const Catalogue = () => {
  return (
    <div className='catalogPage'>
      <div className='catalogContainer'>
        <Header />
      </div>
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
      </div>
    </div>
  )
}

export default Catalogue
