import React from "react";
import './Footer.css';
import facebook from '../assets/facebook.png'
import youtube from '../assets/youtube.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'

const Footer = () => (
  <div className="footer">
    <a href="#" className="link">Conditions d'utilisation</a>
     <div className="social"> 
    <img className='media' src={facebook} alt='logo Facebook'></img>
    <img className='media' src={youtube} alt='logo Youtube'></img>
    <img className='media' src={twitter} alt='logo Twitter'></img>
    <img className='media' src={instagram} alt='logo Instagram'></img>
     </div> 
    </div>
    );


export default Footer;