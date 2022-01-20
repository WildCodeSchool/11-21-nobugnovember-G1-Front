import logo from '../assets/logoprot5.png'
import { NavLink } from 'react-router-dom'
import './Header.css'
import EmojiChanger from './EmojiChanger'

const Header = props => {
  return (
    <div className='nav-style'>
      <div className='bloc-logo-links'>
        <NavLink to='/' className=''>
          <div className='logoContainer'>
            <img src={logo} className='logo-nav' alt='logo' />
          </div>
        </NavLink>

        <ul>
          <NavLink to='/Catalogue' className=''>
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
      </div>
      <div className='bloc-emojichanger'>
        <EmojiChanger
          emojiSelected={props.emojiSelected}
          setEmojiSelected={props.setEmojiSelected}
        />
      </div>
    </div>
  )
}
export default Header
