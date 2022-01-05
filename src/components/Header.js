import logo from '../assets/logoprot5.png'
import MoodChanger from './MoodChanger'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='nav-style'>
      <NavLink to='/' className=''>
        <img src={logo} className='logo-nav' alt='logo' />
      </NavLink>

      <ul>
        <NavLink to='/' className=''>
          <li>Accueil</li>
        </NavLink>
        <NavLink to='/Films' className=''>
          <li>Films</li>
        </NavLink>
        <NavLink to='/Series' className=''>
          <li>Séries</li>
        </NavLink>
        <NavLink to='/MiniJeux' className=''>
          <li>Mini-jeux</li>
        </NavLink>
      </ul>

      {/* <MoodChanger /> */}
    </div>
  )
}
export default Header
