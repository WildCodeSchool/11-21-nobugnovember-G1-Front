import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {
  faFacebook,
  faYoutube,
  faInstagram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='cgu'>
        <a href='#' className='link'>
          Conditions d'utilisation
        </a>
      </div>
      <div className='social'>
        <a href=''>
          <FontAwesomeIcon
            icon={faFacebook}
            className='media'
          ></FontAwesomeIcon>
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.youtube.com/channel/UCNQ9CVHt4ZBYe_82S22jvPQ'
        >
          <FontAwesomeIcon icon={faYoutube} className='media'></FontAwesomeIcon>
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.instagram.com/moody_vod/'
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className='media'
          ></FontAwesomeIcon>
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://twitter.com/MoodyVODFR'
        >
          <FontAwesomeIcon icon={faTwitter} className='media'></FontAwesomeIcon>
        </a>
      </div>
    </div>
  )
}
