import React from "react"

import Theme from "./../styles/theme"
import MainNav from "./MainNav"
import Blobs from "./Blobs"
import Footer from "./Footer"
import useWindowSize from './../hooks/useWindowSize'

export default function Layout(props) {
  return (
    <>
      <Theme />
      <Blobs />
      <MainNav />
      <main className="main-content">
        { props.children }
      </main>
      <Footer />
    </>
  )
}
