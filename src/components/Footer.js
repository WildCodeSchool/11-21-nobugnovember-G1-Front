import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {
  faFacebook,
  faYoutube,
  faInstagram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import { hover } from '@testing-library/user-event/dist/hover'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='cgu'>
        <a href='#' className='link'>
          Conditions d'utilisation
        </a>
      </div>
      <div className='social'>
        <FontAwesomeIcon icon={faFacebook} className='media'></FontAwesomeIcon>
        <FontAwesomeIcon icon={faYoutube} className='media'></FontAwesomeIcon>
        <FontAwesomeIcon icon={faInstagram} className='media'></FontAwesomeIcon>
        <FontAwesomeIcon icon={faTwitter} className='media'></FontAwesomeIcon>
      </div>
    </div>
  )
}
