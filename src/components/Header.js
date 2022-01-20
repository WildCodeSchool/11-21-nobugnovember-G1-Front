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

        <ul className='bloc-links-header'>
          
          <NavLink to='/Catalogue' className='a-links-header'>
            <li className='links-header'>Accueil</li>{' '}
          </NavLink>
          <NavLink to='/Films' className='a-links-header'>
            <li className='links-header'>Films</li>
          </NavLink>
          <NavLink to='/Series' className='a-links-header'>
            <li className='links-header'>Séries</li>
          </NavLink>
          <NavLink to='/MiniJeux' className='a-links-header'>
            <li className='links-header'>Mini-jeux</li>
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
