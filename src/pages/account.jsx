import React from "react"
// import { Router } from "@reach/router"
// import { login, logout, isAuthenticated, getProfile } from "../utils/auth"
import { Link } from "gatsby"

import ErrorBoundary from '../components/ErrorBoundary'
import SEO from './../components/SEO'

// const Home = ({ user }) => {
  // return <p>Hi, {user.name ? user.name : "friend"}!</p>
// }

const Account = () => {
  // if (!isAuthenticated()) {
  //   login()
  //   return <p>Redirecting to login...</p>
  // }
  // const user = getProfile()

  return (
    <>
      <SEO title='account'/>
      <ErrorBoundary>
        <nav>
          <Link to="/account/">Account home</Link>
          {/* <a
            href="#logout"
            onClick={e => {
              logout()
              e.preventDefault()
            }}
          >
            Log Out
          </a> */}
        </nav>
        {/* <Router> */}
          {/* <Home path="/account/" */}
          {/* // user={user}  */}
          {/* /> */}
        {/* </Router> */}
      </ErrorBoundary>
    </>
  )
}

export default Account