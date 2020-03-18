import React from 'react'

import Theme from './../../styles/theme'
import MainNav from './MainNav'
import Blobs from './Blobs'
import Footer from './Footer'

export default function Layout(props, location) {
  return (
    <>
      <Theme />
      <Blobs />
      <MainNav />
          <main className='main-content'>{props.children}</main>
      <Footer />
    </>
  )
}
