import React from 'react'

import Theme from './../../styles/theme'
import MainNav from './MainNav'
import Blobs from './Blobs'
import Footer from './Footer'
import SocialLinks from './../SocialLinks'
import Container from './Container'

export default function Layout(props, location) {
  return (
    <>
      <Theme />
      <Blobs />
      <MainNav />
      <Container id='main-content' disableGutters>
        {props.children}
      </Container>
      <Footer>
        <SocialLinks />
      </Footer>
    </>
  )
}
