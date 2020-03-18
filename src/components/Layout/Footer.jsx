import React from 'react'

import SocialLinks from './../SocialLinks'

const Footer = props => {
  return (
    <>
      <footer className='footer blurred'>
        <SocialLinks />
        { props.children }
      </footer>
    </>
  )
}

export default Footer
