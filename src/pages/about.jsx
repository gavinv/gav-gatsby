import React from "react"

import ErrorBoundary from './../components/ErrorBoundary'
import Layout from './../components/Layout'
import SEO from './../components/SEO'

export default function About() {
  return (
    <>
      <SEO title='About' />
      <ErrorBoundary>
        <Layout>
          <p>Under Development...</p>
        </Layout>
      </ErrorBoundary>
    </>
  )
}