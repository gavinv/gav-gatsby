import React from 'react'
import { Link } from '@reach/router'

export default function Page404() {
  return (
    <>
      <p>Page not found... :-(</p>
      <Link to ='/'>Take me home</Link>
    </>
  )
}