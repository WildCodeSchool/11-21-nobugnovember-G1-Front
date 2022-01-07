import { Link, Outlet } from 'react-router-dom'
import Cards from '../components/Cards'
import Header from '../components/Header'


import './Catalogue.css'

const Catalogue = () => {
  return (
    <div className='catalogPage'>
      <div className='catalogContainer'>
        <Header />
        <div className='movie-grid'>
          <Link to='/Catalogue/Films'><Cards /></Link>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Catalogue
