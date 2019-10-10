import React from "react"

import ErrorBoundary from './../components/ErrorBoundary'
import Layout from './../components/Layout'

export default function About() {
  return (
    <>
      <ErrorBoundary>
        <Layout>
          <p>Under Development...</p>
        </Layout>
      </ErrorBoundary>
    </>
  )
}