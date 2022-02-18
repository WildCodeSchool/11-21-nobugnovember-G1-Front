import logo from '../assets/logoprot5.png'
import logoMobile from '../assets/logoMobile.png'
import { NavLink } from 'react-router-dom'
import './Header.css'
import EmojiChanger from './EmojiChanger'

const Header = ({ setAubergine, aubergine, ...props }) => {
  return (
    <div className='nav-style'>
      <div className='bloc-logo-links'>
        <NavLink to='/' className=''>
          <div className='logoContainer'>
            <img src={logo} className='logo-nav' alt='logo' />
            <img src={logoMobile} className='logo-nav-mobile' alt='logo' />
          </div>
        </NavLink>

        <ul className='links-container'>
          <NavLink to='/Catalogue' className=''>
            <li className='navbar-links'>Accueil</li>
          </NavLink>
          <NavLink to='/Films' className=''>
            <li className='navbar-links'>Films</li>
          </NavLink>
          <NavLink to='/Series' className=''>
            <li className='navbar-links'>Séries</li>
          </NavLink>
          <NavLink to='/MiniJeux' className=''>
            <li className='navbar-links'>Mini-jeux</li>
          </NavLink>
        </ul>
      </div>
      <div className='bloc-emojichanger'>
        <EmojiChanger
          emojiSelected={props.emojiSelected}
          setEmojiSelected={props.setEmojiSelected}
          link={props.link}
          setLink={props.setLink}
          setAubergine={setAubergine}
          aubergine={aubergine}
        />
      </div>
    </div>
  )
}
export default Header
